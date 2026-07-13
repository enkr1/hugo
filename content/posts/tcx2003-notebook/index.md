---
title: "TCX2003 | Notebook"
slug: "nus-bit-tcx2003-notebook"
date: 2026-05-11T18:00:00+08:00
description: "Exam-ready reference for NUS TCX2003 Database Systems & Management: MySQL types, constraints, ER design, normalization gotchas. Flipped classroom with Prof Jiang Kan."
tags: ["nus", "sql", "mysql", "database", "notebook", "tcx2003"]
categories:
  - ["Education", "NUS BIT", "TCX2003"]
toc: true
draft: false
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

## 3. CREATE TABLE & the 6 Constraints

### Skeleton

```sql
CREATE TABLE table_name (
  column1 TYPE [constraints],
  column2 TYPE [constraints],
  ...
  [table_level_constraints]
);
```

- Two-word keyword `CREATE TABLE`, never just `CREATE`.
- Column list ends with `)` directly, no trailing comma (trailing comma is a genuine syntax error in SQL, not just style).
- Table-level constraints (composite PK, multi-column FK) go after the column list.
- For column types, see the integer reference in §1 and the DECIMAL/FLOAT decision in §2.

### The 6 column constraints

```sql
CREATE TABLE customers (
  id        INT          PRIMARY KEY,                 -- 1. PRIMARY KEY
  email     VARCHAR(128) UNIQUE NOT NULL,             -- 2. UNIQUE, 3. NOT NULL
  age       INT          CHECK (age >= 18),           -- 4. CHECK
  status    VARCHAR(16)  DEFAULT 'active',            -- 5. DEFAULT
  store_id  INT          REFERENCES stores(id)        -- 6. FOREIGN KEY (inline form)
);
```

| # | Constraint | What it enforces |
|---|------------|------------------|
| 1 | `PRIMARY KEY` | Unique + NOT NULL combined. One per table. |
| 2 | `UNIQUE` | No duplicate values (NULL still allowed in standard SQL). |
| 3 | `NOT NULL` | Column must have a value. |
| 4 | `CHECK (expr)` | Custom boolean condition. |
| 5 | `DEFAULT value` | Auto-filled if INSERT omits the column. |
| 6 | `FOREIGN KEY ... REFERENCES` | Value must exist in the referenced table's column (or be NULL). |

> **MySQL gotcha:** the inline `col INT REFERENCES parent(id)` form above parses fine but InnoDB **silently ignores it** — no foreign key is actually created. Only a *table-level* `FOREIGN KEY (col) REFERENCES parent(id)` enforces the constraint. Use the table-level form (next section) for any real FK.

### Composite & table-level constraints

When a constraint spans multiple columns, put it at the table level:

```sql
CREATE TABLE order_items (
  order_id   INT,
  product_id INT,
  quantity   INT NOT NULL,
  PRIMARY KEY (order_id, product_id),                 -- composite PK
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
```

### FK referential actions (ON DELETE / ON UPDATE)

```sql
FOREIGN KEY (store_id) REFERENCES stores(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE
```

| Action | When the parent row is deleted/updated |
|--------|----------------------------------------|
| `CASCADE` | Child rows also deleted/updated. |
| `SET NULL` | Child FK column set to NULL (column must allow NULL). |
| `RESTRICT` | Reject the operation if children exist. |
| `NO ACTION` | Standard SQL defers the check; in MySQL it behaves identically to `RESTRICT`. |
| `SET DEFAULT` | Standard SQL only — **InnoDB rejects it**, so it does not work in this course's MySQL. |

Mnemonic: **C-S-R-N-D** (Cascade, Set null, Restrict, No action, Default). In MySQL you'll realistically only use the first three.

### CHECK with REGEXP

`CHECK` combines with `REGEXP` (MySQL) for pattern validation:

```sql
CREATE TABLE users (
  username VARCHAR(32)  CHECK (username REGEXP '^[a-zA-Z0-9_]+$'),
  email    VARCHAR(128) CHECK (email REGEXP '^[^@]+@[^@]+\\.[^@]+$'),
  phone_sg VARCHAR(8)   CHECK (phone_sg REGEXP '^[89][0-9]{7}$')
);
```

Anchors: `^` start, `$` end, `[a-z]` class, `[^abc]` negated class, `{n}` exactly n, `+` 1+, `*` 0+, `?` 0 or 1. In a SQL string literal the backslash is usually doubled (`\\d`). PostgreSQL uses `~` instead of `REGEXP`; this course is MySQL.

### ALTER / DROP / RENAME

```sql
ALTER TABLE customers ADD COLUMN phone VARCHAR(8);
ALTER TABLE customers DROP COLUMN phone;
ALTER TABLE customers MODIFY COLUMN age SMALLINT;     -- change type
ALTER TABLE customers ADD CONSTRAINT chk_age CHECK (age >= 0);

DROP TABLE IF EXISTS customers;                       -- safe form
RENAME TABLE customers TO clients;
```

### Worked example

A small bookstore schema covering most of the above:

```sql
CREATE TABLE authors (
  id    INT PRIMARY KEY,
  name  VARCHAR(64) NOT NULL,
  email VARCHAR(128) UNIQUE CHECK (email REGEXP '^[^@]+@[^@]+\\.[^@]+$')
);

CREATE TABLE books (
  isbn      CHAR(13) PRIMARY KEY,
  title     VARCHAR(256) NOT NULL,
  price     NUMERIC(8, 2) DEFAULT 0.00 CHECK (price >= 0),
  author_id INT,
  FOREIGN KEY (author_id) REFERENCES authors(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE reviews (
  book_isbn CHAR(13),
  reviewer  VARCHAR(64),
  rating    TINYINT CHECK (rating BETWEEN 1 AND 5),
  posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (book_isbn, reviewer),
  FOREIGN KEY (book_isbn) REFERENCES books(isbn) ON DELETE CASCADE
);
```

Covers: all 6 constraints, composite PK, multi-table FK chain, `CHECK BETWEEN`, `CHECK REGEXP`, `DEFAULT CURRENT_TIMESTAMP`, both `CASCADE` and `SET NULL`.

### Gotchas worth memorizing

- **PK implies NOT NULL** — `id INT PRIMARY KEY` is enough; the NOT NULL is automatic.
- **FK type must match parent's PK type exactly** — a mismatched type silently breaks joins.
- **Fixed-length data deserves a fixed type** — `CHAR(2)` for ISO country codes, `CHAR(13)` for ISBN, not `VARCHAR`.
- **Composite uniqueness is a constraint, not a computed check** — use `UNIQUE (a, b)` (or `PRIMARY KEY (a, b)`), not a hand-rolled `CHECK` with `COUNT`.

---

## 4. SQL Queries (SELECT)

### Clause order — written vs evaluated

```sql
SELECT   col, AGG(col)      -- 5. projected last
FROM     t JOIN u ON ...    -- 1. tables assembled first
WHERE    row_condition      -- 2. filter ROWS (before grouping)
GROUP BY col                -- 3. collapse into groups
HAVING   group_condition    -- 4. filter GROUPS (after aggregation)
ORDER BY col                -- 6. sort
LIMIT    n;                 -- 7. cut
```

You *write* `SELECT` first, but the engine *runs* `FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT`. That order explains the two most common mistakes below.

- **`WHERE` filters rows, `HAVING` filters groups.** A condition on a raw column → `WHERE`; a condition on an aggregate (`COUNT(*) > 3`) → `HAVING`. `WHERE COUNT(*) > 3` is an error (aggregate doesn't exist yet at WHERE-time).
- A column in `SELECT` alongside `GROUP BY` must be either grouped or aggregated — you can't project a raw non-grouped column.

### JOINs

| Join | Keeps |
|------|-------|
| `INNER JOIN` | Only rows matching in both tables. |
| `LEFT JOIN` | All left rows; right columns NULL where no match. |
| `RIGHT JOIN` | All right rows; mirror of LEFT. |

**Anti-join** (rows in A with *no* match in B) — the idiom is a LEFT JOIN filtered on the NULL:

```sql
SELECT a.id
FROM   a LEFT JOIN b ON a.id = b.a_id
WHERE  b.a_id IS NULL;        -- "a's that never appear in b"
```

### Subqueries: `IN` vs `EXISTS`

```sql
-- IN: compares a value against a ONE-COLUMN list
WHERE dept_id IN (SELECT id FROM active_dept)

-- EXISTS: checks whether a correlated subquery returns any row
WHERE EXISTS (SELECT * FROM orders o WHERE o.cust_id = c.id)
```

- `IN` needs the subquery to project **exactly one column**; `SELECT *` fails.
- `EXISTS` ignores the columns entirely — `SELECT *` / `SELECT 1` are equivalent and idiomatic.
- **The `NOT IN` + NULL trap:** if the subquery returns even one `NULL`, `x NOT IN (…, NULL)` evaluates to UNKNOWN for every row → **zero results**. Prefer `NOT EXISTS` (NULL-safe) whenever the subquery column is nullable.

### Set operators

| Operator | Result | Dupes |
|----------|--------|-------|
| `UNION` | Rows in A **or** B | removed |
| `UNION ALL` | Rows in A or B | kept (faster) |
| `INTERSECT` | Rows in A **and** B | removed |
| `MINUS` (Oracle) / `EXCEPT` (standard) | Rows in A **not** in B | removed |

Both arms must have the **same number of columns, compatible types, same order.** Use whichever keyword the course slides use (`MINUS` vs `EXCEPT`).

### Query-side gotchas worth memorizing

- **English "or" under a negation → `UNION`, not `INTERSECT`.** "seekers who did *not* claim *or* verify a skill" = `NOT IN (claimed UNION verified)`. De Morgan: `NOT(A OR B)` excludes the *union*.
- **`NOT IN` + nullable subquery → use `NOT EXISTS`** (the NULL trap above).
- **Anti-join = LEFT JOIN … WHERE right IS NULL** (not `NOT IN`, which the NULL trap can break).
- **UNION arms mirror each other** — same column, other table; the difference is only the source, not the shape.

> For deeper query coverage (window functions, `ROLLUP`, injection defence) see the engine-agnostic [SQL Notebook]({{< ref "pl-sql" >}}).

---

## Cross-references

- [SQL Notebook]({{< ref "pl-sql" >}}): engine-agnostic SQL coverage, injection, set ops, ROLLUP
- [3NF and BCNF]({{< ref "3NF-and-BCNF" >}}): normalization theory, relevant for TCX2003 ER design unit
- [NUS Progress]({{< ref "nus-progress" >}}): live mastery tracker
- LeetCode SQL Explore card: [Data Structure](https://leetcode.com/explore/learn/card/sql-language/682/sql-data-structure/4335/)
