---
title: "TCX2003 | Database Systems Finals Helpsheet"
slug: "nus-bit-tcx2003-finals-helpsheet"
date: 2026-07-11T12:30:00+08:00
description: "One-A4 double-sided helpsheet for TCX2003 Final Exam (Jul 13): SQL patterns, triggers, functions, procedures, ER design, normalization."
tags: ["nus", "database-systems", "helpsheet", "tcx2003", "finals"]
categories:
  - ["Education", "NUS BIT", "TCX2003"]
toc: true
math: false
draft: false
sheet: helpsheet
sheetCols: 2
---

<div class="print-hide">

> **TCX2003 (NUS Database Systems) series:** [TCX2005 Finals Cheatsheet]({{< ref "tcx2005-finals-cheatsheet" >}}) · **Finals helpsheet (current)**

**Mon 13 Jul 09:00-11:00 · LT27 · Closed book · 25 questions · ONE A4 double-sided handwritten/printed helpsheet — this page IS the sheet**

> **v1** — simplified from the uncompressed class-test port (1495 lines). Two buckets: **§1 SQL** (ER → DDL → queries → procs/functions/triggers, gotchas inlined as ⚠) and **§2 Flask/Python** (driver rules + call shapes only).

</div>

## 1. SQL

### 1.1 Entity Relationship & cardinality
- **Strong entity** — can identify itself; its own columns form the PK (`building(building_id)`).
- **Weak entity** — cannot identify itself (unit `#02` repeats across buildings). Borrows the owner's key: PK = **owner key + partial key** → `PRIMARY KEY (building_id, unit_no)`, FK `NOT NULL` `ON DELETE CASCADE`.
- **Partial key** — the weak entity's own column (`unit_no`); unique only *inside one owner*, not globally.
- **Superkey** — any column set that finds exactly one row (extras allowed). e.g. `{nric}`, `{email}`, `{nric, name}`.
- **Candidate key** — a superkey with nothing extra (minimal). e.g. `{nric}`, `{email}` — not `{nric, name}`.
- **Primary key** — the candidate key you choose. e.g. pick `nric`; `email` stays `UNIQUE`.
- **Total participation** — "MUST have" → FK `NOT NULL` · **partial** — "may have" → FK nullable.
- **Where does the FK go?** (`N`/`M` = letters for "**many**, no limit") 1:N (one-to-many) → FK on the **many** side · 1:1 → **merge** the two tables (or FK + `UNIQUE`) · M:N (many-to-many) → **junction table** with both FKs.
- **Min-max `(min,max)`** — beside each entity in the diagram: joins the relationship ≥min, ≤max times. **min 1 = MUST → `NOT NULL`** · **max 1 = one partner → that side holds the FK**. e.g. `resume (1,1) —owned_by— (0,N) job_seeker` → FK `js_id NOT NULL` on resume.

### 1.1b Normalization

- **Functional Dependency** `X → Y` = "know X ⇒ know Y" (`skill_id → skill_name`: same id, always same name). That is the *whole* concept.
- **Why normalize** — same fact stored in 2+ rows goes stale: **update** (rename, miss a copy) · **insert** (can't add skill until claimed) · **delete** (last claim gone → name gone).
- **1NF** — one value per cell. No lists (`skill1, skill2…`). ← WHY M:N forces a junction table.
- **2NF** — no fact about **part** of the key. PK `(js_id, skill_id)` but `skill_id → skill_name` alone → violation → split out `skill`. (`prof` needs the whole key = fine.)
- **3NF** — no fact about **another fact** (non-key → non-key): `postal_code → city` → split `postal(postal_code, city)`.
  - ⚠ Numbers = **rule levels, not table counts**. Fixing violations *creates* tables, but "2NF ≠ 2 tables" — one table can pass 3NF; ten tables can all fail 2NF.
- **BCNF** — every FD's left side must be a candidate key (catches what 3NF misses).
- **Decompose** — each bad `X → Y` becomes table `(X PK, Y)`; original drops Y, keeps X as FK. Highest NF = last rung with zero violations.
- Mantra: *the key (1NF), the whole key (2NF), and nothing but the key (3NF)*.

### 1.2 CREATE TABLE

```sql
CREATE TABLE IF NOT EXISTS customer ( -- IF NOT EXISTS: idempotent re-run
  customer_id INT PRIMARY KEY,
  name        VARCHAR(60) NOT NULL, -- "required"
  email       VARCHAR(120) UNIQUE, -- no dup, NULL allowed
  city        VARCHAR(40),
  joined      DATE, -- DATETIME/TIMESTAMP if time needed
  referred_by INT, -- self-FK column (NULL = direct signup)
  CHECK (email REGEXP '^[^@]+@[^@]+\\.[^@]+$'),
  -- FIXED-FORMAT ID: CHECK (id REGEXP '^D[0-9]{4}$') = D0001 · '^A[0-9]{7}[A-Z]$' = matric
  --   {n} = exactly n · ^...$ anchor the WHOLE value (omit → any substring matches!) · REGEXP is case-INSENSITIVE
  FOREIGN KEY (referred_by) REFERENCES customer(customer_id) -- self-FK: MUST be nullable
    ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS product (
  product_id INT AUTO_INCREMENT PRIMARY KEY, -- AUTO_INCREMENT must be leftmost key column
  sku        CHAR(8) UNIQUE, -- fixed width = CHAR; variable = VARCHAR
  name       VARCHAR(80) NOT NULL,
  category   ENUM('book','tech','food'), -- invalid value rejected
  price      DECIMAL(8,2) NOT NULL DEFAULT 0.00,
  stock      INT NOT NULL DEFAULT 0,
  added      DATE,
  CHECK (price >= 0 AND stock >= 0) -- multi-column CHECK
);

CREATE TABLE IF NOT EXISTS sale (
  customer_id INT,
  product_id  INT,
  sale_date   DATE,
  qty         INT NOT NULL,
  PRIMARY KEY (customer_id, product_id, sale_date), -- composite PK (table-level)
  FOREIGN KEY (customer_id) REFERENCES customer(customer_id) -- FK must reference a PK/UNIQUE column
    ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES product(product_id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  CHECK (qty > 0)
);
```

**FK referential actions** — chosen per FK:

| Action | Effect on child when parent row deleted / key updated |
|---|---|
| `CASCADE` | child rows deleted / child FK follows new value |
| `SET NULL` | child FK set `NULL` — column MUST be nullable |
| `RESTRICT` | reject the parent delete/update — **the DEFAULT if omitted** |
| `NO ACTION` | = `RESTRICT` in InnoDB |
| `SET DEFAULT` | parses but InnoDB rejects at create-time — never use |

**Composite FK** — child FK spans the *same columns, same order* as the parent's composite PK (recurring hard-spot):

```sql
CREATE TABLE IF NOT EXISTS bin (
  warehouse VARCHAR(10), aisle INT, shelf INT, label VARCHAR(40),
  PRIMARY KEY (warehouse, aisle, shelf)
);
CREATE TABLE IF NOT EXISTS slot (
  warehouse VARCHAR(10), aisle INT, shelf INT, slot_no INT,
  PRIMARY KEY (warehouse, aisle, shelf, slot_no),
  FOREIGN KEY (warehouse, aisle, shelf) REFERENCES bin(warehouse, aisle, shelf)
);
```

- **Natural PK** (`donor_id VARCHAR(5) PRIMARY KEY`, a code *you* supply like `D0001`) vs **surrogate PK** (`id INT AUTO_INCREMENT`). Natural when the domain has a stable unique code; FK column type must **match** the PK it references.
- Extra constructs: named cross-column CHECK `CONSTRAINT chk_op CHECK (role != 'operator' OR process_id IS NOT NULL)` · named composite unique `UNIQUE KEY uk_step_serial (job_step_id, serial_nb)` · secondary `INDEX idx_status (status)`.

### 1.3 INSERT / UPDATE / DELETE

```sql
INSERT INTO customer (customer_id, name, email, city, joined)
VALUES (1, 'Ada', 'ada@mail.com', 'Singapore', '2026-01-10');

INSERT INTO product (sku, name, category, price, stock, added) VALUES -- multi-row: atomic, id omitted -> AUTO_INCREMENT
  ('BK000001', 'SQL Primer', 'book', 19.90, 50, '2026-02-01'),
  ('TC000002', 'USB-C Hub',  'tech', 45.00, 12, '2026-02-03');

UPDATE product
SET price = price * 1.10, stock = stock - 5
WHERE category = 'tech'; -- no WHERE = EVERY row changed!

DELETE FROM sale
WHERE sale_date < '2026-01-01'; -- no WHERE = whole table gone!
```

### 1.4 SELECT ... WHERE

```sql
SELECT product_id, name, price, stock
FROM   product
WHERE  category = 'tech'
  AND  price < 50.00
  AND  stock > 0
ORDER  BY added DESC
LIMIT  10;

SELECT name, city, joined
FROM   customer
WHERE  city IN ('Singapore', 'Penang') -- set membership
  AND  joined BETWEEN '2024-01-01' AND '2024-12-31' -- inclusive both ends
  AND  name LIKE 'A%' -- % = any run, _ = one char
  AND  email IS NOT NULL -- never = NULL
ORDER  BY joined;

SELECT DISTINCT city FROM customer ORDER BY city; -- DISTINCT = whole selected row
```

| Operator | Note |
|----------|------|
| `=  <> < <= > >=` | `<>` not `!=` in exam style |
| `AND OR NOT` | `NOT` binds tightest, then `AND`, then `OR` — parenthesise mixed |
| `LIKE` | default case-insensitive collation |
| `IS NULL` / `IS NOT NULL` | `= NULL` is always UNKNOWN |

- `ORDER BY col [ASC|DESC]`, ASC default; multi-key `ORDER BY a DESC, b`.
- `LIMIT n` or `LIMIT offset, n` (offset 0-based).
- 3-valued logic: comparison with NULL → UNKNOWN; `WHERE` keeps only TRUE rows.

### 1.5 JOINs

```sql
-- INNER: matches only
SELECT c.name, p.name AS product, s.qty, s.sale_date
FROM   customer c
JOIN   sale s    ON s.customer_id = c.customer_id
JOIN   product p ON p.product_id  = s.product_id;

-- LEFT: every customer, NULLs where no match
SELECT c.name, s.product_id, s.qty
FROM   customer c
LEFT JOIN sale s ON s.customer_id = c.customer_id;

-- OLD-STYLE comma join (JIANG KAN idiom) = INNER JOIN
SELECT c.name, p.name
FROM   customer c, sale s, product p
WHERE  c.customer_id = s.customer_id
  AND  p.product_id  = s.product_id;

-- SELF-join, shared attribute: same city as 'Alice'
SELECT a.name, b.name AS same_city
FROM   customer a
JOIN   customer b ON a.city = b.city
WHERE  a.name = 'Alice' AND b.name <> a.name;

-- SELF-join via self-FK (hierarchy): who referred them (LEFT keeps roots)
SELECT c.name AS customer, r.name AS referred_by
FROM   customer c
LEFT JOIN customer r ON r.customer_id = c.referred_by;

-- ANTI-join: products NEVER sold
SELECT p.product_id, p.name
FROM   product p
LEFT JOIN sale s ON s.product_id = p.product_id
WHERE  s.product_id IS NULL;
```

| Join | Returns | Unmatched rows |
|------|---------|----------------|
| `INNER JOIN` / `JOIN` | matched pairs only | dropped both sides |
| `LEFT JOIN` | all left + matched right | right cols `NULL` |
| `RIGHT JOIN` | all right + matched left | left cols `NULL` |
| `CROSS JOIN` | every combination, m×n | no `ON` |
| comma `FROM a,b WHERE` | = INNER with the predicate | CROSS product if you forget it |

- Anti-join: `LEFT JOIN … WHERE right.key IS NULL` = "in A with no match in B".
- Self-join = two aliases of one table; add `b.x <> a.x` to drop self-matches.
- Qualify columns (`c.name`) whenever a name exists in 2+ tables.

### 1.6 Set operations

```sql
SELECT city FROM customer
UNION -- dedup; UNION ALL keeps duplicates
SELECT 'Online' AS city; -- column count + order must match

SELECT customer_id FROM sale
INTERSECT -- MySQL 8.0.31+
SELECT customer_id FROM customer WHERE YEAR(joined) = 2024;

SELECT customer_id FROM customer
EXCEPT -- MySQL 8.0.31+
SELECT customer_id FROM sale;
```

- Pre-8.0.31: `INTERSECT` ≡ `WHERE id IN (subquery)` · `EXCEPT` ≡ anti-join — `NOT EXISTS` (§1.8) or `LEFT JOIN … IS NULL` (§1.5); both NULL-safe, unlike `NOT IN`.
- Result column names come from the **first** branch; `ORDER BY`/`LIMIT` once at the very end.
- `UNION ALL` over `UNION` when dupes impossible — skips the dedup pass.

### 1.7 Aggregation

```sql
SELECT p.category,
       COUNT(*)                AS n_products,
       COALESCE(SUM(s.qty), 0) AS units_sold, -- NULL -> 0 when no sales
       ROUND(AVG(p.price), 2)  AS avg_price,
       MIN(p.price)            AS cheapest,
       MAX(p.price)            AS dearest
FROM   product p
LEFT JOIN sale s ON s.product_id = p.product_id
GROUP  BY p.category
HAVING units_sold > 0 -- filter AFTER aggregation
ORDER  BY units_sold DESC;

SELECT s.customer_id, SUM(s.qty) AS total_qty
FROM   sale s
WHERE  s.sale_date >= '2025-01-01' -- row filter, BEFORE grouping
GROUP  BY s.customer_id
HAVING SUM(s.qty) > 10; -- group filter, AFTER grouping
```

| Func | Returns |
|------|---------|
| `COUNT(*)` | all rows in group (incl. NULLs) |
| `COUNT(col)` | non-NULL values of `col` |
| `COUNT(DISTINCT col)` | distinct non-NULL values |
| `SUM / AVG / MIN / MAX` | ignore NULLs |

- Aggregates skip NULL → all-NULL group returns NULL — wrap `COALESCE(SUM(x),0)`.
- `HAVING` may reference the alias or repeat the aggregate expression.
- ⚠ Aggregate in `WHERE` = illegal (`WHERE` = rows *before* grouping) · ONLY_FULL_GROUP_BY: every non-aggregated `SELECT` column must appear in `GROUP BY`.

### 1.8 Subqueries & window

- "Latest per parent" (active resume): correlated `WHERE r.uploaded = (SELECT MAX(...) WHERE r2.js_id = r.js_id)`.

```sql
-- SCALAR: above overall average (swap AVG->MAX, > to = : "find the dearest")
SELECT name, price FROM product
WHERE  price > (SELECT AVG(price) FROM product);

-- IN: bought any 'tech' product
SELECT name FROM customer
WHERE  customer_id IN (
    SELECT s.customer_id
    FROM   sale s JOIN product p ON p.product_id = s.product_id
    WHERE  p.category = 'tech');

-- EXISTS / NOT EXISTS (correlated; NULL-safe anti-pattern)
SELECT c.name FROM customer c
WHERE  NOT EXISTS (SELECT 1 FROM sale s WHERE s.customer_id = c.customer_id);

-- CORRELATED scalar: above own category average
SELECT p.name, p.category, p.price
FROM   product p
WHERE  p.price > (SELECT AVG(p2.price) FROM product p2
                  WHERE p2.category = p.category);

-- DERIVED TABLE: pre-aggregate then filter (alias mandatory)
SELECT t.customer_id, t.total
FROM ( SELECT customer_id, SUM(qty) AS total
       FROM   sale GROUP BY customer_id ) AS t
WHERE  t.total > 5;

-- WINDOW: rank within category, rows not collapsed
SELECT name, category, price,
       ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rn,
       RANK()       OVER (PARTITION BY category ORDER BY price DESC) AS rnk
FROM   product;
```

- **NOT IN NULL trap:** any NULL from the subquery → empty result. `NOT EXISTS` instead.
- `EXISTS` stops at first match; `SELECT 1` idiomatic, select list ignored.
- `ROW_NUMBER` unique (1,2,3) · `RANK` ties share then skip (1,1,3) · `DENSE_RANK` ties share, no skip (1,1,2).
- Window funcs run after `WHERE`/`GROUP BY`/`HAVING` — to filter on `rn`, wrap in a derived table.

### 1.9 CREATE PROCEDURE — two shapes

| Question wants… | Shape | Read it via |
|---|---|---|
| ONE value ("total spent by X") | `IN`/`OUT` params + `SELECT … INTO` | `CALL p(1,@t); SELECT @t;` |
| A TABLE ("**for every** X show …") | **no OUT**, plain `SELECT` (`LEFT JOIN` + `GROUP BY`) | `CALL p();` → result set |

Reaching for the scalar shape when the question wants rows is the classic trap.

```sql
-- RESULT-SET shape (most common exam ask)
DROP PROCEDURE IF EXISTS sales_summary;
DELIMITER //
CREATE PROCEDURE sales_summary() -- NO params: returns ROWS
BEGIN
    SELECT c.customer_id, c.name, COALESCE(SUM(s.qty),0) AS total_qty
    FROM customer c LEFT JOIN sale s ON s.customer_id = c.customer_id
    GROUP BY c.customer_id, c.name ORDER BY total_qty DESC; -- body = §1.7 pattern
END //
DELIMITER ;
CALL sales_summary();
```

```sql
-- SCALAR-OUT shape
DELIMITER //
CREATE PROCEDURE total_spent(IN cid INT, OUT total DECIMAL(10,2))
BEGIN
    SELECT COALESCE(SUM(s.qty * p.price), 0.00) -- COALESCE: no-sale customer = 0
    INTO total
    FROM sale s, product p -- comma join (Jiang idiom)
    WHERE s.product_id = p.product_id
      AND s.customer_id = cid;
END //
DELIMITER ;
CALL total_spent(1, @t);  SELECT @t;
```

- UPSERT body: `IF EXISTS (SELECT 1 FROM product WHERE sku = sku_) THEN UPDATE … ELSE INSERT …; END IF;` — trailing-underscore params (`sku_`) dodge column-name clash (Jiang idiom); don't forget the closing `END IF;`.
- `IN` read-only (default) · `OUT` write-back · `INOUT` both.
- `SELECT … INTO var` must return exactly one row/value or it errors.
- No `RETURN value` in a procedure — that's a function.
- ⚠ `DELIMITER //` before **any** `CREATE PROCEDURE/FUNCTION/TRIGGER` (§1.9–1.12), reset `DELIMITER ;` after.

### 1.10 Full-dress procedure — cursor, handlers, transaction

MySQL's required `DECLARE` order: **vars → cursor → handlers**.

```sql
DROP PROCEDURE IF EXISTS publish_plan;
DELIMITER $$
CREATE PROCEDURE publish_plan(IN p_job_id INT, IN p_quantity INT,
                              IN p_start_sn INT, IN p_process_csv VARCHAR(64))
BEGIN
    DECLARE v_step_id INT; DECLARE v_proc_id INT;
    DECLARE v_i INT; DECLARE v_done INT DEFAULT 0;

    DECLARE cur_proc CURSOR FOR -- AFTER vars, BEFORE handlers
        SELECT id FROM process
        WHERE FIND_IN_SET(code, p_process_csv) > 0;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = 1;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION -- any error: undo all, re-raise
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;
    OPEN cur_proc;
    proc_loop: LOOP
        FETCH cur_proc INTO v_proc_id;
        IF v_done = 1 THEN LEAVE proc_loop; END IF;

        INSERT INTO job_step (job_id, process_id) VALUES (p_job_id, v_proc_id);
        SET v_step_id = LAST_INSERT_ID();

        SET v_i = 0;
        WHILE v_i < p_quantity DO
            INSERT INTO pcb_task (job_step_id, serial_nb)
            VALUES (v_step_id, p_start_sn + v_i);
            SET v_i = v_i + 1;
        END WHILE;
    END LOOP;
    CLOSE cur_proc;
    COMMIT;
END$$
DELIMITER ;
```

### 1.11 CREATE FUNCTION

```sql
DELIMITER //
CREATE FUNCTION discounted_price(p DECIMAL(8,2), pct INT)
RETURNS DECIMAL(8,2) -- RETURNS = clause (type)
DETERMINISTIC -- required under default binlog settings
BEGIN
    RETURN ROUND(p * (1 - pct / 100), 2); -- RETURN = statement (value)
END //
DELIMITER ;

SELECT name, discounted_price(price, 10) AS sale_price FROM product; -- inline anywhere an expression fits
SELECT name FROM product WHERE discounted_price(price, 15) > 20.00;
```

- Returns exactly ONE scalar; no result sets, no side-effects (that's a procedure's job).

### 1.12 CREATE TRIGGER

```sql
-- ONE comprehensive trigger: guard (SIGNAL) + maintain (UPDATE side-effect)
DROP TRIGGER IF EXISTS trg_sale_stock; -- no CREATE OR REPLACE; drop first
DELIMITER //
CREATE TRIGGER trg_sale_stock
BEFORE INSERT ON sale
FOR EACH ROW
BEGIN
    DECLARE avail INT;
    SELECT stock INTO avail FROM product WHERE product_id = NEW.product_id;
    IF NEW.qty > avail THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient stock';
    END IF;
    UPDATE product SET stock = stock - NEW.qty -- maintenance leg
    WHERE product_id = NEW.product_id;
END //
DELIMITER ;
```

- If asked for maintenance alone: same body, `AFTER INSERT ON sale`, no DECLARE/IF needed.

- Timing × event: `{BEFORE | AFTER} {INSERT | UPDATE | DELETE}` + `FOR EACH ROW`.
- `NEW.col` = incoming value (INSERT, UPDATE) · `OLD.col` = existing (UPDATE, DELETE).
- `SET NEW.col = …` only legal in **BEFORE** — e.g. `SET NEW.joined = OLD.joined` freezes a column; compare `NEW.status <> OLD.status` to stamp transitions.
- `SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = '…'` = the reject; use when the rule needs a subquery `CHECK` can't do.

### 1.13 Procedure vs Function vs Trigger

| Aspect | PROCEDURE | FUNCTION | TRIGGER |
|--------|-----------|----------|---------|
| Invoke | `CALL name(...)` | inline in an expression | implicit, fires on DML |
| Returns | OUT params / result set | exactly 1 scalar via `RETURN` | nothing (side-effect) |
| Params | IN / OUT / INOUT | IN only | none — uses `NEW.` / `OLD.` |
| Side-effects | yes | discouraged, should be pure | yes, that's the point |
| `DETERMINISTIC` | no | effectively yes | no |
| Re-create | `DROP PROCEDURE IF EXISTS` | `DROP FUNCTION IF EXISTS` | `DROP TRIGGER IF EXISTS` |

---

## 2. Flask / Python

### 2.1 Driver rules

| Gotcha | Rule |
|--------|------|
| Write "ran" but data is gone | `conn.commit()` after every INSERT/UPDATE/DELETE (**not** SELECT) |
| Params | `execute(sql, (val,))` — `%s` for *every* type (no `%d`, no quotes), never `sql % val` |
| One-value tuple | `(val,)` with the trailing comma; `(val)` is not a tuple |
| SQL injection | never f-string / `+` / `%` user values into the query — `%s` + params tuple is the defence |

### 2.2 Calling DB objects from Python

| DB object | Call via | Read the result |
|---|---|---|
| **PROCEDURE** | `cursor.callproc("name", [args])` | rows → `cursor.stored_results()`; `OUT` → `result[i]` by index |
| **FUNCTION** | inside a query: `execute("SELECT f(a,b) …")` | `fetchall()` — it's just a value |
| **TRIGGER** | you **don't** — fires on INSERT/UPDATE/DELETE | effect shows in the affected table |

```python
# result-set proc: rows come via stored_results(), NOT fetchall() on the cursor
cur = conn.cursor(dictionary=True)
cur.callproc("sales_summary")
for r in cur.stored_results():
    rows = r.fetchall()

# scalar-OUT proc: OUT slots filled in the returned tuple, read BY INDEX
result = cur.callproc("total_spent", (1, 0)) # placeholder 0 for the OUT position
total = result[1] # 2nd param = 'total'

row = cur.fetchone() # ONE row tuple (v1,v2) → scalar row[0]; no rows → None (None[0]=TypeError!)
if cur.fetchone(): # existence test — None falsy
rows = cur.fetchall() # list of tuples [(..),(..)]; no rows → [] NOT None ([][0]=IndexError)
# cursor(dictionary=True) → rows are dicts: row['col'], [0] breaks

request.method == 'POST' # form submitted; GET renders empty form
request.form.get('x') # <input name="x">; None if absent (form['x'] raises)
```
