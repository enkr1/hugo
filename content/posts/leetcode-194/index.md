---
title: "LeetCode-194: Transpose File"
date: 2024-06-20 01:34:57
tags:
  - "leetcode"
  - "leetcode-medium"
  - "interview-preparation"
  - "bash"
categories:
  - ["Software Engineering", "Coding Problems"]
subtitle: "Solution and Explanation for LeetCode Problem 194: Transpose File"
description: "A comprehensive solution and detailed explanation for solving LeetCode Problem 194: Transpose File. This guide includes the problem statement, approach, and code implementation."
keywords:
  - "LeetCode 194 solution"
  - "LeetCode Transpose File"
  - "Algorithm"
  - "Coding Interview Preparation"
  - "Problem Solving"
---

## [194. Transpose File](https://leetcode.com/problems/transpose-file/description/)
Given `file.txt`:
```txt
name age
alice 21
ryan 30
```

Desired Output:
```txt
name alice ryan
age 21 30
```

## Solution
```sh
cat file.txt | awk '{
    for (i = 1; i <= NF; i++) {
        if (NR == 1) {
            cols[i] = $i
        } else {
            cols[i] = cols[i] " " $i
        }
    }
}
END {
    for (i = 1; i <= length(cols); i++) {
        print cols[i]
    }
}'
```

## Transposing a File with `awk`
Transposing a file means converting rows into columns and columns into rows. This is useful in various data manipulation tasks.


## `awk` Basics

- **`NF` (Number of Fields)**: The number of fields in the current line (record). (column)
- **`NR` (Number of Records)**: The line number or the number of records read so far. Incremented automatically with each new line. (row)

## `awk` Script for Transposing Explanation
```awk
{
    for (i = 1; i <= NF; i++) {
        if (NR == 1) {
            cols[i] = $i
        } else {
            cols[i] = cols[i] " " $i
        }
    }
}
```
- The `{}` block is executed for each record (line) read from the input.

### Loop Through Fields
```awk
for (i = 1; i <= NF; i++) {
```
- `NF` (Number of Fields): Number of fields in the current record.
- Loops through each field from `1` to `NF`.

### First Record Handling
```awk
if (NR == 1) {
    cols[i] = $i
}
```
- `NR` (Number of Records): The current record number.
- For the first record, initialise the `cols` array with fields from the first line.

### Subsequent Records
```awk
else {
    cols[i] = cols[i] " " $i
}
```
- For subsequent lines, append the current field `$i` to the existing string in `cols[i]`, separated by a space.

### Handling the End of Input
```awk
END {
    for (i = 1; i <= length(cols); i++) {
        print cols[i]
    }
}
```
- The `END` block executes after all lines have been processed.
- Prints each column (now a row in the transposed format).

## Example Workflow
Given `file.txt`:
```
name age
alice 21
ryan 30
```

### Processing Each Record
#### First Record (`NR == 1`)
- `NF` is 2 (two fields: `name` and `age`).
- The loop runs from `i = 1` to `i = 2`.
```awk
cols[1] = "name"
cols[2] = "age"
```

#### Second Record (`NR == 2`)
- `NF` is 2 (two fields: `alice` and `21`).
- The loop runs from `i = 1` to `i = 2`.
```awk
cols[1] = "name alice"
cols[2] = "age 21"
```

#### Third Record (`NR == 3`)
- `NF` is 2 (two fields: `ryan` and `30`).
- The loop runs from `i = 1` to `i = 2`.
```awk
cols[1] = "name alice ryan"
cols[2] = "age 21 30"
```

### Final Output
```txt
name alice ryan
age 21 30
```

## Debugging the `awk` Script
You can add `print` statements inside your `awk` script to debug and see what's happening at each step.

### Debugging Script
```bash
cat file.txt | awk '{
    print "Processing line:", NR
    for (i = 1; i <= NF; i++) {
        if (NR == 1) {
            cols[i] = $i
        } else {
            cols[i] = cols[i] " " $i
        }
        print "cols[" i "] =", cols[i]
    }
}
END {
    print "\n[RESULT]"
    for (i = 1; i <= length(cols); i++) {
        print cols[i]
    }
}'
```

#### Output with Debugging Statements
```txt
Processing line: 1
cols[1] = name
cols[2] = age
Processing line: 2
cols[1] = name alice
cols[2] = age 21
Processing line: 3
cols[1] = name alice ryan
cols[2] = age 21 30

[RESULT]
name alice ryan
age 21 30
```
