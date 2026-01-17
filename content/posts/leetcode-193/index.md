---
title: "LeetCode-193: Valid Phone Numbers"
date: 2024-06-23 02:09:19
tags:
  - "leetcode"
  - "leetcode-easy"
  - "interview-preparation"
  - "bash"
categories:
  - "Software Engineering"
  - "Coding Problems"
subtitle: "Solution and Explanation for LeetCode Problem 193: Valid Phone Numbers"
description: "A comprehensive solution and detailed explanation for solving LeetCode Problem 193: Valid Phone Numbers. This guide includes the problem statement, approach, and code implementation."
keywords:
  - "LeetCode 193 solution"
  - "LeetCode Valid Phone Numbers"
  - "Algorithm"
  - "Coding Interview Preparation"
  - "Problem Solving"
---

## [193. Valid Phone Numbers](https://leetcode.com/problems/valid-phone-numbers/description/)


## Solution
```bash
grep -E '^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$' file.txt
```


## Valid Phone Numbers Explanation
### Correct Regular Expressions
Pattern for `(xxx) xxx-xxxx`:
```regex
^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$
```

Pattern for `xxx-xxx-xxxx`:
```regex
^[0-9]{3}-[0-9]{3}-[0-9]{4}$
```

### Example Workflow
Given the input file `file.txt` containing:
```txt
987-123-4567
123 456 7890
(123) 456-7890
text 123-456-7890
(123) 456-7890 text
```

The command processes it as follows:
```bash
grep -E '^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$' file.txt
```

### Expected Output
```txt
987-123-4567
(123) 456-7890
```

## Debugging and Attempts
### Original Attempt
```bash
grep -E '^\(\d{3}\) \d{3}-\d{4}$|^\d{3}-\d{3}-\d{4}$' file.txt
```
> Failed due to incorrect digit matching.

### Corrected Solution
```bash
grep -E '^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$' file.txt
```
> Uses `[0-9]` instead of `\d` for better compatibility.

### Debugging Script
To verify line-by-line matching:
```bash
while IFS= read -r line; do
    echo "Checking: '$line'"
    if echo "$line" | grep -E '^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$'; then
        echo "Matched: $line"
    else
        echo "Not Matched: $line"
    fi
done < file.txt
```

### Final Thoughts
This solution ensures correct pattern matching for valid phone numbers in the specified formats, using extended regex for better readability and compatibility.
