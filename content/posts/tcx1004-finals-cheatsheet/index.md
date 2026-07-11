---
title: "TCX1004 | Finals Cheatsheet (All Units)"
slug: "nus-bit-tcx1004-finals-cheatsheet"
date: 2026-04-19
description: "Open-book cheatsheet for NUS TCX1004 Finals (Apr 30, 2026) — Logic & Proofs, Set Theory, Relations, Induction, Big-O, Combinatorics, Graph Theory, Probability, Distributions"
tags: ["nus", "math", "discrete-math", "cheatsheet", "tcx1004", "finals"]
categories:
  - ["Education", "NUS BIT", "TCX1004"]
toc: true
math: true
draft: false
---

> **TCX1004 (NUS Math Techniques) series:** [Notebook]({{< ref "tcx1004-notebook" >}}) · [Cheatsheet]({{< ref "tcx1004-cheatsheet" >}}) · **Finals cheatsheet (current)**

<div class="print-hide">

full unit-by-unit notes in the [TCX1004 notebook]({{< ref "tcx1004-notebook" >}}).

- **Exam:** Apr 30, 2026 · 17:00 · LT7A Seat 64 · **Open Book** · No calculators · 1.5h
- **Tested scope:** Unit 6+ (Combinatorics, Graph Theory, Probability, Distributions/Expectation/Variance) — *per current sprint inference*
- **Reference scope (this doc):** Units 1-9 (full module — Prof has not confirmed scope reduction; covering everything as insurance against scope surprise)
- **Note:** leave answers unsimplified.

</div>

## Unit 1: Logic & Proofs

### The 15 Rules of Deduction

| # | Rule | Pattern | Justification Format |
|---|------|---------|---------------------|
| 1 | Definition unpacking | Expand/contract a definition | [Unpacking definition of even(x)] |
| 2 | Logical equivalence | $\lnot(p \lor q) \equiv \lnot p \land \lnot q$ | [Logically equivalent to line N] |
| 3 | Basic algebra | $x + 5 = 12 \to x = 7$ | [By basic algebra from line N] |
| 4 | Specialisation | $p \land q \to p$ | [By specialisation on line N] |
| 5 | Conjunction | $p, \, q \to p \land q$ | [By conjunction on lines N and M] |
| 6 | Generalisation | $p \to p \lor q$ | [By generalisation on line N] |
| 7 | Proof by cases | $p \lor q$, each case $\to r$ | [Proof by cases on lines N, M.x, O.x] |
| 8 | Modus ponens | $p \to q, \, p \implies q$ | [By modus ponens on lines N and M] |
| 9 | Modus tollens | $p \to q, \, \lnot q \implies \lnot p$ | [By modus tollens on lines N and M] |
| 10 | Implication introduction | Assume $p$, derive $q \implies p \to q$ | [Implication introduction on lines N and N.x] |
| 11 | Double negation | $\lnot(\lnot p) \equiv p$ | [Double negation on line N] |
| 12a | Existential generalisation | $c \in A, \, P(c) \implies \exists x \in A \, [P(x)]$ | [Existential generalisation on lines N and M] |
| 12b | Existential instantiation | $\exists x \in A \, [P(x)] \implies$ Let $c \in A$ s.t. $P(c)$ | [Existential instantiation on line N] |
| 12c | Universal generalisation | arb $x \in A$, $P(x) \implies \forall x \in A \, [P(x)]$ | [Universal generalisation on lines N and M] |
| 12d | Universal instantiation | $\forall x \in A \, [P(x)], \, c \in A \implies P(c)$ | [Universal instantiation on lines N and M] |
| 13 | Using lemma | Apply a proven result | [By lemma] or [By Lemma X] |
| 14 | Contradiction | $a \land \lnot a \implies \bot$ | [Contradiction on line N] |
| 15 | Proof by contradiction | Assume $\lnot p$, derive $\bot \implies p$ | [Proof by contradiction on lines N and M] |

### Justification Patterns

**Format:** [By RULE_NAME on line(s) N] or [RULE_NAME on lines N and M]

| Lines needed | Pattern | Examples |
|-------------|---------|----------|
| Single line | on line N | Specialisation, generalisation, definition unpacking |
| Two lines | on lines N and M | Modus ponens, universal instantiation, conjunction |
| Multi-line | on lines N, M.x, O.x | Proof by cases (the OR + each case conclusion) |

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

### Common gotchas (Unit 1)

- **Use TCX1004 official rule names** — "Specialisation" not "Simplification", "Generalisation" not "Addition". Mismatched names lose marks even with correct logic.
- **Proof by cases citation needs every branch:** [Proof by cases on lines N, M.x, O.x] — cite the OR statement AND each case's conclusion.
- **Indentation = scope:** lines 1.1, 1.2 live INSIDE line 1's scope. Don't reference outside-scope lines without de-indenting.
- **Modus ponens vs modus tollens:** $p \to q, p \implies q$ (ponens) vs $p \to q, \lnot q \implies \lnot p$ (tollens). Don't swap.
- **Existential vs Universal instantiation:** existential needs "Let $c \in A$ be such that..." (introducing a witness). Universal just plugs in $c$.

### Cross-hooks

- Logic rules are the formal language of **all proof-based units** — set equality (Unit 2), induction (Unit 4), Big-O (Unit 5)
- **Definition unpacking** (Rule 1) is the most-used rule across all units — every formal proof starts with it
- **Proof by contradiction** (Rule 15) is the standard technique for impossibility proofs (Unit 7 handshake parity, Unit 6 PIE counterexamples)
- **Existential generalisation** (Rule 12a) is how you *prove* relations are non-empty / structures exist

### Sanity checks (Unit 1)

- Every line cites a rule with proper format [By RULE on line(s) N]?
- Used **TCX1004's** rule names (Rules 1-15), not generic logic textbook names?
- Indentation matches scope (1.1 inside 1's scope, etc.)?
- Final line has the conclusion you wanted to prove?
- For $\forall$ proofs: opened with "Let $x$ be arbitrary"?
- For $\exists$ proofs: provided a concrete witness?




## Unit 2: Set Theory

| Question shape | Tool |
|---------------|------|
| "is $A \subseteq B$?" | check $\forall x \in A \to x \in B$ |
| "is $A = B$?" | double subset: prove $A \subseteq B$ AND $B \subseteq A$ |
| "size of $\mathcal{P}(A)$ where $\lvert A\rvert = n$" | $2^n$ |
| "size of $A \times B$" | $\lvert A\rvert \cdot \lvert B\rvert$ |
| simplify nested set expression | apply distributive / De Morgan |
| set membership of nested object | distinguish $\in$ vs $\subseteq$ vs $\mathcal{P}$ |

### Notation primer:

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

### Sanity checks (Unit 2)

- Used double subset for "show $A = B$"? Both directions stated?
- $\in$ vs $\subseteq$ — re-read every membership claim
- Set-difference parenthesized?
- $\lvert \mathcal{P}(A)\rvert = 2^{\lvert A\rvert}$ — not $\lvert A\rvert^2$
- 🚨 **$A \times A$ enumeration:** list ALL combinations $(a, b)$ regardless of order. For $\lvert A\rvert = 3$, expect **9 pairs** (not 6). Common error: unconsciously skip pairs where first element > second. Systematic: fix first, iterate ALL seconds. (Past error: 2026-02-27.)



## Unit 3: Relations

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
- 🚨 **$R;R$ = EXACTLY 2-step chains** — NOT transitive closure. $(a,c) \in R;R \Leftrightarrow \exists b, (a,b), (b,c) \in R$. If chain is 3+ steps (e.g., $5 \to 6 \to 7 \to 8$), only the first 2-step is in $R;R$, the rest live in $R;R;R$ etc. (Past error: 2026-02-27.)
- 🚨 **"$R \subseteq A \times A$" ≠ "$R = A \times A$"** — $\subseteq$ means ANY subset, including $\emptyset$ and tiny ones. For "true for any $R \subseteq A \times A$" claims, **try smallest/emptiest $R$ as counterexample first**. (Past error: 2026-02-27.)

### Cross-hooks

- A graph edge set is a relation: $E \subseteq V \times V$ → **Unit 7** (graphs are special relations)
- Equivalence relations (reflexive + symmetric + transitive) partition the set — useful in counting equivalence classes (**Unit 6** combinatorics)

### Sanity checks (Unit 3)

- For "is $R$ reflexive?" — checked every element of $A$, not just ones appearing in $R$?
- Symmetric & anti-symmetric — checked separately, didn't assume opposites
- Composition $R; S$ — middle element exists in shared type?



## Unit 4: Induction & Recurrences



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

### Worked example — induction proof of $\sum_{i=1}^n i = \frac{n(n+1)}{2}$

**The claim:** for all integers $n \geq 1$, $\quad \sum_{i=1}^n i = \frac{n(n+1)}{2}$

**Why use induction?** The sum has variable upper bound $n$, and we want to prove it for *every* $n \geq 1$. Direct computation is impossible (infinite cases), so we induct on $n$.

**Step 1 — Base case ($n = 1$):** verify the smallest case directly.

LHS: $\sum_{i=1}^{1} i = 1$

RHS: $\frac{1 \cdot (1+1)}{2} = \frac{2}{2} = 1$

LHS $=$ RHS ✓ — base case holds.

**Step 2 — Inductive hypothesis (IH):** *assume* the claim holds for some specific value $n = k$ (where $k \geq 1$).

That is, **assume**: $\sum_{i=1}^{k} i = \frac{k(k+1)}{2}$

> **Important:** this is an ASSUMPTION, not a proven fact. We're saying "if it's true at $k$..."

**Step 3 — Inductive step:** prove the claim holds for $n = k+1$, *given the IH*.

The target is to show: $\sum_{i=1}^{k+1} i = \frac{(k+1)(k+2)}{2}$

> Why $(k+1)(k+2)/2$? Just plug $n = k+1$ into the original RHS: $\frac{(k+1)((k+1)+1)}{2} = \frac{(k+1)(k+2)}{2}$.

Start from LHS at $n = k+1$:

$$\sum_{i=1}^{k+1} i = \underbrace{\sum_{i=1}^{k} i}_{\text{this is the IH}} + (k+1)$$

> We pulled out the last term $(k+1)$ because the first $k$ terms exactly match the IH.

Apply IH (substitute $\frac{k(k+1)}{2}$ for the sum):

$$= \frac{k(k+1)}{2} + (k+1)$$

Factor out $(k+1)$ from both terms:

$$= (k+1) \cdot \left( \frac{k}{2} + 1 \right) = (k+1) \cdot \frac{k + 2}{2} = \frac{(k+1)(k+2)}{2}$$

This matches the target. ✓

**Step 4 — Conclusion:**

> "By the principle of induction, $\sum_{i=1}^n i = \frac{n(n+1)}{2}$ for all $n \geq 1$."

**Where this can go wrong:**
1. **Skipping base case** — proof invalid; cite it explicitly even if "obvious"
2. **Stating IH as fact** — must say "Assume that..." not "We have that..."
3. **Confusing $n$ (universal) with $k$ (the assumed specific value)** — keep them distinct
4. **Algebra error in factoring $(k+1)$** — write the factoring step out, don't skip
5. **Forgetting conclusion sentence** — "By induction, ..." closes the proof

### Worked example — strong induction proof of $S(n) \leq 2^n$ (stair climbing)

**The setup:** stair climbing recurrence — climb 1 or 2 stairs at a time. $S(n)$ = number of ways to climb $n$ stairs.

$$S(n) = S(n-1) + S(n-2), \quad S(1) = 1, \quad S(2) = 2$$

**The claim:** for all integers $n \geq 1$, $\quad S(n) \leq 2^n$.

**Why use STRONG induction (not weak)?** The recurrence $S(n) = S(n-1) + S(n-2)$ reaches back **2 steps**. To prove $P(k)$ we need both $P(k-1)$ AND $P(k-2)$ — weak induction (which only gives us $P(k-1)$) is insufficient. Strong induction lets us assume ALL prior $P(j)$ for $j < k$.

**Step 1 — Base cases:** since recurrence reaches back 2 steps, we need **2 base cases**.

$P(1)$: $S(1) = 1 \leq 2 = 2^1$ ✓

$P(2)$: $S(2) = 2 \leq 4 = 2^2$ ✓

**Step 2 — Inductive hypothesis (strong form):** for arbitrary $k \geq 3$, **assume** that $P(j)$ holds for ALL $j$ with $1 \leq j < k$.

That is, **assume**: $S(j) \leq 2^j$ for every $j \in \{1, 2, \ldots, k-1\}$.

> **Difference from weak induction:** weak only assumes $P(k-1)$. Strong assumes $P(1), P(2), \ldots, P(k-1)$ all together.

**Step 3 — Inductive step:** prove $S(k) \leq 2^k$.

Apply the recurrence:
$$S(k) = S(k-1) + S(k-2)$$

Apply IH to both $S(k-1)$ and $S(k-2)$ (both indices $< k$, so both covered by IH):
$$S(k) \leq 2^{k-1} + 2^{k-2}$$

Algebraic simplification — factor out $2^{k-2}$:
$$2^{k-1} + 2^{k-2} = 2 \cdot 2^{k-2} + 1 \cdot 2^{k-2} = 3 \cdot 2^{k-2}$$

Compare to target $2^k$:
$$2^k = 4 \cdot 2^{k-2}$$

Since $3 \leq 4$:
$$S(k) \leq 3 \cdot 2^{k-2} \leq 4 \cdot 2^{k-2} = 2^k \quad ✓$$

**Step 4 — Conclusion:**

> "By strong induction, $S(n) \leq 2^n$ for all $n \geq 1$."

**Where this can go wrong:**
1. **Only stating 1 base case** — strong induction with 2-step recurrence MUST have 2 base cases ($P(1), P(2)$). With 1 base, $k = 3$ inductive step would need $P(2)$ from base + $P(1)$ from IH; if $P(1)$ isn't a base, IH at $k = 3$ assumes $P(1), P(2)$ both, but $P(1)$ was never established → circular.
2. **Conflating weak and strong IH** — if you wrote "assume $P(k-1)$" instead of "assume $P(j)$ for all $j < k$", you can't apply IH to $S(k-2)$. Match the IH form to the recurrence's reach.
3. **Algebra error in factoring $2^{k-2}$** — write the factoring step explicitly; rushing gives $2^{k-1} + 2^{k-2} = 2^{k-1+k-2}$ (wrong, that's multiplication not addition).
4. **Forgetting strict inequality vs equality** — the bound is $\leq$, not $=$. Use $\leq$ consistently; $=$ is a stronger claim that requires a different proof structure.
5. **Wrong base case start** — if claim were "$S(n) \leq 2^n$ for $n \geq 3$", you'd need bases at $n = 3$ and $n = 4$, NOT $n = 1, 2$. Match base values to the claim's domain.

### Classic recurrences

| Recurrence | Closed form | Application |
|-----------|-------------|-------------|
| $T(n) = T(n-1) + 1, \, T(0) = 0$ | $T(n) = n$ | linear loop |
| $F(n) = n \cdot F(n-1), \, F(1) = 1$ | $F(n) = n!$ | factorial |
| $S(n) = S(n-1) + S(n-2), \, S(1) = 1, S(2) = 2$ | Fibonacci-shifted | stair climbing |
| $C(n) = C(\lceil n/2 \rceil) + 1, \, C(1) = 1$ | $C(n) = \lceil \log_2 n\rceil + 1$ | binary search |

### Telescoping sum identities (induction-friendly)

When sum has consecutive cancellation pattern, expand each term as a difference:
$$\frac{1}{r(r+1)} = \frac{1}{r} - \frac{1}{r+1}$$

**Telescoping sum:**
$$\sum_{r=1}^{n} \frac{1}{r(r+1)} = \sum_{r=1}^{n} \left(\frac{1}{r} - \frac{1}{r+1}\right) = 1 - \frac{1}{n+1} = \frac{n}{n+1}$$

**Use in induction:** if asked to prove a closed-form identity, partial-fraction expansion often makes the inductive step trivial (most terms cancel).

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

### Sanity checks (Unit 4)

- Stated base case explicitly?
- Inductive hypothesis stated *as an assumption*, not as a fact?
- For strong induction — number of bases matches step size?
- Conclusion sentence at the end ("By induction, ...")?
- For closed-form derivation — did you prove the closed form (not just guess)?


## Unit 5: Big-O & Asymptotic Analysis



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

### Logarithmic / divide-and-conquer recurrence pattern

For $M(n) = c \cdot M(\lfloor n/b \rfloor) + f(n)$ with $b \geq 2$ (typical: $b = 2$ for binary search / merge sort):

**Algebra simplifications you'll need:**
- $\lfloor n/b \rfloor \leq n/b$ (drop floor for upper bound)
- $\log_b(n/b) = \log_b n - 1$ (log of quotient)
- $\log_b(\lfloor n/b \rfloor) \leq \log_b(n/b) = \log_b n - 1$

**Worked pattern (T4 Q4):** $M(n) = 2 M(\lfloor n/2 \rfloor) + n$. Guess $M(n) \leq c \cdot n \log_2 n$. Inductive step:

$$M(n) \leq 2 \cdot c \cdot \tfrac{n}{2} \log_2(\tfrac{n}{2}) + n = c \cdot n (\log_2 n - 1) + n = c \cdot n \log_2 n - cn + n \leq c \cdot n \log_2 n \quad (c \geq 1)$$

Conclusion: $M(n) \in O(n \log n)$.

**Key trick:** the $-cn + n$ term must absorb (i.e., $cn \geq n$ → $c \geq 1$). This is the "tighten constant to absorb slack" rule.

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

### Sanity checks (Unit 5)

- $O$, $\Omega$, $\Theta$ — gave the *tightest* one when possible?
- Substitution conclusion form matches assumption form?
- Constants in front (e.g., $5n^2$) — dropped per polynomial bound?
- Function comparison — used the ladder, not gut feeling?
- Loop invariant — stated all 3 parts?



## Unit 6: Combinatorics


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

**General PIE for $n$ sets:**
$$\left\lvert \bigcup_{i=1}^{n} A_i \right\rvert = \sum_{k=1}^{n} (-1)^{k+1} \sum_{1 \leq i_1 < i_2 < \ldots < i_k \leq n} \lvert A_{i_1} \cap A_{i_2} \cap \ldots \cap A_{i_k}\rvert$$

**Reading the formula:** alternating signs by intersection-size $k$ — singles add (+), pairs subtract (−), triples add (+), quadruples subtract (−), etc. Last term has sign $(-1)^{n+1}$.

**4-set explicit form:**
$$\lvert A \cup B \cup C \cup D\rvert = \sum \lvert A_i\rvert - \sum_{i<j} \lvert A_i \cap A_j\rvert + \sum_{i<j<k} \lvert A_i \cap A_j \cap A_k\rvert - \lvert A \cap B \cap C \cap D\rvert$$

**Term count:** for $n$ sets, there are $\binom{n}{1} + \binom{n}{2} + \ldots + \binom{n}{n} = 2^n - 1$ total terms (every non-empty subset of indices contributes one).

**"Divisible by $x$ or $y$" pattern:** for $A \cap B$, divisibility condition is $\text{lcm}(x, y)$ — NOT $xy$.

| $x, y$ | $\text{lcm}(x, y)$ | $A \cap B$ counts multiples of |
|--------|---------------------|-------------------------------|
| $2, 3$ | $6$ | $6$ |
| $2, 4$ | $4$ | $4$ (not $8$) |
| $6, 10$ | $30$ | $30$ (not $60$) |

### Worked example — 3-set PIE (food popularity contest)

**The problem:** at a food popularity contest, voters can vote for any combination of three options: $A$ = Lor Mee, $B$ = Nasi Lemak, $C$ = Chicken Rice. Each voter must pick at least one. We collected:

| Vote category | Count |
|---|---|
| Voted for $A$ (possibly + others) | $\lvert A\rvert = 10$ |
| Voted for $B$ (possibly + others) | $\lvert B\rvert = 7$ |
| Voted for $C$ (possibly + others) | $\lvert C\rvert = 9$ |
| Voted for both $A$ AND $B$ | $\lvert A \cap B\rvert = 3$ |
| Voted for both $A$ AND $C$ | $\lvert A \cap C\rvert = 5$ |
| Voted for both $B$ AND $C$ | $\lvert B \cap C\rvert = 2$ |
| Voted for all three | $\lvert A \cap B \cap C\rvert = 1$ |

**Find:** total number of voters surveyed (i.e., $\lvert A \cup B \cup C\rvert$).

**Why use PIE (not sum rule):** the three sets are NOT disjoint — some voters appear in 2 or 3 sets. Direct sum $\lvert A\rvert + \lvert B\rvert + \lvert C\rvert$ would double/triple-count overlaps. PIE corrects for this.

**Apply 3-set PIE formula:**

$$\lvert A \cup B \cup C\rvert = \lvert A\rvert + \lvert B\rvert + \lvert C\rvert - \lvert A \cap B\rvert - \lvert A \cap C\rvert - \lvert B \cap C\rvert + \lvert A \cap B \cap C\rvert$$

**Plug in values:**
$$\lvert A \cup B \cup C\rvert = 10 + 7 + 9 - 3 - 5 - 2 + 1$$

**Compute step-by-step (no calc):**
- $10 + 7 + 9 = 26$ (singles)
- $3 + 5 + 2 = 10$ (pairs subtract)
- $26 - 10 = 16$ (after subtracting double-counts)
- $16 + 1 = 17$ (add back the triple-counted center)

**Answer:** $\lvert A \cup B \cup C\rvert = 17$ voters.

**Visual sanity (Venn diagram intuition):**
- Add 3 single circles → triple intersection counted 3×, pair regions counted 2×
- Subtract 3 pair intersections → triple intersection now counted $3 - 3 = 0$×
- Add back triple intersection → counted exactly 1×

Each region appears exactly once in the final count. ✓

**Where this can go wrong:**
1. **Sign error:** PIE alternates $+, -, +$ for $\binom{n}{1}, \binom{n}{2}, \binom{n}{3}$. Last term ($n=3$, sign $(-1)^{n+1} = +$) is **add**, not subtract. Re-check.
2. **Missing the +$\lvert A \cap B \cap C\rvert$ term:** if you only do 2-set PIE applied 3 times, you under-count. The triple intersection MUST be added back.
3. **Confusing "voted for both A AND B" with "voted ONLY for both A AND B":** here we treat the given $\lvert A \cap B\rvert = 3$ as the FULL pairwise intersection (people who voted for at least both A and B, possibly + C). If the problem said "exactly A and B (not C)", that'd be $\lvert A \cap B\rvert - \lvert A \cap B \cap C\rvert = 3 - 1 = 2$ — different number.
4. **Forgetting "must vote for at least one":** if voters could vote for nothing, you'd need $\lvert$ universe $\rvert$ separately. Here every voter is in $A \cup B \cup C$, so total voters = union size.

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

### Circular permutations

For $n$ distinct objects arranged in a **circle** (rotations equivalent):
$$\text{circular arrangements} = (n - 1)!$$

**Why:** linear count is $n!$; in a circle, $n$ rotations of any arrangement look identical → divide by $n$.

**If reflections also equivalent** (clockwise = counter-clockwise — e.g., necklaces, undirected seating):
$$\frac{(n - 1)!}{2}$$

**Use cases:** seating around round table (Q: $(n-1)!$), beads on a necklace (necklace = $(n-1)!/2$), counting cycles in graphs (see Unit 7).

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

### Common gotchas (Unit 6)

- **Pairwise vs triple-wise disjoint:** for sum rule, every PAIR must be disjoint, not just the triple intersection $A \cap B \cap C = \emptyset$ alone.
- **Order matters trap:** $P(n,k)$ vs $\binom{n}{k}$ — re-read the question for "arrange" / "order" / "sequence" (= P) vs "choose" / "select" / "subset" (= C).
- **lcm not product** for "divisible by both $x$ and $y$" — $\text{lcm}(2, 4) = 4$ not $8$.
- **Off-by-one** on inclusive ranges: integers in $[a, b]$ = $b - a + 1$ (always $+1$).
- **Empty case conventions:** $0! = 1$, $\binom{n}{0} = 1$, $P(0, 0) = 1$ (NOT zero).
- **Stars and bars sign error:** for $x_i \geq 0$ summing to $n$, formula is $\binom{n + t - 1}{t - 1}$ — $(t-1)$ bars, NOT $t$ bars.
- **"At least $m$" complement faster:** $2^n - \sum_{i<m} \binom{n}{i}$ usually beats direct summation $\sum_{i \geq m} \binom{n}{i}$.

### Cross-hooks

- Set ops (Unit 2) underpin **PIE** (sum/union of disjoint cases)
- **Permutations of $n$ distinct items** = $n!$ ↔ **circular** = $(n-1)!$ ↔ **cycle counting in $K_n$** (Unit 7)
- $\binom{n}{2}$ = number of edges in complete graph $K_n$ (Unit 7)
- Stirling / binomial bounds = **Big-O sense of scale** for combinatorial algorithms (Unit 5)
- Combinatorial identities (e.g., $\binom{n}{k} = \binom{n}{n-k}$) often proven by **induction** (Unit 4)

### Sanity checks (Unit 6)

- **Disjoint check** before sum rule — pairwise, not just triple-wise
- **Order matters?** → $P(n, k)$, not $\binom{n}{k}$
- **lcm or product?** → for "divisible by both", always lcm
- **Off-by-one** on $b - a + 1$ — always $+1$ for inclusive range
- **Empty case sanity** — $0! = 1$, $\binom{n}{0} = 1$ (NOT zero)
- **"At least $m$"** — try complement ($2^n - \text{small sum}$) before computing direct sum


## Unit 7: Graph Theory

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

**Corollary 1:** the number of **odd-degree vertices** is always even.

**Corollary 2 (parity impossibility — T5 Q3 pattern):** if a question gives degree-sequence $(d_1, \ldots, d_n)$, compute $\sum d_i$. **If odd, the graph CANNOT exist** — handshake forces even sum. Common impossibility test:
- "Can 7 people each shake hands with exactly 5 others?" → $\sum = 35$ (odd) → **impossible**.

#### Theorem 2: Edges in $K_n$
$$\lvert E(K_n)\rvert = \binom{n}{2} = \frac{n(n-1)}{2}$$
**Two proofs:** (1) every pair forms one edge, so $\binom{n}{2}$. (2) every node has degree $n-1$, so $\sum \deg = n(n-1) = 2\lvert E\rvert$.

#### Theorem 3: Nodes in a $k$-ary tree of height $h$
- **Min nodes:** $h + 1$ (single chain root → leaf)
- **Max nodes:** $\frac{k^{h+1} - 1}{k - 1}$ (every internal node has all $k$ children — geometric series $1 + k + k^2 + \ldots + k^h$)

**Sanity check ($k = 3$, $h = 2$):** min $= 3$, max $= 1 + 3 + 9 = 13 = \frac{3^3 - 1}{2}$ ✓

### Cycle counting in a complete graph $K_n$

**Number of distinct $k$-cycles in $K_n$** (for $3 \leq k \leq n$):
$$\binom{n}{k} \cdot \frac{(k-1)!}{2}$$

**Decomposition:**
- $\binom{n}{k}$ — choose which $k$ vertices form the cycle
- $(k-1)!$ — arrange them in a circle (circular permutation, see Unit 6)
- $\div 2$ — undirected: clockwise ≡ counter-clockwise

**Total cycles in $K_n$ (sum over all sizes):**
$$\sum_{k=3}^{n} \binom{n}{k} \cdot \frac{(k-1)!}{2}$$

**Sanity check ($n = 4$, $k = 3$):** $\binom{4}{3} \cdot \frac{2!}{2} = 4 \cdot 1 = 4$ triangles in $K_4$ ✓

### Pigeonhole Principle

$n$ pigeons in $m$ pigeonholes ⟹ some hole contains $\geq \lceil n/m \rceil$ pigeons.

**Setup pattern for proofs:**
1. Identify "pigeons" (objects to place)
2. Identify "pigeonholes" (categories/buckets)
3. Show $n > m \cdot k$ ⟹ some hole has $> k$ pigeons

**Example:** 6M people in Singapore, max 1M possible hair counts ⟹ ≥ $\lceil 6\text{M}/1\text{M} \rceil = 6$ people share a hair count.

### Common gotchas (Unit 7)

- **Self-loop counts twice in degree:** edge $(v, v)$ contributes degree 2 to vertex $v$ (endpoint twice), even though it's one edge.
- **Reflexive ≠ "every loop in $R$":** for graphs as relations on $V$, reflexive means every vertex has a self-loop; missing one fails reflexivity.
- **Bipartite ≠ NO cycles** — bipartite means no **odd-length** cycles. Even cycles are fine.
- **Odd-degree count is always even** (Handshake corollary): if you count odd-degree vertices and get an odd number, you miscounted edges.
- **Tree edge count is rigid:** $\lvert E\rvert = \lvert V\rvert - 1$. If counts disagree, structure is NOT a tree (has cycle or disconnected).
- **$k$-ary "max" tree formula assumes full saturation:** every internal node has all $k$ children. Real trees often hit fewer; the formula is an upper bound.
- **Pigeonhole gives lower bound only:** "at least $\lceil n/m \rceil$" — actual count could be higher; don't claim equality.

### Cross-hooks

- Graph edge set $E \subseteq V \times V$ is a **relation on $V$** (Unit 3) — undirected = symmetric, simple = no self-loops + no duplicate, etc.
- **Cycle counting in $K_n$** uses **circular permutations** + **combinations** (Unit 6)
- **Pigeonhole** applies anywhere with bounded categories — combinatorics, probability, distributions
- **Tree node-count bounds** ($\frac{k^{h+1} - 1}{k-1}$) come from **geometric series** = **induction** (Unit 4)
- **Handshake parity** is a 1-line proof using $\sum$ counting — same flavor as combinatorial identities (Unit 6)

### Sanity checks (Unit 7)

- **Self-loop** contributes **2** to degree (endpoint twice)
- **Bipartite** ⟺ no odd cycle (even cycles are fine)
- **Tree edge count** is always $\lvert V\rvert - 1$ — easy verification
- **Handshake** always gives even sum — if your $\sum \deg$ is odd, you miscounted
- **Pigeonhole** gives a *lower bound* — "at least this many", not exact count


## Unit 8: Probability



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

### Law of Total Probability + Extended Bayes

**Decomposition (foundation):** for any events $A, B$, the set $B$ splits into two disjoint pieces along $A$:
$$B = (B \cap A) \cup (B \cap \bar{A}) \quad \text{(disjoint)}$$

**Law of Total Probability:**
$$\Pr[B] = \Pr[B \mid A] \cdot \Pr[A] + \Pr[B \mid \bar{A}] \cdot \Pr[\bar{A}]$$

**Extended Bayes (substitute LoTP into the denominator):**
$$\Pr[A \mid B] = \frac{\Pr[B \mid A] \cdot \Pr[A]}{\Pr[B \mid A] \cdot \Pr[A] + \Pr[B \mid \bar{A}] \cdot \Pr[\bar{A}]}$$

**When to use:**
- You DON'T know $\Pr[B]$ directly, but DO know $\Pr[B \mid A]$ and $\Pr[B \mid \bar{A}]$
- Asked to find a "false positive rate" given other rates (rearrange extended Bayes for $\Pr[B \mid \bar{A}]$)

**Proof template (T6Q2.1 pattern):**
1. $(B \cap A) \cup (B \cap \bar{A}) = B$ (decomposition fact)
2. Apply $\Pr[A \mid B] = \frac{\Pr[A \cap B]}{\Pr[B]}$
3. Replace numerator: $\Pr[A \cap B] = \Pr[B \mid A] \cdot \Pr[A]$ (multiplication rule)
4. Replace denominator: $\Pr[B] = \Pr[(B \cap A) \cup (B \cap \bar{A})] = \Pr[B \cap A] + \Pr[B \cap \bar{A}]$ (disjoint sum)
5. Apply multiplication rule to each: $\Pr[B \cap A] = \Pr[B \mid A] \Pr[A]$ and $\Pr[B \cap \bar{A}] = \Pr[B \mid \bar{A}] \Pr[\bar{A}]$

### Worked example — Bayes + LoTP rearrange (T6Q2.2 disease test)

**The problem:**
- Disease $F$ affects $1$ in every $1000$ people in the city
- A test, when administered to a positive person, reports "positive" $85\%$ of the time
- Among everyone tested (positive or not), the test reports "positive" $10\%$ of the time
- **Find:** if a person doesn't have the disease, what's the chance the test reports positive? (i.e., the **false positive rate**)

**Translate the problem into events + probabilities:**

Let $A$ = "person has disease", $B$ = "test reports positive".

| English | Symbol | Value |
|---------|--------|-------|
| 1 in 1000 has disease | $\Pr[A]$ | $0.001$ |
| Test catches positive person | $\Pr[B \mid A]$ | $0.85$ |
| Overall positive rate | $\Pr[B]$ | $0.1$ |
| **WANT** false positive rate | $\Pr[B \mid \bar{A}]$ | ? |

**Why basic Bayes alone won't work:**

Basic Bayes gives $\Pr[A \mid B] = \frac{\Pr[B \mid A] \cdot \Pr[A]}{\Pr[B]}$ — that's the wrong direction. We need $\Pr[B \mid \bar{A}]$ (test reports positive **given** no disease).

We need a relation that **contains** $\Pr[B \mid \bar{A}]$ as one of the unknowns and lets us solve for it.

**Use Law of Total Probability (LoTP):**

$$\Pr[B] = \Pr[B \mid A] \cdot \Pr[A] + \Pr[B \mid \bar{A}] \cdot \Pr[\bar{A}]$$

> **Why this works:** the event $B$ partitions into "$B$ AND has disease" plus "$B$ AND no disease". Sum the probabilities — these two pieces are disjoint and cover all of $B$.

This equation has **one unknown** $\Pr[B \mid \bar{A}]$ — solve for it.

**Step 1 — compute $\Pr[\bar{A}]$ using complement rule:**

$$\Pr[\bar{A}] = 1 - \Pr[A] = 1 - 0.001 = 0.999$$

**Step 2 — substitute knowns into LoTP:**

$$0.1 = (0.85)(0.001) + \Pr[B \mid \bar{A}] \cdot (0.999)$$

**Step 3 — isolate $\Pr[B \mid \bar{A}]$ algebraically:**

Subtract $(0.85)(0.001) = 0.00085$ from both sides:
$$0.1 - 0.00085 = \Pr[B \mid \bar{A}] \cdot 0.999$$
$$0.09915 = \Pr[B \mid \bar{A}] \cdot 0.999$$

Divide both sides by $0.999$:
$$\Pr[B \mid \bar{A}] = \frac{0.09915}{0.999}$$

**Leave unsimplified** (no calc) — that's the final answer. (Numerical: $\approx 0.09925$, or $\approx 9.93\%$ false positive rate.)

**Sanity check:**
- False positive rate ~10% — close to the overall positive rate (also 10%), since most people don't have the disease, so the overall rate is dominated by tests on $\bar{A}$ folks. Makes sense.
- The disease is rare ($0.1\%$) but the test still flags 10% of healthy people as positive — that's why the chance you actually have the disease given a positive test is so low (~0.85% from Part 1).

**Where this can go wrong:**
1. **Bayes direction confusion** — confusing "test positive given disease" $\Pr[B \mid A]$ with "disease given test positive" $\Pr[A \mid B]$. Re-read which one is the **GIVEN** (the conditioning side, after the bar).
2. **Forgetting $\Pr[\bar{A}] = 1 - \Pr[A]$** — easy to leave $\Pr[\bar{A}]$ as a separate unknown.
3. **Not realizing LoTP can be REARRANGED to solve for $\Pr[B \mid \bar{A}]$** — the equation has 4 quantities; if you know 3, you solve for the 4th.
4. **Plugging $\Pr[A]$ in place of $\Pr[\bar{A}]$** — pay attention to which probability is being multiplied.

### Sandwich complement heuristic

For "$a < X < b$" or "$X \in [a, b]$" type events with awkward direct computation, use the complement:
$$\Pr[a < X < b] = 1 - \Pr[X \leq a] - \Pr[X \geq b]$$
or equivalently $1 - \Pr[(X \leq a) \cup (X \geq b)]$ since the two halves are disjoint.

**Use when:** the bounded event spans multiple values but the two outside ranges are easier to enumerate.

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

### Common gotchas (Unit 8)

- **Independence ≠ disjoint** — these are OPPOSITES at non-zero probability. Disjoint $A \cap B = \emptyset$ → $\Pr[A \cap B] = 0$, but independence wants $\Pr[A] \cdot \Pr[B] > 0$.
- **Bayes direction confusion:** $\Pr[A \mid B]$ vs $\Pr[B \mid A]$ — the "given" condition determines the denominator. Re-read every conditional bar.
- **Pairwise vs mutual independence:** events can be pairwise independent but NOT mutually independent (3-coin example: $D_1, D_2, D_3$). Always check all subsets.
- **Disjoint required for sum:** $\Pr[A \cup B] = \Pr[A] + \Pr[B]$ ONLY when disjoint. General case needs PIE: $-\Pr[A \cap B]$.
- **LoTP requires partition:** $\Pr[B] = \Pr[B \mid A]\Pr[A] + \Pr[B \mid \bar{A}]\Pr[\bar{A}]$ uses $A, \bar{A}$ as a 2-partition. For 3+ partition, sum over all parts.
- **Tree-method conditional probabilities:** edges from a node have probabilities **conditional on reaching that node** — they sum to 1 from each branching point, not over the whole tree.
- **Probability outside $[0, 1]$** = arithmetic error somewhere upstream.

### Cross-hooks

- Sample space $\Omega$ = a **set** (Unit 2); events = subsets of $\Omega$
- "Counting outcomes uniformly" → $\Pr[E] = \lvert E\rvert / \lvert \Omega\rvert$ uses **combinatorics** (Unit 6) for $\lvert E\rvert$
- Conditional probability formalism feeds **distribution definitions** (Unit 9)
- Bayes' Theorem proof = chain rule + LoTP — induction-flavored derivation (Unit 4 style)
- Independence multiplicative form $\Pr[A \cap B] = \Pr[A]\Pr[B]$ ↔ **$E[XY] = E[X]E[Y]$** for independent random variables (Unit 9)

### Sanity checks (Unit 8)

- $0 \leq \Pr[\cdot] \leq 1$ — never negative, never $>1$
- $\Pr[\Omega] = 1$ and $\Pr[\emptyset] = 0$
- **Disjoint** before adding $\Pr[A] + \Pr[B]$ — otherwise PIE
- **Bayes** swaps the conditioning direction — easy to plug $\Pr[A \mid B]$ where $\Pr[B \mid A]$ goes
- **Independence ≠ disjoint** — disjoint events with non-zero prob are NEVER independent ($\Pr[A \cap B] = 0$ but $\Pr[A] \cdot \Pr[B] > 0$)
- **Pairwise vs mutual** independence — verify all subsets, not just pairs


## Unit 9: Distributions, Expectation, Variance

### Step 1 — identify the distribution (3 questions)

1. **1 trial, 2 outcomes?** → Bernoulli$(p)$
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

### Linearity of Expectation & Variance rules

**Sum (always — even if dependent):**
$$E[X + Y] = E[X] + E[Y]$$

**Sum (only if INDEPENDENT):**
$$E[X \cdot Y] = E[X] \cdot E[Y]$$
$$\text{Var}[X + Y] = \text{Var}[X] + \text{Var}[Y]$$

**Scaling (constant multiplier $a$):**
$$E[aX] = a \cdot E[X]$$
$$\text{Var}[aX] = a^2 \cdot \text{Var}[X] \quad \text{(squared!)}$$

**Variance ↔ second moment identity:**
$$\text{Var}[X] = E[X^2] - (E[X])^2 \quad \Longleftrightarrow \quad E[X^2] = \text{Var}[X] + (E[X])^2$$

**Bernoulli special case:** $Z \in \{0, 1\}$ ⟹ $Z^2 = Z$ ⟹ $E[Z^2] = E[Z] = p$ (matches $\text{Var}[Z] + p^2 = p(1-p) + p^2 = p$).

### Indicator variable pattern (sum of Bernoullis)

When $X$ counts "how many of $n$ events happened", decompose:
$$X = \sum_{i=1}^{n} X_i \quad \text{where } X_i = \begin{cases} 1 & \text{if event } i \text{ occurs} \\ 0 & \text{otherwise} \end{cases}$$

Each $X_i \sim \text{Bernoulli}(p_i)$, so by linearity:
$$E[X] = \sum_{i=1}^{n} p_i$$

**Critical property:** linearity of expectation works **even when $X_i$ are dependent**. So you can use this even for events that "interact" (e.g., balls-in-bins, fixed points of permutations).

### Worked example — bins-and-balls expectation + Markov bound (T6Q4)

**The problem:** throw $n$ balls into $n$ bins. Each ball lands in any specific bin with probability $\frac{1}{n}$, independently of other balls. Let $X$ = number of balls landing in **bin 1**.

Find: (1) $E[X]$, and (2) a bound for $\Pr[X > a]$.

**Why decompose into indicators:**

Computing $E[X]$ directly via PMF would require summing $\sum_{k=0}^{n} k \cdot \Pr[X = k]$ — messy. Instead, decompose $X$ into a sum of simple indicators.

**Set up indicator variables:**

For each ball $i \in \{1, \ldots, n\}$, define:

$$X_i = \begin{cases} 1 & \text{if ball } i \text{ lands in bin 1} \\ 0 & \text{otherwise} \end{cases}$$

Then $X = \sum_{i=1}^{n} X_i$ — count of balls in bin 1 = sum of indicators.

> **What kind of distribution does $X_i$ have?** Single trial, two outcomes (lands or doesn't). So $X_i \sim \text{Bernoulli}(p)$ where $p = \Pr[\text{ball } i \text{ lands in bin 1}] = \frac{1}{n}$.

**Recall:** for $Y \sim \text{Bernoulli}(p)$, $E[Y] = p$.

**Step 1 — Apply linearity of expectation to find $E[X]$:**

$$E[X] = E\left[\sum_{i=1}^{n} X_i\right] = \sum_{i=1}^{n} E[X_i]$$

> **Linearity is unconditional** — works whether or not the $X_i$ are independent. (In this problem they happen to be independent, but the rule doesn't care.)

Each $E[X_i] = \frac{1}{n}$ (Bernoulli mean):

$$E[X] = \sum_{i=1}^{n} \frac{1}{n} = n \cdot \frac{1}{n} = 1$$

**Sanity:** by symmetry, on average each of the $n$ bins gets $\frac{n \text{ balls}}{n \text{ bins}} = 1$ ball. ✓

**Alternative observation (for understanding):** $X$ actually follows $\text{Binomial}(n, 1/n)$ since it's a sum of $n$ i.i.d. Bernoullis with the same parameter. Direct formula gives $E[X] = np = n \cdot \frac{1}{n} = 1$. Same answer.

**Step 2 — Find a bound for $\Pr[X > a]$:**

Markov's inequality requires $X \geq 0$. Here $X$ is a count (number of balls), so $X \geq 0$ always. ✓

Markov bound:
$$\Pr[X \geq a] \leq \frac{E[X]}{a} = \frac{1}{a}$$

> **The question asks for $\Pr[X > a]$ (strict), but Markov gives $\Pr[X \geq a]$ (non-strict).** Since $\{X > a\} \subseteq \{X \geq a\}$ (every outcome with $X > a$ also has $X \geq a$):
$$\Pr[X > a] \leq \Pr[X \geq a] \leq \frac{1}{a}$$

So the answer is: $\Pr[X > a] \leq \frac{1}{a}$.

**Sanity check:** for $a = 5$, the bound says $\Pr[X \geq 5] \leq 0.2$ — i.e., at most 20% chance bin 1 has 5+ balls. Reasonable for $E[X] = 1$.

**Where this can go wrong:**
1. **Trying to compute $E[X]$ via Binomial PMF directly** — slower, error-prone, defeats the lesson
2. **Forgetting that linearity works without independence** — students often hesitate when $X_i$ might be dependent. Linearity doesn't care.
3. **Forgetting Markov needs $X \geq 0$** — doesn't apply to signed RVs (e.g., gain/loss)
4. **Confusing $\Pr[X > a]$ with $\Pr[X \geq a]$** — Markov gives the latter; the former is bounded **by** the latter
5. **Plugging $E[X] = n$ instead of $1$** — common arithmetic slip

### Variable legend (don't confuse under pressure)

| Symbol | Source | Role |
|--------|--------|------|
| $\mu$ | $E[X]$ from question | center |
| $\text{Var}[X]$ | from question | spread$^2$ |
| $\sigma$ | $= \sqrt{\text{Var}[X]}$ (derived) | std dev — appears in $1/k^2$ form only |
| $a$ | threshold inside $P[\lvert X - \mu \rvert \geq a]$ | denominator (squared) |
| $k$ | $= a/\sigma$ | $\sigma$-multiples in alternate form |

$a$ and $\sigma$ are different variables even when they share a numeric value.

### Common gotchas (Unit 9)

- **$E$ vs $\text{Var}$ scaling:** $E[aX] = a \cdot E[X]$ but $\text{Var}[aX] = a^2 \cdot \text{Var}[X]$ — squared, not linear.
- **$E[XY]$ requires independence:** $E[X+Y] = E[X] + E[Y]$ is ALWAYS true, but $E[XY] = E[X]E[Y]$ ONLY when $X, Y$ independent.
- **$\text{Var}[X+Y]$ requires independence:** general $\text{Var}[X+Y] = \text{Var}[X] + \text{Var}[Y] + 2\text{Cov}[X,Y]$; covariance vanishes only for independent vars.
- **Chebyshev variable confusion:** $a$ (threshold) and $\sigma$ (std dev) are different variables even when sharing a numeric value. Plug carefully.
- **Markov needs $X \geq 0$:** doesn't apply to signed random variables.
- **Geometric variance formula:** $(1-p)/p^2$ — easy to forget the squared denominator.
- **Indicator pattern works for dependent $X_i$ too:** linearity of expectation is unconditional. Use it freely for "count events" problems.
- **$E[X^2] \neq (E[X])^2$:** by definition, $\text{Var}[X] = E[X^2] - (E[X])^2 \geq 0$, so $E[X^2] \geq (E[X])^2$ with equality only when $\text{Var}[X] = 0$.

### Cross-hooks

- Distributions are **named random variables** (Unit 8 RVs with specific PMFs)
- Bernoulli + Binomial connect to **combinatorics** (Unit 6) — Binomial PMF uses $\binom{n}{k}$
- **Indicator variable pattern** decomposes a count into sum of Bernoullis — heavy use in graph-theory expectations (Unit 7) and combinatorial probabilistic arguments
- Chebyshev / Markov bounds are the "distribution-free" tail bounds — used when distribution is unknown but moments are known
- $E[X^2] = \text{Var}[X] + (E[X])^2$ identity often shortcuts variance computation for Bernoulli-like vars

### Sanity checks (Unit 9)

- probability $\in [0, 1]$ — never negative
- $E[X] \in [\min X, \max X]$ — NOT bounded by $[0, 1]$
- re-add arithmetic on 1-mark questions
- plugged $a$ (threshold) or $\sigma$ (std dev)? they are different
- Chebyshev monotonicity: larger $a$ → smaller bound. if bound grew, you plugged wrong.
- $\text{Var}[aX] = a^2 \text{Var}[X]$ — squared coefficient
- $E[XY] = E[X]E[Y]$ — only if independent

## Quick Numerical Reference (no-calc cheats)

### Powers of 2

| $n$ | $2^n$ |
|---|---|
| 0 | 1 |
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |
| 5 | 32 |
| 6 | 64 |
| 7 | 128 |
| 8 | 256 |
| 9 | 512 |
| 10 | 1024 |
| 12 | 4096 |
| 16 | 65536 |
| 20 | 1 048 576 (~1M) |
| 32 | ~4.3 × 10⁹ |
| 64 | ~1.8 × 10¹⁹ |

### Factorials

| $n$ | $n!$ |
|---|---|
| 0 | 1 |
| 1 | 1 |
| 2 | 2 |
| 3 | 6 |
| 4 | 24 |
| 5 | 120 |
| 6 | 720 |
| 7 | 5040 |
| 8 | 40 320 |
| 9 | 362 880 |
| 10 | 3 628 800 |

### Pascal's triangle — $\binom{n}{k}$ (rows $n = 0$ to $7$)

|  | $k=0$ | $k=1$ | $k=2$ | $k=3$ | $k=4$ | $k=5$ | $k=6$ | $k=7$ |
|---|---|---|---|---|---|---|---|---|
| $n=0$ | 1 |  |  |  |  |  |  |  |
| $n=1$ | 1 | 1 |  |  |  |  |  |  |
| $n=2$ | 1 | 2 | 1 |  |  |  |  |  |
| $n=3$ | 1 | 3 | 3 | 1 |  |  |  |  |
| $n=4$ | 1 | 4 | 6 | 4 | 1 |  |  |  |
| $n=5$ | 1 | 5 | 10 | 10 | 5 | 1 |  |  |
| $n=6$ | 1 | 6 | 15 | 20 | 15 | 6 | 1 |  |
| $n=7$ | 1 | 7 | 21 | 35 | 35 | 21 | 7 | 1 |

**Identity:** $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$ (Pascal's rule — each entry = sum of two above)

**Symmetry:** $\binom{n}{k} = \binom{n}{n-k}$ (e.g., $\binom{7}{2} = \binom{7}{5} = 21$)

### Common sum identities

| Identity | Formula |
|----------|---------|
| Arithmetic sum | $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$ |
| Sum of squares | $\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$ |
| Sum of cubes | $\sum_{i=1}^{n} i^3 = \left( \frac{n(n+1)}{2} \right)^2$ |
| Geometric (any $r \neq 1$) | $\sum_{i=0}^{n} r^i = \frac{r^{n+1} - 1}{r - 1}$ |
| Geometric special $r = 2$ | $\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$ |
| All subsets sum | $\sum_{k=0}^{n} \binom{n}{k} = 2^n$ |
| Alternating subsets | $\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ ($n \geq 1$) |

### Powers of small primes (mental sanity)

| $n$ | $3^n$ | $5^n$ | $7^n$ |
|---|---|---|---|
| 0 | 1 | 1 | 1 |
| 1 | 3 | 5 | 7 |
| 2 | 9 | 25 | 49 |
| 3 | 27 | 125 | 343 |
| 4 | 81 | 625 | 2401 |
| 5 | 243 | 3125 | — |
| 6 | 729 | — | — |

### $\log_2 x$ (for Big-O recurrences)

| $x$ | $\log_2 x$ |
|---|---|
| 1 | 0 |
| 2 | 1 |
| 4 | 2 |
| 8 | 3 |
| 16 | 4 |
| 32 | 5 |
| 64 | 6 |
| 128 | 7 |
| 256 | 8 |
| 512 | 9 |
| 1024 | 10 |

**Useful:** $\log_2(n/2) = \log_2 n - 1$, $\log_2(n^k) = k \log_2 n$, $\log_2(ab) = \log_2 a + \log_2 b$

### $P(n, k)$ — small permutations

|  | $k=1$ | $k=2$ | $k=3$ | $k=4$ |
|---|---|---|---|---|
| $n=3$ | 3 | 6 | 6 | — |
| $n=4$ | 4 | 12 | 24 | 24 |
| $n=5$ | 5 | 20 | 60 | 120 |
| $n=6$ | 6 | 30 | 120 | 360 |
| $n=7$ | 7 | 42 | 210 | 840 |

> Recall: $P(n, k) = \frac{n!}{(n-k)!}$ — "n choose k, then arrange them"

### Verifying mental sums (sanity tricks)

- **Even × Odd parity:** sum of degrees in graph = $2|E|$ (always even — Handshake) — flag if odd
- **Probability sum:** all outcomes' $\Pr$ should sum to 1; flag if not
- **Binomial PMF sum:** $\sum_{k=0}^{n} \binom{n}{k} p^k (1-p)^{n-k} = 1$ — sanity check
