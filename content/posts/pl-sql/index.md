---
title: "SQL Notebook"
date: 2024-05-19 04:50:38
tags:
  - "sql"
  - "mysql"
  - "postgresql"
categories:
  - "Software Engineering"
  - "Programming Languages"
  - "SQL"
  - "Notebooks"
subtitle: "A Personal Collection of SQL Notes and Tips"
description: "A personal collection of SQL notes, including basic commands, useful tips, and best practices for working with databases. This notebook covers practical examples and insights from using MySQL and PostgreSQL, aimed at helping you keep track of essential SQL concepts and techniques."
keywords:
  - "SQL notes"
  - "SQL commands"
  - "MySQL tips"
  - "PostgreSQL tricks"
  - "database management"
  - "SQL basics"

---

## What is SQL?
Structured Query Language (SQL) is essential for managing relational databases, allowing users to efficiently store, manipulate, and retrieve data. SQL is used in various applications, from simple websites to complex enterprise systems.

Among the popular **RDBMS** options, PostgreSQL stands out for its advanced features and robustness. Unlike MySQL, which focuses on speed and simplicity, PostgreSQL excels at handling complex queries and large datasets, emphasising standards compliance and extensibility.

In this post, I will share a variety of SQL tips and tricks that I have learnt during my first few years as a software engineer. This will serve as a comprehensive notebook on various SQL topics, including query optimisation, data aggregation, security best practices, and more!

## Differences Between MySQL and PostgreSQL
### Licensing
- **MySQL:** Open-source under the **GNU General Public License (GPL)**. Free to use, but distributing modified versions or using it in **proprietary applications may require a commercial license from Oracle**.
- **PostgreSQL:** Open-source under a permissive license similar to the MIT License. Free to use without restrictions, **allowing both open-source and proprietary use** without needing a commercial license.

> A proprietary application is software that is owned by an individual or a company and has restrictions on its use, modification, and distribution. Unlike open-source software, the source code of a proprietary application is typically not made available to the public. Users are required to comply with the licensing terms set by the owner, which may include purchasing a license or adhering to specific usage guidelines.

### Features
- **MySQL:**
  - Simple and easy to use.
  - Supports replication and basic data types.
  - Less strict with ACID compliance.
- **PostgreSQL:**
  - Supports advanced data types and indexing techniques.
  - Strong adherence to ACID properties and SQL standards.

> ACID compliance ensures that database transactions are processed reliably, maintaining **A**tomicity, **C**onsistency, **I**solation, and **D**urability.

### Performance
- **MySQL:** Optimised for read-heavy operations, commonly used in web applications.
- **PostgreSQL:** Excels in complex queries and write-heavy operations, ideal for large datasets.

> In technical interviews, you may be asked to explain scenarios where you would choose one over the other.

### Concurrency
- **MySQL:** Uses MVCC in InnoDB, handles high concurrency well but can have issues with write contention.
- **PostgreSQL:** Robust MVCC implementation, handles high concurrency and complex transactions efficiently.

> Multi-Version Concurrency Control (MVCC) allows multiple transactions to access the database simultaneously without locking, by maintaining multiple versions of the data.

1. **Multiple Versions**: When a transaction updates a record, the database keeps the old version of the record. This way, other transactions can still read the old version while the new version is being updated.

2. **Consistency**: Each transaction gets a consistent snapshot of the database as it was when the transaction started. This means that even if other transactions are updating the data, your transaction will see the data as it was at the beginning of your transaction.

3. **No Duplicate Primary Keys**: MVCC does not create multiple records with the same primary key. Instead, it maintains versions of the same record, so there are no conflicts with primary keys.

#### Example:
- **Transaction A** reads data.
- **Transaction B** updates the same data.

**With MVCC:**
- **Transaction A** sees the balance as $100 throughout its operation.
- **Transaction B** changes the balance to $150 and commits.
- New transactions starting after **Transaction B** commits will see the balance as $150.
- **Transaction A** continues to see the balance as $100 until it completes.
- Once **Transaction A** completes, the old version ($100) can be discarded, and only the new version ($150) remains.

### Replication and Clustering
- **MySQL:** Supports various replication methods and clustering solutions like [MySQL Cluster](https://www.mysql.com/products/cluster/).
- **PostgreSQL:** Supports synchronous and asynchronous replication, with advanced clustering solutions like [PostgreSQL-BDR](https://wiki.postgresql.org/wiki/BDR_Project) and [Citus](https://github.com/citusdata/citus).

### Community and Ecosystem
- **MySQL:** Large community with many third-party tools, acquired by **Oracle**.
- **PostgreSQL:** Strong open-source community with extensive documentation and a **rich ecosystem of extensions**.

### Use Cases
- **MySQL:** Ideal for web applications and platforms where **read speed is crucial**.
- **PostgreSQL:** Preferred for complex applications, data warehousing, and environments requiring **high data integrity**.

---








## Understanding SQL Injection
SQL injection is a code injection technique that exploits security vulnerabilities in an application's software. This occurs when an attacker can insert or manipulate SQL queries executed by a database, gaining unauthorized access to data or executing unwanted commands. SQL injection is a critical security risk that can expose your application to data breaches and manipulation.

### Sample Queries Demonstrating SQL Injection
Below are some sample SQL injection queries to illustrate how attackers might exploit a vulnerable system.

#### Example 1: Basic SQL Injection
As this is your SQL that you write in your code:
```sql
SELECT * FROM users WHERE username LIKE '';
```

An attacker might try to enter `admin'; -- `:
```sql
SELECT * FROM users WHERE username LIKE 'admin'; -- ';
```

#### Example 2: Bypassing Authentication
An attacker might input `' OR '1'='1` for fields like username and password, causing the query to always return true and potentially exposing all user records.
```sql
SELECT * FROM users WHERE username = '' OR '1'='1' AND password = '' OR '1'='1';
```

#### Example 3: SQL Injection with UPDATE
An attacker might input `' OR '1'='1` for the username field in an update query, potentially updating all user records.
```sql
UPDATE users SET email = 'attacker@example.com' WHERE username = '' OR '1'='1';
```

#### Example 4: Time-Based Blind SQL Injection
Here, the attacker attempts to introduce a delay using the `SLEEP` function, which could be used to test for time-based blind SQL injection vulnerabilities.
```sql
SELECT * FROM users WHERE username LIKE 'little' AND 1 = SLEEP(2); -- ';
```

#### Example 5: UNION Attack
In this case, the attacker is trying to perform a UNION attack, which can be used to retrieve data from different tables if the structure matches.
```sql
SELECT * FROM users WHERE username LIKE 'little' AND UNION (SELECT 1, 2, 3, 4, 5 FROM dual); -- ';
```

### Mitigating SQL Injection
To protect your applications from SQL injection attacks, consider the following practices:
1. **Use Prepared Statements:** This ensures that SQL code is executed as intended and not manipulated by user inputs.
2. **Input Validation:** Always validate and sanitise user inputs.
3. **Least Privilege:** Ensure that database users have the least privileges necessary to perform their tasks.

## WITH ROLLUP: Summing a Count Column
Suppose you need to count the number of records in a table and group them by a specific column while also including a grand total. You can use the `WITH ROLLUP` modifier to achieve this.

```sql
SELECT
    COUNT(*) AS dr_nb,
    br.batch_name
FROM
    batch_report br
GROUP BY
    br.batch_name WITH ROLLUP;
```

### Explanation
1. **COUNT(*)**: This function counts the number of rows for each group.
2. **GROUP BY br.batch_name**: This groups the results by the `batch_name` column.
3. **WITH ROLLUP**: This modifier adds an extra row to the result set that represents the grand total.

#### Example Scenario
**Imagine you have a table called `batch_report` with the following data:**
| batch_name | report_id |
| ---------- | --------- |
| batch1     | 1         |
| batch1     | 2         |
| batch2     | 3         |
| batch2     | 4         |
| batch3     | 5         |

**Using the query above, you would get the following result:**
| dr_nb | batch_name |
| ----- | ---------- |
| 2     | batch1     |
| 2     | batch2     |
| 1     | batch3     |
| **5**     | **NULL**       |

The row with `NULL` in the `batch_name` column represents the grand total of all counts.
