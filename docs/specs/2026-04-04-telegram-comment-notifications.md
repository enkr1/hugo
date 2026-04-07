# Telegram Notifications for Inline Comments

**Date:** 2026-04-04
**Status:** Implemented

## Problem

The inline comments system (Firestore-backed) has no notification mechanism. Blog owner has no way to know about new comments without visiting each article.

## Solution

Google Apps Script polls Firestore every 1 hour and sends Telegram messages for new comments and replies.

**Why Apps Script (not Cloud Functions):** Firebase project `hexo-blog-9ccea` is on Spark (free) plan. Cloud Functions require Blaze. Apps Script is free and already used for email subscriptions.

## Architecture

```
User posts comment → Firestore write (existing client code)
  → (≤1 hr) Apps Script time-trigger polls Firestore REST API
  → Formats and sends message via Telegram Bot API
  → Blog owner receives Telegram notification
```

## Components

### Telegram Bot

- **Name:** blog-comment
- **Username:** @EnkrBlogCommentBot
- **Recipient:** (see Script Properties → `TELEGRAM_CHAT_ID`)

### Google Apps Script

- **Project:** "Blog Comment Notifier" at script.google.com
- **Source:** `docs/apps-script/Code.gs` (canonical copy in this repo)
- **Trigger:** Time-driven, every 1 hour, runs `checkNewComments()` (reduced from every 1 minute on 2026-04-07 after `urlfetch` quota burn; structural N+1 fix in `Code.gs:231-241` deferred)

### Script Properties

| Key | Value | Notes |
|-----|-------|-------|
| `TELEGRAM_BOT_TOKEN` | (secret) | From @BotFather |
| `TELEGRAM_CHAT_ID` | (secret) | Blog owner's chat |
| `FIREBASE_PROJECT_ID` | `hexo-blog-9ccea` | |
| `LAST_CHECK` | (auto-managed) | ISO timestamp watermark |
| `NOTIFIED_IDS` | (auto-managed) | JSON array, max 100 IDs |

### OAuth

Apps Script uses `ScriptApp.getOAuthToken()` — works because the same Google account owns both the Apps Script project and the Firebase project. Required scopes:
- `https://www.googleapis.com/auth/datastore`
- `https://www.googleapis.com/auth/script.external_request`

## How It Works

1. Time trigger fires `checkNewComments()` every 1 hour
2. Reads `LAST_CHECK` watermark from Script Properties
3. Queries Firestore REST API for `comments` where `createdAt > lastCheck`
4. Queries Firestore REST API for `replies` (collection group, `allDescendants: true`) where `createdAt > lastCheck`
5. Deduplicates against `NOTIFIED_IDS` to avoid re-notifying
6. Sends formatted Telegram message for each new comment/reply
7. Updates watermark with 30s overlap (clock drift guard) and appends new IDs

## Message Format

**New comment:**
```
💬 New comment on {articleSlug}

{displayName} highlighted:
"{quotedText}"

{commentText}

🔗 blog.enkr1.com/{articleSlug}/
```

**New reply:**
```
↩️ New reply

{displayName} replied:
{replyText}

(on comment {commentId})
```

## Maintenance

- **Canonical code:** `docs/apps-script/Code.gs` — copy to Apps Script editor after edits
- **Rotate bot token:** Message @BotFather → `/revoke` → update Script Property
- **Debugging:** Run `testFirestoreQuery()` in Apps Script editor to inspect raw Firestore data
- **Logs:** View → Executions in Apps Script dashboard

## Future Upgrade

If Firebase is upgraded to Blaze plan, migrate to Cloud Functions for instant (<2s) delivery:
- `onDocumentCreated('comments/{commentId}')` + `onDocumentCreated('comments/{commentId}/replies/{replyId}')`
- Same bot, same message format — just replace the polling mechanism
