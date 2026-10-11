# Build scripts and TypeScript pipeline

Moved verbatim from `CLAUDE.md`. Read when changing categories, the recent-updates popup, or theme/custom TypeScript.

## Build-time script details

**generate-categories.js:**
- Scans posts for nested array categories like `["A", "B", "C"]`
- Generates `_index.md` files at `content/categories/a/b/c/` (marked `_generated: true`)
- Run manually whenever categories change. CI runs it on every deploy, but local builds will be stale.

**generate-changes.js:**
- Walks git history of `content/*.md` over the last N days
- Writes `data/changes.json` (added/removed lines, sections touched per file)
- Consumed by `layouts/partials/recent-updates-popup.html`
- Output is gitignored; CI regenerates it on every build (failure non-fatal: `|| true`)

## TypeScript Pipeline

Hugo builds TS via `js.Build` (esbuild internally, no external bundler config):

| Entry | Loaded by | Purpose |
|-------|-----------|---------|
| `assets/ts/custom.ts` | theme footer (auto) | code-copy line-number stripping + infinite-scroll bootstrap |
| `themes/stack/assets/ts/main.ts` | theme footer | core theme behaviour (color scheme, smooth anchors, scrollspy, gallery, menu) |
| `themes/stack/assets/ts/auth-entry.ts` | `layouts/partials/auth/init.html` | One Tap + auth UI (fingerprinted, ES2020) |
| `themes/stack/assets/ts/search.tsx` | search page | /search/ page implementation (also used by cmd+K modal) |

Notable theme TS modules: `auth/`, `inline-comments/`, `visitor-count`, `visitor-map`, `waveform`. Edit in place; minification on prod build only (`hugo.IsProduction`).
