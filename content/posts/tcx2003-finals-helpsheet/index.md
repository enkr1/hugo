---
title: "TCX2003 | Database Systems Finals Helpsheet"
slug: "nus-bit-tcx2003-finals-helpsheet"
date: 2026-07-11T12:30:00+08:00
description: "One-A4 double-sided helpsheet for TCX2003 Final Exam (Jul 13): SQL patterns, triggers, functions, procedures, ER design, normalization."
tags: ["nus", "database-systems", "helpsheet", "tcx2003", "finals"]
categories: ["Education"]
toc: true
math: false
draft: false
sheet: openbook
---

<div class="print-hide">

> **TCX2003 (NUS Database Systems) series:** [TCX2005 Finals Cheatsheet]({{< ref "tcx2005-finals-cheatsheet" >}}) · **Finals helpsheet (current)**

**Mon 13 Jul 09:00-11:00 · LT27 · Closed book · 25 questions · ONE A4 double-sided handwritten/printed helpsheet — this page IS the sheet**

> ⚠️ UNCOMPRESSED port of the class-test `_REF.md` (1495 lines). Compression to 1×A4 happens here, in this file.

</div>

## 1. setup

### ffmpeg

```bash
# night before — grant macOS Screen Recording perm + PROVE not-black (permission persists):
~/Personal/_education/nus/bit-private/000_mods/TCX2003/class-test/record-screen.sh check
```

```bash
# exam day — record the full 2h, press q to stop -> ~/Downloads/e1698540-tcx2003.mp4
# (auto-runs `caffeinate` so the screen can't sleep mid-exam -> no BLACK frames):
~/Personal/_education/nus/bit-private/000_mods/TCX2003/class-test/record-screen.sh start
```
> no script → raw ffmpeg (prepend `caffeinate -dimsu` yourself so a pause can't sleep the screen → black frames):
>
> ```bash
> ffmpeg -f avfoundation -list_devices true -i ""      # find "Capture screen 0" index (prof example = 1)
> caffeinate -dimsu ffmpeg -f avfoundation -r 1 -probesize 20M -threads 1 -i "1:none" \
>   -vcodec libx264 -b:v 128k -s hd720 ~/Downloads/e1698540-tcx2003.mp4   # q to stop · ffplay <file> to verify
> ```

### folder

```bash
mkdir ~/Personal/_education/nus/bit-private/000_mods/TCX2003/class-test/20260701 && cd "$_" && code .
```

### inject

```bash
mkdir -p templates

cat > config_db.py <<'PY_CFG'
import mysql.connector

def get_db_connection():
    return mysql.connector.connect(
        host="127.0.0.1", port=3306,
        user="tcx2003_ct", password="tcx2003_ct", database="tcx2003_ct",
    )
PY_CFG

cat > app.py <<'PY_APP'
# app.py - TCX2003 class-test app (JIANG KAN family-A idiom). GENERIC `item` template:
# find-replace item -> your entity, item_id/item_name/description -> your columns.
# NOT auto-seeded: create your entity tables in TablePlus from §3 first. Assumes item(item_id PK, item_name, description) + sale(item_id FK, qty).
import io
import csv
from flask import Flask, render_template, request, Response, redirect, url_for
from config_db import get_db_connection

app = Flask(__name__)

# ---------- CREATE ----------
@app.route("/add_item", methods=["GET", "POST"])
def add_item():
    message = None
    error = None
    form_data = {"item_id": "", "item_name": "", "description": ""}

    if request.method == "POST":
        form_data["item_id"] = request.form.get("item_id", "")
        form_data["item_name"] = request.form.get("item_name", "")
        form_data["description"] = request.form.get("description", "")

        db = None
        cursor = None
        try:
            db = get_db_connection()
            cursor = db.cursor()
            cursor.execute(
                "INSERT INTO item (item_id, item_name, description) VALUES (%s, %s, %s)",
                (form_data["item_id"], form_data["item_name"], form_data["description"])
            )
            db.commit()                               # writes need an explicit commit
            message = "Item added successfully."
        except Exception as e:
            code = getattr(e, "errno", None)          # mysql errno if it's a DB error, else None
            if code == 1062:                          # duplicate PK / UNIQUE
                error = "That item already exists (duplicate id or unique value)."
            elif code == 1452:                        # FK fails - no matching parent row
                error = "That refers to a parent row that doesn't exist."
            elif code == 3819:                        # CHECK constraint violated
                error = "A value breaks a table rule (CHECK constraint)."
            else:                                     # covers 1048 NOT NULL, 1644 trigger SIGNAL (msg already friendly), etc.
                error = "Failed to add item: " + str(e)
            if db:
                db.rollback()
        finally:
            if cursor:
                cursor.close()
            if db:
                db.close()

    return render_template("item_form.html", mode="add", message=message, error=error, form_data=form_data)

# ---------- UPDATE (shares item_form.html with add; PRG on success) ----------
@app.route("/edit_item/<item_id>", methods=["GET", "POST"])
def edit_item(item_id):
    message = None
    error = None
    form_data = {"item_id": item_id, "item_name": "", "description": ""}
    db = None
    cursor = None

    if request.method == "POST":
        form_data["item_id"] = request.form.get("item_id", "")
        form_data["item_name"] = request.form.get("item_name", "")
        form_data["description"] = request.form.get("description", "")
        try:
            db = get_db_connection()
            cursor = db.cursor()
            cursor.execute(
                "UPDATE item SET item_id=%s, item_name=%s, description=%s WHERE item_id=%s",
                (form_data["item_id"], form_data["item_name"], form_data["description"], item_id)  # WHERE = original id
            )
            db.commit()
            return redirect(url_for("list_items"))    # PRG: refresh won't re-submit
        except Exception as e:
            error = "Failed to update item: " + str(e)
            if db:
                db.rollback()
        finally:
            if cursor:
                cursor.close()
            if db:
                db.close()
        return render_template("item_form.html", mode="edit", orig_id=item_id,
                               message=message, error=error, form_data=form_data)

    # GET: pre-fill the form from the existing row
    try:
        db = get_db_connection()
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT item_id, item_name, description FROM item WHERE item_id=%s", (item_id,))
        row = cursor.fetchone()
        if row:
            form_data = row
        else:
            error = "No item found with id " + item_id
    except Exception as e:
        error = "Failed to load item: " + str(e)
    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()

    return render_template("item_form.html", mode="edit", orig_id=item_id,
                           message=message, error=error, form_data=form_data)

# ---------- READ ----------
@app.route("/list_items")
def list_items():
    message = None
    error = None
    results = None
    db = None
    cursor = None
    try:
        db = get_db_connection()
        cursor = db.cursor(dictionary=True)           # dict rows for the template
        cursor.execute("SELECT item_id, item_name, description FROM item ORDER BY item_id")
        results = cursor.fetchall()                   # read-only, no commit
    except Exception as e:
        error = "Failed to list items: " + str(e)
    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()
    return render_template("list.html", message=message, error=error, results=results)

# ---------- DELETE (POST -> PRG) ----------
@app.route("/delete_item", methods=["POST"])
def delete_item():
    item_id = request.form.get("item_id", "")
    db = None
    cursor = None
    try:
        db = get_db_connection()
        cursor = db.cursor()
        cursor.execute("DELETE FROM item WHERE item_id=%s", (item_id,))
        db.commit()
    except Exception:
        if db:
            db.rollback()
    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()
    return redirect(url_for("list_items"))            # PRG: land back on the fresh list

# ---------- EXPORT CSV (read -> Response, NOT a template) ----------
@app.route("/export_csv")
def export_csv():
    db = get_db_connection()
    cursor = db.cursor()                              # tuple cursor feeds writerows directly
    cursor.execute("SELECT item_id, item_name, description FROM item ORDER BY item_id")
    rows = cursor.fetchall()

    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["Item ID", "Item Name", "Description"])
    writer.writerows(rows)

    cursor.close()
    db.close()
    return Response(output.getvalue(), mimetype="text/csv",
                    headers={"Content-Disposition": "attachment; filename=items.csv"})

# ---------- REPORT (JOIN + GROUP BY/HAVING + COALESCE) ----------
@app.route("/report")
def report():
    error = None
    results = None
    db = None
    cursor = None
    try:
        db = get_db_connection()
        cursor = db.cursor(dictionary=True)

        sql = """
            SELECT i.item_id, i.item_name,
                   COUNT(s.id)             AS num_sales,
                   COALESCE(SUM(s.qty), 0) AS total_qty
            FROM item i
            LEFT JOIN sale s ON s.item_id = i.item_id   -- LEFT keeps 0-sale items
            GROUP BY i.item_id, i.item_name
            HAVING COUNT(s.id) >= 0                      -- swap >= N to filter
            ORDER BY total_qty DESC
        """
        cursor.execute(sql)
        results = cursor.fetchall()

        # -- SUBQUERY variants (swap the WHERE in): --
        #   EXISTS:  ... WHERE EXISTS (SELECT 1 FROM sale s WHERE s.item_id = i.item_id)
        #   NOT IN:  ... WHERE i.item_id NOT IN (SELECT item_id FROM sale)
        # -- STORED-PROCEDURE version of this same report (same output, swap in if Q wants a proc): --
        #   cursor.callproc("get_item_summary")              # a proc YOU create first (§4.1 result-set proc)
        #   for r in cursor.stored_results():                # can't fetchall the cursor directly - iterate
        #       results = r.fetchall()
        #   (live demo of this idiom: ref.py /item_summary)

    except Exception as e:
        error = "Failed to build report: " + str(e)
    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()
    return render_template("report.html", title="Item Report", error=error, results=results)

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)    # 5001: macOS AirPlay steals 5000
PY_APP

cat > ref.py <<'PY_REF'
# ref.py - TCX2003 class-test EXTRAS / copy-source (generic item). NOT the main app (that's app.py).
# Copy a pattern from here into app.py and rename. Reuses app.py's templates (list / report / item_form).
import io
import csv
from flask import Flask, render_template, request, Response, redirect, url_for
from config_db import get_db_connection

app = Flask(__name__)

# SEARCH: WHERE ... LIKE %kw% (renders the list template)
@app.route("/search_items", methods=["GET", "POST"])
def search_items():
    error = None
    results = None
    if request.method == "POST":
        kw = "%" + request.form.get("q", "") + "%"       # wrap for partial match
        db = None
        cursor = None
        try:
            db = get_db_connection()
            cursor = db.cursor(dictionary=True)
            cursor.execute(
                "SELECT item_id, item_name, description FROM item WHERE item_name LIKE %s ORDER BY item_id",
                (kw,)
            )
            results = cursor.fetchall()
        except Exception as e:
            error = "Search failed: " + str(e)
        finally:
            if cursor:
                cursor.close()
            if db:
                db.close()
    return render_template("list.html", message=None, error=error, results=results)

# STORED-PROCEDURE call (LIVE demo of callproc + stored_results; create the proc yourself first - §4.1 result-set proc)
@app.route("/item_summary")
def item_summary():
    error = None
    results = None
    db = None
    cursor = None
    try:
        db = get_db_connection()
        cursor = db.cursor(dictionary=True)
        cursor.callproc("get_item_summary")              # IN: callproc("n",[arg])  OUT: ra=callproc(...); ra[0]
        for r in cursor.stored_results():                # proc results come back here - iterate, can't fetchall the cursor
            results = r.fetchall()
    except Exception as e:
        error = "Procedure call failed: " + str(e)
    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()
    return render_template("report.html", title="Item Summary (stored procedure)", error=error, results=results)

# UPDATE variant that RE-RENDERS with a rowcount message (vs app.py edit_item's PRG redirect)
@app.route("/update_item", methods=["GET", "POST"])
def update_item():
    message = None
    error = None
    form_data = {"item_id": "", "item_name": "", "description": ""}
    if request.method == "POST":
        form_data["item_id"] = request.form.get("item_id", "")
        form_data["item_name"] = request.form.get("item_name", "")
        form_data["description"] = request.form.get("description", "")
        db = None
        cursor = None
        try:
            db = get_db_connection()
            cursor = db.cursor()
            cursor.execute(
                "UPDATE item SET item_name=%s, description=%s WHERE item_id=%s",
                (form_data["item_name"], form_data["description"], form_data["item_id"])
            )
            db.commit()
            message = "Item updated." if cursor.rowcount > 0 else "No item with that id."  # rowcount = rows matched
        except Exception as e:
            error = "Failed to update: " + str(e)
            if db:
                db.rollback()
        finally:
            if cursor:
                cursor.close()
            if db:
                db.close()
    return render_template("item_form.html", mode="edit", orig_id=form_data["item_id"],
                           message=message, error=error, form_data=form_data)

# -- AUTH guard (copy into a route that needs login). Needs app.secret_key + a /login that sets session: --
# from flask import session
# app.secret_key = "dev"
# if not session.get("uid"): return redirect(url_for("login"))
# session["uid"] = request.form.get("uid", "")          # hash real pw: hashlib.md5(pw.encode()).hexdigest()

# CHART (matplotlib Figure -> PNG -> base64 data-URI; JIANG KAN's flask_code_template idiom).
# IN SCOPE: L3 lecture + Quiz 3 Q12 (print_png) + his template. Needs `pip install matplotlib`.
@app.route("/sales_chart")
def sales_chart():
    error = None
    rows = None
    img = None                                           # the <img src> data-URI; filled by the export step
    db = None
    cursor = None
    try:
        from matplotlib.figure import Figure             # local import so ref.py still loads without matplotlib
        from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
        import base64
        db = get_db_connection()
        cursor = db.cursor(dictionary=True)
        cursor.execute("""
            SELECT i.item_id, COALESCE(SUM(s.qty), 0) AS total_qty
            FROM item i LEFT JOIN sale s ON i.item_id = s.item_id
            GROUP BY i.item_id ORDER BY i.item_id
        """)                                             # LEFT JOIN keeps 0-sale items on the chart
        rows = cursor.fetchall()

        fig = Figure()                                   # OOP API, NOT pyplot (thread-safe per request)
        ax = fig.add_subplot(1, 1, 1)
        ax.bar([r["item_id"] for r in rows], [r["total_qty"] for r in rows])
        ax.set_xlabel("Item")
        ax.set_ylabel("Total Qty Sold")
        ax.set_title("Sales by Item")

        png = io.BytesIO()
        FigureCanvas(fig).print_png(png)                 # Quiz 3 Q12: EXPORT (print_png), not draw (.plot)
        img = "data:image/png;base64," + base64.b64encode(png.getvalue()).decode("utf8")
    except Exception as e:
        error = "Chart failed: " + str(e)
    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()
    return render_template("chart.html", title="Sales by Item", error=error, rows=rows, img=img)

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)
PY_REF

cat > docker-compose.yml <<'YML_COMPOSE'
services:
  mysql:
    image: mysql:8
    command: --log-bin-trust-function-creators=1   # let tcx2003_ct CREATE triggers/functions (binlog on by default → else SUPER-privilege error)
    environment:
      MYSQL_ROOT_PASSWORD: tcx2003_ct
      MYSQL_DATABASE: tcx2003_ct
      MYSQL_USER: tcx2003_ct
      MYSQL_PASSWORD: tcx2003_ct
    ports:
      - "3306:3306"
YML_COMPOSE

cat > start.sh <<'SH_START'
#!/usr/bin/env bash
# start.sh - ONE command to boot the whole class-test stack:
#   MySQL in docker (EMPTY db - create your tables/proc/trigger in TablePlus) -> wait ready -> Flask :5001 keep-alive loop.
#   ./start.sh         normal start (keep data)
#   ./start.sh fresh   wipe the volume for a clean EMPTY db
# Ctrl-C once stops. (Recorder is separate: ../record-screen.sh)
cd "$(dirname "$0")" || exit 1

if [ "${1:-}" = "fresh" ]; then
  echo "↻ fresh: down -v for a clean empty db..."
  docker compose down -v
fi

echo "▶ MySQL up..."
docker compose up -d || { echo "docker compose up failed"; exit 1; }

printf "⏳ waiting for MySQL"
until docker compose exec -T mysql mysql -uroot -ptcx2003_ct -e "SELECT 1" >/dev/null 2>&1; do
  printf '.'; sleep 1
done
echo " ready."

echo "▶ Flask on http://127.0.0.1:5001  (Ctrl-C to stop)"
trap 'echo; echo stopped.; exit 0' INT
while true; do
  python3 app.py
  echo "↻ flask exited - restarting in 1s"
  sleep 1
done
SH_START

chmod +x start.sh

cat > templates/index.html <<'HTML_INDEX'
<!DOCTYPE html>
<html>
<head>
    <title>TCX2003 App</title>
</head>
<body>

<h1>TCX2003 App</h1>

<ul>
    <li><a href="/list_items">List items</a> (read + per-row edit/delete)</li>
    <li><a href="/add_item">Add item</a></li>
    <li><a href="/report">Report</a> (JOIN + GROUP BY)</li>
    <li><a href="/export_csv">Export CSV</a></li>
</ul>

</body>
</html>
HTML_INDEX

cat > templates/list.html <<'HTML_LIST'
<!DOCTYPE html>
<html>
<head>
    <title>Item List</title>
</head>
<body>

<h1>All Items</h1>

{% if message %}
<p style="color: green;">{{ message }}</p>
{% endif %}

{% if error %}
<p style="color: red;">{{ error }}</p>
{% endif %}

<p>
    <a href="/add_item">Add item</a> |
    <a href="/report">Report</a> |
    <a href="/export_csv">Download CSV</a>
</p>

{% if results is not none %}
{% if results %}
<table border="1">
    <tr>
        <th>Item ID</th>
        <th>Item Name</th>
        <th>Description</th>
        <th>Actions</th>
    </tr>
    {% for row in results %}
    <tr>
        <td>{{ row['item_id'] }}</td>
        <td>{{ row['item_name'] }}</td>
        <td>{{ row['description'] }}</td>
        <td>
            <a href="/edit_item/{{ row['item_id'] }}">Edit</a>
            <form method="post" action="/delete_item" style="display:inline"
                onsubmit="return confirm('Delete {{ row.item_id }}?')">
                <input type="hidden" name="item_id" value="{{ row['item_id'] }}">
                <button type="submit">Delete</button>
            </form>
        </td>
    </tr>
    {% endfor %}
</table>
{% else %}
<p>No items found.</p>
{% endif %}
{% endif %}

</body>
</html>
HTML_LIST

cat > templates/item_form.html <<'HTML_FORM'
<!DOCTYPE html>
<html>
<head>
    <title>{{ 'Edit Item' if mode == 'edit' else 'Add Item' }}</title>
</head>
<body>

<h1>{{ 'Edit Item' if mode == 'edit' else 'Add New Item' }}</h1>

{% if message %}
<p style="color: green;">{{ message }}</p>
{% endif %}

{% if error %}
<p style="color: red;">{{ error }}</p>
{% endif %}

<!-- ONE form, two modes: add posts to /add_item, edit posts to /edit_item/<original id> -->
<form method="post"
      action="{{ '/edit_item/' ~ orig_id if mode == 'edit' else '/add_item' }}">
    <p>
        <label>Item ID:</label><br>
        <input type="text" name="item_id" value="{{ form_data['item_id'] }}">
    </p>
    <p>
        <label>Item Name:</label><br>
        <input type="text" name="item_name" value="{{ form_data['item_name'] }}">
    </p>
    <p>
        <label>Description:</label><br>
        <input type="text" name="description" value="{{ form_data['description'] }}">
    </p>
    <button type="submit">{{ 'Save changes' if mode == 'edit' else 'Add Item' }}</button>
</form>

<p><a href="/list_items">Back to items</a></p>

</body>
</html>
HTML_FORM

cat > templates/report.html <<'HTML_REPORT'
<!DOCTYPE html>
<html>
<head>
    <title>{{ title }}</title>
</head>
<body>

<h1>{{ title }}</h1>

{% if error %}
    <p style="color: red;">{{ error }}</p>
{% endif %}

{% if results is not none %}
    {% if results %}
    <table border="1">
        <tr>
            {% for col in results[0].keys() %}<th>{{ col }}</th>{% endfor %}
        </tr>
        {% for row in results %}
        <tr>
            {% for val in row.values() %}<td>{{ val }}</td>{% endfor %}
        </tr>
        {% endfor %}
    </table>
    {% else %}
    <p>No rows.</p>
    {% endif %}
{% endif %}

<p><a href="/list_items">Back to items</a></p>

</body>
</html>
HTML_REPORT

cat > templates/chart.html <<'HTML_CHART'
<!DOCTYPE html>
<html>
<head>
    <title>{{ title }}</title>
</head>
<body>

<h1>{{ title }}</h1>

{% if error %}
    <p style="color: red;">{{ error }}</p>
{% endif %}

{% if img %}
    <img src="{{ img }}" alt="chart">
{% endif %}

{% if rows %}
<table border="1">
    <tr>
        {% for col in rows[0].keys() %}<th>{{ col }}</th>{% endfor %}
    </tr>
    {% for row in rows %}
    <tr>
        {% for val in row.values() %}<td>{{ val }}</td>{% endfor %}
    </tr>
    {% endfor %}
</table>
{% endif %}

<p><a href="/list_items">Back to items</a></p>

</body>
</html>
HTML_CHART

```

### up

```bash
./start.sh fresh # MySQL (empty db) -> wait -> Flask :5001 keep-alive loop
```
> ```bash
> docker compose exec mysql mysql -uroot -ptcx2003_ct -e "SET GLOBAL log_bin_trust_function_creators = 1;"
> ```
>
> one-time deps:  `python3 -m pip install --break-system-packages flask mysql-connector-python matplotlib`  (matplotlib only needed for /sales_chart)
> clean DB / 3306 busy:  `./start.sh fresh`  (down -v + reseed)
> **DB boots EMPTY** — create your tables/proc/trigger in TablePlus from §3/§4 (or `mysql < file.sql`). `./start.sh fresh` = clean empty DB; plain `./start.sh` keeps your data.
> **rename `item`→your entity:** find-replace *whole-word + match-case* on `item_id`, `item_name`, table `item`, `sale` (NOT bare `item` — hits comments/substrings; F2 Rename Symbol misses SQL + Jinja strings). Then `grep -rn "item" .` → zero stragglers.
> **last 15 min = submission:** paste all code (mask the `tcx2003_ct` password), paste every screenshot the paper asks for; a partial route still scores.
> TablePlus:  `127.0.0.1:3306` · user `tcx2003_ct` / pass `tcx2003_ct` · db `tcx2003_ct`

## 2. Critical mistakes

> Scan before you submit. The how-to facts live as comments in the §1 boilerplate, at point of use.

| Gotcha | Rule |
|--------|------|
| Write "ran" but data is gone | `conn.commit()` **after every INSERT/UPDATE/DELETE** (**not for SELECT**) |
| `%s` is a **driver** placeholder, not Python `%` | `execute(sql, (val,))` — comma + tuple, never `sql % val`; `%s` for *every* type (no `%d`, no quotes) |
| **One-value tuple** | `(val,)` with the trailing comma; `(val)` is not a tuple |
| `InternalError: Unread result found` | `fetchall()` (or finish iterating) before reusing the cursor, or `conn.cursor(buffered=True)` |
| Dict vs tuple cursor | `row["col"]` (dict) vs `row[0]` (tuple) — match how you index downstream |
| `%s` marks a value, not a name | table/column names are hardcoded in the string; only values are parameterised |
| **SQL injection** | user input concatenated into the SQL string is the hole; defence = `%s` + params tuple — never f-string / `+` / `%` user values into the query |
| Form | fetch by name |
| **Spec word → constraint** (marks leak HERE) | "required" → `NOT NULL` · "unique / never share" → `UNIQUE` · "one of {…}" → `ENUM` · "must be positive / 350–500" → `CHECK` · "format like D0001" → `CHECK … REGEXP` · a phone / id / code is text → **`VARCHAR`, not `INT`** |
| **Proc shape** | "the total FOR customer X" → `OUT` param + `SELECT … INTO`; "**for every** X show …" → result set (`SELECT` rows, `LEFT JOIN` + `GROUP BY`, `stored_results()`) |

---

## 3. SQL

Example-first SQL reference on one schema (`customer` / `product` / `sale`, built in 3.1). Every block is verified to run on MySQL 8. Copy into TablePlus (DB `tcx2003_ct`, pick it in the sidebar), adapt names to the question.

### 3.1 CREATE TABLE

```sql
CREATE TABLE IF NOT EXISTS customer ( -- IF NOT EXISTS: safe to re-run (idempotent)
  customer_id INT PRIMARY KEY, -- INT, single-column PK
  name        VARCHAR(60) NOT NULL, -- required, variable length
  email       VARCHAR(120) UNIQUE, -- no dup, NULL allowed
  city        VARCHAR(40), -- nullable
  joined      DATE, -- date only (DATETIME/TIMESTAMP if you need a time)
  referred_by INT, -- self-FK column: who referred this customer (NULL = direct signup)
  CHECK (email REGEXP '^[^@]+@[^@]+\\.[^@]+$'), -- REGEXP CHECK (CHECK enforced on MySQL 8.0.16+)
  -- FIXED-FORMAT ID: CHECK (id REGEXP '^D[0-9]{4}$') = D+4 digits (D0001) · '^A[0-9]{7}[A-Z]$' = matric A1234567Z
  --   {n} = exactly n · ^...$ anchor the WHOLE value (omit them → matches any substring!) · REGEXP is case-INSENSITIVE
  FOREIGN KEY (referred_by) REFERENCES customer(customer_id) -- self-referencing FK -> same table; MUST be nullable
    ON DELETE SET NULL -- referrer removed -> link cleared (never cascade a customer into itself)
);

CREATE TABLE IF NOT EXISTS product (
  product_id INT AUTO_INCREMENT PRIMARY KEY, -- auto id; AUTO_INCREMENT must be the leftmost key column
  sku        CHAR(8) UNIQUE, -- fixed 8 chars (CHAR); VARCHAR stores only actual length
  name       VARCHAR(80) NOT NULL, -- required
  category   ENUM('book','tech','food'), -- one of the set; stored as the string, invalid value rejected
  price      DECIMAL(8,2) NOT NULL DEFAULT 0.00, -- money: exact; never FLOAT/DOUBLE (binary rounding corrupts cents)
  stock      INT NOT NULL DEFAULT 0, -- default 0
  added      DATE,
  CHECK (price >= 0 AND stock >= 0) -- multi-column CHECK
);

CREATE TABLE IF NOT EXISTS sale (
  customer_id INT, -- FK part 1
  product_id  INT, -- FK part 2
  sale_date   DATE,
  qty         INT NOT NULL,
  PRIMARY KEY (customer_id, product_id, sale_date), -- composite PK (table-level)
  FOREIGN KEY (customer_id) REFERENCES customer(customer_id) -- FK must reference a PK/UNIQUE column of the parent
    ON UPDATE CASCADE ON DELETE CASCADE, -- cascade child rows
  FOREIGN KEY (product_id) REFERENCES product(product_id)
    ON UPDATE CASCADE ON DELETE RESTRICT, -- block delete if referenced
  CHECK (qty > 0)
);
```

**FK referential actions** — the `ON DELETE` / `ON UPDATE` clause, chosen per FK:

| Action | Effect on the child when the parent row is deleted / its key updated |
|---|---|
| `CASCADE` | child rows deleted / child FK follows the new key value |
| `SET NULL` | child FK set to `NULL` — that column MUST be nullable |
| `RESTRICT` | reject the parent delete/update while a child references it — **the DEFAULT if you omit the clause** |
| `NO ACTION` | = `RESTRICT` in InnoDB (checked immediately, no deferral) |
| `SET DEFAULT` | parses but InnoDB **rejects** it at create-time — never use |

e.g. `donation.donor_id` → `ON DELETE CASCADE` (donor gone → their donations vanish, per the paper).

**DB column type → HTML form input** (the full set — `name` MUST match the column + `request.form.get("x")`):

| Column | HTML input |
|---|---|
| `VARCHAR` / short `TEXT` | `<input type="text" name="x" value="{{ form_data.x }}">` |
| `INT` | `<input type="number" name="x" value="{{ form_data.x }}">` |
| `DECIMAL(8,2)` | `<input type="number" step="0.01" name="x" value="{{ form_data.x }}">` (`step` = allow decimals) |
| `DATE` | `<input type="date" name="x" value="{{ form_data.x or '' }}">` |
| `ENUM(…)` | `<select name="x">` + one `<option>` per value (detail below) |
| long `TEXT` | `<textarea name="x">{{ form_data.x }}</textarea>` |

Details for the two tricky ones:

**ENUM column → HTML `<select>` input.** An `ENUM('A+','A-', …)` column pairs with a dropdown whose options are the *same* values — the UI mirror of the DB constraint. Static form:

```html
<!-- name MUST match the column + request.form.get("blood_type") -->
<select name="blood_type">
  <option value="">-- select --</option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <!-- … one <option> per ENUM value … -->
</select>
```

Dynamic + edit-mode pre-select — loop a Python list, mark the current value `selected`:

```python
BLOOD_TYPES = ['A+','A-','B+','B-','O+','O-','AB+','AB-']   # app.py → render_template(..., blood_types=BLOOD_TYPES)
```
```html
<select name="blood_type">
  <option value="">-- select --</option>
  {% for bt in blood_types %}
  <option value="{{ bt }}" {% if bt == form_data.blood_type %}selected{% endif %}>{{ bt }}</option>
  {% endfor %}
</select>
```
- `<option value="X">` is what gets submitted; the text between the tags is only what's shown.
- `selected` pre-picks the current value on the **edit** form — the `<select>` equivalent of `value="{{ form_data.x }}"` on a text input.

**DATE column → HTML `<input type="date">`.** The picker submits `YYYY-MM-DD` — exactly MySQL's `DATE` format, so no conversion. Two gotchas:
- **Optional date:** convert empty string → `NULL` in Python (`form.get("registered_on") or None`); inserting `''` into a `DATE` errors.
- **Edit pre-fill:** `value="{{ form_data.registered_on or '' }}"` — the `or ''` stops a `None` rendering literally into the input box.

**Composite FK** — a child whose FK spans the *same columns, same order* as the parent's composite PK (recurring exam hard-spot):

```sql
CREATE TABLE IF NOT EXISTS bin (
  warehouse VARCHAR(10), aisle INT, shelf INT, label VARCHAR(40),
  PRIMARY KEY (warehouse, aisle, shelf)                          -- composite PK
);
CREATE TABLE IF NOT EXISTS slot (
  warehouse VARCHAR(10), aisle INT, shelf INT, slot_no INT,
  PRIMARY KEY (warehouse, aisle, shelf, slot_no),
  FOREIGN KEY (warehouse, aisle, shelf)                          -- composite FK: SAME cols, SAME order as parent PK
    REFERENCES bin(warehouse, aisle, shelf)
);
```

- **Natural PK** (`donor_id VARCHAR(5) PRIMARY KEY` — a code *you* supply like `D0001`) vs **surrogate PK** (`id INT AUTO_INCREMENT PRIMARY KEY` — the DB assigns it). Natural when the domain has a stable unique code (matric, donor id); surrogate when it doesn't. An FK column's type must **match** the PK it references.

### 3.2 INSERT / UPDATE / DELETE

```sql
-- INSERT single row (explicit columns)
INSERT INTO customer (customer_id, name, email, city, joined)
VALUES (1, 'Ada', 'ada@mail.com', 'Singapore', '2026-01-10');

-- INSERT multi-row: one statement, atomic, faster than N single inserts
INSERT INTO product (sku, name, category, price, stock, added) VALUES -- product_id omitted -> AUTO_INCREMENT fills it
  ('BK000001', 'SQL Primer', 'book', 19.90, 50, '2026-02-01'),
  ('TC000002', 'USB-C Hub',  'tech', 45.00, 12, '2026-02-03'),
  ('FD000003', 'Cold Brew',  'food',  6.50, 200,'2026-02-05');

-- UPDATE with WHERE (no WHERE = every row changed!)
UPDATE product
SET price = price * 1.10, stock = stock - 5
WHERE category = 'tech';

-- DELETE with WHERE (no WHERE = whole table gone!)
DELETE FROM sale
WHERE sale_date < '2026-01-01';
```

### 3.3 SELECT ... WHERE

```sql
-- All tech products under $50, in stock, newest first
SELECT product_id, name, price, stock
FROM   product
WHERE  category = 'tech'
  AND  price < 50.00
  AND  stock > 0
ORDER  BY added DESC
LIMIT  10;

-- Comparison families on one query
SELECT name, city, joined
FROM   customer
WHERE  city IN ('Singapore', 'Penang') -- set membership
  AND  joined BETWEEN '2024-01-01' AND '2024-12-31' -- inclusive range
  AND  name LIKE 'A%' -- starts with A
  AND  email IS NOT NULL -- NULL test, never = NULL
ORDER  BY joined;

-- Distinct list of cities we have customers in
SELECT DISTINCT city FROM customer ORDER BY city;
```

Keys / gotchas:

| Operator | Means | Note |
|----------|-------|------|
| `=  <> < <= > >=` | comparison | `<>` not `!=` in exam style |
| `AND OR NOT` | boolean | `NOT` binds tightest, then `AND`, then `OR` — parenthesise mixed |
| `LIKE` | pattern | `%` = any run, `_` = one char; default case-insensitive collation |
| `IN (...)` | set membership | shorter than chained `OR` |
| `BETWEEN a AND b` | range | inclusive both ends |
| `IS NULL` / `IS NOT NULL` | NULL test | `= NULL` is always UNKNOWN, never matches |

- `ORDER BY col [ASC|DESC]`, `ASC` is default; multi-key `ORDER BY a DESC, b`.
- `LIMIT n` or `LIMIT offset, n` (offset is 0-based).
- `DISTINCT` applies to the whole row of selected columns, not one column.
- 3-valued logic: any comparison with `NULL` yields UNKNOWN, and `WHERE` keeps only TRUE rows.

### 3.4 JOINs

```sql
-- INNER: customers and the products they bought (matches only)
SELECT c.name, p.name AS product, s.qty, s.sale_date
FROM   customer c
JOIN   sale s    ON s.customer_id = c.customer_id
JOIN   product p ON p.product_id  = s.product_id;

-- LEFT: every customer, NULLs where they never bought
SELECT c.name, s.product_id, s.qty
FROM   customer c
LEFT JOIN sale s ON s.customer_id = c.customer_id;

-- OLD-STYLE comma join (JIANG KAN uses this) = INNER JOIN
SELECT c.name, p.name
FROM   customer c, sale s, product p
WHERE  c.customer_id = s.customer_id
  AND  p.product_id  = s.product_id;

-- CROSS: every customer x every product (Cartesian)
SELECT c.name, p.name
FROM   customer c
CROSS JOIN product p;

-- SELF-join (shared attribute): customers in the same city as 'Alice'
SELECT a.name, b.name AS same_city
FROM   customer a
JOIN   customer b ON a.city = b.city
WHERE  a.name = 'Alice'
  AND  b.name <> a.name;

-- SELF-join via self-FK (hierarchy): each customer + who referred them
SELECT c.name AS customer, r.name AS referred_by
FROM   customer c
LEFT JOIN customer r ON r.customer_id = c.referred_by; -- LEFT keeps direct signups (referred_by NULL)

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
| `CROSS JOIN` | every combination | no `ON`, m×n rows |
| comma `FROM a,b WHERE` | = INNER once you add the `WHERE` predicate | a Cartesian product if you forget the predicate |

- Anti-join pattern: `LEFT JOIN ... WHERE right.key IS NULL` = "rows in A with no match in B".
- Self-join needs two aliases of the same table; add `b.x <> a.x` to drop the row matching itself. Two flavours: **shared-attribute** (`a.city = b.city`) vs **self-FK hierarchy** (`c.referred_by = r.customer_id`, use `LEFT` to keep roots).
- Comma join without the `WHERE` link silently becomes a CROSS product — common bug.
- Qualify columns (`c.name`, `p.name`) whenever a name appears in 2+ tables, else "ambiguous column".

### 3.5 Set operations

```sql
-- UNION: customer cities + product-derived cities, duplicates removed
SELECT city FROM customer
UNION
SELECT 'Online' AS city; -- column count + order must match

-- UNION ALL: keep duplicates (faster, no dedup pass)
SELECT customer_id FROM sale WHERE qty >= 5
UNION ALL
SELECT customer_id FROM sale WHERE sale_date >= '2025-01-01';

-- INTERSECT (MySQL 8.0.31+): customers who bought AND joined in 2024
SELECT customer_id FROM sale
INTERSECT
SELECT customer_id FROM customer WHERE YEAR(joined) = 2024;

-- EXCEPT (MySQL 8.0.31+): customers who joined but never bought
SELECT customer_id FROM customer
EXCEPT
SELECT customer_id FROM sale;
```

Pre-8.0.31 workarounds (no native INTERSECT / EXCEPT):

```sql
-- INTERSECT via IN
SELECT customer_id FROM customer
WHERE  customer_id IN (SELECT customer_id FROM sale);

-- EXCEPT via NOT IN  (watch NULLs — see 3.7)
SELECT customer_id FROM customer
WHERE  customer_id NOT IN (SELECT customer_id FROM sale);

-- EXCEPT via NOT EXISTS (NULL-safe)
SELECT c.customer_id FROM customer c
WHERE  NOT EXISTS (SELECT 1 FROM sale s WHERE s.customer_id = c.customer_id);
```

Keys / gotchas:

| Op | Duplicates | Native since |
|----|-----------|--------------|
| `UNION` | removed | always |
| `UNION ALL` | kept | always |
| `INTERSECT` | removed | 8.0.31 |
| `EXCEPT` | removed | 8.0.31 |

- Every branch needs the same column count and compatible types; result names come from the first branch.
- `ORDER BY` / `LIMIT` go once at the very end, applied to the combined result.
- `UNION ALL` over `UNION` when you know there are no dupes or don't care — skips the sort/dedup.
- INTERSECT → `IN`/`EXISTS`; EXCEPT → `NOT IN`/`NOT EXISTS`. Prefer `EXISTS` forms (NULL-safe).

### 3.6 Aggregation

```sql
-- One row per category: count, revenue, avg price, range
SELECT p.category,
       COUNT(*)                       AS n_products,
       COALESCE(SUM(s.qty), 0)        AS units_sold, -- NULL -> 0 when no sales
       ROUND(AVG(p.price), 2)         AS avg_price,
       MIN(p.price)                   AS cheapest,
       MAX(p.price)                   AS dearest
FROM   product p
LEFT JOIN sale s ON s.product_id = p.product_id
GROUP  BY p.category
HAVING units_sold > 0 -- filter AFTER aggregation
ORDER  BY units_sold DESC;

-- WHERE (pre-aggregate) vs HAVING (post-aggregate) together
SELECT s.customer_id, SUM(s.qty) AS total_qty
FROM   sale s
WHERE  s.sale_date >= '2025-01-01' -- row filter, before grouping
GROUP  BY s.customer_id
HAVING SUM(s.qty) > 10; -- group filter, after grouping
```

Keys / gotchas:

| Func | Returns |
|------|---------|
| `COUNT(*)` | all rows in group (incl. NULLs) |
| `COUNT(col)` | non-NULL values of `col` |
| `COUNT(DISTINCT col)` | distinct non-NULL values |
| `SUM / AVG / MIN / MAX` | ignore NULLs |
| `ROUND(x, d)` | round to `d` decimals |

- `WHERE` filters rows **before** `GROUP BY`; `HAVING` filters groups **after**. Can't use an aggregate in `WHERE`.
- Aggregates skip NULL, so `SUM`/`AVG` over an all-NULL (no-match) group return `NULL` — wrap `COALESCE(SUM(x),0)`.
- `AVG` ignores NULLs in the denominator too; `COUNT(*)` does not.
- ONLY_FULL_GROUP_BY (MySQL 8 default): every non-aggregated `SELECT` column must be in `GROUP BY`.
- `HAVING` may reference the column alias or repeat the aggregate expression.

### 3.7 Subqueries

```sql
-- SCALAR: products priced above the overall average
SELECT name, price
FROM   product
WHERE  price > (SELECT AVG(price) FROM product);

-- IN: customers who bought any 'tech' product
SELECT name FROM customer
WHERE  customer_id IN (
    SELECT s.customer_id
    FROM   sale s JOIN product p ON p.product_id = s.product_id
    WHERE  p.category = 'tech');

-- EXISTS (correlated): customers with at least one sale
SELECT c.name FROM customer c
WHERE  EXISTS (SELECT 1 FROM sale s WHERE s.customer_id = c.customer_id);

-- NOT EXISTS: customers who never bought (NULL-safe anti-pattern)
SELECT c.name FROM customer c
WHERE  NOT EXISTS (SELECT 1 FROM sale s WHERE s.customer_id = c.customer_id);

-- CORRELATED scalar: products priced above their own category average
SELECT p.name, p.category, p.price
FROM   product p
WHERE  p.price > (SELECT AVG(p2.price) FROM product p2
                  WHERE p2.category = p.category);

-- DERIVED TABLE (subquery in FROM): top spenders
SELECT t.customer_id, t.total
FROM ( SELECT customer_id, SUM(qty) AS total
       FROM   sale GROUP BY customer_id ) AS t -- alias is mandatory
WHERE  t.total > 5;

-- FIND THE MAX: product(s) with the highest price
SELECT name, price FROM product
WHERE  price = (SELECT MAX(price) FROM product);

-- WINDOW function: rank products by price within each category
SELECT name, category, price,
       ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rn,
       RANK()       OVER (PARTITION BY category ORDER BY price DESC) AS rnk
FROM   product;
```

Keys / gotchas:

| Form | Use when |
|------|----------|
| Scalar `(SELECT ... )` | returns exactly 1 row, 1 col; used like a value |
| `IN (subquery)` | membership in a single returned column |
| `EXISTS (subquery)` | "at least one match"; correlated, returns boolean |
| `NOT EXISTS` | anti-join; NULL-safe |
| Derived table `FROM (...) t` | pre-aggregate then filter/join |
| `OVER (PARTITION BY ...)` | per-row rank/number without collapsing rows |

- **NOT IN NULL trap:** if the subquery returns any `NULL`, `x NOT IN (...)` yields UNKNOWN for every row → **empty result**. Use `NOT EXISTS` instead, or `WHERE col IS NOT NULL` in the subquery.
- Correlated subquery references the outer row (`p.category` above) → re-evaluated per outer row; `EXISTS` is the canonical correlated form.
- `EXISTS` stops at the first match — `SELECT 1` is idiomatic, the select list is ignored.
- Every derived table in `FROM` needs an alias, even if unused.
- `ROW_NUMBER` always unique (1,2,3); `RANK` ties share a number then skips (1,1,3); `DENSE_RANK` ties share, no skip (1,1,2).
- Window functions run after `WHERE`/`GROUP BY`/`HAVING` but before `ORDER BY`; can't put them in `WHERE` (wrap in a derived table to filter on `rn`).

---

## 4. Stored Procedures, Functions & Triggers

> Past-paper signal: PROCEDURE-heavy at the good-grade tier; FUNCTION occasional; TRIGGER thin (0 found). Lead with procedures, keep trigger as insurance.

**How you invoke each from Flask** — the three are called *completely* differently:

| DB object | Call it from Flask via | Read the result |
|---|---|---|
| **PROCEDURE** | `cursor.callproc("name", [args])` | result-set → iterate `cursor.stored_results()`; scalar `OUT` → `result[i]` by index |
| **FUNCTION** | inside a normal query: `cursor.execute("SELECT func(a, b) … ")` | `fetchall()` like any SELECT — it's just a value |
| **TRIGGER** | you **don't** — it fires automatically on INSERT / UPDATE / DELETE | its effect shows up in the affected table |

### 4.1 CREATE PROCEDURE

**Two shapes — pick by what the question asks for:**

| Question wants… | Shape | Read it via |
|---|---|---|
| ONE value ("total spent by customer X") | `IN` / `OUT` params + `SELECT … INTO` | `CALL p(1,@t); SELECT @t;` · Python `callproc` → OUT by index |
| A TABLE of rows ("**for every** donor, show count + total") | **no OUT**, plain `SELECT` (usually `LEFT JOIN` + `GROUP BY`) | `CALL p();` result set · Python iterate `stored_results()` |

Reaching for the scalar shape when the question wants rows is the classic trap.

**Result-set procedure** — the "summary / report per X" shape (the most common exam ask):

```sql
DROP PROCEDURE IF EXISTS sales_summary;
DELIMITER //
CREATE PROCEDURE sales_summary()                       -- NO params: it returns ROWS, not a scalar
BEGIN
    SELECT c.customer_id, c.name,
           COUNT(s.product_id)     AS num_sales,
           COALESCE(SUM(s.qty), 0) AS total_qty
    FROM customer c
    LEFT JOIN sale s ON s.customer_id = c.customer_id   -- LEFT keeps zero-activity rows ("must still appear")
    GROUP BY c.customer_id, c.name
    ORDER BY total_qty DESC;
END //
DELIMITER ;
CALL sales_summary();   -- returns a RESULT SET (no @vars)
```

Python — a result set comes back via `stored_results()`, NOT `fetchall()` on the cursor:

```python
cur = conn.cursor(dictionary=True)
cur.callproc("sales_summary")
rows = []
for r in cur.stored_results():   # the rows are HERE, not on cur directly
    rows = r.fetchall()
cur.close()
```

**Scalar-OUT procedure** — one value back via `OUT`:

```sql
-- total_spent: sum qty * price across a customer's sales, return via OUT
DELIMITER //
CREATE PROCEDURE total_spent(IN cid INT, OUT total DECIMAL(10,2))
BEGIN
    SELECT COALESCE(SUM(s.qty * p.price), 0.00) -- COALESCE so no-sale customer = 0, not NULL
    INTO total
    FROM sale s, product p -- old-style comma join (Jiang idiom)
    WHERE s.product_id = p.product_id
      AND s.customer_id = cid;
END //
DELIMITER ;

-- call: bind OUT to a session @var, then read it
CALL total_spent(1, @t);
SELECT @t;
```

Keys / gotchas:
- `DELIMITER //` retargets the statement terminator so the inner `;` don't end the CREATE early; reset with `DELIMITER ;` after.
- `IN` = read-only arg (default), `OUT` = write-back, `INOUT` = both.
- `SELECT ... INTO var` must return exactly one row/value or it errors.
- `CALL proc(args)`; pass a `@session_var` to receive each OUT, then `SELECT @var` to read it.
- No `RETURN value` here (that's functions) — a procedure communicates results through OUT params or a result set.

Calling from Python (mysql-connector):

```python
cur = conn.cursor()
result = cur.callproc("total_spent", (1, 0))   # OUT slots filled in the returned tuple
total = result[1]                              # read OUT BY INDEX (1 = 'total')
print(total)
cur.close()
```

Keys:
- `cursor.callproc(name, args)` returns the full args sequence with OUT slots filled.
- Read OUT **by index**, not by name: `result[1]` is the 2nd param (`total`).
- Supply a placeholder (e.g. `0`) for every OUT position in the input tuple.

Upsert pattern (Jiang style — `IF EXISTS ... UPDATE ELSE INSERT`, trailing-underscore params):

```sql
DELIMITER //
CREATE PROCEDURE upsert_stock(IN sku_ CHAR(8), IN name_ VARCHAR(80), IN stock_ INT)
BEGIN
    IF EXISTS (SELECT 1 FROM product WHERE sku = sku_) THEN
        UPDATE product SET stock = stock_ WHERE sku = sku_;
    ELSE
        INSERT INTO product(sku, name, stock) VALUES (sku_, name_, stock_);
    END IF;
END //
DELIMITER ;

CALL upsert_stock('BK000123', 'SQL in 10 Days', 50);
```

Keys:
- Trailing-underscore params (`sku_`) avoid name-clash with the column `sku` inside `WHERE sku = sku_`.
- `IF EXISTS (SELECT 1 ...) THEN ... ELSE ... END IF;` — note the closing `END IF;`.
- `SELECT 1` is the cheap existence probe; the value is irrelevant, only the row count matters.

### 4.2 CREATE FUNCTION

```sql
-- discounted_price: scalar function, returns one value
DELIMITER //
CREATE FUNCTION discounted_price(p DECIMAL(8,2), pct INT)
RETURNS DECIMAL(8,2)
DETERMINISTIC -- same inputs => same output (required or set log_bin_trust_function_creators)
BEGIN
    RETURN ROUND(p * (1 - pct / 100), 2);
END //
DELIMITER ;
```

Use inline in SELECT and WHERE:

```sql
-- in projection
SELECT name, price, discounted_price(price, 10) AS sale_price
FROM product;

-- in WHERE: products still above $20 after a 15% cut
SELECT name
FROM product
WHERE discounted_price(price, 15) > 20.00;
```

Keys / gotchas:
- `RETURNS <type>` (clause, plural) declares the type; `RETURN <expr>` (statement, singular) hands the value back.
- `DETERMINISTIC` is effectively mandatory under default binlog settings or CREATE FUNCTION is rejected.
- A function returns exactly ONE scalar and is callable anywhere an expression is valid (SELECT list, WHERE, ORDER BY).
- A function must not produce a result set and should avoid side-effects (no INSERT/UPDATE) — that's a procedure's job.

### 4.3 CREATE TRIGGER

```sql
-- BEFORE INSERT: reject a sale the stock can't cover (business-rule guard)
DROP TRIGGER IF EXISTS trg_sale_stock; -- triggers have no CREATE OR REPLACE; drop first
DELIMITER //
CREATE TRIGGER trg_sale_stock
BEFORE INSERT ON sale
FOR EACH ROW
BEGIN
    DECLARE avail INT;
    SELECT stock INTO avail FROM product WHERE product_id = NEW.product_id;
    IF NEW.qty > avail THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Insufficient stock for this sale';
    END IF;
END //
DELIMITER ;
```

```sql
-- AFTER INSERT: auto-decrement stock once the sale row lands
DROP TRIGGER IF EXISTS trg_sale_decrement;
DELIMITER //
CREATE TRIGGER trg_sale_decrement
AFTER INSERT ON sale
FOR EACH ROW
BEGIN
    UPDATE product
    SET stock = stock - NEW.qty
    WHERE product_id = NEW.product_id;
END //
DELIMITER ;
```

```sql
-- BEFORE UPDATE: auto-field example, freeze the join date if someone tries to change it
DROP TRIGGER IF EXISTS trg_customer_freeze_joined;
DELIMITER //
CREATE TRIGGER trg_customer_freeze_joined
BEFORE UPDATE ON customer
FOR EACH ROW
BEGIN
    SET NEW.joined = OLD.joined; -- write NEW.* only in BEFORE triggers
END //
DELIMITER ;
```

Keys / gotchas:
- Timing × event: `{BEFORE | AFTER} {INSERT | UPDATE | DELETE}`; `FOR EACH ROW` fires per affected row.
- `NEW.col` = incoming/proposed value (INSERT, UPDATE); `OLD.col` = existing value (UPDATE, DELETE).
- Assigning `SET NEW.col = ...` to change/validate a row is only legal in a **BEFORE** trigger.
- `SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = '...'` raises a user error and aborts the statement — the canonical business-rule reject.
- No `CREATE OR REPLACE TRIGGER` in MySQL 8 — use `DROP TRIGGER IF EXISTS name;` first to make the script re-runnable.

### 4.4 Procedure vs Function vs Trigger

| Aspect | PROCEDURE | FUNCTION | TRIGGER |
|--------|-----------|----------|---------|
| Invoke | `CALL name(...)` explicitly | inline in an expression (SELECT/WHERE) | implicit, fires on table DML event |
| Returns | 0..n values via OUT / result set | exactly 1 scalar via `RETURN` | nothing (acts as side-effect) |
| Params | IN / OUT / INOUT | IN only | none — uses `NEW.` / `OLD.` |
| Side-effects | yes (INSERT/UPDATE/DELETE allowed) | discouraged, should be pure | yes, that's the point |
| `DETERMINISTIC` needed | no | effectively yes | no |
| Re-create | `DROP PROCEDURE IF EXISTS` | `DROP FUNCTION IF EXISTS` | `DROP TRIGGER IF EXISTS` |
| Typical use | multi-step logic, upsert, batch ops | reusable calculation in queries | enforce rule / auto-maintain field |
| Callable from Python | `cursor.callproc()`, OUT by index | inside the SQL string passed to `execute()` | not called — fires automatically |

---

## 5. Your Own Project Code — LineKeeper (PCB Assembly Job Tracking)

### 5.1 Schema constructs the §3 schema doesn't show

The §3 Book_Exchange schema covers natural/composite keys. LineKeeper adds the patterns you'll reach for when requirements mention *roles, enumerated states, or "must be positive"*: `AUTO_INCREMENT` surrogate PK, `ENUM`, a **table-level CHECK across two columns**, a named `UNIQUE KEY`, and secondary `INDEX`es.

> These three are illustrative of *constructs*, not a runnable script — they FK to tables not shown here (`process`, `project`, `card`, `job_step`). For a complete, correctly-ordered DDL, copy the repo's `sql/01-schema.sql` (creation order: process → user → project → card → job → job_plan → job_step → pcb_task).

```sql
USE tcx2003_ct;

-- ENUM column + a CHECK that spans two columns (operator => must have a process)
CREATE TABLE user (
    id                  INT AUTO_INCREMENT PRIMARY KEY,
    username            VARCHAR(64)  UNIQUE NOT NULL,
    password_hash       VARCHAR(255) NOT NULL,
    role                ENUM('requester', 'leader', 'operator') NOT NULL,
    assigned_process_id INT          NULL,
    FOREIGN KEY (assigned_process_id) REFERENCES process(id) ON DELETE RESTRICT,
    CONSTRAINT chk_operator_process
        CHECK (role != 'operator' OR assigned_process_id IS NOT NULL)
) DEFAULT CHARSET=utf8mb4;

-- single-column CHECK (quantity > 0) + three FKs in one table
CREATE TABLE job (
    id                    INT AUTO_INCREMENT PRIMARY KEY,
    job_no                INT UNIQUE NOT NULL,
    requester_id          INT NOT NULL,
    project_id            INT NOT NULL,
    card_id               INT NOT NULL,
    quantity              INT NOT NULL CHECK (quantity > 0),
    start_board_serial_nb INT NOT NULL,
    FOREIGN KEY (requester_id) REFERENCES user(id)    ON DELETE RESTRICT,
    FOREIGN KEY (project_id)   REFERENCES project(id) ON DELETE RESTRICT,
    FOREIGN KEY (card_id)      REFERENCES card(id)    ON DELETE RESTRICT
) DEFAULT CHARSET=utf8mb4;

-- ENUM with DEFAULT + named composite UNIQUE KEY + secondary INDEXes
CREATE TABLE pcb_task (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    job_step_id  INT NOT NULL,
    serial_nb    INT NOT NULL,
    status       ENUM('available','in_progress','completed','failed') DEFAULT 'available',
    operator_id  INT NULL,
    started_at   DATETIME NULL,
    completed_at DATETIME NULL,
    UNIQUE KEY uk_step_serial (job_step_id, serial_nb),
    FOREIGN KEY (job_step_id) REFERENCES job_step(id) ON DELETE RESTRICT,
    FOREIGN KEY (operator_id) REFERENCES user(id)     ON DELETE RESTRICT,
    INDEX idx_status (status)
) DEFAULT CHARSET=utf8mb4;
```

### 5.2 Stored procedure

One transaction that writes a parent row, then loops a cursor to fan out child rows. Shows every construct an exam proc would ask for: `DELIMITER`, `IN` params, `DECLARE` (vars before cursor before handlers — MySQL's required order), `CURSOR` + `NOT FOUND` handler, `EXIT HANDLER FOR SQLEXCEPTION` with `ROLLBACK`/`RESIGNAL`, `START TRANSACTION`/`COMMIT`, `LOOP`/`LEAVE`, `WHILE`, `FIND_IN_SET`, `LAST_INSERT_ID`.

```sql
DROP PROCEDURE IF EXISTS publish_plan;

DELIMITER $$

CREATE PROCEDURE publish_plan(
    IN p_job_id      INT,
    IN p_leader_id   INT,
    IN p_quantity    INT,
    IN p_start_sn    INT,
    IN p_process_csv VARCHAR(64)   -- e.g. 'A,C'  (B skipped = sparse steps)
)
BEGIN
    DECLARE v_plan_id INT;
    DECLARE v_step_id INT;
    DECLARE v_proc_id INT;
    DECLARE v_i       INT;
    DECLARE v_done    INT DEFAULT 0;

    -- cursor: declared AFTER vars, BEFORE handlers
    DECLARE cur_proc CURSOR FOR
        SELECT id FROM process
        WHERE FIND_IN_SET(code, p_process_csv) > 0
        ORDER BY sort_order;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = 1;

    -- any error -> undo the whole plan, then re-raise the real error
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;

    -- 1. the parent row (one plan per job)
    INSERT INTO job_plan (job_id, process_leader_id, start_date_expected)
    VALUES (p_job_id, p_leader_id, CURDATE());
    SET v_plan_id = LAST_INSERT_ID();

    -- 2 + 3. one sparse step per named process, then p_quantity tasks per step
    OPEN cur_proc;
    proc_loop: LOOP
        FETCH cur_proc INTO v_proc_id;
        IF v_done = 1 THEN LEAVE proc_loop; END IF;

        INSERT INTO job_step (job_plan_id, process_id) VALUES (v_plan_id, v_proc_id);
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

-- CALL publish_plan(5, 3, 10, 304, 'A,C');
```

### 5.3 Triggers

Two shapes that between them cover the trigger syllabus: rewriting `NEW.*` in place, comparing `NEW` vs `OLD`, and rejecting a bad row with `SIGNAL SQLSTATE '45000'` (the documented way to enforce a rule a `CHECK` can't — here "the leader must actually have role = leader", which needs a subquery `CHECK` can't do).

```sql
-- 1. Auto-stamp timestamps on the status transition (BEFORE UPDATE, NEW vs OLD)
DROP TRIGGER IF EXISTS trg_pcb_task_stamp_times;

DELIMITER $$
CREATE TRIGGER trg_pcb_task_stamp_times
BEFORE UPDATE ON pcb_task
FOR EACH ROW
BEGIN
    IF NEW.status = 'in_progress' AND OLD.status <> 'in_progress' THEN
        SET NEW.started_at = NOW();
    END IF;
    IF NEW.status = 'completed'   AND OLD.status <> 'completed'   THEN
        SET NEW.completed_at = NOW();
    END IF;
END$$
DELIMITER ;

-- 2. Reject an invalid FK target (BEFORE INSERT, SELECT ... INTO + SIGNAL)
DROP TRIGGER IF EXISTS trg_job_plan_leader_role;

DELIMITER $$
CREATE TRIGGER trg_job_plan_leader_role
BEFORE INSERT ON job_plan
FOR EACH ROW
BEGIN
    DECLARE v_role VARCHAR(16);
    SELECT role INTO v_role FROM user WHERE id = NEW.process_leader_id;
    IF v_role IS NULL OR v_role <> 'leader' THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'process_leader_id must reference a user whose role = leader';
    END IF;
END$$
DELIMITER ;

-- UPDATE pcb_task SET status='completed' WHERE id=1;             -- completed_at auto-stamps
-- INSERT INTO job_plan (job_id, process_leader_id) VALUES (4,5); -- user 5 = operator -> rejected
```
