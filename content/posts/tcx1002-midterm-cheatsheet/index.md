---
title: "TCX1002 | Python Midterm Cheatsheet (Weeks 1-4)"
slug: "nus-bit-tcx1002-midterm-cheatsheet"
date: 2026-02-12
description: "Comprehensive Python reference for NUS TCX1002 midterm: built-ins, data structures, numpy, regex, functools, itertools, patterns, traps"
tags: ["nus", "python", "cheatsheet", "tcx1002", "midterm"]
categories: ["Education", "Programming"]
toc: true
math: false
draft: false
sticky: 1002
---

## 0. Exam Environment

| Item | Detail |
|------|--------|
| Date | **Sat 14 Feb, 10:30am – 12:30pm** |
| Venue | **LT19** (COM2 Level 1) |
| Format | **4 questions, 5 marks each**, 2 hours |
| Environment | SEB (no internet, no syntax help, can run code) |
| Test cases | **Public visible, private hidden** |
| Hardcopy | **Allowed (unlimited)** |
| Seat | 71 |

### Allowed Modules

```python
import datetime
import functools    # reduce, partial, lru_cache
import itertools    # combinations, permutations, chain, product
import math         # ceil, floor, sqrt, log, gcd
import numpy as np  # full numpy
import random       # randint, choice, shuffle
import re           # findall, match, search, sub
```

> **`from collections import ...` is NOT ALLOWED!**
> No defaultdict, Counter, deque, namedtuple.

### defaultdict Replacements

```python
# ❌ BANNED: defaultdict(int)
counts[key] += 1  # KeyError if key doesn't exist

# ✅ Regular dict counting
counts[key] = counts.get(key, 0) + 1

# ❌ BANNED: defaultdict(list)
groups[key].append(val)

# ✅ setdefault
groups.setdefault(key, []).append(val)

# ❌ BANNED: defaultdict(set)
groups[key].add(val)

# ✅ setdefault with set
groups.setdefault(key, set()).add(val)
```

---

## 1. Built-in Functions

| Function | What It Does | Example |
|----------|-------------|---------|
| `len(x)` | Length | `len([1,2,3])` → 3 |
| `sum(x)` | Sum | `sum([1,2,3])` → 6 |
| `min(x)` / `max(x)` | Min/max | `max([3,1,2])` → 3 |
| `abs(x)` | Absolute value | `abs(-5)` → 5 |
| `round(x, n)` | Round to n decimals | `round(3.14, 1)` → 3.1 |
| `range(a,b,s)` | Integer sequence | `list(range(0,10,2))` → [0,2,4,6,8] |
| `enumerate(x, start)` | Index + value | `list(enumerate('ab',1))` → [(1,'a'),(2,'b')] |
| `zip(a, b)` | Pair up elements | `list(zip([1,2],['a','b']))` → [(1,'a'),(2,'b')] |
| `sorted(x, key=, reverse=)` | New sorted list | `sorted([3,1,2])` → [1,2,3] |
| `any(x)` / `all(x)` | Any/all truthy | `any([0,1,0])` → True |
| `isinstance(x, type)` | Type check | `isinstance(5, int)` → True |
| `map(fn, iter)` | Apply fn to each | `list(map(str, [1,2]))` → ['1','2'] |
| `filter(fn, iter)` | Keep if fn true | `list(filter(lambda x:x>0, [-1,2]))` → [2] |

> **TRAP:** `round()` uses **banker's rounding** (nearest even). `round(2.5)` → 2! Use `math.ceil()` for "always round up".

> **TRAP:** `map(fn, iter)` has **NO `key=`** parameter. That's `sorted()`. Don't mix them up.

---

## 2. String Methods

| Method | What | Example |
|--------|------|---------|
| `s.lower()` / `s.upper()` | Case conversion | `"Hi".lower()` → `"hi"` |
| `s.strip()` | Remove whitespace | `" hi ".strip()` → `"hi"` |
| `s.split(sep)` | Split to list | `"a,b".split(",")` → `['a','b']` |
| `sep.join(lst)` | Join list to string | `",".join(['a','b'])` → `"a,b"` |
| `s.replace(old, new)` | Replace substring | `"hello".replace("l","r")` → `"herro"` |
| `s.find(sub)` | Index or -1 | `"hello".find("ll")` → 2 |
| `s.startswith(p)` / `s.endswith(p)` | Prefix/suffix check | `"hello".startswith("he")` → True |
| `s.isdigit()` / `s.isalpha()` | All digits/letters? | `"123".isdigit()` → True |
| `s.count(sub)` | Count occurrences | `"hello".count("l")` → 2 |
| `ord(c)` / `chr(n)` | Char ↔ ASCII | `ord('A')` → 65, `chr(65)` → 'A' |
| `f"{x:.2f}"` | Format float | `f"{3.14159:.2f}"` → `"3.14"` |

**String is IMMUTABLE** — methods return new strings, never modify in place.

**Empty string edge case:** `"".split(" ")` → `[""]` (NOT `[]`!)

---

## 3. List Methods

| Method | What | In-Place? | Returns |
|--------|------|-----------|---------|
| `lst.append(x)` | Add to end | Yes | None |
| `lst.extend(iter)` | Add all items | Yes | None |
| `lst.insert(i, x)` | Insert at index | Yes | None |
| `lst.pop(i)` | Remove & return at i | Yes | The item |
| `lst.remove(x)` | Remove first x | Yes | None |
| `lst.sort(key=, reverse=)` | Sort in place | Yes | **None** |
| `lst.reverse()` | Reverse in place | Yes | **None** |
| `lst.index(x)` | Find index of x | No | int |
| `lst.count(x)` | Count occurrences | No | int |
| `lst.copy()` or `lst[:]` | Shallow copy | No | New list |

> **`sorted()` vs `.sort()`**: "sort**ED** = n**E**w **D**ata" — `sorted()` returns new list, `.sort()` modifies in place and returns None.

---

## 4. Dictionary Methods

| Method | What | Example |
|--------|------|---------|
| `d[key]` | Get value (**KeyError** if missing) | `d['name']` |
| `d.get(key, default)` | Get or default (no error) | `d.get('age', 0)` |
| `d.setdefault(key, default)` | Get or set+return default | `d.setdefault('age', 0)` |
| `d.keys()` / `d.values()` | All keys / values | `list(d.keys())` |
| `d.items()` | (key, value) pairs | `for k, v in d.items()` |
| `d.update(other)` | Merge other dict | `d.update({'a': 1})` |
| `d.pop(key)` | Remove & return value | `d.pop('name')` |
| `key in d` | Key exists? | `'name' in d` |

### Dict Counting Pattern (No collections!)

```python
counts = {}
for item in items:
    counts[item] = counts.get(item, 0) + 1
```

### Dict Grouping Pattern (No defaultdict!)

```python
groups = {}
for item in items:
    key = item[0]  # or whatever grouping logic
    groups.setdefault(key, []).append(item)
```

---

## 5. Set Operations

| Operation | Operator | Method | Result |
|-----------|----------|--------|--------|
| Intersection | `a & b` | `a.intersection(b)` | In BOTH |
| Union | `a \| b` | `a.union(b)` | In EITHER |
| Difference | `a - b` | `a.difference(b)` | In a, NOT in b |
| Symmetric Diff | `a ^ b` | `a.symmetric_difference(b)` | In ONE, not both |
| Subset | `a <= b` | `a.issubset(b)` | All of a in b? |
| Superset | `a >= b` | `a.issuperset(b)` | All of b in a? |

```python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
a & b   # {3, 4}             — common
a | b   # {1, 2, 3, 4, 5, 6} — all
a - b   # {1, 2}             — only in a
a ^ b   # {1, 2, 5, 6}       — not shared
```

**Set from list:** `set([1,2,2,3])` → `{1, 2, 3}` (deduplicates)

**frozenset:** Immutable set, can be dict key. `frozenset({1, 2})`

---

## 6. Lambda + Sorting Patterns

```python
# Lambda = anonymous function
lambda x: x[1]           # get index 1
lambda x: -x[1]          # sort descending
lambda x: (x[0], -x[1])  # multi-key: first asc, second desc

# ⚠️ sorted uses key=, map does NOT
sorted(data, key=lambda x: -x[1])    # ✅
map(lambda x: x**2, data)            # ✅ NO key=
```

### Dense Ranking (1-2-2-3)

```python
sorted_rows = sorted(rows, key=lambda x: (-x[1], -x[2], x[0]))
rank, prev = 1, None
result = []
for row in sorted_rows:
    curr = (row[1], row[2])
    if prev is not None and prev != curr:
        rank += 1
    result.append((rank, *row))
    prev = curr
```

---

## 7. Iteration Patterns

### enumerate — index + value

```python
for i, val in enumerate(lst):          # i=0,1,2...
for i, val in enumerate(lst, start=1): # i=1,2,3...
```

### zip — pair up lists

```python
for a, b in zip(list1, list2):    # stops at SHORTER list
    print(a, b)

# Unzip:
pairs = [(1,'a'), (2,'b')]
nums, letters = zip(*pairs)  # (1,2), ('a','b')

# Element-wise sum:
[x + y for x, y in zip(a, b)]
```

### Comprehensions

```python
# List
[x**2 for x in range(5)]                    # [0, 1, 4, 9, 16]
[x for x in data if x > 0]                  # filter
[x**2 for x in data if x % 2 == 0]          # filter + transform

# Dict
{k: v for k, v in pairs}
{word: len(word) for word in words}

# Set
{x for x in data if x > 0}

# Nested (2D matrix)
[[i*3+j for j in range(3)] for i in range(3)]
```

### Functional (map/filter — no loops)

```python
filter(lambda x: abs(x) > threshold, changes)  # keep matching
map(lambda x: x**2, values)                     # transform each
sum(map(lambda x: x**2, filter(lambda x: x > 0, data)))  # chain

# ⚠️ map() and filter() return iterators, wrap in list() to see contents
list(map(lambda x: x*2, [1,2,3]))  # [2, 4, 6]
```

---

## 8. functools Module

```python
from functools import reduce
```

### reduce — fold list to single value

```python
from functools import reduce

# Sum (same as sum())
reduce(lambda acc, x: acc + x, [1, 2, 3, 4])  # 10

# Product
reduce(lambda acc, x: acc * x, [1, 2, 3, 4])  # 24

# Max (same as max())
reduce(lambda acc, x: acc if acc > x else x, [3, 1, 4, 1, 5])  # 5

# With initial value
reduce(lambda acc, x: acc + x, [1, 2, 3], 100)  # 106
```

> **How reduce works:** `reduce(fn, [a, b, c, d])` = `fn(fn(fn(a, b), c), d)` — left fold.

### Other functools

```python
from functools import partial, lru_cache

# partial — pre-fill some arguments
add10 = partial(lambda x, y: x + y, 10)
add10(5)  # 15

# lru_cache — memoization (cache results)
@lru_cache(maxsize=None)
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)
```

---

## 9. itertools Module

```python
import itertools
```

### Most Useful Functions

```python
from itertools import combinations, permutations, chain, product, accumulate

# combinations — choose k from n (order doesn't matter)
list(combinations([1,2,3], 2))
# [(1,2), (1,3), (2,3)]

# permutations — arrange k from n (order matters)
list(permutations([1,2,3], 2))
# [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]

# chain — flatten multiple iterables into one
list(chain([1,2], [3,4], [5]))
# [1, 2, 3, 4, 5]

# product — cartesian product (all combinations)
list(product([1,2], ['a','b']))
# [(1,'a'), (1,'b'), (2,'a'), (2,'b')]

# accumulate — running totals (like prefix sum)
list(accumulate([1, 2, 3, 4]))
# [1, 3, 6, 10]

# accumulate with custom function
list(accumulate([3, 1, 4, 1, 5], max))
# [3, 3, 4, 4, 5]  — running max!
```

### Quick Reference Table

| Function | What | Ordered? | Example |
|----------|------|----------|---------|
| `combinations(iter, k)` | Choose k items | No (sorted) | C(n,k) combos |
| `permutations(iter, k)` | Arrange k items | Yes | P(n,k) arrangements |
| `product(A, B)` | All pairs | Yes | Cartesian product |
| `chain(A, B)` | Concat iterables | N/A | Flatten |
| `accumulate(iter, fn)` | Running fold | N/A | Prefix sum/max |

---

## 10. Common Coding Patterns

### Two-Pointer Merge

```python
def merge(l1, l2, comp=lambda x, y: x - y):
    i, j, out = 0, 0, []
    while i < len(l1) and j < len(l2):
        if comp(l1[i], l2[j]) <= 0:
            out.append(l1[i]); i += 1
        else:
            out.append(l2[j]); j += 1
    out.extend(l1[i:])
    out.extend(l2[j:])
    return out
```

### Sliding Window

```python
L, R = 0, window - 1
while R < len(data):
    window_slice = data[L:R+1]
    # process window
    L += 1; R += 1
```

### Track-Seen (Find Duplicates)

```python
seen = set()
added = set()
duplicates = []
for x in lst:
    if x in seen:
        if x not in added:
            duplicates.append(x)
            added.add(x)
    else:
        seen.add(x)
```

### Dict Counting (Word Frequency)

```python
counts = {}
for word in text.lower().split():
    counts[word] = counts.get(word, 0) + 1
```

### Group by Key (No defaultdict!)

```python
groups = {}
for i, (x, y) in enumerate(points):
    groups.setdefault(('row', y), []).append((i, x))
```

---

## 11. NumPy Quick Reference

```python
import numpy as np
```

### Array Creation

```python
np.array([1, 2, 3])              # from list
np.zeros((3, 4))                 # 3x4 of zeros
np.ones((2, 3))                  # 2x3 of ones
np.arange(0, 10, 2)              # [0, 2, 4, 6, 8]
np.linspace(0, 1, 5)             # [0, 0.25, 0.5, 0.75, 1.0]
data.reshape(-1, 4)              # reshape, -1 = auto
```

### Indexing & Slicing

```python
a[1:-1]            # exclude first and last
a[:, np.newaxis]   # add dimension (for broadcasting)
a[np.newaxis, :]   # add dimension at front
a[a > 5]           # boolean indexing (filter)
```

### Broadcasting Pattern (Pairwise Operations)

```python
# Make (n,1,d) and (1,n,d) for pairwise comparison
R = a[:, np.newaxis, :]   # shape (n, 1, d)
C = a[np.newaxis, :, :]   # shape (1, n, d)
diff = R - C               # shape (n, n, d) pairwise differences
```

### Common Operations

```python
np.abs(x)                  # element-wise absolute value
np.square(x)               # element-wise square
np.sqrt(x)                 # element-wise square root
np.sum(x, axis=0)          # sum along axis (0=rows, 1=cols, 2=depth)
np.mean(x, axis=0)         # mean along axis
np.dot(a, b.T)             # matrix multiplication
np.linalg.norm(a, axis=1)  # vector norms (per row)
np.outer(a, b)             # outer product
np.where(condition)        # indices where True
np.argsort(a)              # indices that would sort the array
np.argmax(a)               # index of max value
```

### "For Loop → NumPy" Conversion Patterns

```python
# ❌ For loop (slow)
result = []
for x in data:
    if x > threshold:
        result.append(x ** 2)

# ✅ NumPy (fast, vectorized)
a = np.array(data)
mask = a > threshold
result = a[mask] ** 2

# ❌ For loop (pairwise distances)
for i in range(n):
    for j in range(n):
        dist[i][j] = sum(abs(a[i] - a[j]))

# ✅ NumPy (broadcasting)
diff = a[:, np.newaxis, :] - a[np.newaxis, :, :]
dist = np.sum(np.abs(diff), axis=2)
```

### Distance Matrices

```python
# Setup: a is (n, d) array
R = a[:, np.newaxis, :]
C = a[np.newaxis, :, :]
D = R - C

# Manhattan: sum of |differences|
manhattan = np.sum(np.abs(D), axis=2)

# Euclidean: sqrt(sum of squared differences)
euclidean = np.sqrt(np.sum(np.square(D), axis=2))

# Cosine: 1 - (dot / product of norms)
dot_products = np.dot(a, a.T)
norms = np.linalg.norm(a, axis=1)
cosine_dist = 1 - dot_products / np.outer(norms, norms)
```

### Local Peaks (Vectorized)

```python
x = np.array(values)
lefts  = x[:-2]      # all except last 2
currs  = x[1:-1]     # middle elements
rights = x[2:]       # all except first 2
scale = 1 + threshold
peaks = np.where((currs > lefts * scale) & (currs > rights * scale))[0] + 1
```

---

## 12. Regex Quick Reference

```python
import re
```

### Core Functions

```python
re.findall(pattern, text)    # all matches as list of strings
re.match(pattern, text)      # match at START only → match object or None
re.search(pattern, text)     # first match ANYWHERE → match object or None
re.sub(pattern, repl, text)  # replace all matches

match.group(0)               # full match
match.group(1)               # first capture group (first parentheses)
```

### Pattern Syntax

| Pattern | Meaning | Example |
|---------|---------|---------|
| `.` | Any character (except newline) | `a.c` matches "abc" |
| `[A-Z]` | One uppercase letter | `[A-Z]{3}` = 3 uppercase |
| `[^A-Z]` | NOT uppercase | Negated set |
| `[0-9]` or `\d` | One digit | `\d{4}` = 4 digits |
| `\w` | Word char (letter/digit/_) | `\w+` = one or more word chars |
| `\s` | Whitespace | `\s+` = one or more spaces |
| `{2,3}` | 2 to 3 repetitions | `[A-Z]{2,3}` = 2 or 3 uppercase |
| `+` | 1 or more | `\d+` = one or more digits |
| `*` | 0 or more | `\d*` = zero or more digits |
| `?` | 0 or 1 (optional) | `colou?r` matches "color" and "colour" |
| `^` / `$` | Start / end of string | `^Hello` = starts with Hello |
| `(...)` | Capture group | `(\d+)` captures digits |
| `(?:...)` | Non-capturing group | Group without capturing |
| `(?=...)` | Lookahead | Assert what follows |
| `(?!...)` | Negative lookahead | Assert what does NOT follow |
| `(?<=...)` | Lookbehind | Assert what precedes |
| `(?<!...)` | Negative lookbehind | Assert what does NOT precede |

### Common Patterns

```python
# Extract all numbers
re.findall(r'\d+', "abc 123 def 456")  # ['123', '456']

# Validate email-like pattern
re.match(r'^[\w.]+@[\w.]+\.\w+$', "user@mail.com")

# Split on multiple delimiters
re.split(r'[,;\s]+', "a, b; c d")  # ['a', 'b', 'c', 'd']

# Replace with function
re.sub(r'\d+', lambda m: str(int(m.group()) * 2), "a1b2c3")  # "a2b4c6"

# Overlapping matches (lookahead trick)
re.findall(r'(?=([A-Z]{2}\d+))', text)
```

---

## 13. Python Traps (Common Exam Tricks)

### Mutable Default Arguments

```python
# ❌ TRAP: same list reused across calls
def add(item, lst=[]):
    lst.append(item)
    return lst
add(1)  # [1]
add(2)  # [1, 2]  ← NOT [2]!

# ✅ FIX:
def add(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst
```

### List Aliasing

```python
a = [1, 2, 3]
b = a          # SAME object! b IS a
b.append(4)
print(a)       # [1, 2, 3, 4] ← a changed too!

# FIX: b = a[:] or b = a.copy() or b = list(a)
```

### Negative Indexing

```python
lst = [10, 20, 30]
lst[-1]    # 30 (last element) — NOT an error!
# Always check index BEFORE accessing:
if pointer == -1:
    return None
val = lst[pointer]
```

### Scope

```python
x = 10
def foo():
    x = 5       # local x, global unchanged
foo()
print(x)        # 10

# To modify global: use `global x` inside function
```

### `is` vs `==`

```python
a = [1, 2]
b = [1, 2]
a == b    # True  (same content)
a is b    # False (different objects)
```

### List Multiplication with Mutables

```python
# ❌ TRAP:
matrix = [[]] * 3      # 3 refs to SAME list
matrix[0].append(1)    # ALL change: [[1],[1],[1]]

# ✅ FIX:
matrix = [[] for _ in range(3)]  # 3 SEPARATE lists
```

### Loop Variable Scope Leaking

```python
for i in range(5):
    pass
print(i)  # 4 ← i survives after the loop! (NOT block-scoped)
```

### Mutation During Iteration

```python
# ❌ TRAP: removing while iterating
lst = [1, 2, 3, 4, 5]
for x in lst:
    if x % 2 == 0:
        lst.remove(x)  # Skips elements!

# ✅ FIX: iterate over copy, or use comprehension
lst = [x for x in lst if x % 2 != 0]
```

---

## 14. math Module

```python
import math
```

| Function | What | Example |
|----------|------|---------|
| `math.ceil(x)` | Round UP | `math.ceil(2.1)` → 3 |
| `math.floor(x)` | Round DOWN | `math.floor(2.9)` → 2 |
| `math.sqrt(x)` | Square root | `math.sqrt(16)` → 4.0 |
| `math.log(x)` | Natural log | `math.log(math.e)` → 1.0 |
| `math.log10(x)` | Log base 10 | `math.log10(100)` → 2.0 |
| `math.gcd(a, b)` | Greatest common divisor | `math.gcd(12, 8)` → 4 |
| `math.factorial(n)` | n! | `math.factorial(5)` → 120 |
| `math.pi` | 3.14159... | |
| `math.e` | 2.71828... | |
| `math.inf` | Infinity | Good for initial min/max |

> **No import alternative:** `x ** 0.5` = `math.sqrt(x)`, `float('inf')` = `math.inf`

---

## 15. Exam Strategy

**4 questions, 30 min each:**

1. **Read ALL questions first** (5 min) — rank by difficulty, easiest first
2. **Per question (~25 min):**
   - Read spec carefully (3 min) — underline edge cases, constraints
   - Plan approach (2 min) — what data structure, what pattern
   - Implement (15 min) — happy path first
   - Test & edge cases (5 min) — run public tests, then self-test edges
3. **Reserve last 10 min** — re-read specs, check hidden edge cases

### Edge Cases Checklist (Self-Test!)

Since **private test cases are hidden**, always self-test:

- Empty input (`[]`, `""`, `{}`)
- Single element
- All same / all unique
- Negative numbers / zero
- Already sorted / reverse sorted
- Boundary (first, last element)
- Very large input (will your O(n²) TLE?)

### If Stuck

- Move to next question, come back with fresh eyes
- Write pseudocode comments even if you can't code it (logic credit)
- `print()` debug to understand what's happening

---

## Source

**Session:** [2026-02-12 session notes](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/sessions/2026-02-12/session-notes.md)

**Date learned:** 2026-02-12

**Context:** Midterm prep — coverage matrix analysis, gap drilling, exam environment discovery

### Tutorial Source Code (GitHub)

| Pattern | Source | GitHub |
|---------|--------|--------|
| Dense ranking, lambda sorting | T2Q2 | [q2.py](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/tutorials/2/q2.py) |
| Two-pointer merge | T2Q4 | [q4.py](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/tutorials/2/q4.py) |
| Sliding window, SMA | T2Q8 | [q8.py](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/tutorials/2/q8.py) |
| Set operations, frozenset | T1Q6 | [q6.py](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/tutorials/1/q6.py) |
| Lift controller (state machine) | T1Q1 | [q1.py](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/tutorials/1/q1.py) |
| NumPy peaks (vectorized) | T1Q4 | [q4.py](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/tutorials/1/q4.py) |
| Car plate validation (regex) | T3Q1 | [q1.py](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/tutorials/3/q1.py) |
| Five-in-a-row (grouping) | T3Q2 | [q2.py](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/tutorials/3/q2.py) |
| NumPy distances (broadcasting) | T3Q4 | [q4.py](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/tutorials/3/q4.py) |
| Functional programming (map/filter) | T3Q5 | [q5.py](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/tutorials/3/q5.py) |
| Worker scheduling (greedy) | A1Q1 | [q1.py](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/assignments/1/q1.py) |
| Attendance lookup (datetime) | A1Q2 | [q2.py](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/assignments/1/q2.py) |

### Practice Files

**Local:** `000_mods/TCX1002/midterm_prep/p01-p12`
**GitHub:** [midterm_prep/](https://github.com/enkr1/nus_bit_priv/tree/main/000_mods/TCX1002/midterm_prep)

### Reviews & References

- [T2 REVIEW.md](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/tutorials/2/REVIEW.md) — Patterns, bugs, memory tricks
- [Practice Guide](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1002/tutorials/PRACTICE_GUIDE_INSTRUCTION.md) — 6-phase mastery framework
- [Progress Tracker](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/progress-tracker.md) — TCX1002 section (gaps + mastered)

## Connections

- **Builds on:** [TCX1002 Python Notebook]({{< ref "tcx1002-notebook" >}}) (lecture notes → Hugo migration)
- **Related:** [TCX2101 Calculus Cheatsheet]({{< ref "nus-bit-tcx2101-cheatsheet-1.1-3.4" >}}) (same cheatsheet approach)
- **Extended by:** Post-midterm review (TBD)
- **See also:** [Smart Notes methodology]({{< ref "book-how-to-take-smart-notes" >}})

## Future Blog Posts

**Potential topics:** "Python Exam Prep: What I Wish I Knew Before My First CS Midterm"
**Sources from this note:** collections ban discovery, defaultdict replacement patterns, track-seen pattern
**Related notes:** T2 REVIEW.md (bugs found), practice guide (6-phase framework)

---

*Last updated: 2026-02-12*
