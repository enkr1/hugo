# Tag Cloud Map — Design Spec

## Problem

The `/tags/` page is a flat vertical list sorted by count. It's functional but visually flat — no hierarchy signal beyond the number, and it takes a lot of vertical scroll to browse 40+ tags.

## Solution

Replace with a flowing tag cloud of monochrome gold bordered pills. Size scales with post count. Hover fills gold. Matches the 金渊映日 Ba Zi design system.

## Design

### Layout

- Centered flex container with wrapping
- Tags flow left-to-right, wrapping naturally
- Sorted by count (descending) — most popular tags appear first and largest
- No `#` prefix — pill shape is self-explanatory as a tag

### Visual Tiers

Tags are assigned a tier based on their count relative to the maximum count:

| Tier | Threshold | Font size | Padding | Border | Gold opacity | Count shown |
|------|-----------|-----------|---------|--------|-------------|-------------|
| Large | >60% of max | ~1.3em | 9px 20px | 2px solid | 100% | Yes |
| Medium | 25–60% | ~1em | 6px 14px | 1.5px solid | 50% | Yes |
| Small | <25% | ~0.78em | 4px 10px | 1px solid | 15% | No |

### Colors

Uses existing CSS custom properties from `variables.scss`:

- **Border/text:** `var(--gold)` at varying opacities per tier
- **Hover fill:** `background: var(--gold)`, `color: var(--accent-color-text)`
- **Light/dark mode:** Handled automatically — `--gold` and `--accent-color-text` already adapt

### Hover

Gold fill transition (`var(--transition-base)` = 150ms ease):
- Background floods `var(--gold)`
- Text becomes `var(--accent-color-text)` (white in dark, dark in light)
- Border color solidifies to `var(--gold)`

### Interaction

Each pill is an `<a>` linking to the tag's taxonomy listing page (e.g., `/tags/journal/`).

## Files

| File | Action |
|------|--------|
| `layouts/tags/terms.html` | Rewrite — pill cloud with tier logic |
| `themes/stack/assets/scss/partials/_tag-cloud-map.scss` | New — all tag cloud styles |
| `themes/stack/assets/scss/style.scss` | Add `@import` for new partial |

## Template Logic (Hugo)

```
1. Get max count: first item in .Data.Terms.ByCount
2. For each tag:
   - ratio = tag.Count / maxCount
   - if ratio > 0.6 → class "tag-pill--lg"
   - else if ratio > 0.25 → class "tag-pill--md"
   - else → class "tag-pill--sm"
3. Render <a> with tier class, linking to tag page
4. Show count inline for lg and md tiers only
```

## Verification

1. `hugo server` → visit `/tags/`
2. Dark mode: gold borders visible, hover fills gold with white text
3. Light mode: toggle theme, verify borders + hover adapt
4. Click tag → navigates to listing page
5. Responsive: pills wrap on narrow viewports
