---
title: "LeetCode-97: Interleaving String"
date: 2024-09-18 02:35:00
tags:
  - "leetcode"
  - "leetcode-medium"
  - "algorithm"
  - "dynamic-programming"
  - "javascript"
  - "interview-preparation"
categories:
  - "Software Engineering"
  - "Coding Problems"
subtitle: "A Deep Dive into Solving LeetCode Problem 97: Interleaving String Using Dynamic Programming"
description: "An in-depth guide to solving LeetCode 97 with 2D Dynamic Programming. Understand the key concepts, step-by-step implementation, and analogies to master the problem."
keywords:
  - "LeetCode 97 solution"
  - "Interleaving String"
  - "Dynamic Programming"
  - "2D DP"
  - "Coding Interview Preparation"
---

## [97. Interleaving String](https://leetcode.com/problems/interleaving-string/)

- **Goal**: Determine if string `s3` is formed by an **interleaving** of strings `s1` and `s2`.
    > **Interleaving**: Combining two strings by merging their characters while preserving the original order of characters from each string.
- **Constraints**:
  - `0 <= s1.length, s2.length <= 100`
  - `0 <= s3.length <= 200`
  - All strings consist of lowercase English letters.
- **Follow-up**: Can you solve it using only O(s2.length) additional memory space?



### Understanding the Problem
Given three strings `s1`, `s2`, and `s3`, we need to check if `s3` can be formed by interleaving `s1` and `s2`. An **interleaving** means that we can shuffle `s1` and `s2` together, maintaining the order of characters in each string, to get `s3`.



#### Key Points:
- **Order Preservation**: The order of characters in `s1` and `s2` must be maintained in `s3`.
- **Interleaving**: At each step, you can choose a character from either `s1` or `s2`.



### Example
```plaintext
s1 = "aabcc"
s2 = "dbbca"
s3 = "aadbbcbcac"
```
> output: `true`



---



## Quick Steps for Solving the Problem

### 1. Check Lengths
- **Condition**: If `s1.length + s2.length != s3.length`, return `false`.
- **Rationale**: If the total length doesn't match, it's impossible for `s3` to be an interleaving of `s1` and `s2`.

### 2. Initialise a 2D DP Table

- **Purpose**: Use Dynamic Programming to store subproblem results.
- **Structure**: Create a 2D array `dp` of size `(s1.length + 1) x (s2.length + 1)`.
- **Base Case**: Set `dp[0][0] = true` (empty strings can form an empty string).

### 3. Fill the First Row and First Column

- **First Column (`dp[i][0]`)**:
  - `dp[i][0] = dp[i - 1][0] && s1[i - 1] == s3[i - 1]`
  - **Meaning**: Can `s3` up to length `i` be formed by `s1` up to length `i`?
- **First Row (`dp[0][j]`)**:
  - `dp[0][j] = dp[0][j - 1] && s2[j - 1] == s3[j - 1]`
  - **Meaning**: Can `s3` up to length `j` be formed by `s2` up to length `j`?

### 4. Fill the Rest of the DP Table

- **For Each Cell `dp[i][j]`**:
  - **Option 1**: If `dp[i - 1][j]` is `true` and `s1[i - 1] == s3[i + j - 1]`, then `dp[i][j] = true`.
    - **Meaning**: If we can form `s3` up to `i + j - 1` by adding `s1[i - 1]`.
  - **Option 2**: If `dp[i][j - 1]` is `true` and `s2[j - 1] == s3[i + j - 1]`, then `dp[i][j] = true`.
    - **Meaning**: If we can form `s3` up to `i + j - 1` by adding `s2[j - 1]`.
  - **Else**: `dp[i][j] = false`.

### 5. Return the Result

- **Answer**: `dp[s1.length][s2.length]`
  - **Meaning**: Whether `s3` can be formed by interleaving `s1` and `s2`.

---

## Analogy to Simplify Understanding

Imagine you have two queues of characters:

- **Queue A (`s1`)**: A line of people waiting in order.
- **Queue B (`s2`)**: Another line of people waiting in order.
- **Goal**: Form a new line (`s3`) by merging these two queues, taking one person at a time from either queue, without changing the order in each queue.

**Rules**:

- You can pick the next person from **either** Queue A or Queue B.
- You cannot skip or rearrange people within a queue.
- The final line (`s3`) must have everyone from both queues, in some order that respects the above rules.

---

## Step-by-Step Implementation

### 1. Check Total Length

```javascript
if (s1.length + s2.length !== s3.length) return false;
```

### 2. Initialise DP Table

```javascript
const N = s1.length;
const M = s2.length;
const dp = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(false));
dp[0][0] = true; // Base case
```

### 3. Fill First Row and First Column

#### Fill First Column (`dp[i][0]`)

```javascript
for (let i = 1; i <= N; i++) {
  dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
}
```

#### Fill First Row (`dp[0][j]`)

```javascript
for (let j = 1; j <= M; j++) {
  dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
}
```

### 4. Fill the Rest of the DP Table

```javascript
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    const k = i + j - 1;
    dp[i][j] =
      (dp[i - 1][j] && s1[i - 1] === s3[k]) ||
      (dp[i][j - 1] && s2[j - 1] === s3[k]);
  }
}
```

### 5. Return the Result

```javascript
return dp[N][M];
```

---

## JavaScript Implementation

```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const N = s1.length;
  const M = s2.length;

  // Step 1: Check Lengths
  if (N + M !== s3.length) return false;

  // Step 2: Initialise DP Table
  const dp = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(false));
  dp[0][0] = true;

  // Step 3: Fill First Row and First Column
  for (let i = 1; i <= N; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }
  for (let j = 1; j <= M; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  // Step 4: Fill the Rest of the DP Table
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      const k = i + j - 1;
      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] === s3[k]) ||
        (dp[i][j - 1] && s2[j - 1] === s3[k]);
    }
  }

  // Step 5: Return the Result
  return dp[N][M];
};
```

---

## Detailed Explanation

### Understanding the DP Table

- **Dimensions**: `(s1.length + 1) x (s2.length + 1)`
- **`dp[i][j]` Meaning**: Whether `s3` up to length `i + j` can be formed by interleaving `s1` up to length `i` and `s2` up to length `j`.

### Base Cases

- **`dp[0][0] = true`**: Empty `s1` and `s2` can form empty `s3`.
- **First Row and Column**:
  - We check if `s3` up to length `i` or `j` matches `s1` or `s2` respectively.

### Filling the DP Table

At each cell `dp[i][j]`, we consider two possibilities:

1. **Taking a character from `s1`**:
   - If `dp[i - 1][j]` is `true` (we can form `s3` up to `i + j - 2` with `s1[0..i-2]` and `s2[0..j-1]`).
   - And if `s1[i - 1]` matches `s3[i + j - 1]`.
2. **Taking a character from `s2`**:
   - If `dp[i][j - 1]` is `true` (we can form `s3` up to `i + j - 2` with `s1[0..i-1]` and `s2[0..j-2]`).
   - And if `s2[j - 1]` matches `s3[i + j - 1]`.

If either possibility is `true`, we set `dp[i][j] = true`.

### Example Walkthrough

Let's consider `s1 = "abc"`, `s2 = "def"`, `s3 = "adbcef"`.

- **dp[1][1]**:
  - `dp[0][1]` is `false`, so first condition fails.
  - `dp[1][0]` is `true` and `s1[0] == s3[1]` (`'a' == 'd'`) is `false`.
  - `dp[1][1]` remains `false`.

- **dp[1][2]**:
  - Similar checks, `dp[1][2]` remains `false`.

- **dp[2][1]**:
  - `dp[1][1]` is `false`.
  - `dp[2][0]` is `false`.
  - `dp[2][1]` remains `false`.

- **dp[3][3]**:
  - `dp[2][3]` is `false`.
  - `dp[3][2]` is `true` and `s2[2] == s3[5]` (`'f' == 'f'`) is `true`.
  - So, `dp[3][3] = true`.

**Final Result**: Since `dp[3][3] = true`, `s3` is an interleaving of `s1` and `s2`.

---

## Summary

- **Dynamic Programming**: We use a 2D DP table to keep track of possible interleavings up to each point in `s1` and `s2`.
- **Key Concepts**:
  - **Preserving Order**: We must maintain the sequence of characters in `s1` and `s2`.
  - **State Transition**: Each state depends on previous states, considering characters from `s1` and `s2`.
- **Analogy**: Merging two queues without changing the order within each queue.
- **Time Complexity**: O(N * M)
- **Space Complexity**: O(N * M), can be optimised to O(M)

---

## Further Understanding and Tips

### Why Use `dp[i][j]`?

- **`dp[i][j]` represents a subproblem**: Whether `s3` up to length `i + j` can be formed by interleaving `s1` up to length `i` and `s2` up to length `j`.
- **Breaking Down the Problem**: By solving smaller subproblems, we build up to the final solution.

### Handling Edge Cases

- **Empty Strings**: If `s1` or `s2` is empty, we need to check if `s3` matches the other string.
- **Initialization**: Properly initializing the first row and column is crucial for these cases.

### Visualization

- **DP Table as a Grid**: Visualise the DP table as a grid where each cell represents a state.
- **Path Finding**: Finding a path from `dp[0][0]` to `dp[N][M]` corresponds to interleaving `s1` and `s2` to form `s3`.

---

## Practice Problems for 2D Dynamic Programming

To strengthen your understanding of 2D DP, consider practicing the following problems:

- **LeetCode 62**: Unique Paths
- **LeetCode 1143**: Longest Common Subsequence
- **LeetCode 221**: Maximal Square
- **LeetCode 72**: Edit Distance

---

## Final Thoughts

Dynamic Programming can be challenging, but breaking down the problem into subproblems and understanding the state transitions makes it manageable. Remember to:

- **Define the DP State Clearly**: Know what each element in your DP table represents.
- **Initialise Properly**: Base cases are crucial for correct results.
- **Think Recursively**: How can you build the current state from previous states?
- **Practice**: The more problems you solve, the better you'll understand DP patterns.

Happy coding!
