/**
 * Blog Comment Notifier — Google Apps Script
 *
 * Polls Firestore for new inline comments/replies and sends
 * Telegram notifications to the blog owner.
 *
 * Script Properties (set in Project Settings):
 *   TELEGRAM_BOT_TOKEN  — from @BotFather
 *   TELEGRAM_CHAT_ID    — your personal chat ID
 *   FIREBASE_PROJECT_ID — hexo-blog-9ccea
 *   LAST_CHECK          — ISO timestamp watermark (auto-managed)
 *   NOTIFIED_IDS        — JSON array of already-notified doc IDs (dedup)
 */

// ─── Config ────────────────────────────────────────────────────────

const BLOG_URL = 'https://blog.enkr1.com/';
const FIRESTORE_BASE = 'https://firestore.googleapis.com/v1/projects/';
const QUERY_LIMIT = 50;

function getConfig() {
  const all = PropertiesService.getScriptProperties().getProperties();
  return {
    botToken: all.TELEGRAM_BOT_TOKEN,
    chatId: all.TELEGRAM_CHAT_ID,
    projectId: all.FIREBASE_PROJECT_ID || 'hexo-blog-9ccea',
    lastCheck: all.LAST_CHECK || new Date(0).toISOString(),
    notifiedIds: JSON.parse(all.NOTIFIED_IDS || '[]'),
  };
}

// ─── Firestore REST API ────────────────────────────────────────────

/**
 * Run a structured query against Firestore REST API.
 * @param {Object} config - from getConfig()
 * @param {string} collectionId - 'comments' or 'replies'
 * @param {string} sinceISO - ISO timestamp to filter createdAt >
 * @param {boolean} allDescendants - true for collection group query (replies)
 * @returns {Object[]} parsed documents
 */
function queryFirestore(config, collectionId, sinceISO, allDescendants) {
  const url = FIRESTORE_BASE +
    config.projectId + '/databases/(default)/documents:runQuery';

  const body = {
    structuredQuery: {
      from: [{ collectionId: collectionId, allDescendants: !!allDescendants }],
      where: {
        fieldFilter: {
          field: { fieldPath: 'createdAt' },
          op: 'GREATER_THAN',
          value: { timestampValue: sinceISO }
        }
      },
      orderBy: [{ field: { fieldPath: 'createdAt' }, direction: 'ASCENDING' }],
      limit: { value: QUERY_LIMIT }
    }
  };

  const response = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    headers: { 'Authorization': 'Bearer ' + ScriptApp.getOAuthToken() },
    payload: JSON.stringify(body),
    muteHttpExceptions: true
  });

  if (response.getResponseCode() !== 200) {
    Logger.log('Firestore query error: ' + response.getContentText());
    return [];
  }

  const results = JSON.parse(response.getContentText());
  return results
    .filter(function(r) { return r.document; })
    .map(function(r) { return parseFirestoreDoc(r.document); });
}

/**
 * Fetch a single Firestore document by path.
 * @param {Object} config - from getConfig()
 * @param {string} docPath - document path (e.g. 'comments/abc123')
 * @returns {Object|null} parsed document or null on error
 */
function fetchFirestoreDoc(config, docPath) {
  const url = FIRESTORE_BASE +
    config.projectId + '/databases/(default)/documents/' + docPath;

  const response = UrlFetchApp.fetch(url, {
    method: 'get',
    headers: { 'Authorization': 'Bearer ' + ScriptApp.getOAuthToken() },
    muteHttpExceptions: true
  });

  if (response.getResponseCode() !== 200) {
    Logger.log('Firestore fetch error (' + docPath + '): ' + response.getContentText());
    return null;
  }

  return parseFirestoreDoc(JSON.parse(response.getContentText()));
}

/**
 * Convert Firestore REST document format to a plain JS object.
 * Handles: stringValue, integerValue, timestampValue, mapValue, arrayValue.
 */
function parseFirestoreDoc(doc) {
  const obj = { _id: doc.name.split('/').pop(), _path: doc.name };
  const fields = doc.fields || {};

  Object.keys(fields).forEach(function(key) {
    obj[key] = parseFirestoreValue(fields[key]);
  });

  return obj;
}

function parseFirestoreValue(val) {
  if ('stringValue' in val) return val.stringValue;
  if ('integerValue' in val) return parseInt(val.integerValue, 10);
  if ('doubleValue' in val) return val.doubleValue;
  if ('booleanValue' in val) return val.booleanValue;
  if ('timestampValue' in val) return val.timestampValue;
  if ('nullValue' in val) return null;
  if ('mapValue' in val) return parseFirestoreDoc({ name: '', fields: val.mapValue.fields });
  if ('arrayValue' in val) {
    return (val.arrayValue.values || []).map(parseFirestoreValue);
  }
  return null;
}

/** Extract parent comment ID from a reply's Firestore path. */
function extractParentCommentId(replyPath) {
  const parts = (replyPath || '').split('/');
  const idx = parts.indexOf('comments');
  return idx >= 0 ? parts[idx + 1] : '';
}

// ─── Telegram ──────────────────────────────────────────────────────

/**
 * Send a message via Telegram Bot API.
 * @param {Object} config - from getConfig()
 * @param {string} message - HTML-formatted message
 * @throws {Error} if Telegram API returns non-200
 */
function sendTelegram(config, message) {
  const url = 'https://api.telegram.org/bot' + config.botToken + '/sendMessage';

  const response = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      chat_id: config.chatId,
      text: message,
      parse_mode: 'HTML',
      disable_web_page_preview: true
    }),
    muteHttpExceptions: true
  });

  if (response.getResponseCode() !== 200) {
    Logger.log('Telegram send error: ' + response.getContentText());
    throw new Error('Telegram send failed: ' + response.getResponseCode());
  }
}

// ─── Message Formatting ────────────────────────────────────────────

function escapeHtml(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatCommentMessage(comment) {
  const slug = escapeHtml(comment.articleSlug);
  const name = escapeHtml(comment.author ? comment.author.displayName : 'Someone');
  const quoted = escapeHtml(comment.quotedText);
  const text = escapeHtml(comment.text);

  return [
    '\ud83d\udcac New comment on <b>' + slug + '</b>',
    '',
    '<b>' + name + '</b> highlighted:',
    '<i>\u201c' + quoted + '\u201d</i>',
    '',
    text,
    '',
    '\ud83d\udd17 ' + BLOG_URL + slug + '/'
  ].join('\n');
}

/**
 * Format a reply notification with parent comment context.
 * @param {Object} parentComment - pre-fetched parent comment (may be null)
 * @param {Object} reply - parsed reply document
 */
function formatReplyMessage(parentComment, reply) {
  const name = escapeHtml(reply.author ? reply.author.displayName : 'Someone');
  const text = escapeHtml(reply.text);

  let slug = '';
  let quoted = '';
  if (parentComment) {
    slug = escapeHtml(parentComment.articleSlug);
    quoted = escapeHtml(parentComment.quotedText);
  }

  const lines = ['\u21a9\ufe0f New reply'];
  if (slug) lines.push('on <b>' + slug + '</b>');
  lines.push('');
  lines.push('<b>' + name + '</b> replied:');
  lines.push(text);
  if (quoted) {
    lines.push('');
    lines.push('Re: <i>\u201c' + quoted + '\u201d</i>');
  }
  if (slug) {
    lines.push('');
    lines.push('\ud83d\udd17 ' + BLOG_URL + slug + '/');
  }

  return lines.join('\n');
}

// ─── Core Polling Logic ────────────────────────────────────────────

function checkNewComments() {
  const config = getConfig();
  const seen = new Set(config.notifiedIds);

  const newComments = queryFirestore(config, 'comments', config.lastCheck, false);
  const newReplies = queryFirestore(config, 'replies', config.lastCheck, true);

  const newIds = [];

  newComments.forEach(function(c) {
    if (seen.has(c._id)) return;
    sendTelegram(config, formatCommentMessage(c));
    newIds.push(c._id);
  });

  // Batch-fetch unique parent comments to avoid N+1 per reply
  const parentCache = {};
  newReplies.forEach(function(r) {
    const parentId = extractParentCommentId(r._path);
    if (parentId && !(parentId in parentCache)) {
      parentCache[parentId] = fetchFirestoreDoc(config, 'comments/' + parentId);
    }
  });

  newReplies.forEach(function(r) {
    if (seen.has(r._id)) return;
    const parentId = extractParentCommentId(r._path);
    sendTelegram(config, formatReplyMessage(parentCache[parentId] || null, r));
    newIds.push(r._id);
  });

  // 30s overlap guards against clock drift; dedup IDs catch the overlap
  const watermark = new Date(Date.now() - 30000).toISOString();
  const allIds = config.notifiedIds.concat(newIds).slice(-100);

  const propsToWrite = { LAST_CHECK: watermark };
  if (newIds.length > 0) {
    propsToWrite.NOTIFIED_IDS = JSON.stringify(allIds);
  }
  PropertiesService.getScriptProperties().setProperties(propsToWrite);
}

// ─── Test Helpers ──────────────────────────────────────────────────

function testSendTelegram() {
  const config = getConfig();
  sendTelegram(config, '\u2705 Blog Comment Notifier is working!\n\nThis is a test message.');
}

function testFirestoreQuery() {
  const config = getConfig();
  const comments = queryFirestore(config, 'comments', new Date(0).toISOString(), false);
  Logger.log('Found ' + comments.length + ' comments:');
  comments.forEach(function(c) {
    Logger.log('  - [' + c.articleSlug + '] ' + (c.author ? c.author.displayName : '?') + ': ' + c.text);
  });
}
