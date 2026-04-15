---
title: "TCX1002 | Python Practical Exam Cheatsheet"
slug: "nus-bit-tcx1002-pe-cheatsheet"
date: 2026-04-15
description: "Personal Python cheatsheet for NUS TCX1002 Practical Exam — all topics, unlimited pages"
tags: ["nus", "python", "cheatsheet", "tcx1002", "pe"]
categories: ["Education", "Programming"]
toc: true
math: false
draft: false
---

## Quick Reference

### OOP — Class + Inheritance + Polymorphism

```python
class Parent:
    def __init__(self, name):
        self.name = name
    def method(self): return "base"
    def __str__(self): return f"Parent({self.name})"
    def __repr__(self): return f"Parent('{self.name}')"

class Child(Parent):
    def __init__(self, name, extra):
        super().__init__(name)
        self.extra = extra
    def method(self): return "override"  # polymorphism
    def __str__(self): return f"Child({self.name})"
```

### OOP — @property (Read-Only / Write-Only)

```python
class X:
    def __init__(self):
        self._val = 0

    @property                        # READ-ONLY
    def val(self): return self._val

    @property                        # WRITE-ONLY (getter raises)
    def deposit(self): raise AttributeError
    @deposit.setter
    def deposit(self, amt): self._val += amt
```

### filter / reduce

**filter:** keep items where fn returns True. **reduce:** fold list into one value.

```python
from functools import reduce

valid = list(filter(lambda x: x[1] != "NA", data))

total = reduce(lambda acc, x: acc + x, [1,2,3], 0)  # 6
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

### @lru_cache (Memoization)

**Turn exponential recursion into O(n).** Args must be hashable (no lists — use tuples).

```python
from functools import lru_cache
@lru_cache(maxsize=None)
def fn(n): ...
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

### for-else

**`else` runs only if loop finishes WITHOUT `break`.** Useful for "search and fail" patterns.

```python
for item in lst:
    if item == target:
        print("found")
        break
else:
    print("not found")  # only runs if no break
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

---

## Algorithms

### Greedy vs Backtracking

**"Can my local choice block someone downstream?"**
No → Greedy (O(N)). Yes → Backtracking (O(P^N)).

### Backtracking — Wishful Thinking

**Template:** choose → recurse → undo. Assume the rest works (wishful thinking). If it didn't, undo and try next.

```python
def backtrack(remaining, state):
    if not remaining:
        return state

    curr = remaining[0]
    for option in get_options(curr):
        if not is_valid(option, state): continue
        apply(option, state)             # CHOOSE
        result = backtrack(remaining[1:], state)
        if result is not None:           # wish granted
            return result
        undo(option, state)              # UNDO
    return None                          # all failed
```

**Concrete example — student scheduling:**

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
            cls[pref] += 1; res[pref].pop()
        return None
    return bt(students, classes.copy(), {})
```

### LCS (Longest Common Subsequence)

**Find longest sequence present in both strings in same order.** Exponential without memo.

```python
def lcs(t1, t2, acc=""):
    if not t1 or not t2: return acc
    if t1[0] == t2[0]:
        return lcs(t1[1:], t2[1:], acc + t1[0])
    p1 = lcs(t1, t2[1:], acc)
    p2 = lcs(t1[1:], t2, acc)
    return p1 if len(p1) > len(p2) else p2
```

### Edit Distance (Levenshtein)

**Min operations (insert/delete/replace) to turn s1 into s2.** Use @lru_cache.

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

### Wildcard Match

**`?` = one char, `*` = any sequence (including empty).**

```python
def match(pat, text):
    if not pat and not text: return True
    if not pat: return False
    if pat[0] == '*':
        return match(pat[1:], text) or (bool(text) and match(pat, text[1:]))
    if not text: return False
    if pat[0] == '?' or pat[0] == text[0]:
        return match(pat[1:], text[1:])
    return False
```

### RLE (Run-Length Encoding)

**Group consecutive identical elements into (key, count) pairs.** Only the bucket function changes per problem.

```python
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

### Two-Pointer Merge

**Merge two sorted lists in O(M+N) without re-sorting.**

```python
def merge(l1, l2, comp=lambda x, y: x - y):
    p1 = p2 = 0; out = []
    while p1 < len(l1) and p2 < len(l2):
        if comp(l1[p1], l2[p2]) <= 0:
            out.append(l1[p1]); p1 += 1
        else:
            out.append(l2[p2]); p2 += 1
    out.extend(l1[p1:]); out.extend(l2[p2:])
    return out
```

### Dense Ranking (1-2-2-3)

**Same score = same rank. Next different score = rank + 1 (no skip).**

```python
def dense_rank(rows, key=lambda x: (-x[1], -x[2], -x[3], x[0])):
    s = sorted(rows, key=key)
    rank = 1; out = [(rank, *s[0])]
    for i in range(1, len(s)):
        if s[i][1:] != s[i-1][1:]: rank += 1
        out.append((rank, *s[i]))
    return out
```

### Sliding Window (Moving Average)

**O(n) with running sum: add new element, subtract oldest.**

```python
def sma(prices, w):
    out = [None] * (w - 1)
    s = sum(prices[:w])
    out.append(s / w)
    for i in range(w, len(prices)):
        s += prices[i] - prices[i - w]
        out.append(s / w)
    return out
```

### 2D Grid

**Setup:** find smallest N where N*N >= len(s), create grid.

```python
N = 1
while N * N < len(s): N += 1
grid = [[" "] * N for _ in range(N)]
```

**Zigzag** (odd rows reversed):

```python
row, col = i // N, i % N
if row % 2 == 1: col = N - col - 1
```

**Column fill right-to-left:**

```python
for col_offset in range(N):
    for row in range(N):
        grid[row][N - col_offset - 1] = s[p]; p += 1
        if p >= len(s): break
```

---

## Formulas

**Weighted average:** sum(value x weight) / sum(weights). E.g. GPA.

```python
sum(v * w for v, w in data) / sum(w for _, w in data)
```

**Trimmed mean:** drop outliers then average. E.g. drop highest + lowest judge score.

```python
(sum(scores) - max(scores) - min(scores)) / (len(scores) - 2)
```

**Euclidean distance:** straight-line between two points.

```python
math.sqrt(sum((a - b) ** 2 for a, b in zip(p1, p2)))
```

**Manhattan distance:** grid-walking distance (no diagonals).

```python
sum(abs(a - b) for a, b in zip(p1, p2))
```

**Prime check:** trial division up to sqrt(n).

```python
def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True
```

**GCD:** built-in.

```python
math.gcd(a, b)
```

**Newton's method (sqrt):** stop when guess stops changing.

```python
x_next = (x_prev + n / x_prev) / 2
# converge when: abs(x_next - x_prev) < tol
```

**"Top X% rounded up":** ceil, never round.

```python
top_k = math.ceil(total * percentage / 100)
```

**Circular indexing:** wraparound.

```python
day = i % 7
```

**Diagonal detection:** same diagonal = same sum or same difference.

```python
same_pos_diag = (r1 + c1) == (r2 + c2)
same_neg_diag = (r1 - c1) == (r2 - c2)
```

**90° rotation:** given vector `(dx, dy)`, the perpendicular is `(-dy, dx)` or `(dy, -dx)`. Use to find square corners from one edge.

```python
dx, dy = x2 - x1, y2 - y1
c1, d1 = (x2 - dy, y2 + dx), (x1 - dy, y1 + dx)  # counterclockwise
c2, d2 = (x2 + dy, y2 - dx), (x1 + dy, y1 - dx)  # clockwise
```

**Distance between two points:**

```python
dist = ((x1 - x2)**2 + (y1 - y2)**2) ** 0.5
# compare with tolerance: abs(dist - target) < 1e-9
```

---

## Common Pitfalls

**Banker's rounding:** `round(2.5)` = 2, not 3. Use `math.ceil()` for "round up".

**split gotcha:** `"".split(" ")` = `[""]`. `"".split()` = `[]`.

**Shared reference:** `[[0]] * 3` — all rows are same list. Fix: `[[0] for _ in range(3)]`.

**Mutation during iteration:** `for n in nums: nums.remove(n)` skips elements. Fix: list comp.

**One-shot iterators:** `list(map(...))` second time = `[]`. Wrap in `list()` immediately.

**sorted vs sort:** `sorted(lst)` = new list. `lst.sort()` = None (in-place).

**Mutable default:** `def f(x, target=[])` — shared across calls. Fix: `target=None`.

**+= on alias:** `y = x; y += [6]` mutates x too. `y = y + [6]` is safe.

**Shallow copy:** `a[:]` — outer new, inner shared. Fix: `[row[:] for row in a]`.

**Single-element tuple:** `(1,)` is tuple. `(1)` is just int.

**str(n) for digits:** left-to-right, handles 0. `n%10` loop reverses + misses 0. Also: `ch` is string — `int(ch)` before math.

**Tuple immutable:** `out[-1][1] += 1` crashes. Fix: `out[-1] = (key, count+1)`.

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
```

**findall:** all matches as list of strings. With groups `()`, returns only group content.

```python
re.findall(r'\d+', "age 25, score 99")          # ['25', '99']
re.findall(r'(\d+)-(\d+)', "12-34 56-78")       # [('12','34'), ('56','78')]
```

**search:** first match anywhere. Returns match object or None — always check before `.group()`.

```python
m = re.search(r'(\d+)-(\d+)', "call 123-456")
if m:
    m.group(0)  # '123-456' (full match)
    m.group(1)  # '123' (first group)
```

**sub / split:**

```python
re.sub(r'\d+', 'X', "abc123def456")         # 'abcXdefX'
re.split(r'[,;\s]+', "a, b;c  d")           # ['a','b','c','d']
```

**Greedy vs non-greedy:**

```python
re.findall(r'<.+>', '<a><b>')     # ['<a><b>']    greedy
re.findall(r'<.+?>', '<a><b>')    # ['<a>','<b>'] non-greedy
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
