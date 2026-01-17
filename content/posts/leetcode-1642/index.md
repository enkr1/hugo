---
title: "LeetCode-1642: Furthest Building You Can Reach"
date: 2024-08-28 23:36:05
tags:
  - "leetcode"
  - "leetcode-medium"
  - "algorithm"
  - "interview-preparation"
  - "javascript"
  - "min-heap"
  - "priority-queue"
  - "dynamic-programming"
categories:
  - "Software Engineering"
  - "Coding Problems"
subtitle: "Efficient Approach to Solve LeetCode 1642: Furthest Building You Can Reach"
description: "A detailed guide to solving LeetCode 1642 using a min-heap for optimal resource management. Learn how to reach the furthest building with given bricks and ladders."
keywords:
  - "LeetCode 1642 solution"
  - "Furthest Building You Can Reach"
  - "Min-Heap"
  - "Priority Queue"
  - "Algorithm"
  - "Coding Interview Preparation"
---

## [1642. Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/)

## Solution
```js
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
const furthestBuilding = (heights, bricks, ladders) => {
    let N = heights.length;
    // MinPriorityQueue (min-heap) to store the height differences we need to overcome
    let heap = new MinPriorityQueue();

    for (let i = 1; i < N;h i++) {
        let curr = heights[i - 1];
        let next = heights[i];
        let diff = next - curr;

        // when climbing up, we have to decide whether to use bricks or ladders.
        if (diff > 0) {
            // store into min heap
            heap.enqueue(diff);

            // if the heap size exceeds the number of ladders available, we need to start using bricks, also means we have encountered more gaps than we have ladders to cover
            // note: when we have more in heap than ladders, that is when to decide whether we can continue by checking the smallest height.
            if (heap.size() > ladders) {
                let smallestHeight = heap.dequeue().element;

                if (bricks >= smallestHeight) {
                    bricks -= smallestHeight;
                } else {
                    // if bricks cant cover the smallest height, that is the furtherest we can go.
                    return i - 1;
                }
            }
        }
    }

    return N - 1;
}
```
