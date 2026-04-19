---
title: "TCX1002 | Finals Helpsheet (A4 Double-Sided)"
slug: "nus-bit-tcx1002-finals-helpsheet"
date: 2026-04-20
description: "A4 double-sided helpsheet for NUS TCX1002 Final Exam (May 4, 2026) — Python fundamentals, OOP, recursion, NumPy, functional. Examplify fill-in-the-blank format."
tags: ["nus", "python", "cheatsheet", "tcx1002", "finals"]
categories: ["Education", "Programming"]
toc: true
math: false
draft: false
---

for the Practical Exam (PE) reference (broader scope, unlimited pages), see the [TCX1002 PE cheatsheet]({{< ref "tcx1002-pe-cheatsheet" >}}). midterm material in the [midterm cheatsheet]({{< ref "tcx1002-midterm-cheatsheet" >}}).

**Exam:** May 4, 2026 · 09:00 — 11:00 · LT7A Seat 70 · **Closed Book (auth. materials)** on **Examplify** · 40% weight
**Helpsheet:** 1 × A4 double-sided (confirmed Prof Jiang, Apr 18)
**Format:** 100% fill-in-the-blank (confirmed Prof Jiang, Apr 18). Small snippets, not whole functions. No compiler / no run-code during exam.
**Strategy anchor:** decomposition into subproblems; recursion now seemingly allowed/encouraged (contradicts PE ban). NumPy live-taught in class Apr 18 (MT10 Q1) so also likely allowed.

---

## Python fundamentals

*Placeholder — adapt from PE cheatsheet, prioritize fill-in-the-blank trigger patterns.*

---

## OOP — class, inheritance, polymorphism

*Placeholder — see PE cheatsheet.*

---

## Recursion (likely allowed per Apr 18 intel)

*Placeholder — include: decomposition mindset, base case identification, trace-by-hand patterns.*

**🔖 Re-drill candidate:** PE Q4 iterative-with-stack — Prof Jiang (Apr 18 lunch) indicated recursive was the intended approach. Rewrite as recursive + trace.

---

## NumPy essentials (live-taught MT10 Q1, Apr 18)

*Placeholder — broadcasting, shape padding, diagonal poisoning, no-loop patterns.*

**🔖 MT10 Q1 pattern:** pair-wise squared difference via `A[:,None] - A` broadcasting + `np.fill_diagonal(D, D.max())` to poison self-vs-self before `argmin`.

---

## Functional — map, filter, reduce, lambdas

*Placeholder — see PE cheatsheet.*

---

## Trace-without-compiler patterns

*Placeholder — mental execution drills for exam (no IDE). Common patterns: list mutations, slice semantics, dict defaults, closure gotchas.*

---

## Pre-submit sanity checks (Examplify fill-blank)

- read the **full question** before filling any blank — blanks may depend on earlier context
- Python 3 types: `str(n)` for concatenation, `int()` for parse, `float()` for decimal
- list vs tuple: `[]` mutable, `()` immutable
- slicing: `s[:N-1]` excludes index N-1; `s[-1]` is last element
- ranges: `range(n)` → 0..n-1
- check indentation carefully (Examplify spaces)
