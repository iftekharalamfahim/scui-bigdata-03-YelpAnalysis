# Yelp Big Data Analytics Repository

End-to-end analytics repository built on the Yelp Open Dataset, covering multi-domain data analysis, external data enrichment, and reproducible result artifacts (CSV + graph outputs).

## Team

| Name | Professional Role |
|------|-------------------|
| Iftekhar Alam Fahim | Project Manager, Data Analyst, and Front-End Engineer |
| Ridoy Kumar Adhikary | Data Analyst and Back-End Engineer |
| Rafi Ahmed | Data Analyst and NLP/AI Engineer |
| MD Mayenaz Rasul Faraz | Data Analyst and Quality Assurance (QA) Engineer |

## Executive Overview

This repository currently centers on two implemented tracks:

1. **Data Analysis** - business, check-in, comprehensive, rating, review, and user behavior analytics.
2. **Data Enrichment** - weather, crime, review manipulation, and storefront risk attribution studies.

The project produces analysis-ready notebooks and publication-style outputs under `results/`.

## Dataset

- **Primary source:** [Yelp Open Dataset](https://www.yelp.com/dataset)
- **Typical entities used across scripts:** business, review, user, checkin, tip
- **Enrichment sources (module-specific):** weather and public/open-world urban context datasets

## Repository At A Glance

```text
scui-bigdata-03-YelpAnalysis/
|- src/
|  |- data-analysis/
|  |  |- business-analysis/
|  |  |- checkin-analysis/
|  |  |- comprehensive-analysis/
|  |  |- rating-analysis/
|  |  |- review-analysis/
|  |  `- user-analysis/
|  `- data-enrichment/
|     |- weather-mood-analysis/
|     |- cursed-storefronts-and-multi-dimentional-attribution/
|     |- review_manipulation/
|     `- open-world-data-enrichment/
|- notebooks/
|- results/
`- README.md
```

## Analysis Modules

### Data Analysis Track

| Module | Scripts | Module README |
|--------|---------|---------------|
| Business Analysis | 13 | [`src/data-analysis/business-analysis/README.md`](src/data-analysis/business-analysis/README.md) |
| Check-in Analysis | 6 | [`src/data-analysis/checkin-analysis/README.md`](src/data-analysis/checkin-analysis/README.md) |
| Comprehensive Analysis | 3 | [`src/data-analysis/comprehensive-analysis/README.md`](src/data-analysis/comprehensive-analysis/README.md) |
| Rating Analysis | 6 | [`src/data-analysis/rating-analysis/README.md`](src/data-analysis/rating-analysis/README.md) |
| Review Analysis | 12 | [`src/data-analysis/review-analysis/README.md`](src/data-analysis/review-analysis/README.md) |
| User Analysis | 11 | [`src/data-analysis/user-analysis/README.md`](src/data-analysis/user-analysis/README.md) |

### Data Enrichment Track

| Module | Scripts | Module README |
|--------|---------|---------------|
| Weather-Mood Analysis | 4 | [`src/data-enrichment/weather-mood-analysis/README.md`](src/data-enrichment/weather-mood-analysis/README.md) |
| Cursed Storefronts & Multi-Dimentional Attribution | 6 | [`src/data-enrichment/cursed-storefronts-and-multi-dimentional-attribution/README.md`](src/data-enrichment/cursed-storefronts-and-multi-dimentional-attribution/README.md) |
| Review Manipulation | 7 | [`src/data-enrichment/review_manipulation/README.md`](src/data-enrichment/review_manipulation/README.md) |
| Open-World Data Enrichment | 9 | [`src/data-enrichment/open-world-data-enrichment/README.md`](src/data-enrichment/open-world-data-enrichment/README.md) |

## Notebooks And Results

- **Exploratory/analysis notebooks:** `notebooks/data-analysis/` and `notebooks/data-enrichment/`
- **Final artifacts:** `results/data-analysis/` and `results/data-enrichment/`
- Each module generally exports:
  - tabular outputs under `csv/`
  - visualization outputs under `graph/` or `graphs/`

## Technology And Runtime Assumptions

Based on the current scripts in `src/`:

- **Processing engine:** Apache Spark (PySpark)
- **Notebook environment:** Apache Zeppelin (`%pyspark` directives are used)
- **Query style:** Spark SQL/DataFrame operations (`spark.table(...)` patterns)
- **Storage/catalog:** Hive-compatible table namespaces are referenced in several modules (for example `yelp_db.*`, `yelp.*`, `external_data.*`)

Because environments vary by team setup, table names and catalog prefixes may need small adjustments per deployment.

## Quick Start

```bash
git clone https://github.com/iftekharalamfahim/scui-bigdata-03-YelpAnalysis
cd scui-bigdata-03-YelpAnalysis
```

Recommended execution approach:

1. Open the corresponding Zeppelin notebook from `notebooks/`.
2. Ensure required source tables exist in your Spark/Hive catalog.
3. Run module scripts and export outputs to the matching `results/...` folder.

## Governance And Quality Workflow

- Module development is organized by analysis domain under `src/`.
- Notebook experimentation is tracked under `notebooks/`.
- Final deliverables are published under `results/` for reporting and presentation.
- QA review should verify script-to-output consistency (CSV columns, chart labels, and README links).

## Roadmap

- Continue expanding analysis depth and cross-module integration.
- Standardize runtime configuration and dependency bootstrap documentation.
- Add the planned conversational Text-to-SQL application as a dedicated implemented module when code is available.

## Status

`In Progress` - active development across analytics and enrichment modules.

## License And Data Usage

For academic and educational use, aligned with the [Yelp Dataset Terms of Use](https://www.yelp.com/dataset/terms).
