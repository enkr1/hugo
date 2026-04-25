# Visitor Geo Map Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show a world map in the blog sidebar colored by where visitors come from — powered by client-side IP geolocation and Firestore aggregation.

**Architecture:** When a new visitor is counted (existing dedup logic in `footer/custom.html`), we also look up their country via `ipapi.co` and atomically increment a per-country counter in a single Firestore document (`visitor_geo/summary`). A sidebar widget fetches this doc, caches it, and renders an SVG dot map — continent outlines with colored dots at country centers, sized by visitor count.

**Tech Stack:** ipapi.co (free HTTPS, 1000/day), Firebase Firestore (existing), SVG inline, Hugo partials, TypeScript (Hugo `js.Build`), SCSS

**Key decisions:**
- **Dot map, not choropleth** — continent outlines + country-center dots. At sidebar scale (~250px), full country paths are wasted detail. Dots are ~15KB vs ~80KB, look modern, and are trivial to update.
- **Single Firestore document** — `visitor_geo/summary` with country codes as fields (e.g. `{ US: 42, SG: 15 }`). One read renders the whole map. Uses `increment(1)` with `merge: true` for atomic concurrent writes.
- **ipapi.co** — free HTTPS (ip-api.com free tier is HTTP-only, blocked by mixed content). 1000 requests/day. Cached in localStorage for 7 days so returning visitors don't burn quota.
- **Same dedup as view counts** — geo only recorded when `increaseCount` is true (new visitor). No double-counting.

---

## File Structure

| Action | Path | Responsibility |
|--------|------|----------------|
| Modify | `firestore.rules` | Add `visitor_geo` collection rules |
| Modify | `layouts/partials/footer/custom.html` | Add inline geo lookup + Firestore write alongside view count |
| Create | `layouts/partials/widget/visitor-map.html` | Map widget Hugo partial (inline SVG + mount point) |
| Create | `themes/stack/assets/ts/visitor-map.ts` | Fetch geo data, render dots on SVG, tooltips |
| Create | `themes/stack/assets/scss/partials/_visitor-map.scss` | Map widget styling |
| Modify | `themes/stack/assets/scss/style.scss` | Import `_visitor-map.scss` |
| Modify | `layouts/partials/sidebar/left.html` | Include map widget |
| Modify | `themes/stack/layouts/partials/footer/components/script.html` | Build + include new TS modules |

---

## Task 1: Firestore Rules for `visitor_geo`

**Files:**
- Modify: `firestore.rules:3-9` (add after articles match block)

- [ ] **Step 1: Add visitor_geo collection rules**

In `firestore.rules`, add after the closing `}` of the `articles` match block (after line 9):

```javascript
    // ── Visitor geography (country-level counts) ─────────────
    match /visitor_geo/{docId} {
      allow read: if true;
      allow write: if true;
    }
```

- [ ] **Step 2: Verify rules syntax**

Run:
```bash
cd /Users/enkr/Personal/_web/journal-app/hugo && cat firestore.rules
```
Expected: The file should have the new `visitor_geo` match block between `articles` and `comments`.

- [ ] **Step 3: Commit**

```bash
git add firestore.rules
git commit -m "feat(geo): add Firestore rules for visitor_geo collection"
```

---

## Task 2: Add Geo Recording to View Count Flow

**Files:**
- Modify: `layouts/partials/footer/custom.html`

The existing view count logic in `footer/custom.html` increments the article count when `increaseCount` is true (new visitor). We piggyback on this — after a successful increment, also record the country. The geo code must be inline (same `<script>` block) because this is an inline module importing from Firebase CDN, not Hugo's `js.Build` pipeline.

- [ ] **Step 1: Add `increment` to the existing Firestore import**

In `layouts/partials/footer/custom.html`, find line 127:

```javascript
import { doc, collection, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
```

Change to:

```javascript
import { doc, collection, getDoc, setDoc, increment } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
```

- [ ] **Step 2: Add `recordGeo` function and call it on new visitor**

In `layouts/partials/footer/custom.html`, find the `getCount` function (around line 187). After the lines that set `localStorage` and `setDedupCookie` (when `increaseCount` is true), add the geo recording call.

Locate this block inside the `getCount` function (around lines 193-199):

```javascript
        if (!d.exists()) {
            if (increaseCount) {
                await setDoc(docRef, { count: 1 });
                count = 1;
                localStorage.setItem(title, 'true');
                setDedupCookie(title);
            }
        } else {
            count = d.data().count;
            if (increaseCount) {
                await setDoc(docRef, { count: count + 1 });
                count++;
                localStorage.setItem(title, 'true');
                setDedupCookie(title);
            }
        }
```

Add after each `setDedupCookie(title);` line:

```javascript
                recordGeo(db);
```

Then add the `recordGeo` function at the top of the script (after the `waitForFirestore` function, around line 184):

```javascript
// ── Geo recording ────────────────────────────────────────
const GEO_KEY = 'visitor-geo-country';
const GEO_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

async function recordGeo(db) {
    try {
        // Check localStorage cache
        let country = null;
        const raw = localStorage.getItem(GEO_KEY);
        if (raw) {
            const entry = JSON.parse(raw);
            if (Date.now() - entry.ts < GEO_TTL) country = entry.cc;
            else localStorage.removeItem(GEO_KEY);
        }

        // Fetch if not cached
        if (!country) {
            const resp = await fetch('https://ipapi.co/country/', {
                signal: AbortSignal.timeout(3000),
            });
            if (!resp.ok) return;
            country = (await resp.text()).trim();
            if (!/^[A-Z]{2}$/.test(country)) return;
            localStorage.setItem(GEO_KEY, JSON.stringify({ cc: country, ts: Date.now() }));
        }

        // Increment country count (increment, doc, setDoc are all static imports from Step 1)
        await setDoc(doc(db, 'visitor_geo', 'summary'), { [country]: increment(1) }, { merge: true });
    } catch { /* geo is best-effort — never break view counting */ }
}
```

- [ ] **Step 3: Verify the page loads without errors**

Run:
```bash
cd /Users/enkr/Personal/_web/journal-app/hugo && hugo server &
sleep 2 && curl -s http://localhost:1313/ | grep -c "visitor-count"
kill %1
```
Expected: Page builds and serves without errors. The geo code won't execute on localhost (production check), but it should not cause script errors.

- [ ] **Step 4: Commit**

```bash
git add layouts/partials/footer/custom.html
git commit -m "feat(geo): record visitor country on view count increment"
```

---

## Task 3: World Map SVG + Widget Template

**Files:**
- Create: `layouts/partials/widget/visitor-map.html`

The map is an inline SVG with simplified continent outlines and a `<g id="geo-dots">` group where TypeScript will inject dots. The continent paths use a simple equirectangular projection (x = longitude + 180, y = 90 - latitude, scaled to viewBox).

- [ ] **Step 1: Create the map widget partial**

Create `layouts/partials/widget/visitor-map.html`:

```html
{{/* Visitor Map Widget — shows world dot map colored by visitor geography */}}
{{ if not hugo.IsServer }}
<section class="widget visitor-map">
    <h2 class="widget-title section-title">Visitors</h2>
    <div class="visitor-map__container" id="visitor-map">
        <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" class="visitor-map__svg">
            {{/* Simplified continent outlines — equirectangular projection */}}
            {{/* x = longitude + 180, y = 90 - latitude */}}
            <g class="visitor-map__land" fill="var(--card-background)" stroke="var(--body-text-color)" stroke-width="0.3" stroke-opacity="0.2">
                {{/* North America */}}
                <path d="M30,20 L55,15 L70,20 L80,30 L75,45 L65,55 L55,50 L50,60 L40,65 L35,55 L25,50 L20,35 Z" />
                {{/* South America */}}
                <path d="M85,75 L100,70 L110,80 L115,95 L110,115 L100,130 L90,140 L80,135 L75,115 L80,95 L85,85 Z" />
                {{/* Europe */}}
                <path d="M165,25 L175,20 L190,22 L195,30 L190,38 L180,42 L170,38 L165,32 Z" />
                {{/* Africa */}}
                <path d="M170,55 L185,50 L200,55 L205,70 L200,90 L190,100 L175,95 L170,80 L165,65 Z" />
                {{/* Asia */}}
                <path d="M200,15 L230,10 L260,15 L280,25 L290,40 L280,50 L260,55 L240,50 L220,45 L210,50 L200,45 L195,30 Z" />
                {{/* Southeast Asia / Oceania */}}
                <path d="M270,60 L285,55 L300,60 L305,70 L295,80 L280,75 L270,65 Z" />
                {{/* Australia */}}
                <path d="M285,100 L310,95 L325,100 L330,115 L320,125 L300,125 L285,115 Z" />
            </g>
            {{/* Dots injected here by visitor-map.ts */}}
            <g id="geo-dots"></g>
        </svg>
        <div class="visitor-map__tooltip" id="geo-tooltip"></div>
        <div class="visitor-map__summary" id="geo-summary">
            <span class="visitor-map__count" id="geo-country-count">...</span>
            <span class="visitor-map__label">countries</span>
        </div>
    </div>
</section>
{{ end }}
```

- [ ] **Step 2: Verify partial renders**

Temporarily add `{{ partial "widget/visitor-map.html" . }}` to `layouts/partials/sidebar/left.html` after line 18 (after the `</header>` tag), before the categories widget.

Run:
```bash
cd /Users/enkr/Personal/_web/journal-app/hugo && hugo server -D 2>&1 | head -5
```
Open browser, verify sidebar shows the SVG map outline. Then revert the sidebar change (we'll add it properly in Task 6).

- [ ] **Step 3: Commit**

```bash
git add layouts/partials/widget/visitor-map.html
git commit -m "feat(geo): add world map SVG widget partial"
```

---

## Task 4: Map Rendering TypeScript

**Files:**
- Create: `themes/stack/assets/ts/visitor-map.ts`

This module fetches `visitor_geo/summary` from Firestore, caches it, and renders colored dots on the SVG.

- [ ] **Step 1: Create country coordinates data**

Create `themes/stack/assets/ts/visitor-map.ts` with the country center coordinates (equirectangular: x = lon + 180, y = 90 - lat):

```typescript
/**
 * Visitor Map Renderer
 * Fetches country visitor counts from Firestore and renders dots on the SVG world map.
 */

/** Country center coordinates in equirectangular projection (x = lon+180, y = 90-lat) */
const COORDS: Record<string, [number, number]> = {
    // North America
    US: [263, 52], CA: [260, 30], MX: [258, 67],
    // Central America & Caribbean
    GT: [269, 75], CR: [276, 80], PA: [280, 81], CU: [281, 68], JM: [283, 72],
    // South America
    BR: [307, 100], AR: [296, 126], CL: [289, 124], CO: [286, 86], PE: [284, 100],
    VE: [293, 82], EC: [281, 88], UY: [304, 125], PY: [302, 117], BO: [295, 108],
    // Europe
    GB: [179, 38], DE: [190, 39], FR: [182, 43], ES: [176, 50], IT: [192, 47],
    NL: [185, 38], BE: [184, 39], SE: [195, 28], NO: [190, 28], FI: [205, 26],
    PL: [199, 38], CH: [188, 43], AT: [194, 43], PT: [171, 50], IE: [172, 37],
    DK: [190, 34], CZ: [195, 40], RO: [205, 44], HU: [199, 43], GR: [204, 52],
    UA: [210, 39], RU: [220, 30],
    // Middle East
    TR: [215, 51], SA: [225, 65], AE: [234, 65], IL: [215, 58], IR: [232, 57],
    IQ: [224, 57], JO: [216, 58],
    // Africa
    ZA: [206, 120], NG: [188, 80], EG: [211, 63], KE: [218, 89], MA: [174, 58],
    GH: [180, 82], TZ: [215, 96], ET: [219, 82], DZ: [183, 62], TN: [189, 56],
    // South Asia
    IN: [259, 70], PK: [249, 60], BD: [270, 66], LK: [261, 83], NP: [264, 62],
    // East Asia
    CN: [284, 55], JP: [320, 54], KR: [307, 53], TW: [301, 66], HK: [294, 68],
    MN: [284, 43],
    // Southeast Asia
    SG: [284, 89], MY: [281, 86], TH: [281, 75], VN: [286, 74], ID: [297, 92],
    PH: [301, 77], MM: [276, 70], KH: [285, 78],
    // Oceania
    AU: [313, 118], NZ: [355, 138],
};

// --- Cache ---
const MAP_CACHE_KEY = 'visitor-geo-map';
const MAP_CACHE_TTL = 20 * 60 * 1000; // 20 minutes

interface MapCache {
    data: Record<string, number>;
    ts: number;
}

function getCachedMap(): Record<string, number> | null {
    try {
        const raw = localStorage.getItem(MAP_CACHE_KEY);
        if (!raw) return null;
        const entry: MapCache = JSON.parse(raw);
        if (Date.now() - entry.ts > MAP_CACHE_TTL) {
            localStorage.removeItem(MAP_CACHE_KEY);
            return null;
        }
        return entry.data;
    } catch { return null; }
}

function setCachedMap(data: Record<string, number>): void {
    try {
        localStorage.setItem(MAP_CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
    } catch { /* ignore */ }
}

// --- Rendering ---

/**
 * Map a visitor count to a dot radius (log scale, clamped)
 */
function countToRadius(count: number, maxCount: number): number {
    if (count <= 0) return 0;
    const minR = 2;
    const maxR = 7;
    const logScale = Math.log(count + 1) / Math.log(maxCount + 1);
    return minR + logScale * (maxR - minR);
}

/**
 * Map a visitor count to an opacity (higher count = more opaque)
 */
function countToOpacity(count: number, maxCount: number): number {
    const min = 0.4;
    const max = 1.0;
    const logScale = Math.log(count + 1) / Math.log(maxCount + 1);
    return min + logScale * (max - min);
}

/**
 * Render dots on the SVG map
 */
function renderDots(data: Record<string, number>): void {
    const dotsGroup = document.getElementById('geo-dots');
    const summaryCount = document.getElementById('geo-country-count');
    if (!dotsGroup) return;

    // Clear existing dots
    dotsGroup.innerHTML = '';

    const entries = Object.entries(data).filter(([cc]) => COORDS[cc]);
    if (entries.length === 0) return;

    const maxCount = Math.max(...entries.map(([, c]) => c));

    const svgNS = 'http://www.w3.org/2000/svg';
    for (const [cc, count] of entries) {
        const coord = COORDS[cc];
        if (!coord) continue;

        const circle = document.createElementNS(svgNS, 'circle');
        circle.setAttribute('cx', String(coord[0]));
        circle.setAttribute('cy', String(coord[1]));
        circle.setAttribute('r', String(countToRadius(count, maxCount)));
        circle.setAttribute('opacity', String(countToOpacity(count, maxCount)));
        circle.setAttribute('data-country', cc);
        circle.setAttribute('data-count', String(count));
        circle.classList.add('visitor-map__dot');
        dotsGroup.appendChild(circle);
    }

    // Update summary
    if (summaryCount) {
        summaryCount.textContent = String(entries.length);
    }

    // Tooltip on hover
    setupTooltips();
}

/**
 * Add hover tooltips to dots
 */
function setupTooltips(): void {
    const tooltip = document.getElementById('geo-tooltip');
    if (!tooltip) return;

    const dots = document.querySelectorAll('.visitor-map__dot');
    dots.forEach(dot => {
        dot.addEventListener('mouseenter', (e) => {
            const el = e.target as SVGCircleElement;
            const cc = el.getAttribute('data-country') || '';
            const count = el.getAttribute('data-count') || '0';
            tooltip.textContent = `${cc}: ${Number(count).toLocaleString()}`;
            tooltip.classList.add('visible');
        });
        dot.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });
    });
}

// --- Init ---

async function init(): Promise<void> {
    const container = document.getElementById('visitor-map');
    if (!container) return;

    // Only run in production
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') return;

    // Check cache first
    const cached = getCachedMap();
    if (cached) {
        renderDots(cached);
        return;
    }

    // Fetch from Firestore
    try {
        const { doc, getDoc } = await import(
            'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js'
        );

        // Wait for Firestore to be available
        let attempts = 0;
        while (!window.firestoreDb && attempts < 20) {
            await new Promise(r => setTimeout(r, 100));
            attempts++;
        }
        if (!window.firestoreDb) return;

        const snapshot = await getDoc(doc(window.firestoreDb, 'visitor_geo', 'summary'));
        if (!snapshot.exists()) return;

        const data = snapshot.data() as Record<string, number>;
        setCachedMap(data);
        renderDots(data);
    } catch {
        // Firestore read failed — map stays empty
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init());
} else {
    init();
}
```

- [ ] **Step 2: Register the script in Hugo's build pipeline**

In `themes/stack/layouts/partials/footer/components/script.html`, add after the `visitor-count.ts` block (around line 16):

```html
{{- with resources.Get "ts/visitor-map.ts" -}}
    {{- $visitorMapScript := . | js.Build $opts | fingerprint -}}
    <script type="module" src="{{ $visitorMapScript.RelPermalink }}"></script>
{{- end -}}
```

- [ ] **Step 3: Verify build**

Run:
```bash
cd /Users/enkr/Personal/_web/journal-app/hugo && hugo 2>&1 | tail -5
```
Expected: Build succeeds, no TS errors.

- [ ] **Step 4: Commit**

```bash
git add themes/stack/assets/ts/visitor-map.ts themes/stack/layouts/partials/footer/components/script.html
git commit -m "feat(geo): add map rendering with dot projection and Firestore data"
```

---

## Task 5: Map Widget Styling

**Files:**
- Create: `themes/stack/assets/scss/partials/_visitor-map.scss`
- Modify: `themes/stack/assets/scss/style.scss`

- [ ] **Step 1: Create the SCSS partial**

Create `themes/stack/assets/scss/partials/_visitor-map.scss`:

```scss
// Visitor Map Widget
// Dot map showing visitor geography in the sidebar

.visitor-map {
    padding: var(--spacing-sm);

    .widget-title {
        margin-bottom: var(--spacing-sm);
    }

    &__container {
        position: relative;
    }

    &__svg {
        width: 100%;
        height: auto;
        display: block;
        border-radius: var(--radius-widget);
        background: var(--card-background);
    }

    &__land path {
        transition: fill var(--transition-base);
    }

    &__dot {
        fill: var(--accent-color, #8B7355);
        cursor: pointer;
        transition: r var(--transition-fast), opacity var(--transition-fast);

        &:hover {
            opacity: 1 !important;
            filter: brightness(1.2);
        }
    }

    &__tooltip {
        position: absolute;
        top: 4px;
        right: 4px;
        background: var(--card-background);
        border: 1px solid var(--body-text-color);
        border-radius: var(--radius-tag);
        padding: 2px 6px;
        font-size: var(--font-size-xs);
        font-family: var(--font-mono);
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--transition-fast);
        white-space: nowrap;

        &.visible {
            opacity: 1;
        }
    }

    &__summary {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4em;
        margin-top: var(--spacing-xs);
        font-size: var(--font-size-sm);
        color: var(--card-text-color-secondary, var(--body-text-color));
        opacity: 0.7;
    }

    &__count {
        font-weight: var(--font-weight-semibold);
        font-family: var(--font-mono);
    }
}
```

- [ ] **Step 2: Import the partial in style.scss**

In `themes/stack/assets/scss/style.scss`, add the import alongside the other partials imports:

```scss
@import "partials/visitor-map";
```

Find the block of `@import "partials/..."` lines and add it at the end of that group.

- [ ] **Step 3: Verify build**

Run:
```bash
cd /Users/enkr/Personal/_web/journal-app/hugo && hugo 2>&1 | tail -5
```
Expected: Build succeeds, no SCSS errors.

- [ ] **Step 4: Commit**

```bash
git add themes/stack/assets/scss/partials/_visitor-map.scss themes/stack/assets/scss/style.scss
git commit -m "feat(geo): add visitor map widget styling"
```

---

## Task 6: Sidebar Integration

**Files:**
- Modify: `layouts/partials/sidebar/left.html`

- [ ] **Step 1: Add map widget to sidebar**

In `layouts/partials/sidebar/left.html`, add the map widget after `</header>` (line 19) and before the categories widget (line 21):

```html
    {{/* Visitor geo map */}}
    {{ partial "widget/visitor-map.html" . }}
```

The file should look like:

```html
        </div>
    </header>

    {{/* Visitor geo map */}}
    {{ partial "widget/visitor-map.html" . }}

    {{/* Categories widget */}}
    {{ partial "widget/categories.html" (dict "Context" .) }}
</aside>
```

- [ ] **Step 2: Verify full integration with hugo server**

Run:
```bash
cd /Users/enkr/Personal/_web/journal-app/hugo && hugo server
```

Open `http://localhost:1313/` in a browser and verify:
1. The sidebar shows the map widget with continent outlines
2. The "... countries" text appears below the map
3. No console errors
4. The map does not render dots on localhost (production check) — that's expected

- [ ] **Step 3: Commit**

```bash
git add layouts/partials/sidebar/left.html
git commit -m "feat(geo): integrate visitor map widget into sidebar"
```

---

## Task 7: Production Verification

This task is manual verification after deploying to production.

- [ ] **Step 1: Deploy and verify geo recording**

Push to main (triggers GitHub Actions deploy). After deploy:

1. Open `https://blog.enkr1.com/` in an incognito window
2. Open browser DevTools → Network tab
3. Verify a request to `ipapi.co/country/` fires (should return your country code)
4. Check Firestore console: `visitor_geo/summary` document should have your country code with count `1`

- [ ] **Step 2: Verify map renders**

1. Refresh the page (geo data now in Firestore)
2. The sidebar map should show a dot at your country's location
3. Hover over the dot — tooltip should show country code and count
4. The summary should show "1 countries"

- [ ] **Step 3: Verify caching**

1. Open DevTools → Application → Local Storage
2. Verify `visitor-geo-country` entry exists with your country code
3. Verify `visitor-geo-map` entry exists with the geo data
4. Refresh — no new request to `ipapi.co` (cached)

---

## Notes

**Scaling path:** If the blog grows past 1000 unique visitors/day and ipapi.co rate limits become an issue:
1. Switch to `Intl.DateTimeFormat().resolvedOptions().timeZone` for free timezone-based approximation
2. Or add a Cloud Function that does geo lookup server-side on Firestore write trigger
3. Or upgrade to ipapi.co paid plan ($12/mo for 30k/day)

**Privacy:** Only country-level data is stored. No IPs, cities, or personal info are recorded in Firestore. The ipapi.co call is a standard HTTP request from the client — same privacy profile as GA4.

**Country coordinates:** The `COORDS` table covers ~80 countries. If a visitor comes from an unlisted country, their count is stored in Firestore but no dot appears on the map. The coordinate table can be extended as needed.
