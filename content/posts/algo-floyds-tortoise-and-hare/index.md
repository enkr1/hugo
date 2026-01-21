---
title: "Floyd's Tortoise and Hare Algorithm: Efficient Cycle Detection"
date: 2024-05-19 06:01:41
tags:
  - "algorithm"
  - "two-pointer"
categories:
  - ["Software Engineering", "Data Structures & Algorithms"]
subtitle: "Efficient Cycle Detection in Linked Lists and Arrays"
description: "Explore Floyd's Tortoise and Hare Algorithm for detecting cycles in linked lists and arrays. This efficient algorithm, named after Robert W. Floyd, uses two pointers moving at different speeds to identify cycles with linear time complexity and minimal space usage."
keywords:
  - "Floyd's Tortoise and Hare Algorithm"
  - "Cycle detection"
  - "Linked list algorithms"
  - "Array algorithms"
  - "Algorithm notes"
---

## What is Floyd's Tortoise and Hare Algorithm?
Floyd's Tortoise and Hare Algorithm, also known as the *Floyd's cycle-finding algorithm* or the Tortoise and Hare Algorithm, is used to **detect cycles** in a linked list or an array. It was named after Robert W. Floyd, who first described the algorithm.

The algorithm works by using two pointers, one moving at a slower pace (tortoise) and the other moving at a faster pace (hare), and iterating through the linked list or array. If there is a cycle, the two pointers will eventually meet at the same node.

```plain
slow pointer s always move by 1
┌───┐
↓   ↓
s   s
1 → 2 → 3 → 4 → 5 → 6 → 7
f       f
↑       ↑
└───────┘
fast pointer f always move by 2
```

**Here's a step-by-step explanation of Floyd's Tortoise and Hare Algorithm:**
1. Initialise two pointers, the tortoise (slow) and the hare (fast), at the head of the linked list or the first element of the array.
2. Move the tortoise one step forward and the hare two steps forward.
3. Repeat step 2 until one of the following conditions is met:
    - The hare reaches the end of the linked list or array (i.e., the hare encounters a **`null`** or out-of-bounds index). In this case, there is no cycle, and the algorithm terminates.
    - The tortoise and hare pointers meet at the same node. This indicates the presence of a cycle in the linked list or array.
4. If the tortoise and hare meet, reset the tortoise to the head of the linked list or the first element of the array and keep the hare at the meeting point.
5. Move the tortoise and hare pointers one step at a time until they meet again. The point at which they meet is the start of the cycle in the linked list or array.

**Floyd's Tortoise and Hare Algorithm** is an efficient algorithm that runs in **linear time complexity**, making it useful for detecting cycles in large **linked lists** or **arrays**. It does **NOT** require any additional data structures and uses only **two pointers** to achieve the detection.
