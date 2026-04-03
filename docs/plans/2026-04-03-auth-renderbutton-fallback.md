# Auth: GIS renderButton Fallback — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Firebase `signInWithPopup()` fallback with GIS `renderButton()` so sign-in stays in-page when One Tap is suppressed.

**Architecture:** Add `renderButton()` to the existing GIS integration in `one-tap.ts`. Auth-ui renders a Google-branded button in the dropdown for anonymous users. `signIn()` stays functional for inline-comments but prefers GIS over Firebase popup. Firebase popup kept as emergency fallback only.

**Tech Stack:** TypeScript (Hugo Pipes/ESBuild), Google Identity Services, Firebase Auth, SCSS

**Spec:** `docs/specs/2026-04-03-auth-renderbutton-fallback-design.md`

---

### Task 1: Add `renderGoogleButton` and `isGISReady` to `one-tap.ts`

**Files:**
- Modify: `themes/stack/assets/ts/auth/one-tap.ts`

- [ ] **Step 1: Extend GIS type declarations**

Add `renderButton` to the existing `Window.google.accounts.id` interface:

```typescript
// Inside the existing declare global block, add to the id object:
renderButton: (
    parent: HTMLElement,
    options: Record<string, unknown>,
    clickHandler?: () => void
) => void;
```

- [ ] **Step 2: Add `isGISReady` export**

After the existing `let oneTapAttempted = false;` line:

```typescript
/** Whether GIS script is loaded and initialize() has been called. */
let gisInitialized = false;

export function isGISReady(): boolean {
    return gisLoaded && gisInitialized;
}
```

Then set `gisInitialized = true` inside `initOneTap()` right after the `window.google!.accounts.id.initialize(...)` call.

- [ ] **Step 3: Add `renderGoogleButton` export**

```typescript
/**
 * Render a Google-branded sign-in button into the given container.
 * Must be called after initOneTap() has resolved (GIS must be initialized).
 * Returns false if GIS is not ready.
 */
export function renderGoogleButton(container: HTMLElement): boolean {
    if (!isGISReady() || !window.google?.accounts?.id) return false;

    window.google.accounts.id.renderButton(container, {
        theme: 'outline',
        size: 'large',
        type: 'standard',
        shape: 'rectangular',
    });
    return true;
}
```

- [ ] **Step 4: Verify Hugo dev server compiles**

Run: `cd /Users/enkr/Personal/_web/journal-app/hugo && hugo server`
Expected: No TypeScript compilation errors.

- [ ] **Step 5: Commit**

```bash
git add themes/stack/assets/ts/auth/one-tap.ts
git commit -m "feat(auth): add renderGoogleButton and isGISReady to one-tap module"
```

---

### Task 2: Re-export from `auth/index.ts` and rewire `signIn()`

**Files:**
- Modify: `themes/stack/assets/ts/auth/index.ts`

- [ ] **Step 1: Add imports from one-tap**

Update the existing `one-tap` import block:

```typescript
import {
    initOneTap,
    cancelOneTap,
    wasOneTapAttempted,
    renderGoogleButton,
    isGISReady,
} from './one-tap';
```

- [ ] **Step 2: Re-export for auth-ui consumption**

Add after the existing `export type` line:

```typescript
export { renderGoogleButton, isGISReady } from './one-tap';
```

- [ ] **Step 3: Rewire `signIn()` to prefer GIS**

Replace the existing `signIn()` function:

```typescript
/**
 * Sign in — called when user clicks the auth icon or inline-comments triggers sign-in.
 *
 * Priority: One Tap → GIS renderButton (handled by dropdown) → Firebase popup (emergency).
 */
export async function signIn(): Promise<void> {
    // Try One Tap first if not yet attempted
    if (!wasOneTapAttempted()) {
        const result = await initOneTap();
        if (result === 'prompted') {
            // One Tap is showing — wait for credential
            return;
        }
    }

    // If GIS is loaded, the rendered button in the dropdown handles sign-in.
    // Nothing to do programmatically — the button is already there.
    if (isGISReady()) {
        return;
    }

    // Emergency: GIS completely failed to load — fall back to Firebase popup
    await signInWithPopup();
}
```

- [ ] **Step 4: Verify compilation**

Run: `cd /Users/enkr/Personal/_web/journal-app/hugo && hugo server`
Expected: No errors. Existing auth flow unchanged (renderButton not wired into UI yet).

- [ ] **Step 5: Commit**

```bash
git add themes/stack/assets/ts/auth/index.ts
git commit -m "feat(auth): rewire signIn() to prefer GIS, re-export renderGoogleButton"
```

---

### Task 3: Rewrite anonymous state in `auth-ui/index.ts`

**Files:**
- Modify: `themes/stack/assets/ts/auth-ui/index.ts`

- [ ] **Step 1: Add imports**

Update the import from `'../auth'`:

```typescript
import { signIn, signOut, onAuthStateChange, initAuth, renderGoogleButton, isGISReady } from '../auth';
```

Note: `initAuth` needs to be imported for the eager GIS trigger. Verify it's already exported from `auth/index.ts` (it is).

- [ ] **Step 2: Add `renderAnonymousDropdown` function**

Add after the existing `renderDropdown()` function:

```typescript
function renderAnonymousDropdown(): void {
    if (!menuItemEl) return;

    // Remove any existing dropdown
    const existing = menuItemEl.querySelector('.auth-dropdown');
    if (existing) existing.remove();

    const dropdown = document.createElement('div');
    dropdown.className = 'auth-dropdown auth-dropdown--anonymous';

    const container = document.createElement('div');
    container.className = 'auth-google-btn-container';
    dropdown.appendChild(container);

    menuItemEl.appendChild(dropdown);

    // Try to render Google button immediately
    if (renderGoogleButton(container)) return;

    // GIS not ready — show spinner, eagerly trigger load
    container.innerHTML = '<div class="auth-spinner"></div>';

    // Eagerly trigger GIS load if not yet attempted
    initAuth().then(() => {
        // Retry after GIS loads
        const retryInterval = setInterval(() => {
            if (isGISReady()) {
                clearInterval(retryInterval);
                container.innerHTML = '';
                renderGoogleButton(container);
            }
        }, 200);

        // 5s timeout — show fallback text link
        setTimeout(() => {
            clearInterval(retryInterval);
            if (!isGISReady()) {
                container.innerHTML = '';
                const fallback = document.createElement('button');
                fallback.className = 'auth-dropdown-item';
                fallback.textContent = 'Sign in with Google';
                fallback.addEventListener('click', async (e) => {
                    e.stopPropagation();
                    dropdownVisible = false;
                    render();
                    await signIn();
                });
                container.appendChild(fallback);
            }
        }, 5000);
    });
}
```

- [ ] **Step 3: Update `renderToolbar()` anonymous state**

Replace the anonymous `else` block in `renderToolbar()`. Change:

```typescript
    } else {
        menuItemEl.innerHTML = USER_ICON_SVG;
        menuItemEl.setAttribute('aria-label', 'Sign in');
        menuItemEl.onclick = (e) => { e.preventDefault(); e.stopPropagation(); signIn(); };
    }
```

To:

```typescript
    } else {
        menuItemEl.innerHTML = USER_ICON_SVG;
        menuItemEl.setAttribute('aria-label', 'Sign in');
        menuItemEl.onclick = (e) => { e.preventDefault(); e.stopPropagation(); toggleDropdown(); };
    }

    if (dropdownVisible && !currentUser) renderAnonymousDropdown();
```

- [ ] **Step 4: Update `renderSidebar()` anonymous state**

Replace the anonymous `else` block in `renderSidebar()`. Change:

```typescript
    } else {
        link.innerHTML = USER_ICON_SVG;
        const label = document.createElement('span');
        label.textContent = 'Sign in';
        link.appendChild(label);

        link.onclick = (e) => { e.preventDefault(); signIn(); };
    }
```

To:

```typescript
    } else {
        link.innerHTML = USER_ICON_SVG;
        const label = document.createElement('span');
        label.textContent = 'Sign in';
        link.appendChild(label);

        link.onclick = (e) => { e.preventDefault(); toggleDropdown(); };
    }

    const existingAnonymousDropdown = menuItemEl.querySelector('.auth-dropdown--anonymous');
    if (existingAnonymousDropdown) existingAnonymousDropdown.remove();

    if (dropdownVisible && !currentUser) renderAnonymousDropdown();
```

- [ ] **Step 5: Update the existing `renderDropdown()` guard**

The existing `renderDropdown()` function renders the signed-in dropdown (sign out button). Add a guard at the top:

```typescript
function renderDropdown(): void {
    if (!menuItemEl || !currentUser) return;
    // ... rest unchanged
```

This is already there — just verify `!currentUser` is checked.

- [ ] **Step 6: Verify compilation and test locally**

Run: `cd /Users/enkr/Personal/_web/journal-app/hugo && hugo server`

1. Open `http://localhost:1313` in incognito
2. Click the auth icon (person silhouette)
3. Expected: dropdown opens with spinner → Google button appears (or fallback link after 5s)
4. Sign in via the Google button
5. Expected: avatar replaces person icon, dropdown shows "Sign out"

- [ ] **Step 7: Commit**

```bash
git add themes/stack/assets/ts/auth-ui/index.ts
git commit -m "feat(auth-ui): render Google button in dropdown for anonymous users"
```

---

### Task 4: Add styles for Google button container and spinner

**Files:**
- Modify: `themes/stack/assets/scss/partials/_auth-ui.scss`

- [ ] **Step 1: Add Google button container and spinner styles**

Add after the existing `.auth-dropdown-item` block:

```scss
// ─── Anonymous Dropdown (Google Button) ─────────────────────────

.auth-dropdown--anonymous {
    min-width: 240px;
}

.auth-google-btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    min-height: 44px;
}

.auth-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid var(--card-separator-color, #e0e0e0);
    border-top-color: var(--gold, #8B7355);
    border-radius: 50%;
    animation: auth-spin 0.6s linear infinite;
}

@keyframes auth-spin {
    to { transform: rotate(360deg); }
}
```

- [ ] **Step 2: Verify styles render correctly**

Run: `cd /Users/enkr/Personal/_web/journal-app/hugo && hugo server`

1. Open incognito → click auth icon
2. Verify: dropdown appears with correct width, spinner centered, Google button renders properly
3. Verify: dark mode (`[data-scheme="dark"]`) doesn't break the dropdown

- [ ] **Step 3: Commit**

```bash
git add themes/stack/assets/scss/partials/_auth-ui.scss
git commit -m "style(auth-ui): add Google button container and spinner styles"
```

---

### Task 5: Verify inline-comments `signIn()` compatibility

**Files:**
- Read-only: `themes/stack/assets/ts/inline-comments/ui.ts`
- Read-only: `themes/stack/assets/ts/inline-comments/index.ts`

- [ ] **Step 1: Test inline-comments sign-in flow**

Run: `cd /Users/enkr/Personal/_web/journal-app/hugo && hugo server`

1. Open an article with comments in incognito
2. Click the reply box or "Sign in to comment" prompt
3. Expected behavior: `signIn()` is called via `window.__siteAuth.signIn()`:
   - If GIS loaded → One Tap triggers or is no-op (Google button in dropdown is the path)
   - If GIS not loaded → Firebase popup opens (emergency fallback)
4. Sign in → verify comment submission works
5. Sign out → verify back to anonymous

- [ ] **Step 2: Test the like button sign-in**

1. As anonymous, click the like (thumbs up) button on a comment
2. Expected: `signIn()` called → same flow as above
3. Sign in → verify like registers

- [ ] **Step 3: Document any issues**

If `signIn()` as no-op when GIS is ready causes inline-comments UX confusion (user clicks "sign in to comment" and nothing visible happens), note this for a follow-up. The user would need to click the auth icon to see the Google button in the dropdown. This may warrant adding a visual cue — but that's a separate issue.

---

### Task 6: Final verification and cleanup

**Files:**
- All modified files from Tasks 1-4

- [ ] **Step 1: Test Chrome normal (non-incognito, signed-out)**

1. Clear `auth-active` from localStorage
2. Reload page, wait 3s
3. Expected: One Tap prompt appears at top-right (if Google session exists in browser)
4. Sign in via One Tap
5. Verify avatar shows, dropdown has "Sign out"

- [ ] **Step 2: Test Chrome incognito**

1. Open incognito tab
2. Navigate to blog
3. Click auth icon
4. Expected: dropdown with Google button (or spinner → Google button)
5. Click Google button → Google account picker → sign in
6. Verify: session persists across page navigation

- [ ] **Step 3: Test returning user flow**

1. Sign in via any method
2. Close tab, reopen blog
3. Expected: `auth-active` flag detected → Firebase session restored → avatar shows (no GIS loaded)

- [ ] **Step 4: Test GIS blocked scenario**

1. Open DevTools → Network → Block `accounts.google.com/gsi/client`
2. Click auth icon
3. Expected: spinner → 5s timeout → "Sign in with Google" text link appears
4. Click text link → Firebase popup opens (emergency fallback)

- [ ] **Step 5: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix(auth): address edge cases from renderButton integration testing"
```
