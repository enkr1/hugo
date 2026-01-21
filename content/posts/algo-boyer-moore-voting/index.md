---
title: "Boyer-Moore Voting Algorithm: Finding the Majority Element"
date: 2024-09-07 22:24:20
tags:
  - "algorithm"
  - "array"
  - "javascript"
  - "majority-element"
  - "boyer-moore"
  - "voting-algorithm"
categories:
  - ["Software Engineering", "Data Structures & Algorithms"]
subtitle: "Efficient Majority Element Detection using Boyer-Moore Voting Algorithm"
description: "Discover the Boyer-Moore Voting Algorithm, an efficient method to find the majority element in a linear time and constant space solution. This guide includes a step-by-step explanation and JavaScript implementation."
keywords:
  - "Boyer-Moore Voting Algorithm"
  - "Majority Element"
  - "Algorithm notes"
  - "JavaScript majority element"
  - "Efficient algorithms"
---

## What is Boyer-Moore Voting Algorithm?
The **Boyer-Moore Voting Algorithm** is a highly efficient way to find the majority element in an array in linear time $O(n)$ and constant space $O(1)$.



## Boyer-Moore Voting Algorithm (Simple analogy in my own word)
Imagine you have a notebook where you're tracking everyone's shirt colour at a party. Each time you see a new colour, you write it down and give it a count of 1. If you see the same colour again, you increase the count.

If you see a different colour, you decrease the count. Eventually, when the count reaches zero, it's like saying, "I've paired off this colour with other colours enough times, now I'll start fresh." At this point, you reset the colour to whatever you're seeing now and set the count to 1 again.

By the time you've gone through the whole crowd, you'll have eliminated all the "balanced/matched" pairs of colours. The colour left standing with the positive count is the one that showed up the most—it is the majority colour.



## Code Implementation (JS)
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let N = nums.length
    let major = nums[0];
    let count = 1;

    for (let i = 1; i < N; i++) { // Starts with 2nd element
        if (count === 0) {
            major = nums[i];
            count = 1;
        } else if (major === nums[i]) {
            count++;
        } else {
            count--;
        }
    }

    return major;
};
```



## Example Walkthroughs
### Example 1
```
Input: [3, 2, 3]
Initial candidate: 3, count: 1

Step 1: (nums[1] = 2)
- Current candidate: 3, count: 0
- Update: new candidate = 2, count = 1

Step 2: (nums[2] = 3)
- Current candidate: 2, count: 0
- Update: new candidate = 3, count = 1

Final candidate: 3 (Majority element)
```

### Example 2
```
Input: [2, 2, 1, 1, 1, 2, 2]
Initial candidate: 2, count: 1

Step 1: (nums[1] = 2)
- Current candidate: 2, count: 2

Step 2: (nums[2] = 1)
- Current candidate: 2, count: 1

Step 3: (nums[3] = 1)
- Current candidate: 2, count: 0
- Update: new candidate = 1, count = 1

Step 4: (nums[4] = 1)
- Current candidate: 1, count: 2

Step 5: (nums[5] = 2)
- Current candidate: 1, count: 1

Step 6: (nums[6] = 2)
- Current candidate: 1, count: 0
- Update: new candidate = 2, count = 1

Final candidate: 2 (Majority element)
```

### Example 3
```
Input: [1]
Initial candidate: 1, count: 1

Since the array has only one element, it is trivially the majority element.

Final candidate: 1 (Majority element)
```

### Example 4
```
Input: [6, 5, 5, 6, 6]
Initial candidate: 6, count: 1

Step 1: (nums[1] = 5)
- Current candidate: 6, count: 0
- Update: new candidate = 5, count = 1

Step 2: (nums[2] = 5)
- Current candidate: 5, count: 2

Step 3: (nums[3] = 6)
- Current candidate: 5, count: 1

Step 4: (nums[4] = 6)
- Current candidate: 5, count: 0
- Update: new candidate = 6, count = 1

Final candidate: 6 (Majority element)
```

## References
- [LeetCode: 169. Majority Element](https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150)
- [A Linear Time Majority Vote Algorithm](http://www.cs.utexas.edu/~moore/best-ideas/mjrty/)
