(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  initCharts();
})();

function initCharts() {
  const data = window.CHART_DATA;
  const root = document.getElementById("gallery-root");
  const trackFilters = document.getElementById("track-filters");
  const moduleFilters = document.getElementById("module-filters");
  const meta = document.getElementById("gallery-meta");
  if (!data || !root || !trackFilters || !moduleFilters || !meta) return;
  if (typeof Chart === "undefined") {
    meta.textContent = "Chart library failed to load.";
    return;
  }

  Chart.defaults.font.family = '"Source Sans 3", "Segoe UI", sans-serif';
  Chart.defaults.color = "#3a4a44";

  const modules = data.modules;
  let activeTrack = "all";
  let activeModule = "all";
  const chartInstances = [];

  function destroyCharts() {
    while (chartInstances.length) {
      const instance = chartInstances.pop();
      instance.destroy();
    }
  }

  function filteredModules() {
    return modules.filter((mod) => {
      const trackOk = activeTrack === "all" || mod.track === activeTrack;
      const moduleOk = activeModule === "all" || mod.id === activeModule;
      return trackOk && moduleOk;
    });
  }

  function setActiveButtons(container, value) {
    container.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.value === value);
    });
  }

  function renderModuleFilters() {
    const available =
      activeTrack === "all"
        ? modules
        : modules.filter((mod) => mod.track === activeTrack);

    if (!available.some((mod) => mod.id === activeModule)) {
      activeModule = "all";
    }

    moduleFilters.innerHTML = "";
    const allBtn = document.createElement("button");
    allBtn.type = "button";
    allBtn.className = "filter-btn";
    allBtn.dataset.value = "all";
    allBtn.textContent = "All modules";
    moduleFilters.appendChild(allBtn);

    available.forEach((mod) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "filter-btn";
      btn.dataset.value = mod.id;
      btn.textContent = `${mod.module} (${mod.count})`;
      moduleFilters.appendChild(btn);
    });

    setActiveButtons(moduleFilters, activeModule);
  }

  function renderTableCard(chart) {
    const article = document.createElement("article");
    article.className = "chart-card chart-card-table";

    const heading = document.createElement("h4");
    heading.textContent = chart.title;
    article.appendChild(heading);

    const note = document.createElement("p");
    note.className = "chart-note";
    note.textContent = `Table view · ${chart.shown} of ${chart.rowCount} rows · ${chart.source}`;
    article.appendChild(note);

    const wrap = document.createElement("div");
    wrap.className = "table-wrap";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    chart.columns.forEach((col) => {
      const th = document.createElement("th");
      th.textContent = col;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    chart.rows.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    article.appendChild(wrap);
    return article;
  }

  function renderChartCard(chart) {
    const article = document.createElement("article");
    article.className = "chart-card";

    const heading = document.createElement("h4");
    heading.textContent = chart.title;
    article.appendChild(heading);

    const note = document.createElement("p");
    note.className = "chart-note";
    note.textContent = `Generated chart · showing ${chart.shown} of ${chart.rowCount} rows · ${chart.source}`;
    article.appendChild(note);

    const canvasWrap = document.createElement("div");
    canvasWrap.className = "chart-canvas-wrap";
    const canvas = document.createElement("canvas");
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", chart.title);
    canvasWrap.appendChild(canvas);
    article.appendChild(canvasWrap);

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: chart.indexAxis || "x",
      plugins: {
        legend: {
          display: chart.datasets.length > 1 || chart.type === "doughnut",
          position: "bottom",
        },
        tooltip: { mode: "index", intersect: false },
      },
      scales:
        chart.type === "doughnut"
          ? {}
          : {
              x: {
                grid: { color: "rgba(20,32,28,0.06)" },
                ticks: { maxRotation: 0, autoSkip: true },
              },
              y: {
                grid: { color: "rgba(20,32,28,0.06)" },
                beginAtZero: true,
              },
            },
    };

    const instance = new Chart(canvas, {
      type: chart.type,
      data: {
        labels: chart.labels,
        datasets: chart.datasets,
      },
      options,
    });
    chartInstances.push(instance);
    return article;
  }

  function renderGallery() {
    destroyCharts();
    const visible = filteredModules();
    root.innerHTML = "";
    let shown = 0;

    visible.forEach((mod) => {
      const section = document.createElement("section");
      section.className = "gallery-module";

      const heading = document.createElement("h3");
      heading.textContent = mod.module;
      section.appendChild(heading);

      const path = document.createElement("p");
      path.className = "module-path";
      path.textContent = `${mod.track.replace("-", " ")} · ${mod.count} charts · ${mod.path}`;
      section.appendChild(path);

      const grid = document.createElement("div");
      grid.className = "chart-grid";

      mod.charts.forEach((chart) => {
        shown += 1;
        if (chart.type === "table") {
          grid.appendChild(renderTableCard(chart));
        } else {
          grid.appendChild(renderChartCard(chart));
        }
      });

      section.appendChild(grid);
      root.appendChild(section);
    });

    meta.textContent = `Showing ${shown} of ${data.total} generated charts across ${visible.length} modules`;
  }

  trackFilters.innerHTML = "";
  [
    ["all", "All tracks"],
    ["data-analysis", "Data Analysis"],
    ["data-enrichment", "Data Enrichment"],
  ].forEach(([value, label]) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-btn";
    btn.dataset.value = value;
    btn.textContent = label;
    trackFilters.appendChild(btn);
  });
  setActiveButtons(trackFilters, activeTrack);

  trackFilters.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    activeTrack = btn.dataset.value;
    setActiveButtons(trackFilters, activeTrack);
    renderModuleFilters();
    renderGallery();
  });

  moduleFilters.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    activeModule = btn.dataset.value;
    setActiveButtons(moduleFilters, activeModule);
    renderGallery();
  });

  renderModuleFilters();
  renderGallery();
}
