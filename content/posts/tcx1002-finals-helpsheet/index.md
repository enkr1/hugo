---
title: "TCX1002 | Python Finals Helpsheet"
slug: "nus-bit-tcx1002-finals-helpsheet"
date: 2026-04-20
description: "A4 double-sided helpsheet for NUS TCX1002 Final Exam (May 4, Examplify fill-blank)"
tags: ["nus", "python", "helpsheet", "tcx1002", "finals"]
categories: ["Education", "Programming"]
toc: true
math: false
draft: false
---

<style>
@page { margin: 2mm; }
@media print {
  .left-sidebar, .right-sidebar, .sidebar,
  .toc-left-sidebar,
  #TableOfContents, .widget--toc,
  .floating-toolbar, .scroll-to-top, .search-modal,
  .backlinks-section, .backlinks-list, .article-header, .article-footer,
  [class*="backlink"], [class*="mention"],
  .widget--newsletter, .newsletter, [class*="subscribe"], [class*="stay-in-loop"],
  footer, aside, .site-footer, .post-footer,
  .related-content--wrapper, .subscribe-form,
  [class*="share"], [class*="social"],
  [class*="copyright"], [class*="license"], [class*="prev-next"],
  .inline-comment-popup, .ic-floating-pill,
  .article-page .main-article > :last-child ~ * { display: none !important; }
  html, body, main, article, div, section {
    min-height: 0 !important; height: auto !important;
  }
  main, .main-article, .article-content, .main-container, .container, body {
    flex: initial !important; flex-grow: 0 !important;
    display: block !important;
    max-width: 100% !important; width: 100% !important;
    padding: 0 !important; margin: 0 !important;
    gap: 0 !important;
  }
  body, .main-article {
    font-size: 7pt !important;
    line-height: 1.05 !important;
    letter-spacing: -0.1px !important;
  }
  .main-article {
    column-count: 2 !important;
    column-gap: 5mm !important;
    column-fill: balance !important;
    column-rule: 0.3px solid #e5e5e5 !important;
  }
  /* Override theme's page-break-before on h2 — let sections flow inline within columns */
  .article-content h2 {
    page-break-before: auto !important;
    break-before: auto !important;
    page-break-after: avoid !important;
    break-after: avoid !important;
    font-size: 7.2pt !important;
    margin: 2pt 0 1pt 0 !important;
    padding: 1pt 3pt !important;
    background: #222 !important;
    color: #fff !important;
  }
  h3 {
    font-size: 6.8pt !important;
    margin: 1pt 0 0 0 !important;
    padding: 0 0 0 0.3em !important;
    border-top: 0.3px solid #ccc !important;
    border-left: none !important;
    background: rgba(0,0,0,0.04) !important;
  }
  h4 { font-size: 6.7pt !important; margin: 0 !important; }
  /* Code blocks — 1002's dominant content; size unified with body */
  pre, .highlight, .highlight pre {
    font-size: 7pt !important;
    line-height: 1.05 !important;
    margin: 1px 0 !important;
    padding: 2px 4px !important;
    background: rgba(0,0,0,0.03) !important;
    overflow: hidden !important;
    white-space: pre-wrap !important;
    word-break: break-word !important;
  }
  pre code, .highlight code { font-size: 1em !important; line-height: 1.05 !important; }
  code { font-size: 1em !important; }
  /* Tables */
  table {
    font-size: 6.6pt !important;
    margin: 0 0 0.2rem 0 !important;
    border-collapse: collapse !important;
    width: 100% !important;
  }
  td, th {
    padding: 0.5px 2px !important;
    line-height: 1.0 !important;
    border: 0.3px solid #ccc !important;
    vertical-align: top !important;
  }
  th { background: #f4f4f4 !important; }
  p {
    font-size: 6pt !important;
    line-height: 1.05 !important;
    margin: 0 0 1px 0 !important;
  }
  blockquote {
    font-size: 6.4pt !important;
    line-height: 1.0 !important;
    margin: 0 0 1px 0 !important;
    padding: 0 5px !important;
    border-left: 2px solid #bbb !important;
  }
  ul, ol { margin: 0 !important; padding-left: 10px !important; }
  li { margin: 0 !important; line-height: 1.05 !important; font-size: 6pt !important; }
  hr { display: none !important; }
  h3, h4 {
    page-break-after: avoid !important;
    break-after: avoid !important;
    break-before: avoid-column !important;
  }
  pre, blockquote, table, tr {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
  p:empty { display: none !important; }
}
</style>

<div class="print-hide">

## Constraints & Scope

- **1 × A4 double-sided** (confirmed Prof Jiang, Apr 18)
- **Examplify fill-blank** format — no compiler, no run-code
- **Relaxed vs PE:** recursion ✅ allowed, NumPy ✅ allowed
- **TBC (still pending Apr 18 tutorial answers):** OOP, regex
- Strategy anchor: decomposition into subproblems → **recursive thinking** (Prof Jiang Apr 18 lunch)

## Scope Priorities

**Tier 1 — exam-time first lookup (high frequency × tested-weak):**
1. **NumPy distance matrix** (Apr 18 live-walk → strongest signal)
2. **`reduce`** (`from functools import reduce`; `reduce(fn, iter, init)` arg order)
3. **Backtracking template** (base case = `[]` not `None`; combine `[(curr,)] + res`)
4. **OOP `@property`** (TBC hedge — read-only / write-only)
5. **Regex** (TBC hedge — midterm + T3 evidence)

**Tier 2 — secondary lookup (high freq × tested-OK):**
- filter / sorted / map / lambda
- Recursive RLE + recursive shrink idioms (`% / //`, `s[1:]`, `lst[1:]`)
- 2D Grid (zigzag + column-RTL)
- OOP class + inheritance + polymorphism
- try / except
- Mock Test Solutions MT1–MT10

**Tier 3 — 1-line compressed (foundation, won't blank):**
- enumerate · defaultdict / Counter · @lru_cache · two-pointer merge · sliding window · LCS · wildcard match

**READ-FIRST checklist (before filling any blank):**
- What does the comment say the function returns? (list? tuple? bool?)
- What types are the args? (str? int? list of tuples?)
- What does the surrounding code do with the blank's value?

</div>

## Quick Reference

### OOP — class · inheritance · polymorphism · @property

```python
class Parent:
    def __init__(self, name):
        self.name = name
        self._val = 0                         # convention: leading _ = "private"
    def method(self): return "base"           # overridable
    def __str__(self):  return f"Parent({self.name})"
    def __repr__(self): return f"Parent('{self.name}')"

    @property                                  # READ-ONLY: getter only
    def val(self): return self._val

    @property                                  # WRITE-ONLY: getter raises
    def deposit(self): raise AttributeError("write-only")
    @deposit.setter
    def deposit(self, amt): self._val += amt   # x.deposit = 50 → triggers setter

class Child(Parent):                           # inheritance
    def __init__(self, name, extra):
        super().__init__(name)                 # call parent __init__
        self.extra = extra
    def method(self): return "override"        # polymorphism (no isinstance check)
    def __str__(self): return f"Child({self.name})"

# Use:
c = Child("A", 9); c.method()                  # "override"
c.val                                          # 0  (read-only)
c.deposit = 50; c.val                          # 50
c.val = 99                                     # ⚠️ AttributeError (no setter)
```

### filter / reduce

```python
from functools import reduce        # ⚠️ MUST import — reduce is NOT builtin
# Signature: reduce(fn, iterable, initial)   ← 3rd arg is INITIAL (seed), not iterable
# Lambda convention: lambda acc, x: ...      ← acc FIRST (matters for non-commutative ops)
```

**filter:** keep items where fn returns True. **reduce:** fold list into one value.

```python
valid  = list(filter(lambda x: x[1] != "NA", data))
total  = reduce(lambda acc, x: acc + x,  [1,2,3], 0)   # 6
prod   = reduce(lambda acc, x: acc * x,  [1,2,3,4], 1) # 24
joined = reduce(lambda acc, x: acc + x, ["h","i","!"], "")  # "hi!"
```

**Build dict with reduce** (mutable acc — faster):

```python
def collect(acc, item):
    acc.setdefault(item[0], []).append(item[1])
    return acc                       # ← MUST return acc!
result = reduce(collect, data, {})
```

**Immutable style** (slower, but works in lambda):

```python
reduce(lambda acc, x: {**acc, x[0]: acc.get(x[0], 0) + x[1]}, data, {})
```

### Sorting

```python
sorted(data, key=lambda x: (-x[1], x[0]))  # desc by [1], asc by [0]
# ⚠️ negative trick only works on numbers, not strings
# sorted() → NEW list    .sort() → in-place, returns None
```

### @lru_cache

```python
from functools import lru_cache    # args must be hashable (tuples, not lists)
@lru_cache(maxsize=None)            # ↑ exponential recursion → O(n)
```

### defaultdict / Counter

```python
from collections import defaultdict, Counter

groups = defaultdict(list)    # auto [] on missing key
counts = defaultdict(int)     # auto 0 on missing key

c = Counter([1,2,2,3,3,3])   # {3:3, 2:2, 1:1}
c.most_common(2)              # [(3,3), (2,2)]
```

### String Methods

> **Python rule:** `x.method()` not `method(x)`. Exception: `len(x)`, `int(x)`, `str(x)`, `sum(x)`, `max(x)`, `min(x)`, `sorted(x)`, `abs(x)` are free functions. Everything else string-/list-/dict-specific is `obj.method()`.

```python
"  hello  ".strip()              # 'hello'       both ends
"  hello  ".lstrip()             # 'hello  '     left only
"  hello  ".rstrip()             # '  hello'     right only
"hello world".split()            # ['hello', 'world']   by whitespace
"a,b,c".split(",")              # ['a', 'b', 'c']      by delimiter
"a b  c".split(" ")             # ['a', 'b', '', 'c']  exact space (keeps empty!)
# ⚠️ "".split() → []    but    "".split(" ") → [""]
", ".join(["a", "b", "c"])       # 'a, b, c'            list → str
"hello".replace("ll", "r")      # 'hero'
"hello".find("ll")              # 2  (-1 if not found)
"abcabc".count("a")             # 2
"hello".startswith("he")         # True
"file.py".endswith(".py")        # True
"hello".upper()                  # 'HELLO'
"HELLO".lower()                  # 'hello'
"hello world".title()            # 'Hello World'
"123".isdigit()                  # True
"abc".isalpha()                  # True
"abc123".isalnum()               # True
```

```python
# ord / chr — character ↔ number
ord('A')  # 65    ord('a')  # 97    ord('0')  # 48
chr(65)   # 'A'   chr(97)   # 'a'
ord('c') - ord('a')                              # 2 (letter → index)
chr(ord('a') + 3)                                # 'd' (index → letter)
chr((ord(c) - ord('a') + shift) % 26 + ord('a')) # Caesar cipher
```

### List / Set / Dict Methods

```python
# LIST
lst.append(x)       # add to end (in-place)
lst.insert(i, x)    # insert at index (in-place)
lst.pop()            # remove + return last
lst.pop(0)           # remove + return first
lst.remove(x)        # remove first x (ValueError if missing)
lst.index(x)         # index of first x (ValueError if missing)
lst.reverse()        # in-place, returns None!
lst.extend([1,2])    # add each item     vs  lst.append([1,2]) → nested

# SET
s.add(x)             # add one
s.discard(x)         # remove (no error if missing)
s.remove(x)          # remove (KeyError if missing)
a & b                # intersection
a | b                # union
a - b                # difference
a ^ b                # symmetric difference

# COMPREHENSIONS
[x**2 for x in lst if x > 0]            # list
{k: v for k, v in pairs}                # dict
{x for x in lst}                         # set
[x for row in matrix for x in row]      # flatten 2D
```

### Dict Tricks

```python
d.get(key, default)                    # no KeyError
d.setdefault(key, []).append(item)     # group without defaultdict
counts[x] = counts.get(x, 0) + 1      # count without Counter
```

### try / except

```python
try:
    risky_thing()
except ValueError:             # catch specific
    print("bad value")
except (TypeError, KeyError):  # catch multiple
    print("wrong type or key")

raise ValueError("insufficient balance")  # throw your own
raise AttributeError("write-only")
```

### enumerate

```python
for i, val in enumerate(lst):          # i=0,1,2...
for i, val in enumerate(lst, start=1): # i=1,2,3...
```

### Formatting & Type Checks

```python
import math                            # for ceil, gcd, sqrt, inf
f"${balance:.2f}"                      # 2 decimal places
isinstance(x, (int, float))           # True for subclasses too
type(x) == int                         # exact match only
```

### NumPy — Distance Matrix Pattern

> Universal skeleton for "find pair (i, j) with min/max distance". Live-taught Apr 18 (MT10).

```python
import numpy as np

# === Build NxN pairwise distance matrix ===
A = np.array(arr)                      # 1D list → np.ndarray
D = (A[:, None] - A) ** 2              # squared diff, shape (N, N)
M = np.abs(A[:, None] - A)             # Manhattan diff, shape (N, N)

# === Poison diagonal so argmin/argmax skips self-vs-self ===
np.fill_diagonal(D, D.max())           # finding CLOSEST → diag = max
np.fill_diagonal(D, -1)                # finding FARTHEST → diag = -1

# === Find extreme + convert flat idx → (i, j) ===
flat = D.argmin()                      # OR D.argmax() — returns flat index
i, j = np.unravel_index(flat, D.shape) # flat → (row, col) tuple
```

**Key idioms (recognize, don't derive):**
- `A[:, None]` — inserts new axis at position 1: shape `(N,)` → `(N, 1)`
- Broadcasting: `(N, 1) - (1, N)` → `(N, N)` matrix where `D[i,j] = A[i] - A[j]`
- `argmin` / `argmax` return **flat** (1D) index → must `unravel_index` to get `(i, j)`
- `np.fill_diagonal(D, value)` — overwrites `D[i, i]` in place

**Higher-dim Euclidean (only if input is `(N, D)` matrix of points):**

```python
diff = A[:, None, :] - A[None, :, :]   # shape (N, N, D)
E = (diff ** 2).sum(axis=-1)           # shape (N, N), squared euclidean
```

---

## Algorithms

### Greedy vs Backtracking

```python
# Q: "Can my local choice block someone downstream?"
# No  → Greedy        O(N)
# Yes → Backtracking  O(P^N)
```

### Backtracking — Wishful Thinking

```python
# Pattern: choose → recurse → undo.
# ⚠️ Base case = SUCCESS ([] / state / True), NOT None.
# ⚠️ None = "all branches failed" only.
def backtrack(remaining, state):
    if not remaining:
        return state                     # ✓ SUCCESS base
    curr = remaining[0]
    for option in get_options(curr):
        if not is_valid(option, state): continue
        apply(option, state)             # CHOOSE
        result = backtrack(remaining[1:], state)
        if result is not None:
            return result                # combine: return [(curr, option)] + result
        undo(option, state)              # UNDO
    return None                          # all failed → propagate fail
```

**Result-builder variant (collect pairs/groups):**

```python
def pair_up(items, ok):
    if not items: return []              # ✓ success = [] (NOT None!)
    first = items[0]
    for partner in items[1:]:
        if ok(first, partner):
            rest = pair_up([x for x in items if x not in (first, partner)], ok)
            if rest is not None:
                return [(first, partner)] + rest   # ⚠️ MUST prepend current
    return None
```

**Concrete — student scheduling:**

```python
def assign(students, classes):
    def bt(rem, cls, res):
        if not rem: return res
        curr = rem[0]
        for pref in curr["preferences"]:
            if cls[pref] == 0: continue
            res.setdefault(pref, []).append(curr["name"])
            cls[pref] -= 1
            ans = bt(rem[1:], cls, res)
            if ans is not None: return ans
            cls[pref] += 1; res[pref].pop()    # UNDO
        return None
    return bt(students, classes.copy(), {})
```

### LCS (Longest Common Subsequence)

```python
# Longest sequence present in both, same order. Exponential w/o memo.
def lcs(t1, t2, acc=""):
    if not t1 or not t2: return acc
    if t1[0] == t2[0]:
        return lcs(t1[1:], t2[1:], acc + t1[0])
    p1 = lcs(t1, t2[1:], acc)
    p2 = lcs(t1[1:], t2, acc)
    return p1 if len(p1) > len(p2) else p2
```

### Edit Distance (Levenshtein) — min ops insert/del/replace

```python
from functools import lru_cache

def edit_distance(s1, s2):
    @lru_cache(maxsize=None)
    def dp(i, j):
        if i == 0: return j
        if j == 0: return i
        if s1[i-1] == s2[j-1]: return dp(i-1, j-1)
        return 1 + min(dp(i-1, j), dp(i, j-1), dp(i-1, j-1))
    return dp(len(s1), len(s2))
```

### Wildcard Match (`?`=1 char, `*`=any seq)

```python
def match(pat, text):
    if not pat: return not text
    if pat[0] == '*': return match(pat[1:], text) or (bool(text) and match(pat, text[1:]))
    if not text: return False
    if pat[0] in (text[0], '?'): return match(pat[1:], text[1:])
    return False
```

### RLE (Run-Length Encoding)

```python
# Group consecutive identical elements → [(key, count), ...]
# Only `bucket` changes per problem (e.g. parity, char-type, vowel/cons)

# Iterative
def rle(seq, bucket=lambda x: x):
    out = []
    for x in seq:
        key = bucket(x)
        if out and out[-1][0] == key:
            out[-1] = (key, out[-1][1] + 1)   # tuple immutable → replace
        else:
            out.append((key, 1))
    return out

# Recursive
def rle_rec(seq):
    if not seq: return ()
    rest = rle_rec(seq[1:])
    if rest and rest[0][0] == seq[0]:
        return ((seq[0], rest[0][1] + 1),) + rest[1:]
    return ((seq[0], 1),) + rest
```

### Two-Pointer Merge (sorted lists, O(M+N))

```python
def merge(l1, l2):
    p1 = p2 = 0; out = []
    while p1 < len(l1) and p2 < len(l2):
        if l1[p1] <= l2[p2]: out.append(l1[p1]); p1 += 1
        else: out.append(l2[p2]); p2 += 1
    return out + l1[p1:] + l2[p2:]
```

### Dense Ranking (1-2-2-3)

```python
# Same score = same rank. Next different score = rank+1 (no skip).
def dense_rank(rows, key=lambda x: (-x[1], -x[2], -x[3], x[0])):
    s = sorted(rows, key=key)
    rank = 1; out = [(rank, *s[0])]
    for i in range(1, len(s)):
        if s[i][1:] != s[i-1][1:]: rank += 1
        out.append((rank, *s[i]))
    return out
```

### Sliding Window (running sum, O(n))

```python
def sma(prices, w):
    s = sum(prices[:w]); out = [None]*(w-1) + [s/w]
    for i in range(w, len(prices)):
        s += prices[i] - prices[i-w]; out.append(s/w)
    return out
```

### 2D Grid

```python
# Setup: smallest N s.t. N*N >= len(s)
N = 1
while N * N < len(s): N += 1
grid = [[" "] * N for _ in range(N)]

# Zigzag (odd rows reversed)
row, col = i // N, i % N
if row % 2 == 1: col = N - col - 1

# Column fill right-to-left
for col_offset in range(N):
    for row in range(N):
        grid[row][N - col_offset - 1] = s[p]; p += 1
        if p >= len(s): break
```

---

## Formulas

```python
import math

# Weighted average (e.g. GPA)
sum(v * w for v, w in data) / sum(w for _, w in data)

# Trimmed mean — drop highest + lowest
(sum(scores) - max(scores) - min(scores)) / (len(scores) - 2)

# Euclidean distance (straight line)
math.sqrt(sum((a - b) ** 2 for a, b in zip(p1, p2)))

# Manhattan distance (grid, no diagonals)
sum(abs(a - b) for a, b in zip(p1, p2))

# Prime check — trial division up to sqrt(n)
def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True

math.gcd(a, b)                     # built-in GCD

# Newton's sqrt — stop when guess stabilises
x_next = (x_prev + n / x_prev) / 2
# converge: abs(x_next - x_prev) < tol

math.ceil(total * pct / 100)       # "top X% rounded up" — never round()
day = i % 7                         # circular indexing (wraparound)

# Diagonal detection (same sum / same diff)
same_pos_diag = (r1 + c1) == (r2 + c2)
same_neg_diag = (r1 - c1) == (r2 - c2)

# 90° rotation — perpendicular of (dx, dy) is (-dy, dx) or (dy, -dx)
dx, dy = x2 - x1, y2 - y1
c1, d1 = (x2 - dy, y2 + dx), (x1 - dy, y1 + dx)   # CCW
c2, d2 = (x2 + dy, y2 - dx), (x1 + dy, y1 - dx)   # CW

# Distance between 2D points (no math import needed)
dist = ((x1 - x2)**2 + (y1 - y2)**2) ** 0.5
# compare with tolerance: abs(dist - target) < 1e-9
```

---

## Common Pitfalls

```python
round(2.5)              # → 2 (banker's!); use math.ceil() to round up
"".split(" ")           # → [""]   ⚠️ NOT []
"".split()              # → []
[[0]] * 3               # ⚠️ all rows = same list; fix: [[0] for _ in range(3)]
for n in nums: nums.remove(n)   # ⚠️ skips; fix: nums = [n for n in nums if ...]
m = map(fn, lst); list(m); list(m)   # 2nd → []; wrap list() immediately
sorted(lst)             # NEW list
lst.sort()              # in-place, returns None
def f(x, target=[]):    # ⚠️ shared across calls; fix: target=None then if target is None: target=[]
y = x; y += [6]         # mutates x! safe: y = y + [6]
a[:]                    # outer new, inner shared; deep: [row[:] for row in a]
(1,)                    # tuple    (1) → int
n % 10                  # LAST digit (extract)
n // 10                 # REST of n (shrink)  ← recursive call MUST use //, not %
out[-1][1] += 1         # ⚠️ tuple immutable; fix: out[-1] = (key, count+1)
int(ch) for ch in str(n)   # safe digit iter (handles leading 0)
```

### Pre-Submit

```
□ Edge: [], "", 0, None, single, all-same, negative, boundaries
□ Return type matches spec (list? tuple? int? float?)
□ return X, not print(X)
□ Off-by-one: range(n) vs range(n+1), < vs <=
□ Remove debug prints
□ Didn't shadow: list, dict, sum, max, min, type
□ Imports at top
□ Fn signature matches spec
```

---

## Regex

```python
import re

# findall — all matches as list. With groups () → only group content
re.findall(r'\d+', "age 25, score 99")        # ['25', '99']
re.findall(r'(\d+)-(\d+)', "12-34 56-78")     # [('12','34'), ('56','78')]

# search — first match anywhere. Returns match obj or None — ALWAYS check
m = re.search(r'(\d+)-(\d+)', "call 123-456")
if m:
    m.group(0)   # '123-456'  full match
    m.group(1)   # '123'      first group

# sub / split
re.sub(r'\d+', 'X', "abc123def456")           # 'abcXdefX'
re.split(r'[,;\s]+', "a, b;c  d")             # ['a','b','c','d']

# Greedy vs non-greedy
re.findall(r'<.+>',  '<a><b>')                # ['<a><b>']      greedy
re.findall(r'<.+?>', '<a><b>')                # ['<a>','<b>']   non-greedy
```

**Pattern cheat:**

| Pattern | Meaning |
|---------|---------|
| `\d` / `\D` | digit / non-digit |
| `\w` / `\W` | word char `[a-zA-Z0-9_]` / non-word |
| `\s` / `\S` | whitespace / non-whitespace |
| `\b` | word boundary |
| `.` | any char except `\n` |
| `+` / `*` / `?` | 1+ / 0+ / 0 or 1 |
| `{n}` / `{n,m}` | exactly n / n to m |
| `^` / `$` | start / end of string |
| `(...)` | capture group |
| `(?=...)` | lookahead (match without consuming) |

---

<div style="page-break-before: always"></div>

## Mock Test Solutions

### MT1 — Char Type Map (Recursive)

```python
def f(s):
    if not s: return ""
    c = s[0]
    if c.lower() in "aeiou": pre = "V"
    elif c.isalpha(): pre = "C"
    else: pre = "-"
    return pre + f(s[1:])
```

### MT2 — DNA Grouping (Recursive RLE)

```python
def group_bases(dna):
    if not dna: return ()
    rest = group_bases(dna[1:])
    if rest and rest[0][0] == dna[0]:
        return ((dna[0], rest[0][1] + 1),) + rest[1:]
    return ((dna[0], 1),) + rest
```

### MT3 — Zigzag Grid

```python
def zigzag_fill(s):
    if not s: return [[]]
    N = 1
    while N * N < len(s): N += 1
    grid = [[" "] * N for _ in range(N)]
    for i in range(len(s)):
        row, col = i // N, i % N
        if row % 2 == 1: col = N - col - 1
        grid[row][col] = s[i]
    return grid
```

### MT4 — Avg Rating (Functional)

```python
from functools import reduce
def avg_rating(votes):
    valid = list(filter(lambda x: x[1] != "NA", votes))
    def collect(acc, item):
        acc.setdefault(item[0], {"t": 0, "c": 0})
        acc[item[0]]["t"] += item[1]; acc[item[0]]["c"] += 1
        return acc
    temp = reduce(collect, valid, {})
    return {k: v["t"]/v["c"] for k, v in temp.items()}
```

### MT5 — Library Fines (OOP + Polymorphism)

```python
class MemberCard:
    def __init__(self, mid):
        self.member_id = mid; self.balance = 0.0
    def top_up(self, amt): self.balance += amt; return self.balance
    def fine_for(self, loan): return loan.days_overdue * 0.5
    def pay_fine(self, loan):
        fine = self.fine_for(loan)
        if self.balance >= fine: self.balance -= fine
        else: raise ValueError("insufficient")
        return fine
    def __str__(self): return f"MemberCard({self.member_id}): balance=${self.balance:.2f}"

class StudentMemberCard(MemberCard):
    def fine_for(self, loan): return super().fine_for(loan) * 0.5
    def __str__(self): return f"StudentMemberCard({self.member_id}): balance=${self.balance:.2f}"
```

### MT6 — BankAccount (@property)

```python
class BankAccount:
    def __init__(self, owner):
        self._owner = owner; self._balance = 0.0; self._pin = "0000"
    @property
    def owner(self): return self._owner
    @property
    def balance(self): return self._balance
    @property
    def deposit(self): raise AttributeError
    @deposit.setter
    def deposit(self, q): self._balance += q
    @property
    def pin(self): raise AttributeError
    @pin.setter
    def pin(self, q): self._pin = q
```

### MT7 — Column Grid R→L

```python
def col_fill_rtl(s):
    if not s: return [[]]
    N = 1
    while N * N < len(s): N += 1
    grid = [["?"] * N for _ in range(N)]
    p = 0
    for i in range(N):
        for j in range(N):
            grid[j][N - i - 1] = s[p]; p += 1
            if p >= len(s): return grid
    return grid
```

### MT8 — High/Low Rating (Functional)

**Approach 1: named function (clean, O(n), recommended)**

```python
from functools import reduce
def high_low(records):
    valid = list(filter(lambda x: type(x[1]) == int, records))
    def collect(acc, item):
        k = item[0]
        prev = acc.get(k, (float("inf"), float("-inf")))
        acc[k] = (min(prev[0], item[1]), max(prev[1], item[1]))
        return acc
    return reduce(collect, valid, {})
```

**Approach 2: pure lambda (one-liner flex, O(n²) — new dict each step)**

```python
from functools import reduce
def high_low(records):
    valid = list(filter(lambda x: type(x[1]) == int, records))
    return reduce(lambda acc, item: {**acc, item[0]: (
        min(acc.get(item[0], (float("inf"), float("-inf")))[0], item[1]),
        max(acc.get(item[0], (float("inf"), float("-inf")))[1], item[1]),
    )}, valid, {})
```

### MT9 — Digit Parity RLE

```python
# Iterative
def encode_parity(n):
    out = []
    for ch in str(n):
        t = "E" if int(ch) % 2 == 0 else "O"
        if out and t == out[-1][0]:
            out[-1] = (t, out[-1][1] + 1)
        else:
            out.append((t, 1))
    return out

# Recursive
def encode_parity_rec(n):
    char = "E" if (n % 10) % 2 == 0 else "O"
    if n < 10: return [(char, 1)]
    rest = encode_parity_rec(n // 10)
    if rest[-1][0] == char:
        return rest[:-1] + [(char, rest[-1][1] + 1)]
    return rest + [(char, 1)]
```

### MT10 — Pair-wise Squared Difference (NumPy, No Loops)

```python
# Find (i, j) such that (arr[i] - arr[j])**2 is minimal, i < j.
# No loops allowed. Live-taught Apr 18.
import numpy as np

def min_sqdiff_pair(arr):
    A = np.array(arr)
    D = (A[:, None] - A) ** 2          # NxN matrix, D[i,j] = (A[i]-A[j])²
    np.fill_diagonal(D, D.max())       # poison diagonal (self-self = 0)
    flat = D.argmin()                  # flat index of minimum
    return np.unravel_index(flat, D.shape)   # (i, j) tuple

# Test: min_sqdiff_pair([1, 4, 7, 10]) → (0, 1) | (1, 2) | (2, 3)
```

**Variant — farthest pair (max abs-diff):**

```python
def farthest_pair(arr):
    A = np.array(arr)
    M = np.abs(A[:, None] - A)         # Manhattan distance matrix
    flat = M.argmax()                  # NO fill_diagonal needed (diag = 0 already minimal)
    return np.unravel_index(flat, M.shape)

# Test: farthest_pair([3, 7, 1, 10]) → (2, 3) | (3, 2)
```
