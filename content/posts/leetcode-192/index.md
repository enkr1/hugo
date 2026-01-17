---
title: "LeetCode-192: Word Frequency"
date: 2024-06-20 00:30:35
tags:
  - "leetcode"
  - "leetcode-medium"
  - "interview-preparation"
  - "bash"
categories:
  - ["Software Engineering", "Coding Problems"]
subtitle: "Solution and Explanation for LeetCode Problem 192: Word Frequency"
description: "A comprehensive solution and detailed explanation for solving LeetCode Problem 192: Word Frequency. This guide includes the problem statement, approach, and code implementation."
keywords:
  - "LeetCode 192 solution"
  - "LeetCode Word Frequency"
  - "Algorithm"
  - "Coding Interview Preparation"
  - "Problem Solving"
---

## [192. Word Frequency](https://leetcode.com/problems/word-frequency/description/)


## Solution
```bash
cat words.txt | tr -s ' ' '\n' | sort | uniq -c | sort -r | awk '{print $2 " " $1}'
```

## Word Frequency Explanation
Here is a breakdown of each command in the pipeline:

| Command                   | Explanation                                                                |
| ------------------------- | -------------------------------------------------------------------------- |
| `cat words.txt`           | Reads the content of the file `words.txt`.                                 |
| `tr -s ' ' '\n'`          | Transforms spaces into newlines, putting each word on a separate line.     |
| `sort`                    | Sorts the words alphabetically.                                            |
| `uniq -c`                 | Counts the occurrences of each word and prefixes each word with its count. |
| `sort -r`                 | Sorts the words by frequency in descending order.                          |
| `awk '{print $2 " " $1}'` | Formats the output to display the word followed by its frequency.          |

### Example Workflow

Given the input file `words.txt` containing:
```txt
this is a test this is only a test
```

The pipeline processes it as follows:

| Step                         | Command                   | Output                                         |
| ---------------------------- | ------------------------- | ---------------------------------------------- |
| Read file content            | `cat words.txt`           | `this is a test this is only a test`           |
| Transform spaces to newlines | `tr -s ' ' '\n'`          | `this\nis\na\ntest\nthis\nis\nonly\na\ntest\n` |
| Sort words alphabetically    | `sort`                    | `a\na\nis\nis\nonly\ntest\ntest\nthis\nthis\n` |
| Count word occurrences       | `uniq -c`                 | `2 a\n2 is\n1 only\n2 test\n2 this\n`          |
| Sort by frequency descending | `sort -r`                 | `2 this\n2 test\n2 is\n2 a\n1 only\n`          |
| Format output                | `awk '{print $2 " " $1}'` | `this 2\ntest 2\nis 2\na 2\nonly 1\n`          |

### Final Output
```txt
this 2
test 2
is 2
a 2
only 1
```
