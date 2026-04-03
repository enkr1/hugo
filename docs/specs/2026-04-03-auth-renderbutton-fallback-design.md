# Auth: Replace signInWithPopup with GIS renderButton Fallback

**Date:** 2026-04-03
**Status:** Approved
**Parent spec:** `2026-03-31-google-one-tap-auth-design.md`

## Problem

When One Tap is suppressed (incognito, cooldown, Safari, third-party cookies blocked), the auth icon click triggers `signInWithPopup()` which opens a full Firebase sign-in window. This is jarring — the user expects an in-page experience.

## Solution

Replace `signInWithPopup()` with `google.accounts.id.renderButton()` as the fallback. Both One Tap and renderButton use the same GIS `initialize()` callback, so all credentials flow through `signInWithGISCredential()`. No Firebase popup needed for the primary flow.

## New Sign-In Flow

```
Page loads (anonymous user)
  → google.accounts.id.initialize({ callback })
  → google.accounts.id.prompt()          # One Tap attempt
  → google.accounts.id.renderButton()    # Render into auth dropdown

Path A: One Tap available
  → Top-right browser prompt appears
  → User taps → credential → callback → signInWithGISCredential()

Path B: One Tap suppressed
  → User clicks auth icon → dropdown shows Google-branded button
  → User clicks button → Google account picker popup (GIS-controlled)
  → credential → same callback → signInWithGISCredential()

Path C: Safari (no GIS support at all)
  → renderButton still works on Safari
  → Falls back to signInWithPopup() only if GIS fails entirely
```

## File Changes

### `themes/stack/assets/ts/auth/one-tap.ts`

Add exports:
- `renderGoogleButton(container: HTMLElement): Promise<boolean>` — calls `google.accounts.id.renderButton()`. Returns `false` if GIS not ready.
- `isGISReady(): boolean` — returns whether GIS script is loaded and initialized
- Extend `Window.google.accounts.id` type to include `renderButton()`
- Must be called after `initialize()` — reuse the same `loadGIS()` + `initialize()` flow
- Button options: `{ theme: 'outline', size: 'large', type: 'standard', shape: 'rectangular' }`

### `themes/stack/assets/ts/auth-ui/index.ts`

Anonymous state changes:
- Icon click → toggle dropdown (same pattern as signed-in state), not `signIn()`
- Dropdown for anonymous: `<div class="auth-google-btn-container">` placeholder
- After rendering dropdown, call `renderGoogleButton(container)`:
  - Returns `true` → Google button renders in container
  - Returns `false` (GIS not ready) → show spinner, eagerly call `initOneTap()`, retry on resolve
- **5s timeout fallback:** If Google button never renders, show "Sign in with Google" text link that calls `signInWithPopup()` as last resort
- Signed-in state: unchanged (avatar + dropdown with sign out)

### `themes/stack/assets/ts/auth/index.ts`

- `signIn()` remains a functional API (inline-comments calls `window.__siteAuth.signIn()` in ~4 places)
- New `signIn()` logic:
  1. If One Tap not attempted → trigger `initOneTap()`, return (GIS handles it)
  2. If GIS is ready → re-prompt One Tap or no-op (rendered button in dropdown handles it)
  3. If GIS failed to load → fallback to `signInWithPopup()` (emergency path)
- Re-export `renderGoogleButton` and `isGISReady` for auth-ui consumption

### `themes/stack/assets/ts/auth/firebase-auth.ts`

- No changes. `signInWithPopup()` stays available but is only used if GIS fails entirely.

## GIS Initialize Timing

Current: `initialize()` is called inside `initOneTap()` only for anonymous users after 3s idle.

New: `initialize()` must happen before `renderButton()` can be called. Two options:

**Option A (chosen):** Keep current timing. `renderButton()` is called after `initOneTap()` resolves. The auth-ui renders a placeholder, then swaps in the Google button once GIS is ready.

This means: auth icon shows immediately → user clicks → dropdown opens with "Loading..." briefly → Google button appears. Acceptable since GIS loads in ~3s on page idle anyway.

## Styling

The Google-rendered button has its own styles (Google controls the iframe). Minimal CSS needed:
- Container: `.auth-google-btn-container { display: flex; justify-content: center; padding: 8px; min-height: 44px; }`
- Dropdown min-width: bump to `240px` when containing Google button (Google iframe is ~240px)
- Spinner: small centered CSS spinner for the loading state

## Testing

1. **Chrome normal:** Visit as anonymous → One Tap should prompt at top-right → sign in → verify session
2. **Chrome incognito:** Visit as anonymous → One Tap suppressed → click auth icon → see Google button in dropdown → click → Google account picker → sign in → verify session
3. **Safari:** Visit as anonymous → One Tap not available → same Google button fallback
4. **Returning user:** `auth-active` flag set → Firebase session restored → no GIS loaded (unchanged)
5. **GIS script blocked:** If GIS fails to load → fallback to `signInWithPopup()` (emergency path)
