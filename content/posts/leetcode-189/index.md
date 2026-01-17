---
title: "LeetCode-189: Rotate Array"
date: 2024-09-09 03:12:48
tags:
  - "leetcode"
  - "leetcode-easy"
  - "algorithm"
  - "interview-preparation"
  - "javascript"
  - "array-manipulation"
categories:
  - "Software Engineering"
  - "Coding Problems"
subtitle: "Efficient Techniques to Solve LeetCode 189: Rotate Array"
description: "Learn how to solve LeetCode 189 using an efficient in-place array manipulation approach. This solution explores array rotation with optimal time complexity using the reverse method."
keywords:
  - "LeetCode 189 solution"
  - "Rotate Array"
  - "Array Manipulation"
  - "Coding Interview Preparation"
  - "JavaScript Array Algorithms"
---

## [189. Rotate Array](https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150)

## Solution
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let N = nums.length;
    let startElementIndex = N - k;

    // Step 1: Normalise k, in case k is larger than N
    // console.log(`k (before)`, k);
    k = k % N;
    // console.log(`k (after)`, k);

    // Step 2: Helper function to reverse part of the array
    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap
            start++;
            end--;
        }
    };

    // Step 3: Reverse the entire array
    reverse(0, N - 1);

    // Step 4: Reverse the first k elements
    reverse(0, k - 1);

    // Step 5: Reverse the remaining N-k elements
    reverse(k, N - 1);
};
```
