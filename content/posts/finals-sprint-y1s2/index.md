---
title: "Y1S2 Finals Sprint: 17 Days, 3 Exams, 3 Prep Modes"
sticky: 10000
slug: "finals-sprint-y1s2"
date: 2026-04-17
description: "Planning the Apr 17 to May 4 finals window. Person-days allocation, energy curve, and why each of TCX2101, TCX1004, TCX1002 needs a different prep mode."
tags: ["nus", "finals", "sprint", "tcx2101", "tcx1004", "tcx1002"]
categories: ["Education"]
toc: true
math: false
draft: false
---

Three finals in seven days. Apr 28 (2101), Apr 30 (1004), May 4 (1002). Between today and the last exam, 17 days.

The obvious planning mistake is to treat this as "three content piles, divide time proportionally". That gives equal hours to very unequal problems.

## The real shape: three different prep modes

Each exam rewards a different kind of practice. You cannot just read notes three times.

| Module | Prep mode | Why |
|--------|-----------|-----|
| **TCX2101** | Helpsheet-first build, then drill from it | Prof's HW2 feedback: "loss of marks is mainly due to weak explanation." Closed book with 1 × A4 double-sided. Full syllabus (§1 to §8). Building the helpsheet IS the review pass; drilling from it locks recall. |
| **TCX1004** | Translate Quartz notes into a personal-style cheatsheet | Pure open book, no calculator. The cheatsheet IS 80% of the exam. Source: the `mathematical-techniques` Quartz notes. Target: a print-ready cheatsheet in my own words, Units 6 onward. |
| **TCX1002** | Trace-and-fill drills in the new format | PE (20/20) was "write full code". Final is "fill the gaps in existing code". Different skill, same language. Transition window matters more than more content review. |

## Historical signal shapes the allocation

| Module | History | Implication |
|--------|---------|-------------|
| TCX2101 | CT1 7/10, CT2 5/10, CT3 ~8/10 | Weakest. Feed the hungriest mouth first. |
| TCX1004 | HW1 9/9, HW2 est 30/30, all quizzes current | Strongest. Maintenance mode. |
| TCX1002 | PE 20/20 (Apr 16) | Strong but format is new. Transition > bulk. |

Translation to person-days, across the 17-day window:

```
TCX2101  │ ████████████████████████  ~8 days   (47%)
TCX1004  │ ████████████              ~4 days   (24%)
TCX1002  │ ██████████                ~3 days   (18%)
Rest     │ ██████                    ~2 days   (11%)
```

## Constraints and carve-outs

This plan is not a monastery. Four things continue in parallel:

- **Ketchup work: 2 to 4 hours daily.** Not pausable. Subtract it from the study budget instead of pretending.
- **Journal app**: background maintenance only, no new features during the 17 days.
- **Workout**: keep the 7-day parts split. Training during exam prep is stabilising, not distracting. Reduction is only if recovery becomes the bottleneck.
- **Family and social**: paused for the duration. One exception: family dinner on Apr 18 evening, late-night catchup compensates.

Daily ritual that anchors everything: 30 minutes each morning reviewing CLAUDE.md and the sprint document. Mental warm-up, not work.

## The 17-day grid

```
Date         Mode                              Module   Energy       Focus hours
────────────────────────────────────────────────────────────────────────────────
Apr 17 Fri   Post-Friday-Sweep reset           2101     Low          1h
Apr 18 Sat   Tutorial + Mock 10 + fam dinner   Mixed    Medium       5h + late
Apr 19 Sun   Helpsheet build 1 (§1 to §4)      2101     HIGH         6h
Apr 20 Mon   Helpsheet build 2 (§5 to §8)      2101     HIGH         6h
Apr 21 Tue   Drill from helpsheet              2101     HIGH         5h
Apr 22 Wed   Past papers + helpsheet refine    2101     HIGH         6h
Apr 23 Thu   Translate Unit 6 to cheatsheet    1004     Med-High     5h
Apr 24 Fri   Translate Units 7 to 9 + CA check 1004     Medium       4h
Apr 25 Sat   1004 mock + 2101 light review     Both     Med-High     6h
Apr 26 Sun   2101 final cram                   2101     Focused      5h
Apr 27 Mon   2101 pre-exam drill + early sleep 2101     Controlled   3h
Apr 28 Tue   EXAM 17:00 MPSH4                  2101     Exam         ---
Apr 29 Wed   Recovery AM + 1004 ramp PM        1004     Rebuild      4h
Apr 30 Thu   EXAM 17:00 LT7A                   1004     Exam         ---
May 01 Fri   Labour Day. Real rest.            OFF      OFF          0h
May 02 Sat   1002 deep block: fill-blank drill 1002     HIGH         6h
May 03 Sun   1002 mock + early sleep           1002     Focused      4h
May 04 Mon   EXAM 09:00 LT7A                   1002     Exam         ---
```

## The energy curve

A sprint is not a constant-output machine. There are three natural peaks and two mandatory valleys.

<div class="energy-chart-wrapper" style="margin:1.5rem 0;padding:1rem;background:rgba(250,250,250,0.6);border:1px solid rgba(229,231,235,0.6);border-radius:.5rem;">
  <div style="position:relative;height:360px;"><canvas id="energyCurveChart"></canvas></div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js" defer></script>
<script defer>
(function(){
  function init(){
    var el = document.getElementById('energyCurveChart');
    if (!el) return;
    if (typeof Chart === 'undefined') { setTimeout(init, 80); return; }
    var labels = ['Apr 17','Apr 18','Apr 19','Apr 20','Apr 21','Apr 22','Apr 23','Apr 24','Apr 25','Apr 26','Apr 27','Apr 28','Apr 29','Apr 30','May 01','May 02','May 03','May 04'];
    var energy = [1, 2, 3, 3, 3, 3, 2.5, 2, 2.5, 3, 2, 0, 2, 0, 0, 3, 2.5, 0];
    var modes = [
      'Post-sweep reset',
      'Tutorial + Mock 10 + fam dinner',
      '2101 helpsheet build §1-§4',
      '2101 helpsheet build §5-§8',
      '2101 drill from helpsheet',
      '2101 past papers + helpsheet refine',
      '1004 translate Unit 6',
      '1004 translate Units 7-9 + CA check',
      '1004 mock + 2101 light review',
      '2101 final cram',
      '2101 pre-exam + early sleep',
      'TCX2101 FINAL 17:00 MPSH4',
      'Recovery AM + 1004 ramp',
      'TCX1004 FINAL 17:00 LT7A',
      'Labour Day, real rest',
      '1002 deep: fill-blank drill',
      '1002 mock + early sleep',
      'TCX1002 FINAL 09:00 LT7A'
    ];
    var examIdx = [11, 13, 17];
    var isExam = function(i){ return examIdx.indexOf(i) > -1; };
    var pointColors = energy.map(function(v, i){ return isExam(i) ? '#dc2626' : '#2563eb'; });
    var pointRadius = energy.map(function(v, i){ return isExam(i) ? 8 : 4; });
    var energyName = ['OFF','LOW','MED','HIGH'];
    new Chart(el.getContext('2d'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Study energy',
          data: energy,
          tension: 0.35,
          fill: true,
          backgroundColor: 'rgba(37,99,235,0.12)',
          borderColor: '#2563eb',
          borderWidth: 2,
          pointBackgroundColor: pointColors,
          pointBorderColor: pointColors,
          pointRadius: pointRadius,
          pointHoverRadius: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: function(items){ return labels[items[0].dataIndex]; },
              label: function(item){
                var v = item.parsed.y;
                var lvl = v === 0 ? 'OFF' : v <= 1 ? 'LOW' : v <= 2 ? 'MED' : v < 3 ? 'MED-HI' : 'HIGH';
                var prefix = isExam(item.dataIndex) ? '⚠ ' : '';
                return prefix + modes[item.dataIndex] + ' (' + lvl + ')';
              }
            }
          }
        },
        scales: {
          y: {
            min: 0, max: 3.2,
            ticks: {
              stepSize: 1,
              callback: function(v){ return energyName[v] || ''; }
            },
            grid: { color: 'rgba(0,0,0,0.05)' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>

Red points are exam days (Apr 28, Apr 30, May 4). Three peaks: Apr 19-22 (2101 helpsheet build and drill), Apr 26 (2101 cram), May 2 (1002 transition). Two valleys: Apr 28 to Apr 29 (post-2101 recovery), May 1 (Labour Day).

The valleys are load-bearing. Skipping them borrows recovery debt against the next peak.

## What makes this plan tight but survivable

- **Reading Week (Apr 18 to Apr 24)** absorbs the heaviest 2101 work. Seven clear days, no classes.
- **Apr 28 to Apr 30**: only two calendar days between 2101 and 1004. 1004 is the strongest module, so the short gap is tolerable *if* the cheatsheet is complete before Apr 28.
- **Apr 30 to May 4**: four days including Labour Day rest. 1002 transition from PE format to fill-in-blank format gets the remainder.
- **No new content after the eve of each exam.** Apr 27, Apr 29, May 3 are review-only.

## Known unknowns (pending intel)

Some decisions are on hold until information arrives.

1. ~~**TCX2101 tutorial topic hint.** A classmate reports the lecturer said one specific tutorial topic will be tested.~~ **Resolved Apr 17 (post-CT3 recording review).** Chapter 8 is the emphasis. Least squares is highest priority (normal equation, best fit line). Orthogonal complement and projection also confirmed. Gram-Schmidt full procedure is explicitly not tested, which is a scope reduction.
2. **TCX1002 final format details.** PE had explicit exclusions (no regex, OOP, recursion, numpy). Does the final continue those? Asking in tutorial on Apr 18.
3. **TCX1004 final briefing.** 2101 posted a detailed briefing a week out. Expect 1004 to follow. Question count and mark distribution will update the grid.
4. **TCX2101 past papers.** Canvas Files and NUS Library past exam portal to be checked.

## The anchor

Prof Jonathon's line from the Apr 7 HW2 announcement is the strategic anchor for this sprint:

> Loss of marks is mainly due to weak explanation. This course does not assess computation alone.

The calculator is allowed this time (unlike CT3). That freed time is reallocated from arithmetic speed to explanation quality. The helpsheet lives and dies on how well it captures reasoning templates, not just formulas.

If I can explain each concept as a sentence a peer would understand, without re-deriving, it is ready. If I cannot, no amount of working problems will close the gap.

Three finals, three modes, one anchor. Apr 17 start, May 4 end.
