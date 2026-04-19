---
title: "TCX1004 | Finals Cheatsheet (Units 6-9)"
slug: "nus-bit-tcx1004-finals-cheatsheet"
date: 2026-04-19
description: "Open-book cheatsheet for NUS TCX1004 Finals (Apr 30, 2026) — Combinatorics, Graph Theory, Probability, Distributions"
tags: ["nus", "math", "discrete-math", "cheatsheet", "tcx1004", "finals"]
categories: ["Education", "Mathematics"]
toc: true
math: true
draft: false
---

for the general cheatsheet (Units 1-5: proof rules, sets, induction), see the [TCX1004 cheatsheet]({{< ref "tcx1004-cheatsheet" >}}). full unit-by-unit notes in the [TCX1004 notebook]({{< ref "tcx1004-notebook" >}}).

**Exam:** Apr 30, 2026 · 17:00 · LT7A Seat 64 · **Open Book** · No calculators · 1.5h
**Scope:** Unit 6+ (Combinatorics, Graph Theory, Probability, Distributions/Expectation/Variance)
**Note:** leave answers unsimplified.

---

## Unit 6: Combinatorics

*Placeholder — to be translated from Unit Notes.*

---

## Unit 7: Graph Theory

*Placeholder — to be translated from Unit Notes.*

---

## Unit 8: Probability

*Placeholder — to be translated from Unit Notes.*

---

## Unit 9: Distributions, Expectation, Variance

*Layout philosophy pending — see chat for decision.*

### Distribution formulas

| Distribution | $E[X]$ | $\text{Var}[X]$ | Trigger words |
|--------------|--------|-----------------|---------------|
| Bernoulli$(p)$ | $p$ | $p(1-p)$ | one trial, two outcomes |
| Binomial$(n, p)$ | $np$ | $np(1-p)$ | $n$ fixed trials, count successes (BINS) |
| Geometric$(p)$ | $1/p$ | $(1-p)/p^2$ | until first success |
| Uniform (discrete) | $(a+b)/2$ | depends on range | equally likely outcomes |

### Bounds (distribution unknown)

| Bound | Formula | When to use |
|-------|---------|-------------|
| Markov | $P[X \geq a] \leq E[X]/a$ | only $E[X]$ known, one-tail, $X \geq 0$ |
| Chebyshev | $P[\lvert X - \mu \rvert \geq a] \leq \text{Var}[X]/a^2$ | $E[X]$ and $\text{Var}[X]$ known, two-tail |

### BINS — Binomial identification

- **B**inary outcomes (success / fail)
- **I**ndependent trials
- **N**umber of trials fixed ($n$)
- **S**ame probability each trial ($p$)

### Linearity of Expectation

$$E[X + Y] = E[X] + E[Y] \quad \text{(always, even if dependent)}$$

$$\text{Var}[X + Y] = \text{Var}[X] + \text{Var}[Y] \quad \text{(only if independent)}$$

### Variable legend (don't confuse under pressure)

| Symbol | Source | Role |
|--------|--------|------|
| $\mu$ | $E[X]$ from question | center |
| $\text{Var}[X]$ | from question | spread$^2$ |
| $\sigma$ | $= \sqrt{\text{Var}[X]}$ (derived) | std dev — appears in $1/k^2$ form only |
| $a$ | threshold inside $P[\lvert X - \mu \rvert \geq a]$ | denominator (squared) |
| $k$ | $= a/\sigma$ | $\sigma$-multiples in alternate form |

$a$ and $\sigma$ are different variables even when they share a numeric value.

---

## Pre-submit sanity checks

- probability $\in [0, 1]$ — never negative
- $E[X] \in [\min X, \max X]$ — NOT bounded by $[0, 1]$
- re-add arithmetic on 1-mark questions
- plugged $a$ (threshold) or $\sigma$ (std dev)? they are different
- Chebyshev monotonicity: larger $a$ → smaller bound. if bound grew, you plugged wrong.
