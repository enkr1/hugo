# GA4 Custom Events — Design

## Problem

GA4 is collecting basic pageview/scroll data but the default events lack blog-specific context. Can't answer: "Which topics are people actually reading?", "How far do they get?", "What do they search for?"

## Events

### 1. `read_depth` — Article Reading Progress

**Fires at:** 25%, 50%, 75%, 100% of article content (not page)

**Parameters:**
- `depth_percentage` (int): 25 | 50 | 75 | 100
- `article_title` (string): post title
- `content_type` (string): "posts" | "journals"
- `article_tags` (string): comma-separated tags

**Method:** Place invisible sentinel `<div>`s at content quartiles. Use Intersection Observer to detect when they enter viewport. Each fires only once per page load.

**Why not scroll %?** Page scroll includes comments, footer, sidebar — doesn't reflect content reading. Sentinel elements inside `.article-content` measure actual content progress.

### 2. `blog_search` — Internal Search

**Fires when:** User executes a search (after 150ms debounce settles)

**Parameters:**
- `search_term` (string): the query
- `results_count` (int): number of results returned

**Hook point:** `layouts/partials/search-modal.html` — inside the `search()` function, after results are rendered.

### 3. `reading_milestone` — Active Reading Time

**Fires at:** 30s, 60s, 120s, 300s of active reading

**Parameters:**
- `time_seconds` (int): 30 | 60 | 120 | 300
- `article_title` (string)
- `depth_at_milestone` (int): scroll % when milestone fires

**Method:** Timer runs only when:
- Page Visibility API reports `visible`
- Document has focus
- User has scrolled within last 60s (not idle tab)

### 4. Content Metadata — Enhanced `page_view`

**Sent on:** Every article page load (posts + journals)

**Parameters (custom dimensions in GA4):**
- `content_type`: "posts" | "journals"
- `article_tags`: comma-separated
- `article_categories`: slash-separated path

**Method:** `gtag('set', {...})` before page view fires, via Hugo template variables.

## Implementation

**New file:** `layouts/partials/analytics/custom-events.html`
- Single partial, included in `baseof.html`
- Production only (`{{ if not hugo.IsServer }}`)
- All 4 event types in one `<script>` block
- Hugo template injects article metadata as data attributes

**Search hook:** Small addition to `search-modal.html` — fire `gtag` event after results render.

## GA4 Admin Setup (manual)

After deploying, register custom dimensions in GA4:
1. Admin → Custom definitions → Create custom dimension
2. Add: `content_type`, `article_tags`, `article_categories`
3. Scope: Event-level for all

## Out of Scope

- Looker Studio dashboard (separate task)
- Replacing Firestore view counts
- Server-side analytics
