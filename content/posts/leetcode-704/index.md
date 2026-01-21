---
title: "LeetCode-704: Binary Search"
date: 2024-08-25 23:44:12
tags:
  - "leetcode"
  - "leetcode-easy"
  - "algorithm"
  - "interview-preparation"
  - "javascript"
  - "binary-search"
categories:
  - ["Software Engineering", "Coding Problems"]
subtitle: "Quick Guide to Solving LeetCode Problem 704: Binary Search"
description: "A concise guide to solving LeetCode 704 using Binary Search. Understand the key steps and implementation in a simplified manner."
keywords:
  - "LeetCode 704 solution"
  - "Binary Search"
  - "Algorithm"
  - "Coding Interview Preparation"
---

## [704. Binary Search](https://leetcode.com/problems/binary-search/description/?envType=study-plan-v2&envId=binary-search)

- **Goal**: Search for a `target` in a sorted array `nums`. Return its index, or `-1` if not found.
- **Constraint**: Must achieve $O(log n)$ time complexity.

### Example
```plaintext
Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4
```

## Quick Steps for Binary Search

### Initial Setup
- Set `left = 0`, `right = nums.length - 1`.

### Middle Calculation
- Compute `mid = Math.floor((left + right) / 2)`.

### Comparison
- If `nums[mid] == target`: Return `mid`.
- If `nums[mid] < target`: Move `left` to `mid + 1`.
- If `nums[mid] > target`: Move `right` to `mid - 1`.

### Repeat
- Continue until `left > right`.

### Return
- If found, return the index; else, return `-1`.


## JavaScript Implementation
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let N = nums.length;
    let l = 0;
    let r = N - 1;
    let mid = 0;

    while (l <= r) {
        mid = Math.floor((r + l) / 2);

        if (nums[mid] === target) return mid;
        if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return -1;
};
```



## Summary
- **Binary Search**: Divide and conquer by halving the search space.
- **Key Points**: Efficiently narrows down the search to find the target in $O(log n)$ time.



## References
- [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/submissions/1431714521/?envType=study-plan-v2&envId=top-interview-150)
