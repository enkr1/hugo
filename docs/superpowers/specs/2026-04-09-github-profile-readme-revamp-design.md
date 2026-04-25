# GitHub Profile README Revamp — Design Spec

**Date:** 2026-04-09
**Target repo:** [`enkr1/enkr1`](https://github.com/enkr1/enkr1) (profile README repo)
**Status:** Design approved, ready for implementation plan

## Context

The current `enkr1/enkr1` README is a generic profile with external stat widgets (Wakatime ×2, github-readme-stats, komarev counter). It renders as a 6-line bio with 3 collapsible stat blocks. The GitHub profile it powers (`github.com/enkr1`) is the single first-impression surface for recruiters, collaborators, and blog visitors — yet it looks nothing like the identity established on `blog.enkr1.com`, which has a distinctive Ba Zi (八字) editorial aesthetic built around Cormorant Garamond typography and a 金-水-火 (metal-water-fire) color system.

**Goal:** Rewrite the profile README so it reads as the same "brand" as the blog, while keeping the useful data widgets (Wakatime) and removing the noise (broken github-readme-stats card, redundant header link).

## Goals

1. **Visual continuity with `blog.enkr1.com`** — same typography, same palette, same signature waveform motif
2. **First-impression clarity** — hero is unmistakably "Jing Hui PANG" in under 1 second of scan
3. **Zero-maintenance once shipped** — no cron jobs, no GitHub Actions, no external services to break
4. **Minimalism over density** — 6 body rows, not 20; every element earns its place

## Non-goals

- ❌ Dark mode variant (single cream hero is intentional)
- ❌ Live data widgets beyond the existing Wakatime collapsibles (no "now playing", no "latest post", no GitHub Actions cron)
- ❌ Featured projects grid
- ❌ Replacing Wakatime with self-hosted stats
- ❌ Touching the underlying `enkr1/platforms` site — only the profile README

## Current state

Current `enkr1/enkr1/README.md` (46 lines, rendered at `github.com/enkr1`):

- `# 👋 Hi, I'm Jing Hui PANG | 彭竞辉` — plain markdown heading
- 1-sentence italic bio
- HTML comment containing old ByteDance bio
- 3 bullet points (passion, stack, location)
- `🔗 Explore all my work and links at enkr1.github.io/platforms` — header link
- `<details>` × 3: Wakatime weekly, Wakatime full, github-readme-stats card
- `komarev` visitor counter + `<samp>❤️</samp>` heart

## Design decisions (locked)

### 1. Direction: Editorial / Ba Zi

Magazine-cover aesthetic mirroring `blog.enkr1.com`. Cream paper background, serif display type, gold/water/fire accent palette, decorative hairline rules, Chinese subname with tracked-out letter-spacing.

### 2. Hero SVG (`assets/hero.svg`)

A single static SVG committed to the `enkr1/enkr1` repo at `assets/hero.svg`. Referenced from `README.md` with an `<img>` tag. No light/dark variant — the cream background is intentional and reads well against GitHub's light and dark UI chrome.

**Canvas:**
- `viewBox="0 0 1280 580"` — scales to README content width, ~16:7 aspect
- Width `100%` so GitHub renders it responsively

**Design tokens (from `assets/scss/custom.scss` — Ba Zi 2.0):**
- Background paper: `#FBF8F3` (warm cream, close to 月影白)
- Primary (内蕴金 gold): `#8B7355` — hairlines, masthead text, dividers, Chinese name, back wave
- Secondary (智慧海 water): `#1E4B8C` — main name, middle wave
- Dynamic (流年曦 fire): `#D97706` — central divider dot
- Gold-light: `#E8C8A0` — front wave
- Body text dark: `#2C2416` — tagline

**Typography:**
- `Cormorant Garamond` (weight 500, italic variant for labels) — display name, tagline, eyebrow, masthead
- `Noto Serif SC` — Chinese subname `彭 竞 辉`
- Italic small-caps Cormorant — labels (eyebrow, masthead corners), `letter-spacing: 0.25em`, `text-transform: uppercase`

**Composition (top to bottom, coordinates in viewBox space):**

| Element | Position | Content | Style |
|---|---|---|---|
| Masthead top-left | `(120, 60)` | `— Vol. 04 · 2026 丙午 —` | label, 14px, gold |
| Masthead top-right | `(1160, 60)` text-anchor end | `SINGAPORE · MALAYSIA` | label, 14px, gold |
| Top hairline | `y=80`, x 120→1160 | — | gold, 0.5px, opacity 0.5 |
| Eyebrow | `(640, 160)` centered | `— Full-Stack Software Engineer —` | label, 18px, gold |
| Main name | `(640, 290)` centered | `Jing Hui PANG` | Cormorant, 124px, weight 500, water blue, letter-spacing -2 |
| Chinese subname | `(640, 340)` centered | `彭 竞 辉` | Noto Serif SC, 30px, gold, letter-spacing 12 |
| Divider left bar | `(540→630, 378)` | — | gold, 1px |
| Divider fire dot | `(640, 378) r=3.5` | — | fill `#D97706` |
| Divider right bar | `(650→740, 378)` | — | gold, 1px |
| Tagline | `(640, 418)` centered | `"Building things from zero to one."` | Cormorant italic, 22px, body dark |
| Wave band | group `translate(0, 440)` | 3 animated paths | see below |
| Bottom hairline | `y=555`, x 120→1160 | — | gold, 0.5px, opacity 0.5 |

**Waveform animation (SVG SMIL, matches `themes/stack/assets/scss/partials/_waveform.scss`):**

Three `<path>` elements inside `<g transform="translate(0,440)">`, each with an `<animate attributeName="d">` morphing between start → peak → start keyframes.

| Layer | Stroke | Width | Opacity | Duration | Start `d` (within group) |
|---|---|---|---|---|---|
| Back (gold) | `#8B7355` | 3px | 0.3 | 10s | `M0,70 Q160,30 320,70 T640,70 T960,70 T1280,70` |
| Mid (water) | `#1E4B8C` | 2px | 0.5 | 7.5s | `M0,90 Q200,60 400,90 T800,90 T1280,90` |
| Front (gold-light) | `#E8C8A0` | 1.5px | 0.7 | 5s | `M0,110 Q180,90 360,110 T720,110 T1080,110 T1280,110` |

Each `<animate>` uses a 3-value keyframe list (start → inverted-peak → start) with `repeatCount="indefinite"`, `stroke-linecap="round"`, `fill="none"`. See `.superpowers/brainstorm/*/content/full-readme.html` for the exact working markup used during brainstorming.

**Font handling — the critical implementation decision:**

GitHub serves SVGs via `raw.githubusercontent.com` through their `camo` image proxy. When referenced in a README via `<img src="./assets/hero.svg">`, the browser loads the SVG in an `<img>` sandbox. Web fonts loaded via `@import url('https://fonts.googleapis.com/...')` **may or may not render** depending on browser, cache, and CORS — behavior is unreliable.

**Decision:** Convert all display text (`Jing Hui PANG`, `彭 竞 辉`, labels, tagline) to SVG `<path>` elements at build time. Two candidate approaches:

1. **Programmatic (preferred):** Small Node script using `opentype.js` that loads Cormorant Garamond and Noto Serif SC TTF files, converts each text string to path data, and assembles the full `hero.svg`. Lives at `scripts/generate-hero-svg.mjs` in the `enkr1/enkr1` repo. Idempotent — re-run on any copy change. Locks the TTF files into `assets/fonts/`.
2. **One-shot (fallback):** Use the working HTML/SVG mockup in `.superpowers/brainstorm/*/content/full-readme.html` as the source of truth, paste it into Figma/Inkscape (or use an inline browser tool), "convert text to outline" / "outline strokes", export the resulting SVG, commit. Simpler but locks the design — any future copy change means re-exporting manually.

Approach (1) is preferred because it preserves editability, but (2) is acceptable as a v1 escape hatch. The implementation plan will choose based on feasibility testing.

**Expected file size:** under 25 KB after path conversion. Rough breakdown: ~6-10 KB for the 124px Cormorant display name, ~2-4 KB for `彭 竞 辉` (Noto Serif SC paths), ~6-10 KB for labels (eyebrow + 2 masthead corners + tagline), plus wave SMIL path data and hairlines. If the final SVG exceeds 50 KB, treat that as a red flag and investigate (likely the font conversion is exporting more glyph data than needed).

### 3. README structure (Markdown source)

```markdown
<p align="center">
  <img src="./assets/hero.svg" alt="Jing Hui PANG — Full-Stack Software Engineer" width="100%"/>
</p>

Engineer, designer, and writer based in Singapore. I build internal tools, dev experience platforms, and side projects that scratch my own itches.

- 📦 **Stack** — Node.js · TypeScript · Elixir · Go · Terraform · PostgreSQL
- 📝 **Writing** — [blog.enkr1.com](https://blog.enkr1.com) · weekly journal · technical essays
- 🌱 **Now** — NUS BIT
- 📍 **Based** — Singapore · Malaysia · Remote
- 🎤 **Off-stage** — beatbox · 555 Artist
- 📬 **Reach me** — [enkr1.github.io/platforms](https://enkr1.github.io/platforms) *(all-in-one hub)*

---

<details>
  <summary><b>📈 Weekly Coding Activity (Wakatime)</b></summary>
  <p align="center">
    <a href="https://wakatime.com/@enkr1">
      <img src="https://wakatime.com/share/@enkr1/11de77a4-4749-4544-b914-668a67efd343.svg" alt="Weekly WakaTime Stats"/>
    </a>
  </p>
</details>

<details>
  <summary><b>📊 Full Coding Stats (Wakatime)</b></summary>
  <p align="center">
    <a href="https://wakatime.com/@enkr1">
      <img src="https://wakatime.com/share/@enkr1/76ac6be3-7cf1-4f38-a07a-5828ae3e91db.svg" alt="Full WakaTime Stats"/>
    </a>
  </p>
</details>

---

<div align="center">

![](https://komarev.com/ghpvc/?username=enkr1&color=red)

<samp>❤️</samp>

</div>
```

**What this keeps from the current README:**
- Both Wakatime collapsibles (same URLs)
- `komarev` visitor counter
- `<samp>❤️</samp>` heart

**What this removes from the current README:**
- Top `<h1>` heading (replaced by hero SVG)
- `<i>` italic one-liner bio (replaced by prose intro under the hero)
- HTML comment containing old ByteDance bio (stale)
- 3 legacy bullet points (passion · stack · location — replaced by the 6 structured rows)
- `🔗 Explore all my work and links at enkr1.github.io/platforms` line (folded into `📬 Reach me` row)
- `<details>` github-readme-stats card (broken — confirmed by user)

### 4. Files that get written / committed to `enkr1/enkr1`

| File | Action | Notes |
|---|---|---|
| `README.md` | Rewritten | ~30 lines, structure above |
| `assets/hero.svg` | New | The editorial hero, ~3-5 KB, animated |
| `assets/fonts/CormorantGaramond-Medium.ttf` | New (only if using approach 1) | Used by generate script only |
| `assets/fonts/CormorantGaramond-Italic.ttf` | New (only if using approach 1) | Used by generate script only |
| `assets/fonts/NotoSerifSC-Regular.ttf` | New (only if using approach 1) | Used by generate script only |
| `scripts/generate-hero-svg.mjs` | New (only if using approach 1) | Node script, idempotent |

## Implementation approach (to be refined in the plan)

1. **Resolve font handling** — prototype approach 1 (opentype.js). If it takes under an hour to get path data out of a TTF and assemble the SVG, commit to approach 1. Otherwise fall back to approach 2.
2. **Generate `hero.svg`** — run the generator (or Figma export), verify the output renders correctly locally (`open hero.svg` in browser), verify file size under 10 KB.
3. **Verify SMIL animation renders on GitHub** — commit the SVG to a new feature branch of `enkr1/enkr1` (e.g., `feat/readme-revamp`), push, view the SVG directly on `raw.githubusercontent.com/enkr1/enkr1/feat/readme-revamp/assets/hero.svg`, and confirm waves animate. Note: GitHub's profile README **always** renders from the `main` branch's README, so we can't test the full integration from a branch — the hero SVG can be pre-tested via raw.githubusercontent, but the full `github.com/enkr1` rendering only updates once `main` is touched. GitHub's `camo` image proxy has historically supported SMIL in SVGs served this way, but this is the single most fragile assumption in the whole design — if SMIL fails, fallback to a static (non-animated) wave path and accept the visual loss.
4. **Rewrite `README.md`** — replace with the structure above.
5. **Commit + push** — single PR or direct commit to `main` on `enkr1/enkr1` (small change, user decides).
6. **Visual verification** — load `github.com/enkr1` and confirm the hero renders, waves animate, Wakatime collapsibles expand, visitor counter appears.

## Out of scope (future work)

- Light/dark hero variant via `<picture>`
- GitHub Actions cron to auto-update `Vol. 04 · 2026 丙午` masthead each Chinese lunar year
- Wakatime stats rendered as self-hosted SVG (to match Ba Zi palette)
- Porting the same editorial hero to `enkr1.github.io/platforms` for full visual unification
- Featured projects grid below the Wakatime block

## References

- Current README: <https://github.com/enkr1/enkr1/blob/main/README.md>
- Ba Zi design tokens: `/Users/enkr/Personal/_web/journal-app/hugo/assets/scss/custom.scss`
- Blog waveform source: `themes/stack/assets/ts/waveform.ts`, `themes/stack/assets/scss/partials/_waveform.scss`, `themes/stack/layouts/partials/waveform.html`
- **Working mockup (source of truth):** `docs/superpowers/specs/assets/2026-04-09-hero-mockup.html` — snapshotted from the brainstorm session. Open in a browser to see the exact rendering with animated waves. This is the authoritative reference for the implementation; if the spec text conflicts with the mockup, the mockup wins.
- Brainstorm session dir (ephemeral, gitignored): `.superpowers/brainstorm/*/content/full-readme.html`
