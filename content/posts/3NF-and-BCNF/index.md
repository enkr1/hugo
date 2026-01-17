---
title: 'SQL: Demystifying Database Design: A Dive into 3NF and BCNF'
date: 2024-04-20 03:09:54
tags:
  - "database-design"
  - "backend"
  - "sql"
categories:
  - "Software Engineering"
  - "Programming Languages"
  - "SQL"
  - "Notebooks"
---

Welcome to a journey through the realm of database normalisation—a key aspect of backend development that ensures your database is not only functional but also efficient and easy to manage. Today, let's break down two crucial normalisation forms—Third Normal Form (3NF) and Boyce-Codd Normal Form (BCNF)—using everyday examples to make these concepts clear and memorable.

<!-- more -->

# Why Normalise?

Imagine you're organising a big party. You have a list of guests where each guest's contact details are repeated for every event they're attending. It would be cumbersome and error-prone, right? Normalisation in databases works similarly; it helps organise the data to avoid repetition and confusion, making the database easier to manage—like having a single, organised guest list.

# Third Normal Form (3NF): Clearing Up Confusion
## What is 3NF?
A database is in Third Normal Form if it's free from the first two forms' woes (repetitions and dependencies) and goes a step further: it eliminates indirect dependencies. That's like ensuring not only that each piece of guest information is recorded once but also that all details directly relate to the guest without unnecessary detours.

## Real-life example:
Consider a school database:

| StudentID | Name    | Subject | ProfessorID | ProfessorName |
| --------- | ------- | ------- | ----------- | ------------- |
| 1         | Alice   | Math    | 101         | Prof. X       |
| 2         | Bob     | Science | 102         | Prof. Y       |
| 3         | Charlie | English | 103         | Prof. Z       |

Here, `ProfessorName` depends on `ProfessorID` rather than on the `StudentID` or `Subject`. This is like knowing the professor's name by their ID, not by the student or the subject they teach.

## How to Achieve 3NF:

To organise this into 3NF, split the details into two tables where professors are listed separately. This way, each piece of information is stored only once and directly relates to the primary subject of its table.

Students Table:

| StudentID | Name    | Subject | ProfessorID |
| --------- | ------- | ------- | ----------- |
| 1         | Alice   | Math    | 101         |
| 2         | Bob     | Science | 102         |
| 3         | Charlie | English | 103         |

Professors Table:

| ProfessorID | ProfessorName |
| ----------- | ------------- |
| 101         | Prof. X       |
| 102         | Prof. Y       |
| 103         | Prof. Z       |

# Boyce-Codd Normal Form (BCNF): A Tighter Ship
## What is BCNF?

BCNF is like 3NF but _with stricter rules_. It's about ensuring that every non-trivial dependency in the table relies solely on a `superkey`, a combination of columns that uniquely identifies a row in the table.

### Practical Example:

Take a look at this course registration table:

| CourseID | Student | Professor |
| -------- | ------- | --------- |
| 1        | Alice   | Prof. X   |
| 1        | Bob     | Prof. X   |
| 2        | Alice   | Prof. Y   |

The problem? `CourseID` alone doesn't always uniquely identify the professor since the same course could be taught by different professors in different years or semesters.

### How to Fix It:

By restructuring the data, where `CourseID` combined with another attribute (like a semester) always leads to a specific professor. This ensures each table entry is uniquely identifiable by its key components, preventing any ambiguity.
Absolutely! Let's elaborate on the example by adding another attribute—let's say "Semester"—to the table to ensure each entry is uniquely identifiable, thus adhering to the principles of BCNF.

**Example Table After Restructuring:**
To resolve this and adhere to BCNF, we add the "Semester" attribute, which, combined with `CourseID`, will act as a superkey:

| CourseID | Semester    | Student | Professor |
| -------- | ----------- | ------- | --------- |
| 1        | Fall 2024   | Alice   | Prof. X   |
| 1        | Fall 2024   | Bob     | Prof. X   |
| 2        | Spring 2025 | Alice   | Prof. Y   |

Now, each combination of `CourseID` and `Semester` uniquely identifies the professor, ensuring no ambiguity remains:

- **Superkey:** (`CourseID`, `Semester`)
- Every row is now uniquely identifiable by this superkey, satisfying BCNF's requirement that every determinant must be a superkey.

This restructuring eliminates any potential anomalies associated with updates, deletions, or insertions by ensuring that the dependencies within the table adhere strictly to the superkey rule. Such adjustments are crucial for maintaining the integrity and efficiency of database operations, particularly in environments with complex data interactions.

# Final Thoughts: Keeping It Practical

While normalisation is about reducing redundancy and improving data integrity, it's also about finding the right balance. Over-normalising can lead to overly complex databases, making them hard to query and manage. Always consider the specific needs of your application and strive for a practical level of normalisation that supports performance and maintainability.

---

By understanding and applying these normalisation forms, you're setting the stage for a robust, scalable, and efficient database system. Dive into these principles, experiment with them, and watch as your backend systems become more streamlined than ever!
