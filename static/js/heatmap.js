(function () {
  'use strict';

  // --- Data ---
  var raw = JSON.parse(document.getElementById('heatmap-data').textContent);
  var postsByDate = {};
  raw.forEach(function (p) {
    if (!postsByDate[p.date]) postsByDate[p.date] = [];
    postsByDate[p.date].push(p);
  });

  // --- DOM refs ---
  var grid = document.getElementById('heatmap');
  var yearEl = document.getElementById('heatmap-year');
  var prevBtn = document.getElementById('heatmap-prev');
  var nextBtn = document.getElementById('heatmap-next');
  var filterBanner = document.getElementById('heatmap-filter');
  var filterDateEl = document.getElementById('heatmap-filter-date');
  var clearBtn = document.getElementById('heatmap-clear');

  var currentYear = parseInt(yearEl.textContent, 10);
  var activeFilter = null;

  // --- Year bounds from actual data ---
  var minYear = currentYear;
  var maxYear = currentYear;
  raw.forEach(function (p) {
    var y = parseInt(p.date.slice(0, 4), 10);
    if (y < minYear) minYear = y;
    if (y > maxYear) maxYear = y;
  });

  // --- Tooltip ---
  var tooltip = document.createElement('div');
  tooltip.className = 'heatmap-tooltip';
  document.body.appendChild(tooltip);

  // --- Grid generation ---
  function generateYearGrid(year) {
    var firstDay = new Date(year, 0, 1);
    var startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    var weeks = [];
    var current = new Date(startDate);
    for (var w = 0; w < 53; w++) {
      var week = [];
      for (var d = 0; d < 7; d++) {
        week.push(new Date(current));
        current.setDate(current.getDate() + 1);
      }
      weeks.push(week);
    }
    return weeks;
  }

  function getMonthLabels(weeks, year) {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var labels = [];
    var lastMonth = -1;

    weeks.forEach(function (week, i) {
      for (var d = 0; d < 7; d++) {
        if (week[d].getFullYear() === year) {
          var m = week[d].getMonth();
          if (m !== lastMonth) {
            labels.push({ label: months[m], weekIndex: i });
            lastMonth = m;
          }
          break;
        }
      }
    });
    return labels;
  }

  function dateStr(d) {
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + mm + '-' + dd;
  }

  function formatDate(d) {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

  var todayStr = dateStr(new Date());

  // --- Render ---
  function render(year) {
    grid.innerHTML = '';
    var weeks = generateYearGrid(year);
    var monthLabels = getMonthLabels(weeks, year);

    var inner = document.createElement('div');
    inner.className = 'heatmap-inner';

    // Month labels
    var monthRow = document.createElement('div');
    monthRow.className = 'heatmap-months';
    monthLabels.forEach(function (ml) {
      var span = document.createElement('span');
      span.className = 'heatmap-month-label';
      span.textContent = ml.label;
      span.style.left = (32 + ml.weekIndex * 17) + 'px';
      monthRow.appendChild(span);
    });
    inner.appendChild(monthRow);

    // Body: day labels + weeks
    var body = document.createElement('div');
    body.className = 'heatmap-body';

    // Day labels
    var dayLabels = document.createElement('div');
    dayLabels.className = 'heatmap-days';
    ['', 'Mon', '', 'Wed', '', 'Fri', ''].forEach(function (label) {
      var el = document.createElement('div');
      el.className = 'heatmap-day-label';
      el.textContent = label;
      dayLabels.appendChild(el);
    });
    body.appendChild(dayLabels);

    // Weeks
    var weeksEl = document.createElement('div');
    weeksEl.className = 'heatmap-weeks';

    weeks.forEach(function (week) {
      var weekEl = document.createElement('div');
      weekEl.className = 'heatmap-week';

      week.forEach(function (date) {
        var ds = dateStr(date);
        var posts = postsByDate[ds] || [];
        var count = Math.min(posts.length, 3);
        var isOutside = date.getFullYear() !== year;

        var cell = document.createElement('button');
        cell.className = 'heatmap-cell';
        cell.setAttribute('data-count', String(count));
        cell.setAttribute('data-date', ds);
        if (ds === todayStr) cell.setAttribute('data-today', 'true');
        if (isOutside) cell.setAttribute('data-outside', 'true');
        if (count === 0) cell.setAttribute('disabled', '');

        // Tooltip
        cell.addEventListener('mouseenter', function (e) {
          var label = formatDate(date);
          if (posts.length === 0) {
            label += ' — no posts';
          } else if (posts.length === 1) {
            label += ' — 1 post';
          } else {
            label += ' — ' + posts.length + ' posts';
          }
          tooltip.textContent = label;
          tooltip.classList.add('visible');
        });

        cell.addEventListener('mousemove', function (e) {
          tooltip.style.left = (e.clientX + 12) + 'px';
          tooltip.style.top = (e.clientY - 30) + 'px';
        });

        cell.addEventListener('mouseleave', function () {
          tooltip.classList.remove('visible');
        });

        // Click → filter
        cell.addEventListener('click', function () {
          if (count === 0) return;
          filterArchive(ds, posts);
        });

        weekEl.appendChild(cell);
      });

      weeksEl.appendChild(weekEl);
    });

    body.appendChild(weeksEl);
    inner.appendChild(body);
    grid.appendChild(inner);
  }

  // --- Filter list (works with both archive grouped-list and updated flat list) ---
  var archiveList = document.getElementById('archive-list');
  var updatedList = document.getElementById('updated-list');
  var listEl = archiveList || updatedList;

  function filterArchive(ds, posts) {
    // Toggle: clicking the same date clears the filter
    if (activeFilter === ds) {
      clearFilter();
      return;
    }

    activeFilter = ds;

    // Show filter banner
    filterDateEl.textContent = formatDate(new Date(ds + 'T00:00:00'));
    filterBanner.hidden = false;

    if (archiveList) {
      // Grouped list: filter rows, hide empty containers
      document.querySelectorAll('#archive-list .grouped-list__row').forEach(function (row) {
        row.style.display = row.getAttribute('data-date') === ds ? '' : 'none';
      });

      document.querySelectorAll('#archive-list .grouped-list__month').forEach(function (month) {
        var visible = month.querySelectorAll('.grouped-list__row[style=""],.grouped-list__row:not([style])');
        var hasVisible = Array.from(visible).some(function (r) { return r.style.display !== 'none'; });
        month.style.display = hasVisible ? '' : 'none';
      });

      document.querySelectorAll('#archive-list .grouped-list__year').forEach(function (year) {
        var visible = year.querySelectorAll('.grouped-list__month[style=""],.grouped-list__month:not([style])');
        var hasVisible = Array.from(visible).some(function (m) { return m.style.display !== 'none'; });
        year.style.display = hasVisible ? '' : 'none';
      });
    } else if (updatedList) {
      // Flat list: filter article cards by data-date
      document.querySelectorAll('#updated-list .article-card').forEach(function (card) {
        card.style.display = card.getAttribute('data-date') === ds ? '' : 'none';
      });
    }

    // Scroll to the list
    if (listEl) listEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function clearFilter() {
    activeFilter = null;
    filterBanner.hidden = true;

    if (archiveList) {
      document.querySelectorAll('#archive-list .grouped-list__row').forEach(function (row) {
        row.style.display = '';
      });
      document.querySelectorAll('#archive-list .grouped-list__year').forEach(function (el) {
        el.style.display = '';
      });
      document.querySelectorAll('#archive-list .grouped-list__month').forEach(function (el) {
        el.style.display = '';
      });
    } else if (updatedList) {
      document.querySelectorAll('#updated-list .article-card').forEach(function (card) {
        card.style.display = '';
      });
    }
  }

  // --- Year nav (clamped to data range) ---
  function updateNavState() {
    prevBtn.disabled = currentYear <= minYear;
    nextBtn.disabled = currentYear >= maxYear;
  }

  prevBtn.addEventListener('click', function () {
    if (currentYear <= minYear) return;
    currentYear--;
    yearEl.textContent = currentYear;
    updateNavState();
    render(currentYear);
  });
  nextBtn.addEventListener('click', function () {
    if (currentYear >= maxYear) return;
    currentYear++;
    yearEl.textContent = currentYear;
    updateNavState();
    render(currentYear);
  });
  clearBtn.addEventListener('click', clearFilter);

  // --- Init ---
  updateNavState();
  render(currentYear);
})();
