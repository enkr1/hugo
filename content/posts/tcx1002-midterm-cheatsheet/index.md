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
---

> **TCX1002 (NUS Python) series:** [Notebook]({{< ref "tcx1002-notebook" >}}) · **Midterm cheatsheet (current)** · [PE cheatsheet]({{< ref "tcx1002-pe-cheatsheet" >}}) · [Finals helpsheet]({{< ref "tcx1002-finals-helpsheet" >}}) · [Midterm reflection]({{< ref "tcx1002-midterm-reflection" >}})

for the full notebook with deeper explanations, see my [TCX1002 Notebook]({{< ref "tcx1002-notebook" >}}).

---

## Mistakes

### map/sort/round/split

```python
map(fn, iter)                    # NO key=
sorted(data, key=lambda x: ...)  # HAS key=

round(2.5)  # 2 ← NOT 3!  round(3.5) → 4  (banker's rounding)
# need "always up"? → math.ceil()

"".split(" ")   # [""] ← NOT []!
"".split()      # []  ← 无参数 = 空 list

sorted(lst)     # returns NEW list
lst.sort()      # returns None, modifies in-place
```

### Mutable Default

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

### `=` vs `+=`

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

# 安全创建 1D / 2D / 3D
a = [0] * 5                                           # 1D
b = [[0] * 4 for _ in range(3)]                       # 2D (3×4)
c = [[[0] * 4 for _ in range(3)] for _ in range(2)]   # 3D (2×3×4)
```

### Mutation During Iteration

```python
nums = [1, 2, 3, 4, 5]
for n in nums:
    if n % 2 == 0:
        nums.remove(n)
# for 底层用 index！remove 后 list 左移，下一个被跳过

# ✅ FIX: comprehension
nums = [n for n in nums if n % 2 != 0]
```

### UnboundLocalError

```python
x = 10
def bar():
    x = foo(x)   # Python 编译时看到 x=... → 整个函数 x 是 local
    return x      # foo(x) 读 local x，但还没赋值 → boom

# ✅ FIX: 换变量名
def bar():
    y = foo(x)   # x 没被赋值，读 global
    return y
```

| Keyword | 用途 |
|---------|------|
| `global x` | 用模块级的 x |
| `nonlocal x` | 用外层函数的 x（嵌套函数） |

### Truthiness

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

### Shallow Copy

```python
a = [[1,2], [3,4]]
b = a[:]          # shallow copy — 外层新，内层共享
b[0].append(5)
# a = [[1,2,5], [3,4]]  ← a 也变了！

# ✅ FIX: 手动 deep copy（copy 模块不能用）
b = [row[:] for row in a]
```

### extend vs append

```python
out.append([1,2])  # [..., [1,2]]  ← 整个 list 当一个元素
out.extend([1,2])  # [..., 1, 2]   ← 逐个加入
```

### Other

```python
[1,2] == [1,2]   # True (content)
[1,2] is [1,2]   # False (identity)
# is 只用于: x is None

for i in range(5): pass
print(i)  # 4 — loop var 不会消失
```

---

## Built-in Methods

```python
# STRING
"hello world".split()            # ['hello', 'world'] (按空白切)
"a,b,c".split(",")              # ['a', 'b', 'c'] (按指定切)
"  hello  ".strip()              # 'hello' (去两端空白)
"  hello  ".lstrip()             # 'hello  ' (去左)
"  hello  ".rstrip()             # '  hello' (去右)
"hello world".replace("world", "python")  # 'hello python'
", ".join(["a", "b", "c"])       # 'a, b, c' (list → str)
"hello".upper()                  # 'HELLO'
"HELLO".lower()                  # 'hello'
"hello world".title()            # 'Hello World'
"hello".capitalize()             # 'Hello' (只首字母)
"hello".startswith("he")         # True
"file.py".endswith(".py")        # True
"abcabc".count("a")             # 2
"hello".find("ll")              # 2 (index, 没找到返回 -1)

# str.isXXX — 全部字符都要满足才 True, 空字符串返回 False
"123".isdigit()                  # True
"abc".isalpha()                  # True
"abc123".isalnum()               # True (字母或数字)
"ABC".isupper()                  # True
"abc".islower()                  # True

# BUILTINS
len(x)                           # 长度 (str, list, dict, set)
abs(-5)                          # 5
round(2.5)                       # 2 ← banker's rounding! (见 Mistakes)
sorted(lst, reverse=True)        # 降序 (返回新 list)
min(lst, key=lambda x: x[1])    # 按第2元素找最小
max(lst, key=lambda x: x[1])    # 按第2元素找最大
any(x > 5 for x in lst)         # 有一个满足就 True
all(x > 0 for x in lst)         # 全部满足才 True
enumerate(lst)                   # → (0,a), (1,b), (2,c) — for i,v in ...
list(filter(lambda x: x > 0, [-1, 0, 2, 3]))  # [2, 3]
ord('A')                         # 65   ord('Z') = 90
ord('a')                         # 97   ord('z') = 122
ord('0')                         # 48   ord('9') = 57
chr(65)                          # 'A'  chr(97) = 'a'
# ord/chr hacks
ord('c') - ord('a')              # 2 — 字母→index (a=0, b=1, ...)
chr(ord('a') + 3)                # 'd' — index→字母
chr(ord('A') + i)                # 'A','B','C'... — 生成大写序列
chr((ord(c) - ord('a') + shift) % 26 + ord('a'))  # Caesar cipher shift

# LIST
lst.insert(1, "x")              # 在 index 1 插入 (in-place)
lst.pop()                       # 删最后一个并返回
lst.pop(0)                      # 删 index 0 并返回
lst.remove("x")                 # 删第一个 "x" (in-place, 没有则 ValueError)
lst.reverse()                   # in-place, 返回 None! (同 .sort())
lst.index("x")                  # 第一个 "x" 的 index (没有则 ValueError)

# DICT
d.get(key, default)             # 没有 key 不报错，返回 default
d.keys()                        # dict_keys([...])
d.values()                      # dict_values([...])
d.items()                       # dict_items([(k,v), ...]) ← for k,v in d.items()
d.pop("key")                    # 删 key 并返回 value (没有则 KeyError!)
d.pop("key", None)              # 安全版，没有返回 None
d.update({"a": 1, "b": 2})     # 批量更新/合并

# dict counting (替代 defaultdict(int))
counts = {}
counts[item] = counts.get(item, 0) + 1

# dict grouping (替代 defaultdict(list))
groups = {}
groups.setdefault(key, []).append(item)

# dict grouping with set (替代 defaultdict(set))
groups.setdefault(key, set()).add(item)

# SET
s.add(x)                        # 加一个元素
s.discard(x)                    # 删元素 (没有也不报错)
s.remove(x)                     # 删元素 (没有则 KeyError!)
a & b                           # intersection (交集)
a | b                           # union (并集)
a - b                           # difference (a有b没有)
a ^ b                           # symmetric diff (只在一边有)

# COMPREHENSION
[x**2 for x in lst]                      # list comp
[x for x in lst if x > 0]                # 带条件
{k: v for k, v in pairs}                 # dict comp
{x for x in lst}                         # set comp
[[row[i] for row in matrix] for i in range(n)]  # nested (转置)

# TYPE CHECK (A1Q2 用过)
type(x) == str                  # True if str
isinstance(x, (int, float))    # True if int or float (推荐)
```

---

## Iterators（一次性）

```python
a = map(lambda x: x**2, [1,2,3])
list(a)   # [1, 4, 9]
list(a)   # [] ← 空了！

# 一次性: map, filter, zip, enumerate, 所有 itertools
# 可重复: range, list, tuple, set, dict

# ✅ 安全做法：马上 list() 包住
result = list(map(lambda x: x**2, data))
```

---

## functools + itertools

```python
from functools import reduce, partial
from itertools import combinations, permutations, chain, product, accumulate

# reduce — 一个最终值
reduce(lambda acc, x: acc + x, [1,2,3,4])      # 10
reduce(lambda acc, x: acc * x, [1,2,3,4])      # 24
reduce(lambda acc, x: acc + x, [1,2,3], 100)   # 106 (init=100)

# partial — pre-fill args
add10 = partial(lambda x, y: x + y, 10)
add10(5)  # 15

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

## math

```python
import math

math.ceil(2.1)       # 3   (always round up)
math.floor(2.9)      # 2   (always round down)
math.sqrt(16)        # 4.0 (or x ** 0.5)
math.log(8, 2)       # 3.0 (log base 2)
math.log(math.e)     # 1.0 (natural log)
math.factorial(5)    # 120
math.gcd(12, 8)      # 4
math.pi              # 3.14159...
math.e               # 2.71828...
math.inf             # infinity (or float('inf'))
```

---

## datetime

```python
from datetime import datetime, date, timedelta

# 创建
today = date.today()                          # date(2026, 2, 14)
now = datetime.now()                          # datetime(2026, 2, 14, 10, 30, 0)
d = date(2026, 2, 14)                         # 指定日期
dt = datetime(2026, 2, 14, 10, 30)            # 指定日期+时间

# 属性
d.year, d.month, d.day                        # 2026, 2, 14
dt.hour, dt.minute, dt.second                 # 10, 30, 0

# timedelta — 加减时间
d + timedelta(days=7)                         # 7天后
d - timedelta(weeks=2)                        # 2周前
dt + timedelta(hours=2, minutes=30)           # 可以混用 (⚠️ 要 datetime 不是 date!)
(date(2026, 3, 1) - date(2026, 2, 14)).days   # 15（差几天）

# 格式化
dt.strftime("%Y-%m-%d %H:%M")                # '2026-02-14 10:30'
datetime.strptime("14/02/2026", "%d/%m/%Y")  # str → datetime
# %Y=年4位  %m=月2位  %d=日2位  %H=时24  %M=分  %S=秒

# 比较 (A1Q2 attendance)
start = datetime(2025, 1, 1, 19, 0, 0)
scanned = datetime(2025, 1, 1, 19, 8, 0)
scanned <= (start + timedelta(minutes=15))   # True → on time
end = datetime(2025, 1, 1, 21, 0, 0)
(end - start) / 2                            # 半场时间 (timedelta)
```

---

## random

```python
import random

random.randint(1, 10)          # 1到10 的随机整数（包含两端）
random.random()                # 0.0 到 1.0 的随机浮点数
random.uniform(1.5, 5.5)      # 指定范围的随机浮点数
random.choice([1, 2, 3])      # 随机选一个
random.sample([1,2,3,4,5], 3) # 随机选3个（不重复，返回 list）
random.shuffle(lst)            # in-place 打乱（返回 None！）

# 可重现
random.seed(42)                # 设 seed → 每次结果一样
```

---

## NumPy

**List vs NumPy：**

| 操作 | List | NumPy |
|------|------|-------|
| `a + b` | 拼接 `[1,2,3,4]` | 逐元素加 `[5,7,9]` |
| `a * 3` | repeat `[1,2,1,2,1,2]` | 逐元素乘 `[3,6,9]` |
| `a > 1` | TypeError | bool array `[F,T,T]` |
| `len(a)` | 元素个数 | 第一维长度 |
| `sum(a)` | 总和 | 总和（但用 `np.sum` 更快） |

```python
# 同一个任务，List vs NumPy 写法对比：

# 每个元素 +10
[x + 10 for x in lst]           # List: comprehension
arr + 10                         # NumPy: broadcasting

# 过滤 >5
[x for x in lst if x > 5]       # List: comprehension
arr[arr > 5]                     # NumPy: boolean indexing

# 逐元素相乘
[a*b for a,b in zip(l1, l2)]    # List: zip + comprehension
arr1 * arr2                      # NumPy: 直接乘

# 互转
np.array([1,2,3])               # list → numpy
arr.tolist()                     # numpy → list
```

```python
import numpy as np

# 创建
np.array([1,2,3])             # from list
np.zeros((3,4))               # 3×4 全0
np.ones((2,3))                # 2×3 全1
np.arange(0, 10, 2)           # [0, 2, 4, 6, 8]
np.linspace(0, 1, 5)          # [0, 0.25, 0.5, 0.75, 1.0]

# shape 操作
a.shape                        # (3, 4)
a.reshape(2, 6)                # 改形状（元素总数不变）
a.flatten()                    # 拉成 1D
a.T                            # 转置

# axis — 0=行方向(↓列压缩), 1=列方向(→行压缩)
np.sum(a, axis=0)              # 每列的和
np.sum(a, axis=1)              # 每行的和
np.mean(a, axis=0)             # 每列平均
np.max(a, axis=1)              # 每行最大

# boolean filter
a[a > 5]

# broadcasting (pairwise) — newaxis 插入维度
R = a[:, np.newaxis, :]   # (n, 1, d) — 中间插 = Row
C = a[np.newaxis, :, :]   # (1, n, d) — 前面插 = Column
D = R - C                  # (n, n, d) — 所有 pair 的差
# 规则: 从右对齐，1可以拉伸 → (1,3) + (2,1) → (2,3)

# useful ops
np.where(a > 5)                # 满足条件的 index 数组
np.argmax(a)                   # 最大值的 index
np.argsort(a)                  # 排序后的 index 数组
np.dot(a, b.T)                 # 矩阵点积
np.linalg.norm(a, axis=1)     # 每行的向量长度 (L2 norm)
np.outer(a, b)                 # 外积 (n,) × (m,) → (n,m)

# local peaks (T1Q4)
lefts, currs, rights = x[:-2], x[1:-1], x[2:]
scale = 1 + threshold
peaks = np.where((currs > lefts*scale) & (currs > rights*scale))[0] + 1

# pairwise distances (T3Q4)
manhattan = np.sum(np.abs(D), axis=2)
euclidean = np.sqrt(np.sum(np.square(D), axis=2))

# cosine distance (T3Q4)
dot_products = np.dot(a, a.T)
norms = np.linalg.norm(a, axis=1)
cosine = 1 - dot_products / np.outer(norms, norms)
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
| `re.split(pat, text)` | 按 pattern 切 | list of strings | `[原text]` |
| `re.fullmatch(pat, text)` | **整个 string** | match object | `None` |

```python
# findall — 返回 strings！不是 int
re.findall(r'\d+', "age 25, score 99")       # ['25', '99']
nums = list(map(int, re.findall(r'\d+', s)))  # 转 int

# search — 返回 match object
m = re.search(r'(\d+)-(\d+)', "call 123-456 now")
m.group(0)   # '123-456'  ← 完整匹配
m.group(1)   # '123'      ← 第一个 ()
m.group(2)   # '456'      ← 第二个 ()

# ⚠️ match/search 可能返回 None，先检查！
m = re.search(r'\d+', text)
if m is not None:
    print(m.group())

# sub — 替换
re.sub(r'\d+', 'X', "abc123def456")  # 'abcXdefX'
re.sub(r'\s+', ' ', "  too  many  ").strip()  # 'too many'

# split — 按多种分隔符
re.split(r'[,;\s]+', "a, b;c  d")   # ['a', 'b', 'c', 'd']

# greedy vs non-greedy
re.findall(r'<.+>', '<a><b>')    # ['<a><b>']     ← greedy（尽量多）
re.findall(r'<.+?>', '<a><b>')   # ['<a>', '<b>']  ← non-greedy（尽量少）

# findall + groups — 有 () 时只返回 group 内容
re.findall(r'(\d+)-(\d+)', "12-34 56-78")  # [('12','34'), ('56','78')]

# fullmatch — 整个 string 必须匹配
re.fullmatch(r'[A-Z]{3}\d{4}', "ABC1234")   # match
re.fullmatch(r'[A-Z]{3}\d{4}', "ABC12345")  # None
```

### 常用例子

```python
re.findall(r'\d{2}/\d{2}/\d{4}', "born 14/02/2026")  # 提取日期
re.findall(r'\(([^)]+)\)', "f(x) and g(y)")           # 括号内容 → ['x','y']
re.findall(r'(\w+)=(\w+)', "name=bob age=25")         # key=value pairs
```

### T3Q1 车牌技巧

```python
r'[A-HJ-NP-Z]'                # A-Z 排除 I 和 O — 多段 range
r'(?=([A-HJ-NP-Z]{2,3}\d{1,4}[A-Z]))'  # lookahead 找重叠匹配
m = re.match(r'^([A-Z]+)', "SGP1234A")  # match 提取 prefix
r'\d{1,4}'                     # {n,m} 精确量词
```

### Regex Notes

```python
# 为什么用 r'' (raw string)?
r'\d+'     # ✅ backslash 原样传给 regex
'\d+'      # ⚠️ Python 先处理 \d → 可能出错
# 规则：regex pattern 永远用 r''

# \d vs \d+ — Q25 踩过
re.findall(r'\d', "abc123")    # ['1', '2', '3']   ← 每个数字
re.findall(r'\d+', "abc123")   # ['123']            ← 整个数字串

# flags
re.findall(r'hello', "Hello World", re.IGNORECASE)  # ['Hello']
re.search(r'hello', "Hello", re.I)                  # match (re.I = 缩写)
```

### Pattern 速查

| Pattern | Meaning | Example |
|---------|---------|---------|
| `.` | any char (except `\n`) | `a.c` → abc, a1c |
| `\d` / `\D` | digit / non-digit | `\d` = `[0-9]` |
| `\w` / `\W` | word char / non-word | `\w` = `[a-zA-Z0-9_]` (含下划线!) |
| `\s` / `\S` | whitespace / non-ws | space, tab, newline |
| `\b` | word boundary | `r'\bcat\b'` 只匹配整个 "cat"，不匹配 "catch" |
| `[A-Z]` | char range | `[a-zA-Z]` = 所有字母 |
| `[^A-Z]` | NOT (negated class) | `[^0-9]` = 非数字 |
| `+` / `*` / `?` | 1+ / 0+ / 0 or 1 | `\d+` = 一个或多个数字 |
| `{n}` / `{n,m}` | exactly n / n to m | `\d{4}` = 4位数字 |
| `^` / `$` | start / end of string | `^Hello` = 开头是 Hello |
| `(...)` | capture group | findall 只返回 group 内容 |
| `(?:...)` | non-capture group | 分组但不 capture |
| `(?=...)` / `(?!...)` | lookahead / neg | 看前面但不消耗 |
| `(?<=...)` / `(?<!...)` | lookbehind / neg | 看后面但不消耗 |

---

## Good to Know

```python
x ** 0.5          # sqrt (no import)
float('inf')      # infinity (no import)
frozenset({1,2})  # immutable set, can be dict key
t = ("A", 1, 2, 3)
t[1:]             # (1, 2, 3) — tuple slicing works like list

# 常用 1-liners
list(dict.fromkeys([1,3,2,1,3]))            # [1,3,2] — 去重保序
[x for row in [[1,2],[3,4]] for x in row]   # [1,2,3,4] — 展平 2D
list(zip(*[[1,2],[3,4]]))                    # [(1,3),(2,4)] — 转置
sorted([("A",2),("B",1),("C",2)], key=lambda x: (-x[1], x[0]))  # [("A",2),("C",2),("B",1)]
a, *rest = [1,2,3,4]                        # a=1, rest=[2,3,4]
[1,2,3][::-1]                               # [3,2,1] — 反转 (不改原 list)
```

---

## Pre-Submit Checklist

```
EDGE CASES
□ Empty:          [], "", {}, 0, None
□ Single:         [1], "a"
□ All same:       [5,5,5,5]
□ Negative/zero:  [-1, 0, 1]
□ Boundaries:     first, last, exactly at condition
□ Duplicates:     [1,1,2,2] — does spec say unique?
□ Sorted/reverse: [1,2,3], [3,2,1]

CORRECTNESS
□ Re-read spec:   am I solving what was ACTUALLY asked?
□ Return type:    list? tuple? string? int? float? match spec
□ Return value:   return X, not print(X)
□ Off-by-one:     range(n) vs range(n+1), < vs <=, [L:R] vs [L:R+1]
□ Mutation:       did I modify the original input? (spec may need it intact)
□ Case:           .lower() if spec says case-insensitive

CLEANUP
□ Remove print(): all debug prints gone
□ Shadowing:      didn't name vars list, dict, sum, max, min, type, id
□ Imports:        all needed modules imported at top
□ Fn signature:   matches spec exactly (name, params, defaults)
```

---

<!-- TODO(post-exam): Zettelkasten attribution — Source table, Connections, Future Blog Posts -->
