---
title: "TCX1004 | Notebook"
slug: "nus-bit-tcx1004-notebook"
date: 2026-02-10
description: "Study notebook for NUS TCX1004: Proofs, Sets, Relations, Induction, Combinatorics, Graph Theory, Probability"
tags: ["nus", "math", "discrete-math", "notebook", "tcx1004"]
categories: ["Education", "Mathematics"]
toc: true
math: true
draft: false
sticky: 1004
---

> NUS TCX1004 study notebook. Prof's notes: [Mathematical Techniques](https://learn-compsci.github.io/mathematical-techniques/)

```
TCX1004 | Discrete Math Notebook
│
├── 1. Proofs (Unit 1, Weeks 1-4)
│   ├── Propositional Logic (AND, OR, NOT, →, ↔)
│   ├── First-Order Logic (∀, ∃, predicates)
│   ├── 15 Rules of Deduction (grouped by function)
│   └── Proof Strategies (direct, cases, contradiction, contrapositive)
│
├── 2. Sets (Unit 2)                    ← TODO
├── 3. Relations (Unit 3)               ← TODO
├── 4. Induction & Recurrences (Unit 4) ← TODO
├── 5. Asymptotic Notation (Unit 5)     ← TODO
├── 6. Combinatorics (Unit 6)           ← TODO
├── 7. Graph Theory (Unit 7)            ← TODO
├── 8. Probability (Unit 8)             ← TODO
└── 9. Distributions (Unit 9)           ← TODO
```

---

## 1. Proofs

### 1.1 Propositional Logic

#### Connectives

| Symbol | Name | English | True when... |
|--------|------|---------|-------------|
| $\land$ | AND | "and" | Both true |
| $\lor$ | OR | "or" | At least one true |
| $\neg$ | NOT | "not" | Flipped |
| $\to$ | Implication | "if...then" | Only false when $P$ true, $Q$ false |
| $\leftrightarrow$ | Biconditional | "iff" | Both same truth value |

#### Key Equivalences

| Name | Equivalence |
|------|-------------|
| **De Morgan** | $\neg(P \land Q) \equiv \neg P \lor \neg Q$ |
| **De Morgan** | $\neg(P \lor Q) \equiv \neg P \land \neg Q$ |
| **Contrapositive** | $P \to Q \equiv \neg Q \to \neg P$ |
| **Double Negation** | $\neg(\neg P) \equiv P$ |
| **Implication** | $P \to Q \equiv \neg P \lor Q$ |

---

### 1.2 First-Order Logic

#### Quantifiers

| Symbol | Name | Meaning | To prove | To disprove |
|--------|------|---------|----------|-------------|
| $\forall$ | Universal | "for all" | Show for arbitrary $x$ | Find one counterexample |
| $\exists$ | Existential | "there exists" | Find one witness | Show none work |

#### Negating Quantifiers

$$\neg \forall x \, P(x) \equiv \exists x \, \neg P(x)$$
$$\neg \exists x \, P(x) \equiv \forall x \, \neg P(x)$$

> Negation flips $\forall \leftrightarrow \exists$ (like De Morgan flips $\land \leftrightarrow \lor$)

---

### 1.3 Rules of Deduction (15 Rules)

#### BREAK (take apart compound statements)

| # | Rule | What it does | Formal |
|---|------|-------------|--------|
| 4 | **Specialisation** | Split $\land$ apart | $P \land Q \implies P$ |
| 12b | **Existential Instantiation** | Name the $\exists$ thing | $\exists x \, P(x) \implies$ "let $c$ be such that $P(c)$" |
| 12d | **Universal Instantiation** | Plug in specific value | $\forall x \in A \, [P(x)]$ + $a \in A \implies P(a)$ |

> Tip: $\exists$ or $\forall$ **disappears** = instantiation

#### BUILD (construct compound statements)

| # | Rule | What it does | Formal |
|---|------|-------------|--------|
| 5 | **Conjunction** | Join with $\land$ | $P$, $Q \implies P \land Q$ |
| 6 | **Generalisation** | Loosen with $\lor$ | $P \implies P \lor Q$ |
| 12a | **Existential Generalisation** | Wrap with $\exists$ | $P(a)$, $a \in A \implies \exists x \in A \, [P(x)]$ |
| 12c | **Universal Generalisation** | Wrap with $\forall$ | arbitrary $x \in A$, $P(x) \implies \forall x \in A \, [P(x)]$ |

> Tip: $\exists$ or $\forall$ **appears** = generalisation

#### Conjunction vs Generalisation

| Rule | Connective | Direction | Mnemonic |
|------|-----------|-----------|----------|
| **Conjunction** | $\land$ builder | $P$ + $Q$ $\to$ $P \land Q$ | 两个都要有才能合并 |
| **Generalisation** | $\lor$ builder | $P$ alone $\to$ $P \lor Q$ | 有一个就能加东西 |

#### MOVE (follow implications)

| # | Rule | What it does | Formal |
|---|------|-------------|--------|
| 8 | **Modus Ponens** | Forward through $\to$ | $P \to Q$, $P \implies Q$ |
| 9 | **Modus Tollens** | Backward through $\to$ | $P \to Q$, $\neg Q \implies \neg P$ |
| 10 | **Implication Introduction** | Create $\to$ | assume $P$, derive $Q \implies P \to Q$ |

> MP = "I know the rule, and it applies" $\to$ conclusion follows
>
> MT = "I know the rule, and conclusion failed" $\to$ premise must be false

#### TRANSFORM (rewrite / simplify)

| # | Rule | What it does |
|---|------|-------------|
| 1 | **Definition Unpacking** | Swap name $\leftrightarrow$ definition (e.g. $even(x) \equiv \exists k[x=2k]$) |
| 2 | **Logical Equivalence** | Replace with equivalent (De Morgan, etc.) |
| 3 | **Basic Algebra** | Arithmetic manipulation |
| 11 | **Double Negation** | $\neg\neg P \implies P$ |

#### CONTRADICTION (nuclear option)

| # | Rule | What it does | Formal |
|---|------|-------------|--------|
| 7 | **Proof by Cases** | Try each case of $\lor$ | $P \lor Q$; $P \to R$; $Q \to R$ $\implies R$ |
| 13 | **Lemma** | Use a proven theorem | Like importing a library function |
| 14 | **Contradiction** | Detect absurdity | $P \land \neg P \implies \bot$ |
| 15 | **Proof by Contradiction** | Assume opposite, find $\bot$ | assume $\neg P$, derive $\bot \implies P$ |

---

### 1.4 Proof Strategies

#### Strategy Selection

| Goal shape | Strategy | First line of proof |
|------------|----------|-------------------|
| $P \to Q$ | **Direct proof** | "Assume $P$" ... derive $Q$ |
| $P \to Q$ | **Contrapositive** | "Assume $\neg Q$" ... derive $\neg P$ |
| $\neg P$ | **Contradiction** | "Assume $P$" ... derive $\bot$ |
| $P \lor Q$ cases given | **Proof by cases** | Handle each case separately |
| $\forall x \, [P(x)]$ | **Universal proof** | "Let $x$ be arbitrary" ... derive $P(x)$ |
| $\exists x \, [P(x)]$ | **Existential proof** | Provide a witness: "Let $x = ...$" |

#### Layer Peeling (one step = one layer)

Given $\forall x \in A \, [P(x) \to Q(x)]$:

```
Step 1: "Let x ∈ A"        → removes ∀  → goal = P(x) → Q(x)
Step 2: "Assume P(x)"      → removes →  → goal = Q(x)
Step 3: ... work to show Q(x)
```

> **One step = one layer. Cannot skip or combine layers.**

---

### 1.5 Common Proof Pattern: Even/Odd

**Definition:** $even(x) \equiv \exists k \in \mathbb{Z} \, [x = 2k]$

**Prove:** $\forall x \in \mathbb{Z} \, [even(x) \to even(x+2)]$

| Line | Statement | Rule |
|------|-----------|------|
| 1 | Let $x$ be arbitrary from $\mathbb{Z}$ | (start universal proof) |
| 1.1 | Assume $even(x)$ | (start direct proof) |
| 1.2 | $\exists k \in \mathbb{Z} \, [x = 2k]$ | Definition unpacking |
| 1.3 | Let $t \in \mathbb{Z}$ such that $x = 2t$ | Existential instantiation |
| 1.4 | $x + 2 = 2t + 2 = 2(t+1)$ | Basic algebra |
| 1.5 | $t + 1 \in \mathbb{Z}$ | Basic algebra |
| 1.6 | $\exists s \in \mathbb{Z} \, [x+2 = 2s]$ | Existential generalisation |
| 1.7 | $even(x+2)$ | Definition unpacking |
| 1.8 | $even(x) \to even(x+2)$ | Implication introduction |
| 2 | $\forall x \in \mathbb{Z} \, [even(x) \to even(x+2)]$ | Universal generalisation |

> This one proof uses 7 different rules. Master this pattern and you can handle most Unit 1 proofs.

---

### 1.6 Quiz Mistakes & Lessons

| Quiz | Score | Mistake | Lesson |
|------|-------|---------|--------|
| Week 3 | 3/5 → 5/5 | Confused specialisation direction | Specialisation BREAKS $\land$, Conjunction BUILDS $\land$ |
| Week 4 | 3/4 → 4/4 | Peeled 2 layers in 1 step ($\forall$ + $\to$ together) | One step = one layer, always |

---
