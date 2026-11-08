"""Build Chart.js datasets from analysis CSV outputs."""
from __future__ import annotations

import csv
import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "results"
OUT = Path(__file__).resolve().parent / "chart-data.js"

MODULE_META = {
    "data-analysis/business-analysis": ("data-analysis", "Business Analysis"),
    "data-analysis/checkin-analysis": ("data-analysis", "Check-in Analysis"),
    "data-analysis/comprehensive-analysis": ("data-analysis", "Comprehensive Analysis"),
    "data-analysis/rating-analysis": ("data-analysis", "Rating Analysis"),
    "data-analysis/review-analysis": ("data-analysis", "Review Analysis"),
    "data-analysis/user-analysis": ("data-analysis", "User Analysis"),
    "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution": (
        "data-enrichment",
        "Cursed Storefronts & Attribution",
    ),
    "data-enrichment/open-world-data-safari": ("data-enrichment", "Crime Enrichment"),
    "data-enrichment/review_manipulation": ("data-enrichment", "Review Manipulation"),
    "data-enrichment/weather-mood-analysis": ("data-enrichment", "Weather-Mood Analysis"),
}

PALETTE = [
    "#0f6b5c",
    "#c47a1a",
    "#1f4e79",
    "#8b3a3a",
    "#5b6b4a",
    "#2a6f97",
    "#9a5b13",
    "#3d5a80",
    "#6b4226",
    "#4a7c59",
]


def read_csv(path: Path):
    last_error = None
    for enc in ("utf-8-sig", "utf-8", "latin-1"):
        try:
            with path.open(newline="", encoding=enc) as handle:
                sample = handle.read(8192)
                handle.seek(0)
                try:
                    dialect = csv.Sniffer().sniff(sample, delimiters=",;\t")
                except csv.Error:
                    dialect = csv.excel
                reader = csv.DictReader(handle, dialect=dialect)
                rows = []
                for row in reader:
                    clean = {
                        (k or "").strip(): (v.strip() if isinstance(v, str) else v)
                        for k, v in row.items()
                        if k is not None
                    }
                    if any(str(v) for v in clean.values() if v is not None):
                        rows.append(clean)
                cols = list(rows[0].keys()) if rows else []
                return rows, cols
        except Exception as exc:  # noqa: BLE001
            last_error = exc
    raise last_error  # type: ignore[misc]


def is_num(value) -> bool:
    if value is None or value == "":
        return False
    try:
        float(str(value).replace(",", "").replace("%", ""))
        return True
    except ValueError:
        return False


def to_num(value):
    try:
        return float(str(value).replace(",", "").replace("%", "").strip())
    except ValueError:
        return None


def pick_label_col(cols, rows):
    scores = []
    for col in cols:
        vals = [r.get(col, "") for r in rows[:40]]
        nonnum = sum(1 for v in vals if v and not is_num(v))
        scores.append((nonnum, -len(col), col))
    scores.sort(reverse=True)
    return scores[0][2]


def pick_value_cols(cols, rows, label_col, limit=3):
    cands = []
    for col in cols:
        if col == label_col:
            continue
        vals = [to_num(r.get(col, "")) for r in rows[:80]]
        nums = [v for v in vals if v is not None]
        if len(nums) >= max(1, len(rows[:80]) // 3):
            cands.append((len(nums), col))
    cands.sort(reverse=True)
    return [c for _, c in cands[:limit]]


def nice_title(stem: str) -> str:
    title = re.sub(r"^[0-9]+[A-Za-z]?[._-]?", "", stem)
    title = title.replace("_", " ").replace(".", " ").strip()
    title = re.sub(r"\s+", " ", title)
    return title.title()


def slug(text: str) -> str:
    return re.sub(r"[^a-zA-Z0-9]+", "-", text).strip("-").lower()


def main():
    modules = defaultdict(list)
    errors = []

    for csv_path in sorted(ROOT.rglob("*.csv")):
        rel = csv_path.relative_to(ROOT).as_posix()
        parts = rel.split("/")
        if len(parts) < 3:
            continue
        module_path = "/".join(parts[:2])
        if module_path not in MODULE_META:
            continue

        try:
            rows, cols = read_csv(csv_path)
        except Exception as exc:  # noqa: BLE001
            errors.append({"file": rel, "error": str(exc)})
            continue

        if not rows or not cols:
            errors.append({"file": rel, "error": "empty"})
            continue

        label_col = pick_label_col(cols, rows)
        value_cols = pick_value_cols(cols, rows, label_col)
        if not value_cols:
            for col in cols:
                if col != label_col and any(is_num(r.get(col, "")) for r in rows[:20]):
                    value_cols = [col]
                    break
        if not value_cols:
            # Keep recommendation / qualitative CSVs as table cards.
            table_rows = rows[:12]
            modules[module_path].append(
                {
                    "id": slug(f"{module_path}-{csv_path.stem}"),
                    "title": nice_title(csv_path.stem),
                    "source": rel,
                    "type": "table",
                    "indexAxis": "x",
                    "columns": cols[:6],
                    "rows": [
                        [str(r.get(c, "") or "")[:80] for c in cols[:6]] for r in table_rows
                    ],
                    "rowCount": len(rows),
                    "shown": len(table_rows),
                }
            )
            continue

        def sort_key(row):
            num = to_num(row.get(value_cols[0], ""))
            return num if num is not None else float("-inf")

        # Prefer chronological order for year/hour-like labels
        first_labels = [str(r.get(label_col, "")) for r in rows[:12]]
        chronological = all(is_num(v) for v in first_labels if v) and label_col.lower() in {
            "year",
            "hour",
            "month",
            "day",
            "week",
            "date",
        }
        if chronological or re.search(r"year|hour|month|week|trend", csv_path.stem, re.I):
            try:
                rows_sorted = sorted(
                    rows,
                    key=lambda r: to_num(r.get(label_col, ""))
                    if to_num(r.get(label_col, "")) is not None
                    else str(r.get(label_col, "")),
                )[:24]
                chart_type = "line"
                index_axis = "x"
            except TypeError:
                rows_sorted = sorted(rows, key=sort_key, reverse=True)[:20]
                chart_type = "bar"
                index_axis = "y"
        else:
            rows_sorted = sorted(rows, key=sort_key, reverse=True)[:20]
            chart_type = "doughnut" if len(rows_sorted) <= 6 and len(value_cols) == 1 else "bar"
            index_axis = "y" if chart_type == "bar" and len(rows_sorted) >= 8 else "x"

        labels = []
        for row in rows_sorted:
            lab = str(row.get(label_col, "") or "").strip() or "(blank)"
            if len(lab) > 42:
                lab = lab[:39] + "..."
            labels.append(lab)

        datasets = []
        for i, value_col in enumerate(value_cols):
            data = [to_num(r.get(value_col, "")) or 0 for r in rows_sorted]
            color = PALETTE[i % len(PALETTE)]
            dataset = {
                "label": value_col.replace("_", " "),
                "data": data,
                "borderColor": color,
                "borderWidth": 2 if chart_type == "line" else 1,
                "fill": False if chart_type == "line" else True,
                "tension": 0.25 if chart_type == "line" else 0,
            }
            if chart_type == "doughnut":
                dataset["backgroundColor"] = [PALETTE[j % len(PALETTE)] for j in range(len(labels))]
                dataset["borderColor"] = "#ffffff"
            elif chart_type == "line":
                dataset["backgroundColor"] = color
                dataset["pointRadius"] = 3
            else:
                dataset["backgroundColor"] = color
            datasets.append(dataset)

        if chart_type == "bar" and (len(value_cols) > 1 or len(labels) > 8):
            index_axis = "y" if len(labels) >= 8 else "x"

        track, module_name = MODULE_META[module_path]
        modules[module_path].append(
            {
                "id": slug(f"{module_path}-{csv_path.stem}"),
                "title": nice_title(csv_path.stem),
                "source": rel,
                "type": chart_type,
                "indexAxis": index_axis,
                "labels": labels,
                "datasets": datasets,
                "rowCount": len(rows),
                "shown": len(labels),
            }
        )

    out_modules = []
    for module_path, charts in modules.items():
        track, name = MODULE_META[module_path]
        charts = sorted(charts, key=lambda c: c["source"])
        out_modules.append(
            {
                "id": slug(module_path),
                "track": track,
                "module": name,
                "path": module_path,
                "count": len(charts),
                "charts": charts,
            }
        )

    order = list(MODULE_META.keys())
    out_modules.sort(key=lambda m: order.index(m["path"]) if m["path"] in order else 999)

    payload = {
        "generated": True,
        "total": sum(m["count"] for m in out_modules),
        "modules": out_modules,
        "errors": errors,
    }

    OUT.write_text(
        "window.CHART_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUT}")
    print(f"modules={len(out_modules)} charts={payload['total']} errors={len(errors)}")
    for item in errors:
        print("ERR", item)
    for module in out_modules:
        print(f"  {module['module']}: {module['count']}")


if __name__ == "__main__":
    main()
