# Google One Tap + Site-Wide Auth — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Google One Tap auto-prompt sign-in and a fixed-position auth icon to the blog, refactoring auth from an inline-comments concern into a site-wide foundation.

**Architecture:** GIS (Google Identity Services) for credential acquisition via One Tap auto-prompt, Firebase Auth for session management via `signInWithCredential()`. The shared `auth/` module replaces `inline-comments/auth.ts`. A new `auth-ui/` module renders a fixed top-right icon with avatar/dropdown for signed-in users.

**Tech Stack:** TypeScript, Hugo Pipes (ESBuild), Firebase Auth SDK (lazy), GIS client library (script injection), SCSS

**Spec:** `docs/specs/2026-03-31-google-one-tap-auth-design.md`

---

## File Map

| Action | File | Responsibility |
|--------|------|---------------|
| Create | `themes/stack/assets/ts/auth/types.ts` | `AuthUser` type (extracted from inline-comments) |
| Create | `themes/stack/assets/ts/auth/firebase-auth.ts` | Lazy Firebase Auth SDK loading + all auth functions |
| Create | `themes/stack/assets/ts/auth/one-tap.ts` | GIS script injection, One Tap init, credential queueing |
| Create | `themes/stack/assets/ts/auth/index.ts` | Public API facade: initAuth, signIn, signOut, onAuthStateChange, getCurrentUser |
| Create | `themes/stack/assets/ts/auth-ui/index.ts` | Fixed icon rendering, dropdown, signed-in/out states |
| Create | `themes/stack/assets/scss/partials/_auth-ui.scss` | Styles for fixed icon + dropdown |
| Create | `layouts/partials/auth/init.html` | Hugo partial: renders auth root container + loads auth JS |
| Modify | `themes/stack/layouts/_default/baseof.html` | Include auth/init.html partial |
| Modify | `layouts/partials/head/custom.html` | Add `window.googleClientId` |
| Modify | `themes/stack/assets/ts/inline-comments/index.ts` | Import from `../auth/` instead of `./auth` |
| Modify | `themes/stack/assets/ts/inline-comments/ui.ts` | Import from `../auth/`, simplify sign-in prompt |
| Modify | `themes/stack/assets/ts/inline-comments/types.ts` | Remove `AuthUser` (import from `../auth/types`) |
| Delete | `themes/stack/assets/ts/inline-comments/auth.ts` | Replaced by `auth/` module |
| Modify | `themes/stack/assets/scss/style.scss` | Import `_auth-ui.scss` |

---

### Task 1: Extract AuthUser Type

**Files:**
- Create: `themes/stack/assets/ts/auth/types.ts`

- [ ] **Step 1: Create auth types file**

```typescript
// themes/stack/assets/ts/auth/types.ts

/** Auth state passed around the UI */
export interface AuthUser {
    uid: string;
    displayName: string;
    photoURL: string;
}

export type AuthStateCallback = (user: AuthUser | null) => void;
```

- [ ] **Step 2: Verify Hugo can resolve the new directory**

Run: `ls themes/stack/assets/ts/auth/`
Expected: `types.ts`

- [ ] **Step 3: Commit**

```bash
git add themes/stack/assets/ts/auth/types.ts
git commit -m "♻️ refactor(auth): extract AuthUser type to shared auth module"
```

---

### Task 2: Build Firebase Auth Lazy Loader

Extract the Firebase Auth SDK lazy-loading from `inline-comments/auth.ts` into a standalone module. Add `signInWithCredential` for the GIS credential bridge.

**Files:**
- Create: `themes/stack/assets/ts/auth/firebase-auth.ts`

- [ ] **Step 1: Create firebase-auth.ts**

```typescript
// themes/stack/assets/ts/auth/firebase-auth.ts

/**
 * Lazy-loads Firebase Auth SDK and provides all auth operations.
 * Only downloads ~100KB SDK when actually needed.
 */
import type { AuthUser, AuthStateCallback } from './types';

const FIREBASE_CDN = 'https://www.gstatic.com/firebasejs/10.11.1';
const AUTH_STORAGE_KEY = 'auth-active';
const OLD_AUTH_STORAGE_KEY = 'inline-comments-auth-active';

let authInstance: unknown = null;
let cachedAuthFns: Awaited<ReturnType<typeof loadAuthFns>> | null = null;
let currentUser: AuthUser | null = null;
const listeners: AuthStateCallback[] = [];

// ─── localStorage helpers ────────────────────────────────────────

function migrateStorageKey(): void {
    try {
        if (localStorage.getItem(OLD_AUTH_STORAGE_KEY) === '1') {
            localStorage.setItem(AUTH_STORAGE_KEY, '1');
            localStorage.removeItem(OLD_AUTH_STORAGE_KEY);
        }
    } catch { /* noop */ }
}

export function hasAuthHistory(): boolean {
    migrateStorageKey();
    try { return localStorage.getItem(AUTH_STORAGE_KEY) === '1'; } catch { return false; }
}

function setAuthHistory(): void {
    try { localStorage.setItem(AUTH_STORAGE_KEY, '1'); } catch { /* noop */ }
}

function clearAuthHistory(): void {
    try { localStorage.removeItem(AUTH_STORAGE_KEY); } catch { /* noop */ }
}

// ─── Firebase App ────────────────────────────────────────────────

function getApp(): unknown {
    const app = (window as unknown as Record<string, unknown>).firebaseApp;
    if (!app) throw new Error('Firebase app not initialized. Check head/custom.html.');
    return app;
}

// ─── SDK Lazy Loading ────────────────────────────────────────────

async function loadAuthFns() {
    const mod = await import(`${FIREBASE_CDN}/firebase-auth.js`);
    return {
        getAuth: mod.getAuth,
        signInWithPopup: mod.signInWithPopup,
        signInWithRedirect: mod.signInWithRedirect,
        signInWithCredential: mod.signInWithCredential,
        getRedirectResult: mod.getRedirectResult,
        GoogleAuthProvider: mod.GoogleAuthProvider,
        signOut: mod.signOut,
        onAuthStateChanged: mod.onAuthStateChanged,
    };
}

async function getAuthFns() {
    if (!cachedAuthFns) cachedAuthFns = await loadAuthFns();
    return cachedAuthFns;
}

export async function ensureAuth() {
    if (authInstance) return authInstance;
    const auth = await getAuthFns();
    authInstance = auth.getAuth(getApp());
    return authInstance;
}

// ─── User mapping ────────────────────────────────────────────────

function toAuthUser(firebaseUser: { uid: string; displayName: string | null; photoURL: string | null }): AuthUser {
    return {
        uid: firebaseUser.uid,
        displayName: firebaseUser.displayName ?? 'Anonymous',
        photoURL: firebaseUser.photoURL ?? '',
    };
}

function notifyListeners(user: AuthUser | null): void {
    currentUser = user;
    for (const cb of listeners) cb(user);
}

// ─── Public API ──────────────────────────────────────────────────

/**
 * Initialize auth — only if user has previously signed in (localStorage flag).
 * Avoids loading ~100KB Auth SDK for anonymous readers.
 */
export async function initFirebaseAuth(): Promise<void> {
    if (!hasAuthHistory()) return;

    try {
        const authFns = await getAuthFns();
        const auth = await ensureAuth();

        // Check for redirect result (Safari fallback flow)
        try {
            const result = await authFns.getRedirectResult(auth);
            if (result?.user) {
                setAuthHistory();
                notifyListeners(toAuthUser(result.user));
            }
        } catch {
            // No redirect result — normal flow
        }

        authFns.onAuthStateChanged(auth, (user: { uid: string; displayName: string | null; photoURL: string | null } | null) => {
            notifyListeners(user ? toAuthUser(user) : null);
        });
    } catch (err) {
        console.error('[auth] Firebase Auth init failed:', err);
    }
}

/** Sign in with Google popup. Loads Auth SDK on first call. */
export async function signInWithPopup(): Promise<AuthUser | null> {
    try {
        const authFns = await getAuthFns();
        const auth = await ensureAuth();
        const provider = new authFns.GoogleAuthProvider();

        try {
            const result = await authFns.signInWithPopup(auth, provider);
            setAuthHistory();
            const user = toAuthUser(result.user);
            notifyListeners(user);
            return user;
        } catch (popupErr: unknown) {
            const err = popupErr as { code?: string };
            if (err.code === 'auth/popup-blocked' || err.code === 'auth/popup-closed-by-user') {
                await authFns.signInWithRedirect(auth, provider);
                return null;
            }
            throw popupErr;
        }
    } catch (err) {
        console.error('[auth] Sign-in with popup failed:', err);
        return null;
    }
}

/** Bridge a GIS JWT credential into Firebase Auth session. */
export async function signInWithGISCredential(idToken: string): Promise<AuthUser | null> {
    try {
        const authFns = await getAuthFns();
        const auth = await ensureAuth();
        const credential = authFns.GoogleAuthProvider.credential(idToken);
        const result = await authFns.signInWithCredential(auth, credential);
        setAuthHistory();
        const user = toAuthUser(result.user);
        notifyListeners(user);
        return user;
    } catch (err) {
        console.error('[auth] GIS credential sign-in failed:', err);
        return null;
    }
}

/** Sign out and clear state. */
export async function firebaseSignOut(): Promise<void> {
    try {
        const authFns = await getAuthFns();
        const auth = await ensureAuth();
        await authFns.signOut(auth);
        clearAuthHistory();
        notifyListeners(null);
    } catch (err) {
        console.error('[auth] Sign-out failed:', err);
    }
}

/** Subscribe to auth state changes. Returns unsubscribe function. */
export function onAuthStateChange(callback: AuthStateCallback): () => void {
    listeners.push(callback);
    callback(currentUser);
    return () => {
        const idx = listeners.indexOf(callback);
        if (idx >= 0) listeners.splice(idx, 1);
    };
}

/** Get the current user (synchronous). */
export function getCurrentUser(): AuthUser | null {
    return currentUser;
}
```

- [ ] **Step 2: Verify file created**

Run: `wc -l themes/stack/assets/ts/auth/firebase-auth.ts`
Expected: ~165 lines

- [ ] **Step 3: Commit**

```bash
git add themes/stack/assets/ts/auth/firebase-auth.ts
git commit -m "♻️ refactor(auth): extract Firebase Auth lazy loader to shared module"
```

---

### Task 3: Build One Tap Module

Handles GIS script injection (not an ES module), One Tap initialization, and credential queueing for the race condition where GIS resolves before Firebase Auth SDK loads.

**Files:**
- Create: `themes/stack/assets/ts/auth/one-tap.ts`

- [ ] **Step 1: Create one-tap.ts**

```typescript
// themes/stack/assets/ts/auth/one-tap.ts

/**
 * Google Identity Services (GIS) One Tap integration.
 *
 * GIS is NOT an ES module — loaded via <script> injection.
 * Credentials are queued if Firebase Auth SDK hasn't loaded yet.
 */
import { signInWithGISCredential } from './firebase-auth';

// GIS type declarations (minimal — only what we use)
interface GISCredentialResponse {
    credential: string;  // JWT id_token
    select_by: string;
}

interface GISPromptNotification {
    getMomentType: () => string;
    getDismissedReason?: () => string;
    getSkippedReason?: () => string;
}

declare global {
    interface Window {
        googleClientId?: string;
        google?: {
            accounts: {
                id: {
                    initialize: (config: Record<string, unknown>) => void;
                    prompt: (callback?: (notification: GISPromptNotification) => void) => void;
                    cancel: () => void;
                    revoke: (hint: string, callback: () => void) => void;
                };
            };
        };
    }
}

let gisLoaded = false;
let queuedCredential: string | null = null;
let oneTapAttempted = false;
let onCredentialCallback: ((idToken: string) => void) | null = null;

/** Inject the GIS script tag. Resolves when loaded. */
function loadGIS(): Promise<void> {
    return new Promise((resolve, reject) => {
        if (window.google?.accounts?.id) {
            gisLoaded = true;
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.onload = () => {
            gisLoaded = true;
            resolve();
        };
        script.onerror = () => reject(new Error('GIS script failed to load'));
        document.head.appendChild(script);
    });
}

/** Handle the JWT credential from GIS. */
async function handleCredential(response: GISCredentialResponse): Promise<void> {
    const idToken = response.credential;

    // Try to bridge immediately
    const user = await signInWithGISCredential(idToken);
    if (!user) {
        // Firebase Auth SDK might not be ready — queue for later
        queuedCredential = idToken;
        onCredentialCallback?.(idToken);
    }
}

/**
 * Process any queued credential (called after Firebase Auth SDK loads).
 * Returns the id_token if one was queued, null otherwise.
 */
export function consumeQueuedCredential(): string | null {
    const token = queuedCredential;
    queuedCredential = null;
    return token;
}

/** Set a callback for when a credential arrives (used by auth/index.ts). */
export function setCredentialCallback(cb: (idToken: string) => void): void {
    onCredentialCallback = cb;
}

/** Whether One Tap has already been attempted this page load. */
export function wasOneTapAttempted(): boolean {
    return oneTapAttempted;
}

/**
 * Initialize and trigger One Tap prompt.
 * Returns a promise that resolves when the prompt has been shown (or skipped).
 */
export async function initOneTap(): Promise<'prompted' | 'skipped' | 'dismissed'> {
    const clientId = window.googleClientId;
    if (!clientId) {
        console.warn('[auth] No googleClientId found on window. One Tap disabled.');
        return 'skipped';
    }

    if (oneTapAttempted) return 'skipped';
    oneTapAttempted = true;

    try {
        await loadGIS();
    } catch (err) {
        console.warn('[auth] GIS script failed to load:', err);
        return 'skipped';
    }

    return new Promise((resolve) => {
        window.google!.accounts.id.initialize({
            client_id: clientId,
            callback: handleCredential,
            auto_select: true,
            use_fedcm_for_prompt: true,
            cancel_on_tap_outside: true,
        });

        window.google!.accounts.id.prompt((notification: GISPromptNotification) => {
            const moment = notification.getMomentType();
            if (moment === 'display') {
                resolve('prompted');
            } else if (moment === 'skipped') {
                resolve('skipped');
            } else if (moment === 'dismissed') {
                resolve('dismissed');
            } else {
                resolve('skipped');
            }
        });
    });
}

/** Cancel One Tap prompt if showing. */
export function cancelOneTap(): void {
    if (gisLoaded && window.google?.accounts?.id) {
        window.google.accounts.id.cancel();
    }
}
```

- [ ] **Step 2: Verify file created**

Run: `wc -l themes/stack/assets/ts/auth/one-tap.ts`
Expected: ~130 lines

- [ ] **Step 3: Commit**

```bash
git add themes/stack/assets/ts/auth/one-tap.ts
git commit -m "✨ feat(auth): add GIS One Tap module with credential queueing"
```

---

### Task 4: Build Auth Facade (index.ts)

The public API that orchestrates One Tap → popup fallback, manages auth state, and exposes a clean interface for consumers.

**Files:**
- Create: `themes/stack/assets/ts/auth/index.ts`

- [ ] **Step 1: Create auth/index.ts**

```typescript
// themes/stack/assets/ts/auth/index.ts

/**
 * Site-wide auth — public API.
 *
 * Orchestrates: One Tap (auto-prompt) → popup fallback.
 * Consumers import from here, never from sub-modules.
 */
export type { AuthUser, AuthStateCallback } from './types';

import {
    initFirebaseAuth,
    signInWithPopup,
    signInWithGISCredential,
    firebaseSignOut,
    onAuthStateChange as firebaseOnAuthStateChange,
    getCurrentUser as firebaseGetCurrentUser,
    hasAuthHistory,
} from './firebase-auth';

import {
    initOneTap,
    cancelOneTap,
    consumeQueuedCredential,
    setCredentialCallback,
    wasOneTapAttempted,
} from './one-tap';

/**
 * Initialize auth on page load.
 *
 * - Returning users (localStorage flag): lazy-load Firebase Auth, restore session.
 * - Anonymous users: schedule One Tap after page idle (~3s).
 */
export async function initAuth(): Promise<void> {
    if (hasAuthHistory()) {
        // Returning user — restore Firebase session
        await initFirebaseAuth();
        return;
    }

    // Anonymous user — schedule One Tap
    // Set up credential callback in case GIS resolves before Firebase Auth
    setCredentialCallback(async (idToken: string) => {
        await signInWithGISCredential(idToken);
    });

    const scheduleOneTap = () => {
        setTimeout(async () => {
            const result = await initOneTap();
            if (result === 'prompted') {
                // One Tap is showing or auto-selected — Firebase Auth will
                // load when credential arrives via handleCredential → signInWithGISCredential
            }
            // If skipped/dismissed, the icon click will use popup fallback
        }, 3000);
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(scheduleOneTap);
    } else {
        scheduleOneTap();
    }
}

/**
 * Sign in — called when user clicks the auth icon.
 *
 * Tries One Tap first (if not attempted), falls back to popup.
 */
export async function signIn(): Promise<void> {
    if (!wasOneTapAttempted()) {
        const result = await initOneTap();
        if (result === 'prompted') {
            // One Tap is showing — wait for credential
            return;
        }
    }

    // One Tap unavailable or already attempted — use popup
    await signInWithPopup();
}

/** Sign out. */
export async function signOut(): Promise<void> {
    cancelOneTap();
    await firebaseSignOut();
}

/** Subscribe to auth state changes. Returns unsubscribe function. */
export function onAuthStateChange(callback: (user: import('./types').AuthUser | null) => void): () => void {
    return firebaseOnAuthStateChange(callback);
}

/** Get the current user (synchronous). */
export function getCurrentUser(): import('./types').AuthUser | null {
    return firebaseGetCurrentUser();
}
```

- [ ] **Step 2: Verify file created**

Run: `wc -l themes/stack/assets/ts/auth/index.ts`
Expected: ~90 lines

- [ ] **Step 3: Commit**

```bash
git add themes/stack/assets/ts/auth/index.ts
git commit -m "✨ feat(auth): add site-wide auth facade with One Tap + popup fallback"
```

---

### Task 5: Build Auth UI (Fixed Icon + Dropdown)

**Files:**
- Create: `themes/stack/assets/ts/auth-ui/index.ts`
- Create: `themes/stack/assets/scss/partials/_auth-ui.scss`
- Modify: `themes/stack/assets/scss/style.scss`

- [ ] **Step 1: Create auth-ui/index.ts**

```typescript
// themes/stack/assets/ts/auth-ui/index.ts

/**
 * Auth UI — fixed top-right icon with dropdown.
 *
 * States:
 * - Anonymous: person silhouette icon → click triggers signIn()
 * - Signed in: Google avatar → click opens dropdown (name, email, sign out)
 */
import { signIn, signOut, onAuthStateChange } from '../auth';
import type { AuthUser } from '../auth';

const PERSON_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

let rootEl: HTMLElement | null = null;
let dropdownVisible = false;
let currentUser: AuthUser | null = null;

function render(): void {
    if (!rootEl) return;
    rootEl.innerHTML = '';

    const btn = document.createElement('button');
    btn.className = 'auth-icon-btn';
    btn.setAttribute('aria-label', currentUser ? 'Account menu' : 'Sign in');

    if (currentUser) {
        // Signed in — show avatar
        if (currentUser.photoURL) {
            const img = document.createElement('img');
            img.src = currentUser.photoURL;
            img.alt = currentUser.displayName;
            img.className = 'auth-icon-avatar';
            img.width = 32;
            img.height = 32;
            img.referrerPolicy = 'no-referrer';
            btn.appendChild(img);
        } else {
            // Fallback: initials
            const initialsEl = document.createElement('span');
            initialsEl.className = 'auth-icon-initials';
            initialsEl.textContent = currentUser.displayName.substring(0, 2).toUpperCase();
            btn.appendChild(initialsEl);
        }
        btn.addEventListener('click', toggleDropdown);
    } else {
        // Anonymous — show person icon
        btn.innerHTML = PERSON_SVG;
        btn.addEventListener('click', () => signIn());
    }

    rootEl.appendChild(btn);

    // Render dropdown if visible
    if (dropdownVisible && currentUser) {
        renderDropdown();
    }
}

function renderDropdown(): void {
    if (!rootEl || !currentUser) return;

    const dropdown = document.createElement('div');
    dropdown.className = 'auth-dropdown';

    // User info
    const info = document.createElement('div');
    info.className = 'auth-dropdown-info';

    const name = document.createElement('div');
    name.className = 'auth-dropdown-name';
    name.textContent = currentUser.displayName;
    info.appendChild(name);

    dropdown.appendChild(info);

    // Divider
    const divider = document.createElement('hr');
    divider.className = 'auth-dropdown-divider';
    dropdown.appendChild(divider);

    // Sign out
    const signOutBtn = document.createElement('button');
    signOutBtn.className = 'auth-dropdown-item';
    signOutBtn.textContent = 'Sign out';
    signOutBtn.addEventListener('click', async () => {
        dropdownVisible = false;
        await signOut();
    });
    dropdown.appendChild(signOutBtn);

    rootEl.appendChild(dropdown);
}

function toggleDropdown(): void {
    dropdownVisible = !dropdownVisible;
    render();
}

function handleClickOutside(e: MouseEvent): void {
    if (dropdownVisible && rootEl && !rootEl.contains(e.target as Node)) {
        dropdownVisible = false;
        render();
    }
}

function handleEscape(e: KeyboardEvent): void {
    if (dropdownVisible && e.key === 'Escape') {
        dropdownVisible = false;
        render();
    }
}

/** Mount the auth icon into the given container element. */
export function mountAuthUI(container: HTMLElement): void {
    rootEl = container;

    onAuthStateChange((user) => {
        currentUser = user;
        dropdownVisible = false;
        render();
    });

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
}
```

- [ ] **Step 2: Create _auth-ui.scss**

```scss
// themes/stack/assets/scss/partials/_auth-ui.scss

// ─── Auth Icon (Fixed Top-Right) ─────────────────────────────────

.auth-root {
    position: fixed;
    top: env(safe-area-inset-top, 12px);
    right: 12px;
    z-index: 100;
}

.auth-icon-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(var(--gold-rgb, 139, 115, 85), 0.3);
    background: rgba(var(--gold-rgb, 139, 115, 85), 0.1);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    color: var(--gold, #8B7355);
    transition: border-color 0.2s, background 0.2s;

    &:hover {
        border-color: rgba(var(--gold-rgb, 139, 115, 85), 0.5);
        background: rgba(var(--gold-rgb, 139, 115, 85), 0.18);
    }
}

.auth-icon-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
}

.auth-icon-initials {
    font-size: 12px;
    font-weight: 600;
    color: var(--gold, #8B7355);
}

// ─── Dropdown ────────────────────────────────────────────────────

.auth-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    min-width: 200px;
    background: var(--card-background, #fff);
    border: 1px solid var(--card-separator-color, #e0e0e0);
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    padding: 8px 0;
    z-index: 101;

    [data-scheme="dark"] & {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }
}

.auth-dropdown-info {
    padding: 10px 14px;
}

.auth-dropdown-name {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--card-text-color-main, #333);
}

.auth-dropdown-divider {
    border: none;
    border-top: 1px solid var(--card-separator-color, #e0e0e0);
    margin: 4px 0;
}

.auth-dropdown-item {
    display: block;
    width: 100%;
    padding: 8px 14px;
    border: none;
    background: none;
    text-align: left;
    font-size: 0.8rem;
    color: var(--card-text-color-secondary, #666);
    cursor: pointer;

    &:hover {
        background: rgba(var(--gold-rgb, 139, 115, 85), 0.08);
        color: var(--card-text-color-main, #333);
    }
}
```

- [ ] **Step 3: Add SCSS import to style.scss**

In `themes/stack/assets/scss/style.scss`, add before the `@import "general.scss"` line:

```scss
@import "partials/auth-ui.scss";
```

- [ ] **Step 4: Verify files**

Run: `ls themes/stack/assets/ts/auth-ui/index.ts themes/stack/assets/scss/partials/_auth-ui.scss`
Expected: both files listed

- [ ] **Step 5: Commit**

```bash
git add themes/stack/assets/ts/auth-ui/index.ts themes/stack/assets/scss/partials/_auth-ui.scss themes/stack/assets/scss/style.scss
git commit -m "✨ feat(auth-ui): add fixed top-right auth icon with dropdown"
```

---

### Task 6: Wire Auth into Hugo Templates

Create the Hugo partial that renders the auth root container and loads the JS bundle. Add it to `baseof.html`. Add the Google Client ID to `head/custom.html`.

**Files:**
- Create: `layouts/partials/auth/init.html`
- Modify: `themes/stack/layouts/_default/baseof.html`
- Modify: `layouts/partials/head/custom.html`

- [ ] **Step 1: Create auth/init.html partial**

```html
{{/* Auth — site-wide Google One Tap + fixed icon */}}
<div id="auth-root" class="auth-root"></div>
{{- with resources.Get "ts/auth-ui/index.ts" -}}
    {{- $opts := dict "minify" hugo.IsProduction "target" "es2020" -}}
    {{- $authUI := . | js.Build $opts | fingerprint -}}
    <script type="module">
        import { mountAuthUI } from '{{ $authUI.RelPermalink }}';
        const root = document.getElementById('auth-root');
        if (root) mountAuthUI(root);
    </script>
{{- end -}}
{{- with resources.Get "ts/auth/index.ts" -}}
    {{- $opts := dict "minify" hugo.IsProduction "target" "es2020" -}}
    {{- $auth := . | js.Build $opts | fingerprint -}}
    <script type="module">
        import { initAuth } from '{{ $auth.RelPermalink }}';
        initAuth().catch(err => console.error('[auth] init failed:', err));
    </script>
{{- end -}}
```

- [ ] **Step 2: Add partial to baseof.html**

In `themes/stack/layouts/_default/baseof.html`, add the auth partial just before `{{ partial "footer/include.html" . }}`:

```html
        {{ partial "auth/init.html" . }}
        {{ partial "footer/include.html" . }}
```

- [ ] **Step 3: Add Google Client ID to head/custom.html**

In `layouts/partials/head/custom.html`, add after the Firebase `<script>` block:

```html
{{/* Google Identity Services — Client ID for One Tap */}}
<script>
  window.googleClientId = "{{ .Site.Params.googleClientId | default "" }}";
</script>
```

Then add to `hugo.toml` (params section):

```toml
[params]
  googleClientId = ""  # Set after retrieving from Google Cloud Console
```

**Note:** The actual Client ID must be retrieved from Google Cloud Console → APIs & Credentials → project `hexo-blog-9ccea`. Look for "Web client (auto created by Google Service)" under OAuth 2.0 Client IDs. Add authorized JavaScript origins: `https://blog.enkr1.com` and `http://localhost:1313`.

- [ ] **Step 4: Verify Hugo builds**

Run: `cd /Users/enkr/Personal/_web/journal-app/hugo && hugo --gc 2>&1 | tail -5`
Expected: Build succeeds with no errors

- [ ] **Step 5: Commit**

```bash
git add layouts/partials/auth/init.html themes/stack/layouts/_default/baseof.html layouts/partials/head/custom.html hugo.toml
git commit -m "✨ feat(auth): wire site-wide auth into Hugo templates"
```

---

### Task 7: Migrate Inline Comments to Shared Auth

Update inline-comments to import from the shared `auth/` module. Delete the old `inline-comments/auth.ts`. Simplify the sign-in prompt in `ui.ts`.

**Files:**
- Delete: `themes/stack/assets/ts/inline-comments/auth.ts`
- Modify: `themes/stack/assets/ts/inline-comments/types.ts`
- Modify: `themes/stack/assets/ts/inline-comments/index.ts`
- Modify: `themes/stack/assets/ts/inline-comments/ui.ts`

- [ ] **Step 1: Update inline-comments/types.ts — remove AuthUser**

Remove the `AuthUser` interface and import it from the shared module. The file should become:

```typescript
/** Inline Comments — Type Definitions */

export type { AuthUser } from '../auth/types';

export interface Author {
    uid: string;
    displayName: string;
    photoURL: string;
}

export interface Anchor {
    prefix: string;
    suffix: string;
}

export interface Comment {
    id: string;
    articleSlug: string;
    quotedText: string;
    text: string;
    anchor: Anchor;
    anchorStatus: 'active' | 'orphaned';
    author: Author;
    createdAt: unknown;
    updatedAt: unknown;
    likes: number;
    likedBy: string[];
    replyCount: number;
    replies: Reply[];
}

export interface Reply {
    id: string;
    author: Author;
    text: string;
    mentions: Array<{ uid: string; displayName: string }>;
    createdAt: unknown;
    updatedAt: unknown;
}

export interface NewComment {
    articleSlug: string;
    quotedText: string;
    text: string;
    anchor: Anchor;
}

export interface NewReply {
    text: string;
    mentions: Array<{ uid: string; displayName: string }>;
}
```

- [ ] **Step 2: Update inline-comments/index.ts — import from shared auth**

Replace line 7 (`import { initAuth, onAuthStateChange } from './auth';`) with:

```typescript
import { initAuth, onAuthStateChange } from '../auth';
```

- [ ] **Step 3: Update inline-comments/ui.ts — import from shared auth**

Replace line 9 (`import { signIn, signOut, onAuthStateChange, getCurrentUser } from './auth';`) with:

```typescript
import { signIn, signOut, onAuthStateChange, getCurrentUser } from '../auth';
```

- [ ] **Step 4: Simplify buildSignInPrompt in ui.ts**

Replace the `buildSignInPrompt` function (lines 699-731) with a simpler version that just shows "Sign in to comment" text without the Google logo (since the site-wide auth icon now handles the primary sign-in UX):

```typescript
function buildSignInPrompt(): HTMLElement {
    const prompt = el('div', 'ic-signin-prompt');
    const msg = el('p', 'ic-signin-text');
    msg.textContent = 'Sign in to comment';
    prompt.appendChild(msg);

    const btn = document.createElement('button');
    btn.className = 'ic-signin-btn';
    btn.textContent = 'Sign in';
    btn.addEventListener('click', () => signIn());
    prompt.appendChild(btn);

    return prompt;
}
```

- [ ] **Step 5: Delete old auth.ts**

Run: `rm themes/stack/assets/ts/inline-comments/auth.ts`

- [ ] **Step 6: Verify Hugo builds**

Run: `cd /Users/enkr/Personal/_web/journal-app/hugo && hugo --gc 2>&1 | tail -5`
Expected: Build succeeds with no errors

- [ ] **Step 7: Commit**

```bash
git add -A themes/stack/assets/ts/inline-comments/
git commit -m "♻️ refactor(inline-comments): migrate to shared auth module, simplify sign-in prompt"
```

---

### Task 8: Manual Testing & Verification

Verify the full flow works end-to-end.

**Files:** None (testing only)

- [ ] **Step 1: Start Hugo dev server**

Run: `cd /Users/enkr/Personal/_web/journal-app/hugo && hugo server -D`
Expected: Server starts on `http://localhost:1313`

- [ ] **Step 2: Retrieve and configure OAuth Client ID**

1. Go to [Google Cloud Console → APIs & Credentials](https://console.cloud.google.com/apis/credentials?project=hexo-blog-9ccea)
2. Find "Web client (auto created by Google Service)" under OAuth 2.0 Client IDs
3. Copy the Client ID
4. Add authorized JavaScript origins: `https://blog.enkr1.com`, `http://localhost:1313`
5. Add the Client ID to `hugo.toml`: `googleClientId = "your-client-id-here"`

- [ ] **Step 3: Test anonymous state**

Open `http://localhost:1313` in Chrome (incognito).
Expected:
- Person icon visible in top-right corner
- After ~3 seconds, One Tap prompt may appear (if logged into Google in this browser)
- No errors in console (`[auth]` prefix)

- [ ] **Step 4: Test sign-in via icon click**

Click the person icon.
Expected:
- Google sign-in popup opens
- After signing in, icon changes to Google avatar
- Console shows no `[auth]` errors

- [ ] **Step 5: Test dropdown**

Click the avatar icon.
Expected:
- Dropdown appears with display name and "Sign out"
- Clicking outside or pressing ESC closes dropdown
- Clicking "Sign out" returns to person icon

- [ ] **Step 6: Test inline comments still work**

Navigate to any article page.
Expected:
- Comment panel loads in right sidebar
- If signed in, comments are visible and you can add new ones
- If signed out, "Sign in to comment" prompt appears (simplified, no Google logo)
- Clicking "Sign in" triggers the shared auth flow

- [ ] **Step 7: Test photoURL in Firestore**

After signing in via One Tap (if available) or popup:
- Open browser DevTools → Console
- Run: `firebase.auth().currentUser.photoURL`
- Expected: URL starting with `https://` (needed for Firestore rules)

- [ ] **Step 8: Test returning user (localStorage)**

1. Sign in, close tab
2. Open `http://localhost:1313` in a new tab
Expected:
- Avatar icon appears immediately (no person icon flash)
- Firebase Auth SDK lazy-loads and restores session
- No One Tap prompt (already authenticated)

- [ ] **Step 9: Commit any fixes from testing**

```bash
git add -A
git commit -m "🐛 fix(auth): address issues found during manual testing"
```

*(Only if fixes were needed. Skip if all tests passed.)*
