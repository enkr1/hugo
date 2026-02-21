---
title: "Boyer-Moore String Search: Finding Substrings with Adaptive Jumps"
date: 2026-02-21 22:20:00
tags:
  - "algorithm"
  - "string"
  - "python"
  - "pattern-matching"
  - "boyer-moore"
  - "string-search"
categories:
  - ["Software Engineering", "Data Structures & Algorithms"]
subtitle: "Right-to-left comparison with bad character heuristic for faster substring search"
description: "Boyer-Moore String Search algorithm explained with visual walkthroughs, iterative and recursive Python implementations, and common pitfalls from hands-on practice."
keywords:
  - "Boyer-Moore String Search"
  - "Pattern Matching"
  - "Bad Character Heuristic"
  - "Python string search"
  - "Substring matching algorithm"
---

## What is Boyer-Moore String Search?

it finds the first occurrence of a pattern in a text — basically a custom `text.find(pattern)`.

the trick is it **skips positions** instead of checking one by one. brute force checks every position left to right. Boyer-Moore starts comparing from the **right side** of the pattern, and when it doesn't match, it jumps forward — sometimes by a lot.

> **not the same as** [Boyer-Moore Voting Algorithm]({{< ref "algo-boyer-moore-voting" >}}) — same guys (Robert S. Boyer & J Strother Moore, UT Austin), completely different problem. string search came first (1977), voting came later (1981).



## How it works (in my own words)

imagine you're looking for "WORLD" in a really long sentence.

you put "WORLD" at the start and check the **last letter first** — the 'D'. if the text has a 'Z' there, you already know none of "WORLD" can match at this position. and since 'Z' doesn't even appear in "WORLD", you can skip forward by the entire length of the pattern.

that's the whole idea. compare from right, jump smart.



## The important thing: two indices

this is the thing that tripped me up the most. you need **two separate indices**:

- `start` — where the pattern is sitting on top of the text
- `j` — which character in the pattern you're currently comparing (right to left)

the comparison: `text[start + j]` vs `pat[j]`

```
text:  a  b  c  d  e
pat:   b  c  d
       0  1  2
             ↑ j starts here (K-1 = 2), goes left
```

don't use one variable for both. i did that and `pat[3]` crashed because `start > 0` pushed the index past the pattern length. lesson learned the hard way.



## Walkthrough

**find "bcd" in "abcde":**

first, build a `last` map from the pattern — each char's rightmost index:
```
last = {'b': 0, 'c': 1, 'd': 2}
```

```
Step 1: start=0, compare from right
  text:  a  b  c  d  e
  pat:   b  c  d
               ↑ j=2: text[2]='c' vs pat[2]='d' → mismatch!

  bad char = 'c', last['c'] = 1
  shift = j - last['c'] = 2 - 1 = 1

Step 2: start=1, compare from right
  text:  a  b  c  d  e
  pat:      b  c  d
                  ↑ j=2: 'd' vs 'd' ✓
            ↑ j=1: 'c' vs 'c' ✓
         ↑ j=0: 'b' vs 'b' ✓

  all matched → return 1 ✅
```

**find "xyz" in "abcde":**

```
start=0: text[2]='c' vs pat[2]='z' → mismatch
  'c' not in pattern → shift = j+1 = 3

start=3: pattern needs 3 chars but only 2 left → return -1 ✅
```



## Shift calculation

when mismatch at pattern index `j`:

```python
def compute_shift(j, bad_char, last):
    idx = last.get(bad_char, -1)
    if idx == -1:
        return j + 1              # char not in pattern, big jump
    shift = j - idx
    return max(shift, 1)          # at least move 1
```

| Case | What happens | Shift |
|------|-------------|-------|
| bad char not in pattern | nothing to align to | `j + 1` |
| bad char is in pattern, before j | align it | `j - idx` |
| bad char is in pattern, after j | can't go backwards | `1` (minimum) |



## Code: iterative (while loops)

```python
def boyer_moore(text, pat):
    last = {}
    for idx, c in enumerate(pat):
        last[c] = idx

    i = 0
    while i <= len(text) - len(pat):
        j = len(pat) - 1
        while j >= 0 and text[i + j] == pat[j]:
            j -= 1

        if j < 0:
            return i

        bad_char = text[i + j]
        idx = last.get(bad_char, -1)
        if idx == -1:
            i += j + 1
        else:
            i += max(j - idx, 1)

    return -1
```

## Code: recursive (no loops — NUS TCX1002 T04 Q8)

same algorithm but purely recursive, since the assignment didn't allow loops:

```python
def compute_shift(j, bad_char, last):
    idx = last.get(bad_char, -1)
    if idx == -1:
        return j + 1
    shift = j - idx
    if shift < 1:
        shift = 1
    return shift

def find_jump(text, pat):
    N, K = len(text), len(pat)

    def build_last(i, m):
        if i >= K: return m
        m[pat[i]] = i
        return build_last(i + 1, m)

    last = build_last(0, {})

    def find_pattern(start):
        if start + K > N: return -1

        def compare(j):
            if j < 0: return -1
            if text[start + j] != pat[j]: return j
            return compare(j - 1)

        diff = compare(K - 1)
        if diff == -1:
            return start

        shift = compute_shift(diff, text[start + diff], last)
        return find_pattern(start + shift)

    return find_pattern(0)
```

`compare(j)` is nested inside `find_pattern` so it can see `start` through closure. returns `-1` for "all matched" to avoid confusion with mismatch at index 0.



## Mistakes i made

these are all real bugs from my implementation, not hypothetical:

| what i did | why it broke | fix |
|-----------|-------------|-----|
| one variable for text + pattern index | `pat[3]` crash when start > 0 | keep `start` and `j` separate |
| `compare` returns 0 for match AND mismatch at 0 | can't tell them apart | use -1 for "all matched" |
| boundary check `start >= N` | pattern tail overflows text | `start + K > N` |
| `text[diff]` in compute_shift | diff is pattern index, not text position | `text[start + diff]` |
| treated shift as next position | shift is how far to move, not where to go | `start + shift` |
| built `last` from text instead of pattern | `last` should map pattern chars only | iterate `pat` |
| slice comparison `text[start:end] == pat` | works but doesn't tell you WHERE mismatch is | need `j` for compute_shift |



## Complexity

| | Best | Worst |
|---|---|---|
| Time | $O(N/K)$ | $O(NK)$ |
| Space | $O(K)$ | $O(K)$ |

best case: pattern's last char never shows up in text, so you jump K positions every time. worst case: lots of partial matches like `text = "aaaaaa"`, `pat = "aaa"`.



## Boyer vs Boyer

| | String Search (this post) | [Voting]({{< ref "algo-boyer-moore-voting" >}}) |
|---|---|---|
| Year | 1977 | 1981 |
| Problem | find pattern in text | find majority element |
| Core idea | right-to-left + skip | cancel different elements |
| Time | O(N/K) best | O(N) |
| Space | O(K) | O(1) |

same duo, two classic algorithms.

## References

- [A Fast String Searching Algorithm (Boyer & Moore, 1977)](https://dl.acm.org/doi/10.1145/359842.359859)
- [Wikipedia: Boyer-Moore String Search](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm)
- NUS TCX1002 Tutorial 04 Q8
