---
title: 'Database Normalisation: From 1NF to BCNF'
date: 2024-04-20 03:09:54
lastmod: 2026-05-25
tags:
  - "database-design"
  - "backend"
  - "sql"
  - "normalisation"
categories:
  - ["Software Engineering", "Programming Languages", "SQL"]
  - ["Notebooks"]
description: "A practical walkthrough of database normalisation from 1NF to BCNF, grounded in functional dependencies and real schemas. Covers why each normal form exists, what anomaly it fixes, and how to decompose."
---

Database normalisation is about one thing: **don't store the same fact in more than one place.** Every normal form is a stricter version of that rule, backed by a formal tool called functional dependencies.

<!-- more -->

# Functional Dependencies: The Tool Behind It All

A functional dependency (FD) `X → Y` means: **if two rows have the same X value, they must have the same Y value.** Same input, guaranteed same output.

Example from an NUS student table:

| email           | name       | department | faculty             |
|-----------------|------------|------------|---------------------|
| tikki@gmail.com | TIKKI TAVI | CS         | School of Computing |
| rikki@gmail.com | RIKKI TAVI | CS         | School of Computing |
| bob@gmail.com   | BOB        | Chemistry  | Faculty of Science  |

- `email → name` (same email = same name, always)
- `email → department` (same email = same department)
- `department → faculty` (CS is always School of Computing)

FDs tell you **why** to split tables. Foreign keys are **how** you reconnect them after splitting.

**Key vocabulary:**
- **Candidate key:** a minimal set of columns that uniquely identifies every row. A table can have several; you pick one as the primary key.
- **Prime attribute:** any column that belongs to at least one candidate key.
- **Non-prime attribute:** a column that isn't part of any candidate key.
- **Superkey:** a candidate key, or any superset of one (candidate key + extra columns).
- **Partial dependency:** a non-prime attribute depends on only *part* of a composite candidate key.
- **Transitive dependency:** a non-prime attribute depends on another non-prime attribute (A → B → C, where B is not a candidate key).

# 1NF: Atomic Values

**Rule:** every column holds a single, indivisible value. No lists, no comma-separated strings, no nested structures.

**Bad (not 1NF):**

| order_id | customer | items            |
|----------|----------|------------------|
| 001      | Alice    | Apple 2, Banana 5|

You can't query "all orders containing Apple" without string parsing.

**Good (1NF):**

| order_id | customer | product_id | product | qty |
|----------|----------|------------|---------|-----|
| 001      | Alice    | A1         | Apple   | 2   |
| 001      | Alice    | B2         | Banana  | 5   |

Candidate key: `(order_id, product_id)`. Atomic. But Alice's name is repeated, and if you add `address`, it repeats too. That's the next problem.

# 2NF: No Partial Dependencies

**Rule:** already 1NF, and every non-prime attribute depends on the **entire** candidate key, not just part of it.

In the 1NF table above, `customer` depends only on `order_id`, not on the full key `(order_id, product_id)`. That's a partial dependency.

**Fix:** pull partial dependencies into their own tables.

| order_id | customer |
|----------|----------|
| 001      | Alice    |

| product_id | product |
|------------|---------|
| A1         | Apple   |
| B2         | Banana  |

| order_id | product_id | qty |
|----------|------------|-----|
| 001      | A1         | 2   |
| 001      | B2         | 5   |

Now every non-prime attribute depends on the full key in its table.

# 3NF: No Transitive Dependencies

**Rule:** already 2NF, and no non-prime attribute depends on another non-prime attribute.

Back to the NUS student table. After 2NF, it looks like:

| email           | name       | department | faculty             |
|-----------------|------------|------------|---------------------|
| tikki@gmail.com | TIKKI TAVI | CS         | School of Computing |
| rikki@gmail.com | RIKKI TAVI | CS         | School of Computing |

`email → department → faculty`. The chain `email → faculty` is transitive through `department`.

**The anomaly:** NUS renames "School of Computing" to "NUS Computing." You must update every row where `department = CS`. Miss one row and your DB says CS belongs to two different faculties.

**Fix:** decompose the transitive FD into its own table.

| email           | name       | department |
|-----------------|------------|------------|
| tikki@gmail.com | TIKKI TAVI | CS         |
| rikki@gmail.com | RIKKI TAVI | CS         |

| department | faculty             |
|------------|---------------------|
| CS         | School of Computing |
| Chemistry  | Faculty of Science  |

One row to update. SSOT.

**Memory trick:** "every non-key column describes the key, the whole key, and nothing but the key."

# BCNF: Every Determinant Must Be a Superkey

3NF has a loophole: it only restricts non-prime attributes. If *all* attributes are prime (part of some candidate key), 3NF can't complain, even when a problematic FD exists.

BCNF closes that loophole with a simpler, stricter rule: **for every non-trivial FD `X → Y`, X must be a superkey.** No exceptions.

**Example: Gym form-review system**

Say you're building an app where coaches review users' exercise form via video clips. Each coach specialises in one exercise (e.g., a deadlift coach only reviews deadlift clips).

`form_review(user_id, exercise_id, coach_id)`

| user_id | exercise_id | coach_id |
|---------|-------------|----------|
| Jing    | deadlift    | Coach_A  |
| Edmund  | deadlift    | Coach_A  |
| Jing    | squat       | Coach_B  |

FDs:
- `{user_id, exercise_id} → coach_id` (each user-exercise pair gets one coach)
- `coach_id → exercise_id` (each coach specialises in one exercise)

Candidate keys: `{user_id, exercise_id}` and `{user_id, coach_id}`. All three columns are prime — they all belong to at least one candidate key. 3NF has nothing to complain about.

But `coach_id → exercise_id` violates BCNF. `coach_id` alone is not a superkey because it doesn't determine `user_id` (one coach reviews many users).

**The anomaly:** Coach_A switches specialisation from deadlift to squat. You have to update every row where `coach_id = Coach_A`. Miss one and your DB says Coach_A specialises in both deadlift and squat, contradicting the business rule.

**Fix:** decompose into two tables.

| user_id | coach_id |
|---------|----------|
| Jing    | Coach_A  |
| Edmund  | Coach_A  |
| Jing    | Coach_B  |

| coach_id | exercise_id |
|----------|-------------|
| Coach_A  | deadlift    |
| Coach_B  | squat       |

Coach_A switches to squat? One row updated in the second table. Every determinant is now a superkey in its own table.

# Summary

| Normal Form | Eliminates | Core Rule |
|-------------|------------|-----------|
| **1NF** | Non-atomic values | Every column holds one value |
| **2NF** | Partial dependencies | Non-prime attributes depend on the **whole** candidate key |
| **3NF** | Transitive dependencies | Non-prime attributes depend only on candidate keys |
| **BCNF** | Non-superkey determinants (including prime-on-prime) | Every determinant is a superkey |

For most systems, 3NF or BCNF is the practical target. Normalise to eliminate redundancy. Denormalise deliberately (with awareness of the trade-off) when query performance demands it.
