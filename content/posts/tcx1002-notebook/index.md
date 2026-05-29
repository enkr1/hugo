---
title: "TCX1002 | Notebook"
slug: "nus-bit-tcx1002-notebook"
date: 2026-02-10
description: "Exam-ready reference for NUS TCX1002: iteration traps, data structure gotchas, functional patterns, algorithm templates"
tags: ["nus", "python", "programming", "notebook", "tcx1002"]
categories: ["Education", "Programming"]
toc: true
draft: false
---

> **TCX1002 (NUS Python) series:** **Notebook (current)** · [Midterm cheatsheet]({{< ref "tcx1002-midterm-cheatsheet" >}}) · [PE cheatsheet]({{< ref "tcx1002-pe-cheatsheet" >}}) · [Finals helpsheet]({{< ref "tcx1002-finals-helpsheet" >}}) · [Midterm reflection]({{< ref "tcx1002-midterm-reflection" >}})

> NUS TCX1002 exam-focused gotchas & patterns. For general Python notes, see my [Python Notebook]({{< ref "pl-python" >}}).
>
> even this mod is more of the fundamentals, but in case you wanna understand deeper about [complexity and Big-O notation, here you go]({{< ref "big-o-notation" >}}).

```
TCX1002 | Python Notebook
│
├── 1. Iteration Traps
│   ├── Mutation during iteration (pop/remove shifts indices → crash)
│   ├── Loop variable scope leaking (Python ≠ JS/Java block scope)
│   ├── range() locking (for: ONCE at start, while: every iteration)
│   └── Safe patterns (backwards iteration, list comprehension copy)
│
├── 2. Data Structure Gotchas
│   ├── List multiplication mutability ([[]] * 3 = shared refs!)
│   ├── Negative indexing silent bug (tree[-1] returns last, not error)
│   ├── Dict overwrites duplicate keys (use defaultdict)
│   ├── map() returns iterator (not list — must convert)
│   └── round() banker's rounding vs math.ceil()
│
├── 3. Functional Programming
│   ├── Lambda with sorted() (key= required!)
│   ├── map / filter / reduce trio
│   ├── Functional composition (filter→map→sum pipeline)
│   ├── Python 3: no tuple unpack in lambda (PEP 3113)
│   └── for...else pattern ("if not broken")
│
├── 4. Algorithm Patterns
│   ├── Tuple (index, value) sorting pattern
│   ├── Sliding window template (+ O(1) optimization)
│   ├── K-length optimization (group by length)
│   └── Boyer-Moore string search (bad character heuristic)
│
├── 5. Meta-Learning
│   ├── "Tests pass ≠ logic correct" (Q6 convergence)
│   └── "Tweak until green" anti-pattern (Q3 trailing whitespace)
│
└── 6. Memory Tricks (speed reference)
    ├── sorted() vs .sort() ("ED = nEw Data")
    ├── Lambda = "Lazy function"
    └── * = "explode operator"
```

## 1: Iteration Traps

### 1.1 Mutation During Iteration

Modifying a list while iterating over it causes **index shifts** that skip elements or crash.

```python
nums = [1, 2, 3, 4, 5]
for i in range(len(nums)):
    if nums[i] % 2 == 0:
        nums.pop(i)  # IndexError! After pop, list shrinks but range doesn't
```

**Why it crashes — the index shift trace:**

| Step | `i` | List before | Action | List after |
|------|-----|-------------|--------|------------|
| 1 | 0 | `[1, 2, 3, 4, 5]` | 1 is odd, skip | `[1, 2, 3, 4, 5]` |
| 2 | 1 | `[1, 2, 3, 4, 5]` | 2 is even, `pop(1)` | `[1, 3, 4, 5]` |
| 3 | 2 | `[1, 3, 4, 5]` | 4 is even, `pop(2)` | `[1, 3, 5]` |
| 4 | 3 | `[1, 3, 5]` | **IndexError!** len=3, i=3 | 💥 |

After `pop(1)` removes `2`, everything shifts left: `3` slides from index 2 → index 1. But `i` increments to 2 regardless, so it now points at `4` (original index 3) — **`3` was never checked!** Then `pop(2)` shrinks the list again, and when `i=3` the list only has 3 elements (indices 0-2), so `nums[3]` crashes with `IndexError`. The core problem: `range(len(nums))` was locked to 5 at the start, but each `pop()` makes the list shorter.

**Safe alternatives:**

```python
# Option 1: Backwards iteration (indices don't shift for earlier items)
for i in range(len(nums) - 1, -1, -1):
    if nums[i] % 2 == 0:
        nums.pop(i)

# Option 2: List comprehension (creates new list, no mutation)
nums = [x for x in nums if x % 2 != 0]

# Option 3: Copy and iterate
for x in nums[:]:  # [:] makes a copy
    if x % 2 == 0:
        nums.remove(x)
```

---

### 1.2 Loop Variable Scope Leaking

Python loop variables **survive after the loop** — unlike Java/JS block scope.

```python
for x in range(3):
    pass
print(x)  # 2 (NOT an error!)

# Even in list comprehensions (Python 2 leaked, Python 3 doesn't):
result = [i for i in range(5)]
# print(i)  # NameError in Python 3 (list comp has own scope)
# BUT regular for loops still leak!
```

> **Trap:** If you use `x` after a loop, it holds the **last value** from the iteration.

---

### 1.3 range() Evaluation Timing

```python
# FOR loop: range() evaluated ONCE at start
x = [1, 2, 3]
for i in range(len(x)):  # range(3) — locked!
    x.append(99)          # List grows, but range stays 3
# Runs exactly 3 times (not infinite)

# WHILE loop: condition re-evaluated EVERY iteration
x = [1, 2, 3]
i = 0
while i < len(x):         # len(x) re-checked each time!
    x.append(99)           # List grows AND condition updates
    i += 1
# Infinite loop!
```

| Loop Type | When Evaluated | Mutation Effect |
|-----------|---------------|-----------------|
| `for i in range(len(x))` | **Once** at start | Safe from growth |
| `while i < len(x)` | **Every** iteration | Dangerous with mutation |

> **Note:** `N = len(x)` before the loop is just readability — `range(len(x))` is already locked.

---

## 2: Data Structure Gotchas

### 2.1 List Multiplication with Mutables

```python
# SAFE — immutables (each is independent)
zeros = [0] * 5           # [0, 0, 0, 0, 0]
zeros[0] = 1              # [1, 0, 0, 0, 0] ✓

# DANGEROUS — mutables (all share SAME reference!)
matrix = [[]] * 3         # [[], [], []]
matrix[0].append(1)       # [[1], [1], [1]]  ← ALL changed!
# matrix[0] is matrix[1] is matrix[2]  → True

# SAFE alternative
matrix = [[] for _ in range(3)]  # Each [] is a NEW object
matrix[0].append(1)              # [[1], [], []]  ✓
```

> **Rule:** `[mutable] * n` creates `n` references to the **same** object. Use list comprehension for independent copies.

---

### 2.2 Negative Indexing (Silent Bug)

Python doesn't error on negative indices — it wraps around:

```python
tree = [10, 20, 30]
pointer = -1
tree[pointer]  # 30 (last element, NOT an error!)
```

**The trap:** When using `-1` as a sentinel value (like "no child" in BST):

```python
# ❌ Wrong — accesses last element instead of signaling "not found"
(value, left, right) = tree[pointer]  # tree[-1] = last element!

# ✅ Correct — check sentinel BEFORE indexing
if pointer == -1:
    return -1
(value, left, right) = tree[pointer]  # Now safe
```

> **Lesson:** Always validate bounds BEFORE array access when -1 is a sentinel.

---

### 2.3 Dict Overwrites Duplicate Keys

```python
rules = [("a", "X"), ("a", "Y")]
d = {}
for pattern, replacement in rules:
    d[pattern] = replacement  # Last wins!
# d = {"a": "Y"}  ← Lost "X"!
```

When you need **first match wins** (rule precedence), use `defaultdict(list)`:

```python
from collections import defaultdict

grouped = defaultdict(list)
for pattern, replacement in rules:
    grouped[pattern].append((pattern, replacement))

# Now iterate in insertion order:
for match, res in grouped["a"]:
    if match == target:
        return res  # First match wins! ✓
```

> **When:** Rule-based systems, config precedence, any time order matters for duplicate keys.

---

### 2.4 map() Returns Iterator (Not List)

```python
out = map(lambda x: x**2, [1, 2, 3])
out[0]      # ❌ TypeError: 'map' object is not subscriptable
len(out)    # ❌ TypeError: object of type 'map' has no len()
out.sort()  # ❌ AttributeError: 'map' object has no attribute 'sort'
```

**Fix:** Convert or use iterator-accepting functions:

```python
# Convert to list
out = list(map(lambda x: x**2, data))
out.sort()  # Now works!

# Or use sorted() directly (accepts iterators)
out = sorted(map(lambda x: x**2, data))

# These accept iterators natively (no conversion needed):
sum(map(...))     # ✓
any(map(...))     # ✓
all(map(...))     # ✓
```

> **Why iterators?** Memory efficiency — `map()` computes on demand instead of loading everything into memory.

---

### 2.5 round() vs math.ceil()

```python
import math

# round() = nearest integer (banker's rounding!)
round(2.2)   # → 2
round(2.5)   # → 2  ← Surprise! Banker's rounds to nearest EVEN
round(2.6)   # → 3
round(3.5)   # → 4  ← Rounds to nearest even (4, not 3)

# math.ceil() = always rounds UP
math.ceil(2.2)   # → 3
math.ceil(2.5)   # → 3
math.ceil(2.0)   # → 2  (already integer)
```

> **Lesson:** "Round up" in requirements = `math.ceil()`, NOT `round()`. Read carefully!

---

## 3: Functional Programming

### 3.1 Lambda with sorted()

```python
# ❌ Common mistake — missing key=
sorted(data, lambda x: -x[1])       # TypeError!

# ✅ Must use key= keyword
sorted(data, key=lambda x: -x[1])   # Descending by index 1
```

**90% use cases:**

```python
# Sort by specific element
sorted(data, key=lambda x: x[1])

# Sort descending
sorted(nums, key=lambda x: -x)

# Sort by multiple keys (first ascending, second descending)
sorted(data, key=lambda x: (x[0], -x[1]))

# Sort with string comparison
sorted(words, key=lambda x: x.lower())
```

> **Memory trick:** "Lambda = Lazy function" (too lazy to write `def`)

---

### 3.2 map / filter / reduce

```python
from functools import reduce

# filter: keep items matching condition
evens = filter(lambda x: x % 2 == 0, [1, 2, 3, 4])  # → 2, 4

# map: transform each item
squares = map(lambda x: x**2, [1, 2, 3])  # → 1, 4, 9

# reduce: aggregate to single value
total = reduce(lambda a, b: a + b, [1, 2, 3, 4])  # → 10
```

**Python vs JavaScript:**

| Feature | JavaScript | Python |
|---------|-----------|--------|
| Syntax | `array.map(fn)` | `map(fn, array)` |
| Return | Array (eager) | Iterator (lazy) |
| Chaining | `arr.filter().map()` | Nested: `map(fn, filter(fn, arr))` |
| reduce | `arr.reduce(fn, init)` | `reduce(fn, arr, init)` (needs import) |

> **Key:** Python puts function first, data second. Args are **flipped** compared to JS.

---

### 3.3 Functional Composition (filter → map → sum)

```python
# Pipeline: filter → map → aggregate
significant = filter(lambda x: abs(x) > threshold, changes)
squared = map(lambda x: x**2, significant)
result = sum(squared)

# One-liner (read right-to-left, like math):
result = sum(map(lambda x: x**2, filter(lambda x: abs(x) > threshold, changes)))
```

> **Tip:** When readability suffers, use list comprehension instead:
> ```python
> result = sum(x**2 for x in changes if abs(x) > threshold)
> ```

---

### 3.4 Python 3: No Tuple Unpack in Lambda (PEP 3113)

```python
# ❌ Python 2 syntax (doesn't work in Python 3!)
map(lambda (k, v): (k, v**2), dict.items())  # SyntaxError

# ✅ Python 3: use indexing
map(lambda kv: (kv[0], kv[1]**2), dict.items())

# ✅ Or use a named function (clearer for complex logic)
def process(kv):
    k, v = kv  # Unpacking OK in regular functions!
    return (k, v**2)

# ✅ Or list comprehension (built-in unpacking)
[(k, v**2) for k, v in dict.items()]
```

---

### 3.5 for...else Pattern

`else` on a for loop runs **only if the loop completes without `break`**.

```python
# "If not broken" pattern
for item in collection:
    if item == target:
        print("Found!")
        break
else:
    # Only runs if NO break (target not found)
    print("Not found")
```

**Mental model:** Think of `else` as "if exhausted" or "if not broken":

```
for each item:
    if found → break (skip else)
else (if not broken):
    handle not-found case
```

**When to use:**
- Search with fallback ("if not found, do X")
- Validation loops ("if all items pass, proceed")
- Replacing `found = False` flag pattern

---

## 4: Algorithm Patterns

### 4.1 (index, value) Tuple Sorting

**Problem:** Need indices sorted by some computed value.

```python
# Build (index, value) tuples
data = [(3, 1), (4, 1), (5, 1.67), (6, 2), (7, 1.33)]

# Sort by value descending
sorted_data = sorted(data, key=lambda x: -x[1])
# → [(6, 2), (5, 1.67), (7, 1.33), (3, 1), (4, 1)]

# Extract just indices
indices = [i for i, _ in sorted_data]
# → [6, 5, 7, 3, 4]
```

> **Pattern reuse:** Used in Q2 (Olympic ranking), Q8 (Moving Average) — same template, different problems.

---

### 4.2 Sliding Window

```python
# Basic template
L = 0
R = window_size - 1
while R < len(data):
    window = data[L:R+1]  # Process current window
    L += 1
    R += 1

# O(1) optimization: track running sum instead of re-slicing
window_sum = sum(data[:window_size])
for i in range(window_size, len(data)):
    window_sum = window_sum - data[i - window_size] + data[i]
    # O(1) per step instead of O(window_size)
```

---

### 4.3 K-Length Optimization (Group by Pattern Length)

**Naive:** Check all R rules at every position → O(N x R)

**Optimized:** Group by length, check only relevant lengths → O(N x K) where K = unique lengths

```python
from collections import defaultdict

# Pre-process: group patterns by length
by_length = defaultdict(list)
for pattern, replacement in rules:
    by_length[len(pattern)].append((pattern, replacement))

# Search: longest first, only check matching lengths
for i in range(len(text)):
    for length in sorted(by_length.keys(), reverse=True):
        for pattern, replacement in by_length[length]:
            if text[i:i+length] == pattern:
                # Found match!
                break
```

> **When K << R:** Huge speedup. 100 rules but only 5 unique lengths = check 5 groups, not 100 patterns.

---

### 4.4 Boyer-Moore String Search (Bad Character Heuristic)

> **Deep dive:** [Boyer-Moore String Search: Adaptive Substring Matching]({{< ref "algo-boyer-moore-string-search" >}})

Uses **adaptive jumps** to skip unnecessary comparisons (faster than brute force).

**Core idea:** Compare pattern **right-to-left** (from `pat[K-1]` down to `pat[0]`). On mismatch, use the bad character's position in the pattern to calculate how far to shift — skipping more than one position at a time.

**Two indices to track:**

| Variable | Meaning | Range |
|----------|---------|-------|
| `start` (or `i`) | Where pattern is aligned in text | `0` to `N - K` |
| `j` | Which pattern character we're comparing | `K-1` down to `0` |

Comparison: `text[start + j]` vs `pat[j]`

#### Version 1: Iterative (while loops)

```python
def boyer_moore(text: str, pat: str) -> int:
    # 1. Build 'last' map: char → last index in pattern
    last = {}
    for idx, c in enumerate(pat):
        last[c] = idx

    # 2. Search with adaptive jumps
    i = 0
    while i <= len(text) - len(pat):
        j = len(pat) - 1  # Start from rightmost char
        while j >= 0 and text[i + j] == pat[j]:
            j -= 1

        if j < 0:
            return i  # Full match!

        # Mismatch at pattern index j
        bad_char = text[i + j]
        idx = last.get(bad_char, -1)
        if idx == -1:
            i += j + 1        # Char not in pattern → skip past it
        else:
            i += max(j - idx, 1)  # Align last occurrence, shift at least 1

    return -1
```

#### Version 2: Recursive (no loops — T04 Q8)

```python
def compute_shift(j: int, bad_char: str, last: dict) -> int:
    """j = pattern index of mismatch, bad_char = text char at that position."""
    idx = last.get(bad_char, -1)
    if idx == -1:
        return j + 1
    shift = j - idx
    if shift < 1:
        shift = 1
    return shift

def find_jump(text: str, pat: str) -> int:
    N, K = len(text), len(pat)

    def build_last(i, m):
        if i >= K: return m
        m[pat[i]] = i
        return build_last(i + 1, m)

    last = build_last(0, {})

    def find_pattern(start):
        if start + K > N: return -1  # Pattern can't fit

        def compare(j):
            """Right-to-left comparison. Returns -1 if all match, else mismatch index."""
            if j < 0: return -1
            if text[start + j] != pat[j]: return j
            return compare(j - 1)

        diff = compare(K - 1)
        if diff == -1:
            return start  # Full match!

        shift = compute_shift(diff, text[start + diff], last)
        return find_pattern(start + shift)

    return find_pattern(0)
```

**Why it's faster:**
- Bad char not in pattern → jump entire pattern length
- Bad char in pattern → align its last occurrence

**Common mistakes:**
- **One index for two things:** `j` is pattern index, text position is `start + j` — don't mix them
- **Return value ambiguity:** `compare` returning `0` could mean "all matched" or "mismatch at index 0" — use `-1` for "all matched"
- **Boundary check:** `start >= N` is not enough — need `start + K > N` (pattern tail overflows)
- **compute_shift args:** First arg is `j` (pattern index), not text position. Second arg is `text[start + j]` (the actual mismatching character)
- **Shift vs position:** `compute_shift` returns a shift amount, not an absolute position — next start = `start + shift`
- Variable name collision: `for i, c in enumerate(pat)` overwrites outer `i`

> **Not a sliding window!** Boyer-Moore jumps vary in size — it's a two-pointer pattern.

---

## 5: Meta-Learning

### 5.1 "Tests Pass ≠ Logic Correct"

**The Q6 Newton's sqrt bug:**

```python
# ❌ Wrong convergence check (line 24)
if round(n, 5) == round(x_next, 5):
    return x_next
# Checks: "Is my guess equal to the TARGET number?"
# For sqrt(2.0): x_next == 2.0? (never true!)

# ✅ Correct convergence check
if abs(x_next - x_prev) < tol:
    return x_next
# Checks: "Has my guess STOPPED CHANGING?"
```

**Why it "passed" tests:** The wrong check NEVER triggered → ran all 1000 iterations → Newton's formula converged anyway after ~10 iterations. Tests passed because the final answer was correct, but it wasted 990 iterations.

**The two checks are asking completely different questions:**

**(a) Bug:** `round(n, 5) == round(x_next, 5)` asks "is my guess equal to the **input number**?" For `sqrt(2.0)`, this checks `x_next == 2.0` — but the answer is `1.41421...`, so the check is **never true**. The condition never fires, the loop runs all 1000 iterations, and Newton's formula converges to the correct answer anyway by iteration ~10.

**(b) Correct:** `abs(x_next - x_prev) < tol` asks "has my guess **stopped improving**?" When consecutive guesses differ by less than the tolerance, the algorithm has converged — that's the actual definition of convergence.

**The accident:** It only "worked" because `max_iter=1000` gave Newton's method enough runway. If `max_iter=5`, the wrong check still never triggers, but 5 iterations might not be enough to converge — you'd get an inaccurate answer. The correct check would return early at iteration ~10 with a precise result regardless of `max_iter`.

---

### 5.2 "Tweak Until Green" Anti-Pattern

**The Q3 trailing whitespace mystery:**
- Output had 1 extra trailing space per row
- Fixed by subtracting 1 in the last column: `remaining -= 1`
- **But couldn't explain WHY** — arrived at fix by trial and error

**The danger:**

```python
# What you THINK you learned:
"Last column needs COLUMN_SIZE - 2"

# What you ACTUALLY learned:
"Subtracting 2 makes tests pass"  # ← Magic numbers!
```

**Better approach:**
1. **Stop.** Write down your hypothesis
2. **Test hypothesis on paper** (not in code)
3. **If hypothesis holds → implement**
4. **If tests fail → hypothesis wrong, go to step 1**

> **Senior SWE discipline:** Derive the logic, don't guess-and-check. Even when frustrated with "tedious" problems.

---

## 6: Memory Tricks (Speed Reference)

| Concept | Trick |
|---------|-------|
| `sorted()` vs `.sort()` | "sort**ED** = n**E**w **D**ata" (ED suffix = returns new list) |
| Lambda | "Lambda = **L**azy function" (too lazy to write `def`) |
| `*` operator | "**Explode** operator" (flattens/unpacks) |
| `map()` return | "Map = **M**aybe convert" (returns iterator, not list) |
| Merge complexity | Must output M+N elements → can't beat O(M+N) |
| Dense ranking | 1-2-2-**3** (NOT 1-2-2-4) — rank increments only when values change |
| Backwards iteration | "**R**everse to **R**emove" (safe mutation pattern) |
| for...else | "else = if **not broken**" |

---

## Quick Reference: Python vs JavaScript

| Feature | JavaScript | Python |
|---------|-----------|--------|
| Block scope | `let`/`const` block-scoped | Loop vars **leak** after loop |
| Array methods | `arr.map(fn)` | `map(fn, arr)` — args flipped |
| map() return | Array (eager) | Iterator (lazy) |
| Negative index | `arr.at(-1)` (ES2022) | `arr[-1]` (always works, silent) |
| Round up | `Math.ceil()` | `math.ceil()` |
| Tuple unpack | Destructuring everywhere | **Not in lambda** (PEP 3113) |
| for...else | N/A | `else` runs if no `break` |
| List copy | `[...arr]` | `arr[:]` or `arr.copy()` |

---

_Last updated: 2026-02-10_
_Sources: T2 REVIEW, T3 notes (8 files), Jan 29 session notes_
_Midterm: Feb 14, 10:30am_
