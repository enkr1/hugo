---
title: "TCX2003 | Notebook"
slug: "nus-bit-tcx2003-notebook"
date: 2026-05-11T18:00:00+08:00
description: "Exam-ready reference for NUS TCX2003 Database Systems & Management: MySQL types, constraints, ER design, normalization gotchas. Flipped classroom with Prof Jiang Kan."
tags: ["nus", "sql", "mysql", "database", "notebook", "tcx2003"]
categories: ["Education", "Database"]
toc: true
draft: false
sticky: 2003
---

Taking TCX2003 Database Systems this Special Term with Prof Jiang Kan. Flipped classroom, so most material is pre-watched and the live lecture is for clarification. This page is my running notebook, grows as the term goes.

For general SQL coverage (MySQL vs PostgreSQL, injection, `ROLLUP`, joins), see my [SQL Notebook]({{< ref "pl-sql" >}}). For database design (normalization, dependency theory), see [3NF and BCNF]({{< ref "3NF-and-BCNF" >}}).

---

## 1. MySQL Integer Types

### Size & range reference

> 📖 **Canonical reference:** [LeetCode SQL Explore: Data Structure](https://leetcode.com/explore/learn/card/sql-language/682/sql-data-structure/4335/) covers full byte sizes, signed/unsigned ranges, and the wider `CHAR/VARCHAR/TEXT/BLOB/DATE/DATETIME/TIMESTAMP` family.
>
> _Personal version of this table will be hand-written later in my own style._

### Decision tree

```
Need negative numbers?
├─ Yes  → use signed range
└─ No   → add UNSIGNED → doubles your positive ceiling

Max value < 256?      → TINYINT
Max value < 65K?      → SMALLINT
Max value < 16M?      → MEDIUMINT  (skip in practice, jump to INT)
Max value < 2.1B?     → INT         ← safe default
Beyond 2.1B?          → BIGINT
```

Storage math: every row saves 4 bytes by picking `INT` over `BIGINT`. At 10M rows that is 40 MB, doubled by indexes. On large tables this matters. On small tables, just use `INT` and move on.

### Three gotchas worth memorizing

1. **There is no SQL keyword `LONG`.** People coming from Java or C reach for it. The 64-bit SQL integer is `BIGINT`.
2. **`INT(11)` parentheses are display width, not storage size.** Both `INT(2)` and `INT(11)` store 4 bytes. The number only affects `ZEROFILL` padding behavior, and the syntax was deprecated in MySQL 8.0.17+.
3. **`INT UNSIGNED` joined against signed `INT` can drop indexes.** MySQL inserts an implicit cast on one side, killing the index lookup. In production code, `BIGINT` is often safer than `INT UNSIGNED` for that reason.

---

## 2. Why DECIMAL Beats FLOAT for Money

Short version: **`FLOAT` and `DOUBLE` cannot represent `0.1` exactly.** Anything involving money, percentages, or values that must round trip through a database must use `DECIMAL` (a.k.a. `NUMERIC`, same type, different name).

### The IEEE 754 problem

`FLOAT` (4 bytes) and `DOUBLE` (8 bytes) follow [IEEE 754 binary floating point](https://en.wikipedia.org/wiki/IEEE_754). They store numbers as `sign × mantissa × 2^exponent`. The mantissa is binary, so any decimal value that is not a sum of negative powers of 2 has no exact representation.

```sql
-- MySQL demo
SELECT 0.1 + 0.2;                                  -- → 0.3 (Decimal context, OK)
SELECT CAST(0.1 AS DOUBLE) + CAST(0.2 AS DOUBLE);  -- → 0.30000000000000004
SELECT 0.1 + 0.2 = 0.3;                            -- → 1  (Decimal compare)
SELECT CAST(0.1 AS DOUBLE) + CAST(0.2 AS DOUBLE) = 0.3;  -- → 0  (float compare fails)
```

`0.1` in binary is the repeating fraction `0.0001100110011...`, so the closest double is `0.1000000000000000055511151231257827021181583404541015625`. Add two such approximations and the error compounds.

### DECIMAL stores exact base-10 digits

`DECIMAL(M, D)` packs the digits themselves into binary-coded decimal form:

- `M` = total digit count (precision), max 65 in MySQL
- `D` = digits after the decimal point (scale), max 30
- Storage: 4 bytes per 9 digits, plus 1 byte per partial group

```sql
CREATE TABLE invoice (
  id          INT UNSIGNED PRIMARY KEY,
  amount_sgd  DECIMAL(10, 2) NOT NULL  -- up to 99,999,999.99
);
```

There is no rounding artifact. `0.10 + 0.20` stored in `DECIMAL` returns exactly `0.30`.

### When DECIMAL is required (not optional)

| Use case | Why FLOAT fails | Right type |
|---|---|---|
| Currency, invoices, bank balances | A 0.0000001 SGD drift across millions of rows becomes a real audit error | `DECIMAL(10, 2)` for SGD/USD/EUR. `DECIMAL(19, 4)` for high-precision finance |
| Tax calculation (GST, sales tax) | Rounding rules are legally specified in base 10 | `DECIMAL` + explicit `ROUND(..., 2)` |
| Currencies with 3 decimals (KWD, JOD, BHD per [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)) | Same precision argument | `DECIMAL(13, 3)` |
| Percentages stored, compared, summed | `0.1 + 0.2 != 0.3` will break audits | `DECIMAL(5, 4)` for 99.9999% |
| Discrete enumerations (vote counts, inventory) | Why use float at all | `INT` or `BIGINT` |

### When FLOAT/DOUBLE is fine

Floats are not banned, just narrow purpose. They are good for:

- **Scientific computing** where relative error matters more than absolute error (e.g. `0.1 ± 0.00001` is acceptable)
- **ML feature columns** where the model itself tolerates float noise
- **Sensor data** logged at thousands of points per second where exactness is impossible anyway
- **Graphics, geospatial intermediates** where `DOUBLE` precision is wide enough

If your column will appear in a financial statement, choose `DECIMAL`. If it represents a measurement of the physical world, `DOUBLE` is usually correct.

### Storage and speed tradeoff

`DECIMAL` is slower than `FLOAT` because the database does base-10 arithmetic, not hardware floating-point. For typical OLTP workloads (writes, lookups, simple SUMs) the difference is invisible. For tight numerical loops (millions of multiplications per query) it matters. Most application queries fall in the first bucket.

### MySQL-specific notes (relevant for TCX2003)

- `NUMERIC` and `DECIMAL` are synonyms in MySQL. SQL standard names are interchangeable. Pick whichever the course slides use and stay consistent.
- The MySQL default if you write `DECIMAL` with no precision is `DECIMAL(10, 0)` (integer-like). Always specify `(M, D)`.
- `FLOAT` in MySQL is single precision (4 bytes). `DOUBLE`, `DOUBLE PRECISION`, and `REAL` are all 8-byte double precision.

---

## Cross-references

- [SQL Notebook]({{< ref "pl-sql" >}}): engine-agnostic SQL coverage, injection, set ops, ROLLUP
- [3NF and BCNF]({{< ref "3NF-and-BCNF" >}}): normalization theory, relevant for TCX2003 ER design unit
- [NUS Progress]({{< ref "nus-progress" >}}): live mastery tracker
- LeetCode SQL Explore card: [Data Structure](https://leetcode.com/explore/learn/card/sql-language/682/sql-data-structure/4335/)
