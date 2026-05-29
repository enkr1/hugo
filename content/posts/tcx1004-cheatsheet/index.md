---
title: "TCX1004 | Mathematical Techniques Cheatsheet"
slug: "nus-bit-tcx1004-cheatsheet"
date: 2026-03-03
description: "Quick reference for NUS TCX1004: Logic & Proofs, Set Theory, Relations, Induction"
tags: ["nus", "math", "discrete-math", "cheatsheet", "tcx1004"]
categories: ["Education", "Mathematics"]
toc: true
math: true
draft: false
---

> **TCX1004 (NUS Math Techniques) series:** [Notebook]({{< ref "tcx1004-notebook" >}}) · **Cheatsheet (current)** · [Finals cheatsheet]({{< ref "tcx1004-finals-cheatsheet" >}})

for the full unit-by-unit notes, see my [TCX1004 notebook]({{< ref "tcx1004-notebook" >}}).

---

## Unit 1: Logic & Proofs

### The 15 Rules of Deduction

| # | Rule | Pattern | Justification Format |
|---|------|---------|---------------------|
| 1 | Definition unpacking | Expand/contract a definition | `[Unpacking definition of even(x)]` |
| 2 | Logical equivalence | $\lnot(p \lor q) \equiv \lnot p \land \lnot q$ | `[Logically equivalent to line N]` |
| 3 | Basic algebra | $x + 5 = 12 \to x = 7$ | `[By basic algebra from line N]` |
| 4 | Specialisation | $p \land q \to p$ | `[By specialisation on line N]` |
| 5 | Conjunction | $p, \, q \to p \land q$ | `[By conjunction on lines N and M]` |
| 6 | Generalisation | $p \to p \lor q$ | `[By generalisation on line N]` |
| 7 | Proof by cases | $p \lor q$, each case $\to r$ | `[Proof by cases on lines N, M.x, O.x]` |
| 8 | Modus ponens | $p \to q, \, p \implies q$ | `[By modus ponens on lines N and M]` |
| 9 | Modus tollens | $p \to q, \, \lnot q \implies \lnot p$ | `[By modus tollens on lines N and M]` |
| 10 | Implication introduction | Assume $p$, derive $q \implies p \to q$ | `[Implication introduction on lines N and N.x]` |
| 11 | Double negation | $\lnot(\lnot p) \equiv p$ | `[Double negation on line N]` |
| 12a | Existential generalisation | $c \in A, \, P(c) \implies \exists x \in A \, [P(x)]$ | `[Existential generalisation on lines N and M]` |
| 12b | Existential instantiation | $\exists x \in A \, [P(x)] \implies$ Let $c \in A$ s.t. $P(c)$ | `[Existential instantiation on line N]` |
| 12c | Universal generalisation | arb $x \in A$, $P(x) \implies \forall x \in A \, [P(x)]$ | `[Universal generalisation on lines N and M]` |
| 12d | Universal instantiation | $\forall x \in A \, [P(x)], \, c \in A \implies P(c)$ | `[Universal instantiation on lines N and M]` |
| 13 | Using lemma | Apply a proven result | `[By lemma]` or `[By Lemma X]` |
| 14 | Contradiction | $a \land \lnot a \implies \bot$ | `[Contradiction on line N]` |
| 15 | Proof by contradiction | Assume $\lnot p$, derive $\bot \implies p$ | `[Proof by contradiction on lines N and M]` |

### Justification Patterns

**Format:** `[By RULE_NAME on line(s) N]` or `[RULE_NAME on lines N and M]`

| Lines needed | Pattern | Examples |
|-------------|---------|----------|
| Single line | `on line N` | Specialisation, generalisation, definition unpacking |
| Two lines | `on lines N and M` | Modus ponens, universal instantiation, conjunction |
| Multi-line | `on lines N, M.x, O.x` | Proof by cases (the OR + each case conclusion) |

> "By" prefix is optional — both `[By specialisation on line 1]` and `[Proof by cases on lines 1, 2.1, 3.1]` are valid.

### Line Numbering Convention

Nested numbering for sub-proofs:

```text
1. [outer statement]
   1.1 [sub-statement under 1]
   1.2 [sub-statement under 1]
2. [outer statement]
   2.1 [sub-statement under 2]
```

**Indentation = scope.** Sub-lines (1.1, 1.2, ...) live inside the scope of line 1.

### Common Proof Openers

| Situation | Opener |
|-----------|--------|
| Proving $\forall x \in A \, [P(x)]$ | "Let $x$ be arbitrarily chosen from $A$." |
| Assuming premise | "Assume that [statement]." |
| Naming from $\exists$ | "Let $t \in A$ be such that $P(t)$." |
| Direct proof | "Assume [antecedent]." → derive → conclude [consequent] |
| Proof by contradiction | "Assume, for contradiction, that $\lnot$[statement]." |

---

## Unit 2: Set Theory

*Coming soon — to be filled as content is reviewed.*

---

## Unit 3: Relations

*Coming soon — to be filled as content is reviewed.*

---

## Unit 4: Induction

*Coming soon — to be filled after class.*

---

## Unit 8: Basic Probability

### Core Definitions

| Term | Definition |
|------|-----------|
| Sample space $\Omega$ | Set of ALL possible outcomes |
| Event | A **subset** of $\Omega$ |
| $\Pr[E]$ (uniform) | $\|E\| / \|\Omega\|$ |

### Rules

| Rule | Formula |
|------|---------|
| Non-negative | $\Pr[x] \geq 0$ |
| Sum to 1 | $\sum_{x \in \Omega} \Pr[x] = 1$ |
| Complement | $\Pr[\bar{A}] = 1 - \Pr[A]$ |
| Disjoint union | $A \cap B = \emptyset \Rightarrow \Pr[A \cup B] = \Pr[A] + \Pr[B]$ |

### Conditional Probability

$$\Pr[A \mid B] = \frac{\Pr[A \cap B]}{\Pr[B]}$$

"Given B happened, what's the chance of A?" — B becomes your new universe.

### Bayes' Theorem

$$\Pr[A \mid B] = \frac{\Pr[B \mid A] \cdot \Pr[A]}{\Pr[B]}$$

Use when you know $\Pr[B|A]$ but need $\Pr[A|B]$.

### Independence

Two events $A$, $B$ are **independent** if:

$$\Pr[A \cap B] = \Pr[A] \cdot \Pr[B]$$

- **Meaning:** knowing one happened doesn't change the other's probability
- **The test is NOT "do they overlap?"** — the test is **"does the overlap equal the product?"**
- $A \cap B \neq \emptyset$ can still be independent (e.g. two separate dice)
- **Pairwise independent $\neq$ mutually independent** — the 3-coin example: $D_1, D_3$ are pairwise independent, but $D_1, D_2, D_3$ together are NOT

---

_Source: [Unit 1 Notes](https://github.com/enkr1/nus_bit_priv/blob/main/000_mods/TCX1004/mathematical-techniques/content/Unit%20Notes/Unit%201.md) § "Allowable Rules of Deductions/Inferences"_
_Created: 2026-03-03_
