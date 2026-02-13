---
title: "TCX1002 | Python Midterm Cheatsheet (Weeks 1-4)"
slug: "nus-bit-tcx1002-midterm-cheatsheet"
date: 2026-02-12
description: "Personal Python cheatsheet for NUS TCX1002 midterm — only the stuff I forget or haven't drilled"
tags: ["nus", "python", "cheatsheet", "tcx1002", "midterm"]
categories: ["Education", "Programming"]
toc: true
math: false
draft: false
sticky: 1002
---

> **`collections` BANNED** | Allowed: datetime, functools, itertools, math, numpy, random, re

---

## ⚠️ Traps I Hit (考我考出来的)

```python
# map() has NO key= ← 踩过
map(fn, iter)                    # ✅ NO key=
sorted(data, key=lambda x: ...)  # ✅ HAS key=

# round() banker's rounding
round(2.5)  # 2 ← NOT 3!  round(3.5) → 4
# need "always up"? → math.ceil()

# "".split(" ") → [""] ← NOT []!

# sorted() vs .sort()
sorted(lst)   # returns NEW list
lst.sort()    # returns None, modifies in-place
```

---

## defaultdict Replacements (CRITICAL)

```python
# ❌ BANNED: defaultdict(int)
# ✅ counting
counts = {}
counts[item] = counts.get(item, 0) + 1

# ❌ BANNED: defaultdict(list)
# ✅ grouping
groups = {}
groups.setdefault(key, []).append(item)

# ❌ BANNED: defaultdict(set)
# ✅ grouping with set
groups.setdefault(key, set()).add(item)
```

---

## Python Traps (10题中8题有问题)

### Mutable Default — 调用者也被改

```python
def append_to(item, target=[]):
    target.append(item)
    return target

a = append_to(1)   # [1]
b = append_to(2)   # [1, 2] ← 不是 [2]!
a is b              # True ← 同一个 list!

# ✅ FIX:
def append_to(item, target=None):
    if target is None:
        target = []
    target.append(item)
    return target
```

### `=` 新对象 vs `+=` in-place

```python
y = x           # alias
y = y + [6]     # ✅ 新对象，x 不变
y += [6]        # ❌ in-place，x 也变！
y.extend([6])   # ❌ in-place，x 也变！
```

### `[[x]] * n` 共享引用

```python
[[0]] * 3       # [[0], [0], [0]] — 3个ref指向同一个[0]
[[0] * 3]       # [[0, 0, 0]]     — 1个list包含3个0
[0] * 3         # [0, 0, 0]       — int是immutable，没问题

# ❌ 共享引用
a = [[0]] * 3
a[0].append(1)  # [[0,1], [0,1], [0,1]] ← 全变！

# ✅ FIX: comprehension
a = [[0] for _ in range(3)]  # 3个独立list
```

### Mutation During Iteration — 跳 index

```python
nums = [1, 2, 3, 4, 5]
for n in nums:
    if n % 2 == 0:
        nums.remove(n)
# for 底层用 index！remove 后 list 左移，下一个被跳过
# [2,4,6] → remove 2 → [4,6] → index跳到6 → 结果 [4]!

# ✅ FIX: comprehension
nums = [n for n in nums if n % 2 != 0]
```

### `x = foo(x)` 在函数里 → UnboundLocalError

```python
x = 10
def bar():
    x = foo(x)   # Python 编译时看到 x=... → 整个函数 x 是 local
    return x      # foo(x) 读 local x，但还没赋值 → boom

# ✅ FIX: 换变量名
def bar():
    y = foo(x)   # x 没被赋值，读 global
    return y

# 或声明
def bar():
    global x     # 用模块级 x
    x = foo(x)
```

| Keyword | 用途 |
|---------|------|
| `global x` | 用模块级的 x |
| `nonlocal x` | 用外层函数的 x（嵌套函数） |

### Truthiness — 非空 = True

```python
bool("")     # False  — 空 string
bool("0")    # True!  — 非空 string（内容不管）
bool([0])    # True!  — 非空 list（内容不管）
bool(0)      # False  — 零
bool(None)   # False

# 规则：空容器/0/None/False = falsy，其他全 truthy
# filter(None, iter) = 用 truthiness 过滤
filter(None, [0, "", None, 1, "hello", [], False])  # → [1, "hello"]
```

### Shallow Copy 2D — 只复制一层

```python
a = [[1,2], [3,4]]
b = a[:]          # shallow copy — 外层新，内层共享
b[0].append(5)
# a = [[1,2,5], [3,4]]  ← a 也变了！

# ✅ FIX: 手动 deep copy（copy 模块不能用）
b = [row[:] for row in a]
```

### Other

```python
# is vs ==
[1,2] == [1,2]   # True (content)
[1,2] is [1,2]   # False (identity)
# is 只用于: x is None

# scope leak
for i in range(5): pass
print(i)  # 4 — loop var 不会消失

# mutation during iteration
for x in lst: lst.remove(x)       # ❌
lst = [x for x in lst if cond]    # ✅
```

---

## Iterators — 一次性消耗！

```python
# 这些返回 iterator，只能消耗一次：
a = map(lambda x: x**2, [1,2,3])
list(a)   # [1, 4, 9]
list(a)   # [] ← 空了！

# 一次性: map, filter, zip, enumerate, 所有 itertools
# 可重复: range, list, tuple, set, dict

# ✅ 安全做法：马上 list() 包住
result = list(map(lambda x: x**2, data))
```

---

## functools

```python
from functools import reduce, partial

# reduce — 一个最终值: fn(fn(fn(a,b),c),d)
reduce(lambda acc, x: acc + x, [1,2,3,4])      # 10
reduce(lambda acc, x: acc * x, [1,2,3,4])      # 24
reduce(lambda acc, x: acc + x, [1,2,3], 100)   # 106 (init=100)

# partial — pre-fill args
add10 = partial(lambda x, y: x + y, 10)
add10(5)  # 15
```

---

## itertools

```python
from itertools import combinations, permutations, chain, product, accumulate

combinations([1,2,3], 2)      # [(1,2),(1,3),(2,3)]        C(n,k)
permutations([1,2,3], 2)      # [(1,2),(1,3),(2,1),...]    P(n,k)
chain([1,2], [3,4])           # [1,2,3,4]                  flatten
product([1,2], ['a','b'])     # [(1,'a'),(1,'b'),(2,'a'),(2,'b')]
accumulate([1,2,3,4])         # [1,3,6,10]                 前缀和
accumulate([3,1,4,1,5], max)  # [3,3,4,4,5]               running max
```

| | 返回 |
|---|---|
| `reduce` | **一个值** (折叠) |
| `accumulate` | **所有中间值** (前缀) |

---

## Patterns (考试直接套)

```python
# TRACK-SEEN (find duplicates, keep order, each once)
seen, added, out = set(), set(), []
for x in lst:
    if x in seen:
        if x not in added:
            out.append(x); added.add(x)
    else:
        seen.add(x)

# WORD FREQUENCY (case-insensitive, no collections)
counts = {}
for w in text.lower().split():
    counts[w] = counts.get(w, 0) + 1

# DENSE RANKING (1-2-2-3)
sorted_rows = sorted(rows, key=lambda x: (-x[1], -x[2], x[0]))
rank, prev = 1, None
for row in sorted_rows:
    curr = (row[1], row[2])
    if prev is not None and prev != curr:
        rank += 1
    result.append((rank, *row))
    prev = curr

# TWO-POINTER MERGE
i, j, out = 0, 0, []
while i < len(l1) and j < len(l2):
    if l1[i] <= l2[j]: out.append(l1[i]); i += 1
    else:              out.append(l2[j]); j += 1
out.extend(l1[i:]); out.extend(l2[j:])

# SLIDING WINDOW
L, R = 0, window - 1
while R < len(data):
    window_slice = data[L:R+1]
    L += 1; R += 1

# GROUP BY KEY (no defaultdict!)
groups = {}
for item in data:
    groups.setdefault(key, []).append(item)
```

---

## NumPy

**List vs NumPy — 完全不同的行为：**

| 操作 | List | NumPy |
|------|------|-------|
| `a + b` | 拼接 | 逐元素加 |
| `a * 3` | repeat 3x | 逐元素乘3 |
| `a > 1` | TypeError | bool array |

```python
import numpy as np

# boolean filter
a[a > 5]

# broadcasting (pairwise) — newaxis 插入维度
# a.shape = (n, d)
R = a[:, np.newaxis, :]   # (n, 1, d) — 中间插 = Row
C = a[np.newaxis, :, :]   # (1, n, d) — 前面插 = Column
D = R - C                  # (n, n, d) — 所有 pair 的差

# broadcasting 规则: 从右对齐，1可以拉伸
# (1, 3) + (2, 1) → (2, 3)

# distances
manhattan = np.sum(np.abs(D), axis=2)
euclidean = np.sqrt(np.sum(np.square(D), axis=2))
cosine = 1 - np.dot(a, a.T) / np.outer(np.linalg.norm(a,axis=1), np.linalg.norm(a,axis=1))

# useful ops
np.where(cond)   np.argsort(a)   np.argmax(a)
np.dot(a, b.T)   np.linalg.norm(a, axis=1)   np.outer(a, b)

# local peaks (vectorized)
lefts, currs, rights = x[:-2], x[1:-1], x[2:]
scale = 1 + threshold
peaks = np.where((currs > lefts*scale) & (currs > rights*scale))[0] + 1
```

---

## Regex

```python
import re
```

| 函数 | 从哪找 | 返回 | 没找到 |
|------|--------|------|--------|
| `re.findall(pat, text)` | 所有匹配 | **list of strings** | `[]` |
| `re.match(pat, text)` | **开头** | match object | `None` |
| `re.search(pat, text)` | **任意位置（第一个）** | match object | `None` |
| `re.sub(pat, repl, text)` | 全部替换 | new string | 原 string |

```python
# findall — 返回 strings！不是 int
re.findall(r'\d+', "abc123def456")  # ['123', '456']

# search — 返回 match object
m = re.search(r'(\d+)-(\d+)', "call 123-456 now")
m.group(0)   # '123-456'  ← 完整匹配
m.group(1)   # '123'      ← 第一个 ()
m.group(2)   # '456'      ← 第二个 ()

# ⚠️ match/search 可能返回 None，先检查！
m = re.search(r'\d+', text)
if m is not None:
    print(m.group())
```

### Pattern 速查

| Pattern | Meaning |
|---------|---------|
| `.` | any char |
| `[A-Z]` `[0-9]` `\d` `\w` `\s` | char classes |
| `[^A-Z]` | NOT (negated) |
| `+` 1+ / `*` 0+ / `?` 0 or 1 | quantifiers |
| `{2,3}` | 2 to 3 reps |
| `^` / `$` | start / end |
| `(...)` | capture group |
| `(?:...)` | non-capture |
| `(?=...)` / `(?!...)` | lookahead / neg |
| `(?<=...)` / `(?<!...)` | lookbehind / neg |

---

## Quick Reminders

```python
x ** 0.5          # sqrt (no import)
float('inf')      # infinity (no import)
math.ceil(2.1)    # 3 (always round up)
frozenset({1,2})  # immutable set, can be dict key
```

---

## Exam Strategy

1. Read ALL Qs first (5 min) → easiest first
2. Per Q (~25 min): spec (3) → plan (2) → code (15) → test edges (5)
3. Last 10 min: re-read specs
4. Stuck → skip → come back

**Self-test edges:** `[]` `""` `{}` | single | all same | negatives/0 | sorted/reversed | boundaries

---

<!-- TODO(post-exam): Zettelkasten attribution — Source table, Connections, Future Blog Posts -->
