# Google One Tap + Site-Wide Auth — Design Spec

**Date:** 2026-03-31
**Status:** Draft
**Approach:** GIS One Tap (credential acquisition) + Firebase Auth (session management)

## Goal

Replace the inline-comments-only Google sign-in with a site-wide auth foundation featuring Google One Tap auto-prompt and a persistent fixed-position login icon. Comments remain visible to all users; only signed-in users can comment.

## Architecture

### Approach: GIS + Firebase Auth

Google Identity Services (GIS) handles the sign-in UI (One Tap auto-prompt). The JWT credential is bridged to Firebase Auth via `signInWithCredential()`, preserving the existing Firebase session management, Firestore security rules, and inline comments integration.

Two libraries, complementary roles:
- **GIS (~15KB):** Credential acquisition — auto-prompts, collects the JWT
- **Firebase Auth (~100KB):** Session management — persists auth state, integrates with Firestore rules

### File Structure

```
themes/stack/assets/ts/
├── auth/                            # Shared auth module (site-wide)
│   ├── index.ts                     # Public API + orchestration
│   │                                #   initAuth, signIn, signOut,
│   │                                #   onAuthStateChange, getCurrentUser
│   ├── firebase-auth.ts             # Lazy Firebase Auth SDK loading
│   │                                #   Adds signInWithCredential to existing fns
│   ├── one-tap.ts                   # GIS <script> injection (not ES module)
│   │                                #   Credential queueing for race condition
│   │                                #   google.accounts.id.initialize + prompt
│   └── types.ts                     # AuthUser type (moved from inline-comments)
├── auth-ui/
│   └── index.ts                     # Fixed icon + dropdown (single file)
│                                    #   Renders top-right icon
│                                    #   Manages signed-in/out states
│                                    #   Dropdown: name, email, sign out, future slots
├── inline-comments/
│   ├── auth.ts                      # DELETED — replaced by auth/ module
│   ├── types.ts                     # Keeps Comment, Reply, NewComment, NewReply
│   │                                #   AuthUser moved to auth/types.ts
│   ├── ui.ts                        # Updated: imports from ../auth/
│   │                                #   Remove built-in sign-in button
│   │                                #   Show "Sign in to comment" → triggers shared signIn()
│   └── index.ts                     # Updated: imports from ../auth/
```

New Hugo partial:
```
layouts/partials/auth/init.html       # Loaded in baseof.html (before </body>)
                                      # 1. Renders <div id="auth-root"></div> container
                                      #    for the fixed icon + dropdown
                                      # 2. Loads auth + auth-ui JS bundle
                                      #    (ESBuild entry point via Hugo Pipes)
```

## Sign-In Flow

Three paths, prioritized:

### Path 1: Returning User (localStorage flag `auth-active`)
```
Page loads → detect localStorage flag →
  Lazy-load Firebase Auth SDK →
  onAuthStateChanged restores session →
  Show avatar icon (GIS not needed)
```

### Path 2: Anonymous User — One Tap Available
```
Page loads → no localStorage flag →
  After page idle (~3s), inject GIS <script> →
  google.accounts.id.prompt() →
  One Tap prompt appears (top-right, Google-rendered) →
  User taps → GIS callback receives JWT →
  Queue credential in module variable →
  Lazy-load Firebase Auth SDK →
  signInWithCredential(auth, GoogleAuthProvider.credential(jwt)) →
  Set localStorage flag → show avatar icon
```

### Path 3: Anonymous User — One Tap Suppressed
One Tap silently fails when: cooldown active (user dismissed before), Safari, third-party cookies blocked.
```
GIS prompt() callback reports skipped/suppressed →
  Person icon visible in top-right →
  User clicks icon →
  signInWithPopup(auth, GoogleAuthProvider()) →
  (Safari: signInWithRedirect fallback) →
  Set localStorage flag → show avatar icon
```

### Credential Queue (Race Condition Handling)

One Tap can return a credential in <2s, before the ~100KB Firebase Auth SDK finishes loading:

```
GIS callback fires →
  Store credential in module-level variable →
  Begin Firebase Auth SDK lazy load →
  Auth SDK ready → detect queued credential →
  signInWithCredential(auth, queuedCredential) →
  Clear queue
```

## UI Design

### Fixed Icon — Viewport Top-Right

```css
position: fixed;
top: env(safe-area-inset-top, 12px);
right: 12px;
z-index: 100;
```

| State | Icon | Click Action |
|-------|------|-------------|
| Anonymous (One Tap available) | Person silhouette, glass background | One Tap auto-prompts; click = popup fallback |
| Anonymous (One Tap suppressed) | Same person icon | `signInWithPopup()` directly |
| Signed in | User's Google avatar (32px circle) | Opens dropdown |

### Dropdown (Signed-In State)

```
┌──────────────────────┐
│  [avatar] Jing Hui   │
│  jinghui@gmail.com   │
│ ──────────────────── │
│  Sign out            │
└──────────────────────┘
```

Future features (bookmarks, preferences) slot in above the divider.

Dismiss: click outside or ESC.

### Mobile

Same fixed icon. One Tap won't appear on Safari iOS — icon click triggers popup/redirect. `env(safe-area-inset-top)` handles notch/dynamic island devices.

## GIS Configuration

### OAuth Client ID Setup

1. Google Cloud Console → APIs & Credentials → project `hexo-blog-9ccea`
2. Find "Web client (auto created by Google Service)" under OAuth 2.0 Client IDs
3. Add authorized JavaScript origins: `https://blog.enkr1.com`, `http://localhost:1313`
4. Place Client ID in `head/custom.html`: `window.googleClientId = "..."`

The Client ID must match Firebase Auth's internal Google provider client — using the Firebase auto-created one guarantees this.

### GIS Initialize Params

```js
google.accounts.id.initialize({
  client_id: window.googleClientId,
  callback: handleCredential,
  auto_select: true,           // silent re-auth for returning users
  use_fedcm_for_prompt: true,  // future-proof against cookie deprecation
  cancel_on_tap_outside: true,
});
```

### GIS Script Loading

GIS is NOT an ES module. Load via `<script>` injection:

```typescript
function loadGIS(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google?.accounts?.id) { resolve(); return; }
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('GIS script failed to load'));
    document.head.appendChild(script);
  });
}
```

Triggered for anonymous users (no `auth-active` localStorage flag) via:
```typescript
const scheduleOneTap = () => setTimeout(() => loadGIS().then(initOneTap), 3000);
if ('requestIdleCallback' in window) {
  requestIdleCallback(scheduleOneTap);
} else {
  scheduleOneTap();
}
```

## Loading Strategy

| Asset | When Loaded | Size | Trigger |
|-------|------------|------|---------|
| `auth/index.ts` orchestration | Page load (main bundle) | ~1KB | Always |
| `auth-ui/index.ts` (icon + dropdown) | Page load (main bundle) | ~2KB | Always |
| GIS script | ~3s after page idle | ~15KB | `requestIdleCallback` (anonymous users only) |
| Firebase Auth SDK | On credential or localStorage flag | ~100KB | One Tap success, icon click, or returning user |

**Zero overhead for non-signing-in readers:** GIS loads (~15KB) then unloads if dismissed. Firebase Auth never loads.

## Inline Comments Changes

Minimal disruption:

- **`inline-comments/auth.ts`** — deleted entirely
- **`inline-comments/ui.ts`** — remove built-in "Sign in with Google" button. Replace with "Sign in to comment" text that calls shared `signIn()` from `../auth/`
- **`inline-comments/index.ts`** — update imports from `'./auth'` to `'../auth/'`
- **`inline-comments/types.ts`** — keep `Comment`, `Reply`, `NewComment`, `NewReply`. Move `AuthUser` to `auth/types.ts`
- **Firestore rules** — zero changes. `request.auth` is still Firebase Auth

## localStorage Migration

Rename key from `inline-comments-auth-active` to `auth-active`. Add one-time migration:

```typescript
// Backward compat: migrate old key
if (localStorage.getItem('inline-comments-auth-active') === '1') {
  localStorage.setItem('auth-active', '1');
  localStorage.removeItem('inline-comments-auth-active');
}
```

## Known Gotchas

### One Tap Cooldown
User dismisses prompt → hidden for 2hrs, escalating to ~30 days with repeated dismissals. Cannot override. The popup fallback (icon click) is the escape hatch.

### Safari: No One Tap
Safari doesn't support GIS One Tap. The fixed icon with `signInWithPopup`/`signInWithRedirect` is the only path on Safari.

### FedCM Transition
Chrome is migrating One Tap from iframe to FedCM (browser-native credential picker). Set `use_fedcm_for_prompt: true` from day one. The visual presentation changes (browser-controlled UI) but the credential flow is identical.

### photoURL Validation
Firestore rules require `author.photoURL.matches('^https://.*')`. Verify that `signInWithCredential` (GIS JWT path) populates `photoURL` correctly. If null, `toAuthUser()` maps it to `''` which fails the regex — comment creation would silently fail. Test this explicitly during implementation.

### auto_select Behavior
With `auto_select: true`, returning users who didn't explicitly sign out get silently re-authenticated via One Tap — no prompt, no click. This is better than the localStorage-only approach because Google's session is the source of truth.
