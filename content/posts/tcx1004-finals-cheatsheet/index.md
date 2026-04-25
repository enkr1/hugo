---
title: "TCX1004 | Finals Cheatsheet (All Units)"
slug: "nus-bit-tcx1004-finals-cheatsheet"
date: 2026-04-19
description: "Open-book cheatsheet for NUS TCX1004 Finals (Apr 30, 2026) — Logic & Proofs, Set Theory, Relations, Induction, Big-O, Combinatorics, Graph Theory, Probability, Distributions"
tags: ["nus", "math", "discrete-math", "cheatsheet", "tcx1004", "finals"]
categories: ["Education", "Mathematics"]
toc: true
math: true
draft: false
---

full unit-by-unit notes in the [TCX1004 notebook]({{< ref "tcx1004-notebook" >}}).

**Exam:** Apr 30, 2026 · 17:00 · LT7A Seat 64 · **Open Book** · No calculators · 1.5h
**Tested scope:** Unit 6+ (Combinatorics, Graph Theory, Probability, Distributions/Expectation/Variance) — *per current sprint inference*
**Reference scope (this doc):** Units 1-9 (full module — Prof has not confirmed scope reduction; covering everything as insurance against scope surprise)
**Note:** leave answers unsimplified.

---

## Unit 1: Logic & Proofs (reference)

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

### Decision tree — what's the question asking?

| Question shape | Tool |
|---------------|------|
| "is $A \subseteq B$?" | check $\forall x \in A \to x \in B$ |
| "is $A = B$?" | double subset: prove $A \subseteq B$ AND $B \subseteq A$ |
| "size of $\mathcal{P}(A)$ where $\lvert A\rvert = n$" | $2^n$ |
| "size of $A \times B$" | $\lvert A\rvert \cdot \lvert B\rvert$ |
| simplify nested set expression | apply distributive / De Morgan |
| set membership of nested object | distinguish $\in$ vs $\subseteq$ vs $\mathcal{P}$ |

### Notation primer

| Symbol | Meaning |
|--------|---------|
| $[n]$ | $\{1, 2, \ldots, n\}$; $[0] = \emptyset$ |
| $\emptyset$ | empty set; always $\subseteq$ any set |
| $\mathbb{N}$ | natural numbers (often $\{0, 1, 2, \ldots\}$ in CS) |
| $\mathbb{Z}, \mathbb{Q}, \mathbb{R}, \mathbb{C}$ | integers, rationals, reals, complex |
| $\{a, b, c\}$ | set-roster (explicit listing) |
| $\{x \in S : P(x)\}$ | set-builder ($x$ from $S$ where $P(x)$ holds) |
| $\lvert A\rvert$ | cardinality (size) of $A$ |

### Set operations

| Op | Definition | Logic equivalent |
|----|-----------|-----------------|
| $A \cup B$ | $\{x : x \in A \lor x \in B\}$ | $\lor$ |
| $A \cap B$ | $\{x : x \in A \land x \in B\}$ | $\land$ |
| $A \setminus B$ | $\{x \in A : x \notin B\}$ | $\land \lnot$ |
| $A \times B$ | $\{(x, y) : x \in A \land y \in B\}$ | Cartesian product |
| $\mathcal{P}(A)$ | $\{X : X \subseteq A\}$ | power set, $\lvert \mathcal{P}(A)\rvert = 2^{\lvert A\rvert}$ |

### Subset & equality

- $A \subseteq B \equiv \forall x \in A \, [x \in B]$
- $A = B \equiv (A \subseteq B \land B \subseteq A)$ — **double subset method**
- $\emptyset \subseteq A$ for any $A$ (vacuously true)

### Key identities

**Distributive:**
$$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$$
$$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$$

**De Morgan (set-difference form):**
$$A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)$$
$$A \setminus (B \cap C) = (A \setminus B) \cup (A \setminus C)$$

### Proof template — show $A = B$

1. **Show $A \subseteq B$:** "Let $x \in A$ be arbitrary. [chain of inferences using $A$'s definition] Therefore $x \in B$."
2. **Show $B \subseteq A$:** "Let $x \in B$ be arbitrary. [chain] Therefore $x \in A$."
3. **Conclude:** "By double subset, $A = B$."

### Common gotchas (Unit 2)

- **$\in$ vs $\subseteq$:** $\{x\} \subseteq A$ iff $x \in A$. But $\{x\} \in A$ means the *set* $\{x\}$ is itself an element of $A$ (different statement).
- **Power set vs membership:** if $3 \in A$, then $\{3\} \in \mathcal{P}(A)$ (NOT $3 \in \mathcal{P}(A)$).
- **Set difference NOT associative:** $(A \setminus B) \setminus C \neq A \setminus (B \setminus C)$. Always parenthesize.
- **Empty intersection ≠ disjoint union for 3+ sets:** $A \cap B \cap C = \emptyset$ does NOT imply pairwise disjoint (Unit 6 link).

### Cross-hooks

- Set ops underpin **PIE in Unit 6** (sum/intersection of events)
- Cartesian product is foundation for **Relations (Unit 3)** and **sample-space pairs in Unit 8**

### Pre-submit sanity checks (Unit 2)

- Used double subset for "show $A = B$"? Both directions stated?
- $\in$ vs $\subseteq$ — re-read every membership claim
- Set-difference parenthesized?
- $\lvert \mathcal{P}(A)\rvert = 2^{\lvert A\rvert}$ — not $\lvert A\rvert^2$

---

## Unit 3: Relations

### Decision tree — what's the question asking?

| Question shape | Tool |
|---------------|------|
| "is $R$ reflexive?" | $\forall a \in A \, [(a,a) \in R]$ — check every element |
| "is $R$ symmetric?" | $\forall a, b \, [(a,b) \in R \to (b,a) \in R]$ |
| "is $R$ anti-symmetric?" | $\forall a, b \, [((a,b) \in R \land (b,a) \in R) \to a = b]$ |
| "is $R$ transitive?" | $\forall a, b, c \, [((a,b) \in R \land (b,c) \in R) \to (a,c) \in R]$ |
| compute $R^{-1}$ | flip every pair |
| compute $R; S$ | chain through middle element |
| classify divisibility / mod-$n$ | use the property table below |

### Core definitions

| Term | Definition |
|------|-----------|
| **Relation** | $R \subseteq A \times B$ (subset of a Cartesian product) |
| **Inverse** | $R^{-1} = \{(b, a) : (a, b) \in R\}$ |
| **Composition** | $R; S = \{(a, c) : \exists b \, [(a,b) \in R \land (b,c) \in S]\}$ |

**Composition note:** $R; S$ requires output type of $R$ matches input type of $S$, else $R; S = \emptyset$.

### Classic relations

| Relation | Definition |
|----------|-----------|
| **Divisibility $D$** | $D = \{(x, y) \in \mathbb{Z}^2 : \exists k \in \mathbb{Z}, k \neq 0, \, xk = y\}$ |
| **Congruence mod $n$** ($C_n$) | $C_n = \{(a, b) \in \mathbb{Z}^2 : \exists k \in \mathbb{Z}, \, a - b = nk\}$ |

### Properties (for $R \subseteq A \times A$)

| Property | Definition (∀ over $A$) |
|----------|-------------------------|
| Reflexive | $(a, a) \in R$ for every $a$ |
| Symmetric | $(a, b) \in R \to (b, a) \in R$ |
| Anti-symmetric | $(a, b) \in R \land (b, a) \in R \to a = b$ |
| Transitive | $(a, b) \in R \land (b, c) \in R \to (a, c) \in R$ |

### Property classification — classic relations

| Relation | Reflexive | Symmetric | Anti-symmetric | Transitive |
|----------|:---------:|:---------:|:--------------:|:----------:|
| Divisibility $D$ | ✓ | ✗ | ✓ | ✓ |
| Congruence mod $n$ | ✓ | ✓ | ✗ | ✓ |

### Common gotchas (Unit 3)

- **Symmetric ≠ NOT anti-symmetric.** A relation can be **neither** (e.g., $\{(1,2), (2,3)\}$). Or **both** (only the diagonal, like $\{(1,1), (2,2)\}$).
- **Reflexive requires every element of $A$**, not just every element appearing in $R$. If $A = \{1, 2, 3\}$ and $R = \{(1,1), (2,2)\}$, $R$ is NOT reflexive on $A$ (missing $(3,3)$).
- **Composition is NOT commutative:** $R; S \neq S; R$ in general.
- **$D \subseteq D; D$:** divisibility is transitive — composition with itself is contained in itself.

### Cross-hooks

- A graph edge set is a relation: $E \subseteq V \times V$ → **Unit 7** (graphs are special relations)
- Equivalence relations (reflexive + symmetric + transitive) partition the set — useful in counting equivalence classes (**Unit 6** combinatorics)

### Pre-submit sanity checks (Unit 3)

- For "is $R$ reflexive?" — checked every element of $A$, not just ones appearing in $R$?
- Symmetric & anti-symmetric — checked separately, didn't assume opposites
- Composition $R; S$ — middle element exists in shared type?

---

## Unit 4: Induction & Recurrences

### Decision tree — what's the question asking?

| Question shape | Tool |
|---------------|------|
| "prove $\forall n \geq b \, [P(n)]$" | weak induction — base $P(b)$, inductive $P(n) \to P(n+1)$ |
| recurrence depends on multiple prev terms | strong induction — assume $\forall j < k \, [P(j)]$ |
| analyse $T(n) = T(n-1) + 1$ | arithmetic series → $T(n) = n + c$ |
| analyse $T(n) = T(n/2) + c$ | divide-and-conquer → $T(n) = O(\log n)$ |
| derive closed form for sum | guess pattern, prove by induction |

### Weak induction template

**To prove $\forall n \geq b \, [P(n)]$:**

1. **Base case:** prove $P(b)$ directly.
2. **Inductive step:** for arbitrary $n \geq b$, assume $P(n)$ (the **inductive hypothesis**). Prove $P(n+1)$.
3. **Conclude:** "By induction, $\forall n \geq b \, [P(n)]$."

**Standard opener:** "Let $P(n)$ be the statement [...]. We prove $P(n)$ by induction on $n$."

### Strong induction template

**To prove $\forall n \geq b \, [P(n)]$ when $P(n)$ depends on multiple smaller values:**

1. **Base cases:** prove $P(b_1), P(b_1+1), \ldots, P(b_2 - 1)$ — number of base cases = step size in inductive step.
2. **Inductive step:** for arbitrary $k \geq b_2$, **assume $\forall j$ with $b_1 \leq j < k$, $P(j)$ holds**. Prove $P(k)$.
3. **Conclude:** "By strong induction, $\forall n \geq b_1 \, [P(n)]$."

**Rule of thumb:** if recurrence reaches back $s$ steps (e.g., $T(n) = T(n-1) + T(n-2)$ reaches back 2), need $s$ base cases.

### Classic recurrences

| Recurrence | Closed form | Application |
|-----------|-------------|-------------|
| $T(n) = T(n-1) + 1, \, T(0) = 0$ | $T(n) = n$ | linear loop |
| $F(n) = n \cdot F(n-1), \, F(1) = 1$ | $F(n) = n!$ | factorial |
| $S(n) = S(n-1) + S(n-2), \, S(1) = 1, S(2) = 2$ | Fibonacci-shifted | stair climbing |
| $C(n) = C(\lceil n/2 \rceil) + 1, \, C(1) = 1$ | $C(n) = \lceil \log_2 n\rceil + 1$ | binary search |

### Common gotchas (Unit 4)

- **Forgotten base case:** induction is invalid without it — the entire chain collapses.
- **Wrong base value:** if $P(n)$ only holds for $n \geq 4$, your base case must start at $n = 4$, NOT $n = 0$.
- **Strong induction base count:** stepping back 2 → need 2 bases; stepping back $s$ → need $s$ bases. Mismatch breaks the proof.
- **Inductive hypothesis scope:** in weak induction, you assume only $P(n)$. In strong induction, you assume $P(j)$ for ALL $j < k$. Don't conflate.
- **Closed form vs recurrence:** if asked "find closed form", you must derive AND prove (induction). Don't just guess.

### Cross-hooks

- Recurrences feed **Unit 5 Big-O** via substitution method
- Induction is the proof technique for **Unit 6 combinatorial identities** (e.g., $\sum_{i=1}^n i = n(n+1)/2$)
- Loop-counting recurrences appear in **Unit 6** "Binomial coefficients & nested for loops"

### Pre-submit sanity checks (Unit 4)

- Stated base case explicitly?
- Inductive hypothesis stated *as an assumption*, not as a fact?
- For strong induction — number of bases matches step size?
- Conclusion sentence at the end ("By induction, ...")?
- For closed-form derivation — did you prove the closed form (not just guess)?

---

## Unit 5: Big-O & Asymptotic Analysis

### Decision tree — what's the question asking?

| Question shape | Tool |
|---------------|------|
| "is $g(n) \in O(f(n))$?" | find $n_0, c$ s.t. $g(n) \leq c \cdot f(n)$ for $n \geq n_0$ |
| "is $g(n) \in \Omega(f(n))$?" | find $n_0, c$ s.t. $g(n) \geq c \cdot f(n)$ for $n \geq n_0$ |
| "is $g(n) \in \Theta(f(n))$?" | both $O$ AND $\Omega$ |
| polynomial $f(n)$ of degree $k$ | $f(n) \in \Theta(n^k)$ — drop constants & lower terms |
| compare $f(n)$ and $g(n)$ growth | use the function ordering ladder |
| analyse recurrence $T(n)$ | substitution method (assume → show → conclude) |
| prove loop correctness | loop invariant — init + maintain + terminate |

### Three asymptotic notations

| Notation | Definition | Intuition |
|----------|-----------|-----------|
| $O(f(n))$ | $\exists n_0, c > 0, \, \forall n \geq n_0, \, g(n) \leq c \cdot f(n)$ | upper bound (at most) |
| $\Omega(f(n))$ | $\exists n_0, c > 0, \, \forall n \geq n_0, \, g(n) \geq c \cdot f(n)$ | lower bound (at least) |
| $\Theta(f(n))$ | $g \in O(f) \land g \in \Omega(f)$ | tight bound |

### Polynomial bound theorem

If $f(n) = \sum_{i=0}^{k} a_i n^i$ with $a_k > 0$, then $f(n) \in \Theta(n^k)$.

**Effect:** drop all lower-order terms AND constants. $5n^3 + 100n^2 + 7 \in \Theta(n^3)$.

### Function ordering ladder (smallest → largest)

$$\sqrt{\log n} \ll \log n \ll \log^2 n \ll \sqrt{n} \ll n \ll n \log n \ll n^2 \ll n^k \ll 2^{\sqrt{n}} \ll 2^{n/2} \ll 2^n \ll 2^{n^2}$$

**Use:** if $f \ll g$ in this ladder, then $f \in O(g)$ but $g \notin O(f)$.

### Substitution method (analyse recurrences)

**To show $T(n) \in O(f(n))$:**

1. **Assume:** $T(m) \leq c \cdot f(m)$ for all $m < n$ (inductive hypothesis on size).
2. **Show:** plug into recurrence and derive $T(n) \leq c \cdot f(n)$ — **same form**, same constant $c$.
3. **Conclude:** $T(n) \in O(f(n))$.

**Critical:** the form you conclude must match the form you assumed. If you assume $T(m) \leq c \cdot m^2$, you must conclude $T(n) \leq c \cdot n^2$ (not $c \cdot n^2 + n$).

### Loop invariant — proof structure

To prove a loop computes a correct result, identify an **invariant** (statement about loop state) and prove all 3:

1. **Initialization:** invariant holds *before* the first iteration
2. **Maintenance:** if invariant holds before iteration $i$, it holds after iteration $i$
3. **Termination:** when the loop exits, the invariant + exit condition imply program correctness

### Common gotchas (Unit 5)

- **Substitution method form mismatch:** if you assume $T(m) \leq cm$, you must conclude $T(n) \leq cn$, not $T(n) \leq cn + 5$. Tighten the assumption to absorb the slack.
- **Exponential constants don't pull through:** $2^{n/2} \in O(2^n)$ ✓, but $2^n \in O(2^{n/2})$ ✗ (needs $c \cdot 2^{n/2} \geq 2^n$, i.e., $c \geq 2^{n/2}$ — not constant).
- **Big-O is one direction.** $g \in O(f)$ does NOT mean $f \in O(g)$. Use $\Theta$ for tight equivalence.
- **Loop invariant — all 3 parts required.** Skipping termination is a common point loss.
- **$O$ vs $\Theta$ in answers:** if a question says "what is the running time", the strongest correct answer is $\Theta$. Stating just $O$ is incomplete (technically true but loses precision marks).

### Cross-hooks

- Big-O bounds **combinatorial counting** (Unit 6 "sense of scale" — Stirling, binomial bounds)
- Substitution method applies to **divide-and-conquer recurrences** (binary search, merge sort)
- Loop invariants are induction in disguise — feeds back to Unit 4 templates

### Pre-submit sanity checks (Unit 5)

- $O$, $\Omega$, $\Theta$ — gave the *tightest* one when possible?
- Substitution conclusion form matches assumption form?
- Constants in front (e.g., $5n^2$) — dropped per polynomial bound?
- Function comparison — used the ladder, not gut feeling?
- Loop invariant — stated all 3 parts?

---

## Unit 6: Combinatorics

### Decision tree — what am I counting?

| Question shape | Formula |
|---------------|---------|
| "or" between disjoint cases | sum: $\sum \lvert A_i\rvert$ |
| "and then" successive choices | product: $\prod \lvert A_i\rvert$ |
| arrange $n$ distinct, **order matters**, all $n$ | $n!$ |
| arrange $n$ items with $n_i$ duplicates | $\frac{n!}{n_1! \cdots n_k!}$ |
| pick $k$ from $n$, **order matters** | $P(n,k)$ |
| pick $k$ from $n$, **order doesn't matter** | $\binom{n}{k}$ |
| count "at least $m$" subsets | complement: $2^n - \text{small sum}$ |
| count "X NOT adjacent to Y" | complement: $n! - 2 \cdot (n-1)!$ |
| distribute $n$ identical into $t$ groups, sum $= n$ | stars & bars: $\binom{n+t-1}{t-1}$ |
| grid path, $r$ ups + $c$ rights | $\binom{c+r}{r}$ |
| "divisible by $x$ or $y$", $A \cap B$ | use $\text{lcm}(x,y)$, NOT $xy$ |


### Basic counting rules

| Rule | Formula | When to use |
|------|---------|-------------|
| Sum | $\lvert A_1 \cup \ldots \cup A_n\rvert = \sum \lvert A_i\rvert$ | sets **pairwise disjoint** ($A_i \cap A_j = \emptyset$ ∀ $i \neq j$) — "or" between disjoint cases |
| Product | $\lvert A_1 \times \ldots \times A_n\rvert = \prod \lvert A_i\rvert$ | sequence of independent choices — "and then" |
| Division | $n$ items, groups of $k$ identical → $n/k$ groups | overcounting by known factor |
| Subtraction | $\lvert A \setminus B\rvert = \lvert A\rvert - \lvert B\rvert$ when $B \subseteq A$ | counting "not in B" / complement |

**Pairwise-disjoint warning:** $A \cap B \cap C = \emptyset$ alone is NOT enough for the sum rule. Need every pair disjoint. Counter-example: $A = \{2,4,6\}$, $B = \{3,6\}$, $C = \{3,5\}$ — triple intersection empty but $\lvert A \cup B \cup C\rvert = 5 \neq 7$.

**Subsets of $A$ with $\lvert A\rvert = n$:** $\lvert \mathcal{P}(A)\rvert = 2^n$ (each element take/skip = 2 choices, $n$ times).

### Counting in integer ranges

| Question | Formula |
|----------|---------|
| Integers in $[a, b]$ inclusive | $b - a + 1$ |
| In $[1, a]$ divisible by $d$ | $\lfloor a/d \rfloor$ |
| In $[0, a]$ divisible by $d$ | $\lfloor a/d \rfloor + 1$ (since $0$ qualifies) |
| In $[a, b]$ divisible by $d$ | $\lfloor b/d \rfloor - \lfloor (a-1)/d \rfloor$ |

**Trap:** "how many integers from $a$ to $b$" → $b - a + 1$, NOT $b - a$. Off-by-one almost guaranteed if rushed.

### Principle of Inclusion-Exclusion (PIE)

**Two sets:**
$$\lvert A \cup B\rvert = \lvert A\rvert + \lvert B\rvert - \lvert A \cap B\rvert$$

**Three sets:**
$$\lvert A \cup B \cup C\rvert = \lvert A\rvert + \lvert B\rvert + \lvert C\rvert - \lvert A \cap B\rvert - \lvert B \cap C\rvert - \lvert A \cap C\rvert + \lvert A \cap B \cap C\rvert$$

**"Divisible by $x$ or $y$" pattern:** for $A \cap B$, divisibility condition is $\text{lcm}(x, y)$ — NOT $xy$.

| $x, y$ | $\text{lcm}(x, y)$ | $A \cap B$ counts multiples of |
|--------|---------------------|-------------------------------|
| $2, 3$ | $6$ | $6$ |
| $2, 4$ | $4$ | $4$ (not $8$) |
| $6, 10$ | $30$ | $30$ (not $60$) |

### Permutations & Combinations — master table

| Quantity | Formula | Meaning |
|----------|---------|---------|
| $n!$ | $\prod_{i=1}^n i$ | permutations of $n$ **distinct** items |
| permutations w/ duplicates | $\dfrac{n!}{n_1! \cdot n_2! \cdots n_k!}$ | $n_i$ copies of type $i$, total $n$ |
| $P(n, k)$ | $\dfrac{n!}{(n-k)!} = \prod_{i=0}^{k-1}(n-i)$ | $k$-permutations of $n$ distinct (**order matters**) |
| $\binom{n}{k}$ | $\dfrac{n!}{k!(n-k)!}$ | combinations: choose $k$ from $n$ (**order doesn't matter**) |

**Identity:** $\binom{n}{k} = \binom{n}{n-k}$ (choosing $k$ to include ≡ choosing $n-k$ to exclude).

**Edge cases (define-by-convention to keep formulas consistent):**
- $0! = 1$
- $\binom{n}{0} = 1$ (one way to choose nothing — the empty set)
- $\binom{n}{n} = 1$
- $P(0, 0) = 1$ (the empty sequence)

### Stars and bars

For non-negative integer solutions to $x_1 + x_2 + \ldots + x_t = n$ with $x_i \geq 0$:
$$\binom{n + t - 1}{t - 1} = \binom{n + t - 1}{n}$$
**Visual:** lay out $n$ stars and $(t-1)$ bars in $n + t - 1$ slots; pick which slots are bars. Stars between bars give $x_i$ values.

### Block walking

Grid of $c$ columns × $r$ rows, only step up or right, bottom-left to top-right:
$$\binom{c + r}{r} = \binom{c + r}{c}$$
**Why:** total $r$ ups + $c$ rights = $c + r$ steps; choose which $r$ of those are ups (or equivalently which $c$ are rights).

### Counting subsets — by size

| Question | Formula |
|----------|---------|
| Size exactly $k$ | $\binom{n}{k}$ |
| Size at most $m$ | $\sum_{i=0}^{m} \binom{n}{i}$ |
| Size at least $m$ | $2^n - \sum_{i=0}^{m-1} \binom{n}{i}$ (complement faster than direct sum) |

### Constraint permutations — complement method

"Person X refuses to stand next to person Y" — count arrangements where they **ARE** adjacent, subtract from $n!$.

**Adjacency trick:** glue X+Y into a single block (with $2!$ internal orders) → outer arrangement is $(n-1)!$ → adjacent count $= 2 \cdot (n-1)!$ → answer $= n! - 2 \cdot (n-1)!$.

**Worked check ($n = 4$, X = Bob, Y = Dean):** $4! - 2 \cdot 3! = 24 - 12 = 12$.

### Bounds & approximations (sense of scale)

**Stirling's approximation:**
$$n! \sim \sqrt{2\pi n}\left(\frac{n}{e}\right)^n$$

**Binomial coefficient bounds:**
$$\left(\frac{n}{k}\right)^k \leq \binom{n}{k} \leq \left(\frac{n \cdot e}{k}\right)^k$$

**Use case:** lower-bounding the running time of "try all subsets" / "try all triplets" algorithms — leads to exponential-in-$n$ scaling, motivates better algorithms.

### Pre-submit sanity checks (Unit 6)

- **Disjoint check** before sum rule — pairwise, not just triple-wise
- **Order matters?** → $P(n, k)$, not $\binom{n}{k}$
- **lcm or product?** → for "divisible by both", always lcm
- **Off-by-one** on $b - a + 1$ — always $+1$ for inclusive range
- **Empty case sanity** — $0! = 1$, $\binom{n}{0} = 1$ (NOT zero)
- **"At least $m$"** — try complement ($2^n - \text{small sum}$) before computing direct sum

---

## Unit 7: Graph Theory

### Decision tree — what does the question want?

| Question shape | Tool |
|---------------|------|
| sum of degrees | Handshake: $\sum \deg(v) = 2\lvert E\rvert$ |
| edges in complete graph $K_n$ | $\binom{n}{2} = \frac{n(n-1)}{2}$ |
| min/max nodes in $k$-ary tree of height $h$ | min $h+1$, max $\frac{k^{h+1} - 1}{k-1}$ |
| "is this bipartite?" | check for **odd-length cycle** (presence ⟹ NOT bipartite) |
| "must there be ≥ 2 with same X?" | Pigeonhole: $\lceil n/m \rceil$ |
| edges in tree on $n$ vertices | $\lvert E\rvert = \lvert V\rvert - 1$ |

### Core definitions

| Term | Definition |
|------|-----------|
| Graph | $G = (V, E)$, $E \subseteq V \times V$ |
| Subgraph | $H = (V', E')$ with $V' \subseteq V$, $E' \subseteq E$ |
| Undirected | edges two-way: $(u,v) \in E \Leftrightarrow (v,u) \in E$ |
| Directed (digraph) | edges one-way (arrowheads) |
| Simple graph | no self-loops, no duplicate edges |
| Multigraph | duplicate edges OR self-loops allowed |

### Vertex & edge terminology

| Term | Definition |
|------|-----------|
| Degree $\deg(v)$ | # times $v$ appears as endpoint of some edge (undirected: don't double-count) |
| In-degree / Out-degree | for directed graphs |
| Path | sequence of **distinct** vertices, consecutive pairs edge-connected |
| Connected (vertices) | path exists between $u$ and $v$ |
| Connected (graph) | every pair of vertices connected |
| Connected component | **maximal** set of mutually-connected vertices (undirected) |
| Cycle | path where start = end, no repeats except start/end |

**Self-loop degree trap:** a self-loop $(C, C)$ contributes degree **2** to vertex $C$ (endpoint twice), even though it's one edge.

### Special graph types

| Type | Defining property |
|------|-------------------|
| **Tree** | connected + acyclic, equivalently $\lvert E\rvert = \lvert V\rvert - 1$ + connected |
| **Bipartite** | $V$ splits into disjoint $X, Y$; every edge crosses $X \leftrightarrow Y$ |
| **Complete $K_n$** | every pair of nodes has an edge; $\lvert E\rvert = \binom{n}{2}$ |
| **Complement $\bar{G}$** | same vertices, edges flipped: $(u,v) \in \bar{E} \Leftrightarrow (u,v) \notin E$. $E \cup \bar{E} = K_n$. |

**Bipartite test:** $G$ is bipartite ⟺ $G$ has **no odd-length cycle**. (Even-length cycles fine.)

### Tree terminology (rooted)

- **Root:** designated top node
- **Parent / Child:** edge direction "away from root" → parent → child
- **Leaf:** node with 0 children
- **Internal node:** node with ≥ 1 child
- **$k$-ary tree:** every node has at most $k$ children. Binary = 2-ary.
- Every non-root node has **exactly 1 parent**.

### Three core theorems

#### Theorem 1: Handshake Lemma
$$\sum_{v \in V} \deg(v) = 2 \cdot \lvert E\rvert$$
**Why:** each edge $(u,v)$ contributes $+1$ to $\deg(u)$ and $+1$ to $\deg(v)$ → contributes $2$ total.

**Corollary:** the number of odd-degree vertices is always even.

#### Theorem 2: Edges in $K_n$
$$\lvert E(K_n)\rvert = \binom{n}{2} = \frac{n(n-1)}{2}$$
**Two proofs:** (1) every pair forms one edge, so $\binom{n}{2}$. (2) every node has degree $n-1$, so $\sum \deg = n(n-1) = 2\lvert E\rvert$.

#### Theorem 3: Nodes in a $k$-ary tree of height $h$
- **Min nodes:** $h + 1$ (single chain root → leaf)
- **Max nodes:** $\frac{k^{h+1} - 1}{k - 1}$ (every internal node has all $k$ children — geometric series $1 + k + k^2 + \ldots + k^h$)

**Sanity check ($k = 3$, $h = 2$):** min $= 3$, max $= 1 + 3 + 9 = 13 = \frac{3^3 - 1}{2}$ ✓

### Pigeonhole Principle

$n$ pigeons in $m$ pigeonholes ⟹ some hole contains $\geq \lceil n/m \rceil$ pigeons.

**Setup pattern for proofs:**
1. Identify "pigeons" (objects to place)
2. Identify "pigeonholes" (categories/buckets)
3. Show $n > m \cdot k$ ⟹ some hole has $> k$ pigeons

**Example:** 6M people in Singapore, max 1M possible hair counts ⟹ ≥ $\lceil 6\text{M}/1\text{M} \rceil = 6$ people share a hair count.

### Pre-submit sanity checks (Unit 7)

- **Self-loop** contributes **2** to degree (endpoint twice)
- **Bipartite** ⟺ no odd cycle (even cycles are fine)
- **Tree edge count** is always $\lvert V\rvert - 1$ — easy verification
- **Handshake** always gives even sum — if your $\sum \deg$ is odd, you miscounted
- **Pigeonhole** gives a *lower bound* — "at least this many", not exact count

---

## Unit 8: Probability

### Decision tree — what's the question asking?

| Question shape | Tool |
|---------------|------|
| "probability of $A$ **or** $B$" (disjoint) | $\Pr[A] + \Pr[B]$ |
| "probability of $A$ **or** $B$" (general) | $\Pr[A] + \Pr[B] - \Pr[A \cap B]$ |
| "probability **NOT** $A$" | $1 - \Pr[A]$ |
| "probability of $A$ **given** $B$" | $\Pr[A \mid B] = \frac{\Pr[A \cap B]}{\Pr[B]}$ |
| only $\Pr[A]$, $\Pr[B]$, $\Pr[B \mid A]$ given | Bayes: $\Pr[A \mid B] = \frac{\Pr[B \mid A] \cdot \Pr[A]}{\Pr[B]}$ |
| events independent? | check $\Pr[A \cap B] = \Pr[A] \cdot \Pr[B]$ |
| "uniformly at random" (each outcome equal) | $\Pr[E] = \lvert E\rvert / \lvert \Omega\rvert$ |
| outcome from a sequence of choices | multiply edge probabilities along tree branch |

### Foundations: sample space, outcomes, events

| Term | Meaning |
|------|---------|
| **Sample space** $\Omega$ | set of all possible outcomes |
| **Outcome** $x$ | single element of $\Omega$, has $\Pr[x] \geq 0$ |
| **Event** $E$ | subset of $\Omega$, $\Pr[E] = \sum_{x \in E} \Pr[x]$ |
| **Uniform** | every outcome equally likely: $\Pr[x] = 1/\lvert \Omega\rvert$ |

**Axioms:**
- $\Pr[x] \geq 0$ for every outcome
- $\sum_{x \in \Omega} \Pr[x] = 1$
- Disjoint $A, B$: $\Pr[A \cup B] = \Pr[A] + \Pr[B]$
- Complement: $\Pr[\bar{A}] = \Pr[\Omega \setminus A] = 1 - \Pr[A]$

### Conditional probability

$$\Pr[A \mid B] = \frac{\Pr[A \cap B]}{\Pr[B]} \quad (\Pr[B] > 0)$$

**Visual intuition:** ratio of $\lvert A \cap B\rvert$ to $\lvert B\rvert$ — restrict the universe to $B$, then ask how much of $A$ lives in there.

**Rearranged (multiplication rule):** $\Pr[A \cap B] = \Pr[A \mid B] \cdot \Pr[B]$

### Bayes' Theorem

$$\Pr[A \mid B] = \frac{\Pr[B \mid A] \cdot \Pr[A]}{\Pr[B]}$$

**When to use:** problem gives you $\Pr[A]$, $\Pr[B \mid A]$, $\Pr[B]$ but NOT $\Pr[A \cap B]$ directly.

**Classic medical-test setup:** $A$ = "has condition", $B$ = "test positive"
- $\Pr[A]$ = base rate of condition
- $\Pr[B \mid A]$ = true positive rate (test sensitivity)
- $\Pr[B]$ = overall positive rate
- $\Pr[A \mid B]$ = "I tested positive — what's the chance I actually have it?"

**Test confusion matrix vocab:**

| Truth \\ Test | positive | negative |
|---------------|----------|----------|
| condition | True positive | False negative |
| no condition | False positive | True negative |

| Rate | Formula |
|------|---------|
| True positive rate (sensitivity) | $\Pr[B \mid A]$ |
| False negative rate | $\Pr[\bar{B} \mid A]$ |
| False positive rate | $\Pr[B \mid \bar{A}]$ |
| True negative rate (specificity) | $\Pr[\bar{B} \mid \bar{A}]$ |

### Table method (fast Bayes alternative)

When given counts/totals, draw a 2×2 table — every cell is just a count. Conditional probabilities read as **(target row ∩ given column) / (column total)**.

|  | Test + | Test − | Total |
|---|---|---|---|
| Actually + | 45 | 5 | 50 |
| Actually − | 190 | 760 | 950 |
| **Total** | 235 | 765 | 1000 |

- $\Pr[A] = 50/1000$
- $\Pr[B] = 235/1000$
- $\Pr[B \mid A] = 45/50$ (restrict to row "actually +")
- $\Pr[A \mid B] = 45/235$ (restrict to column "test +")

### Independence

**Definition (multiplicative form, easier to use):**
$$A, B \text{ independent} \iff \Pr[A \cap B] = \Pr[A] \cdot \Pr[B]$$

**Equivalent (conditional form):** $\Pr[A \mid B] = \Pr[A]$ — knowing $B$ doesn't change $A$'s probability.

**Trap — pairwise vs mutual:** events $D_1, D_2, D_3$ can be **pairwise independent** (every pair satisfies the rule) but NOT **mutually independent** (the triple-product fails). The 3-coin example: $C_3 = T$ iff $C_1 = C_2$. Here $D_1 \cap D_3$ independent, but $D_1 \cap D_2 \cap D_3 = \emptyset$ ≠ $1/8$.

**Always check both:** every pair AND the full intersection.

### Tree method for sequential outcomes

When the problem describes a sequence of choices (e.g., Monty Hall):
1. **Draw the tree:** each level = one stage; each branch = one outcome
2. **Tag edges with probabilities** (often conditional on the branch above)
3. **Multiply along a path** for that outcome's probability
4. **Sum across paths** for an event's probability

**Probabilities along a branch are conditional**, so multiplying = chain rule of probability.

### Pre-submit sanity checks (Unit 8)

- $0 \leq \Pr[\cdot] \leq 1$ — never negative, never $>1$
- $\Pr[\Omega] = 1$ and $\Pr[\emptyset] = 0$
- **Disjoint** before adding $\Pr[A] + \Pr[B]$ — otherwise PIE
- **Bayes** swaps the conditioning direction — easy to plug $\Pr[A \mid B]$ where $\Pr[B \mid A]$ goes
- **Independence ≠ disjoint** — disjoint events with non-zero prob are NEVER independent ($\Pr[A \cap B] = 0$ but $\Pr[A] \cdot \Pr[B] > 0$)
- **Pairwise vs mutual** independence — verify all subsets, not just pairs

---

## Unit 9: Distributions, Expectation, Variance

### Step 1 — identify the distribution (3 questions)

1. **Single trial, two outcomes?** → Bernoulli$(p)$
2. **Fixed $n$ trials, count successes?** → Binomial$(n, p)$ — verify BINS (Binary / Independent / Number fixed / Same $p$)
3. **Count trials until first success?** → Geometric$(p)$

If none match: likely Uniform (all outcomes equally likely), or distribution is unknown → use **bounds** (Markov / Chebyshev).

### Step 2 — distribution formulas

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
