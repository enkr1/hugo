# Archive Heatmap Design

## Summary

GitHub-style activity heatmap at the top of the archives page. Shows one year of blog posting activity as a 53-week x 7-day grid. Clicking a day with posts filters the archive list below.

## Visual Design

- Grid: 53 columns (weeks) x 7 rows (Sun-Sat), 12px cells, 2px gap
- Month labels above the grid (Jan-Dec)
- Day labels on the left (Mon, Wed, Fri)
- Year navigation: `< 2026 >` above the grid

### Color scale (Ba Zi tokens)

| Posts | Color |
|-------|-------|
| 0 | `var(--card-background)` at 0.3 opacity |
| 1 | `var(--gold-subtle)` |
| 2 | `var(--gold)` at 60% |
| 3+ | `var(--gold)` at 100% |
| Today | `box-shadow: 0 0 0 2px var(--fire)` ring |

### Interactions

- Hover: scale(1.3), tooltip with "Jan 15, 2026 - 2 posts"
- Click (has posts): filter archive list to that day, show filter banner
- Click filter banner X: clear filter, show full archive
- Click empty cell: nothing (disabled)

## Architecture

```
Hugo build time                    Browser runtime
---------------                    ---------------
archives.html                      heatmap.js
  |                                  |
  +- Loops all pages                +- Reads JSON from <script> tag
  +- Outputs JSON array:            +- Builds 53x7 grid
  |  [{date, title, url}, ...]      +- Colors cells by post count
  +- Renders archive list           +- Hover -> tooltip
     with data-date attributes      +- Click -> filters archive list
```

## Files

| File | Purpose |
|------|---------|
| `layouts/_default/archives.html` | Heatmap container + JSON data + year nav |
| `themes/stack/assets/scss/partials/_heatmap.scss` | All heatmap styles |
| `static/js/heatmap.js` | ~120 lines vanilla JS: grid render, hover, click filter |

## Not included (YAGNI)

- No streak counter
- No "most active day" stats
- No load animation
- No intensity legend
