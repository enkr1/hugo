---
title: "LeetCode Notebook"
date: 2024-10-02 03:42:03
tags:
  - "programming"
  - "leetcode"
categories:
  - "Software Engineering"
  - "Programming Languages"
  - "Notebooks"
---


## [Notion Database](https://enkr.notion.site/ebd/af5b4b790deb4dd5b5f7e990c18f65c5)



## 🗣️ How to Be a Strong Hire - Interview Insights

🎯 Problem: Odd-Even Linked List

How to explain it in an interview to show you’re a strong hire:

"To solve this, I used a two-pointer strategy — one for odd-indexed nodes and one for even-indexed nodes. I conceptually treat the linked list like two interleaved sublists — one for all odd nodes and one for even ones.

As I traverse, I rewire the .next pointers to separate these two sequences. The critical insight is understanding that in a linked list, updating .next alone is not enough — I also need to move the tail pointer forward. I call this the 'tail follows head' principle: once I update odd.next, I must move odd = odd.next so that the tail pointer remains accurate for future rewiring.

After separation, I stitch the end of the odd list to the head of the even list, which I preserved before modification. This keeps the operation in-place with O(1) space and O(n) time."

🔁 Bonus phrasing:

“I reused the existing node structure instead of allocating new nodes.”

“The key is safe pointer progression — modifying .next and moving the active pointer in tandem.”

“It’s a pointer-surgery problem with clear sequencing logic.”





---

## Binary Tree
topics...


## Problems
### [909. Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/description/?envType=study-plan-v2&envId=top-interview-150)
```js
[ 0, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 35, -1, -1, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
```

<!-- more -->

```js
[
   0, -1, 15, -1, -1, -1,
  -1, -1, -1, -1, -1, -1,
  -1, -1, 35, -1, -1, 13,
  -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1
]
```

```log
=== Start of Loop (Move 1) ===
Current Queue: Queue { _elements: [ 1 ], _offset: 0 }
Queue size: 1
Processing position: 1
Enqueued: 15 (from position 2)
Enqueued: 3 (from position 3)
Enqueued: 4 (from position 4)
Enqueued: 5 (from position 5)
Enqueued: 6 (from position 6)
Enqueued: 7 (from position 7)
=== End of Loop (Move 1) ===


=== Start of Loop (Move 2) ===
Current Queue: Queue { _elements: [ 15, 3, 4, 5, 6, 7 ], _offset: 0 }
Queue size: 6
Processing position: 15
Enqueued: 16 (from position 16)
Enqueued: 13 (from position 17)
Enqueued: 18 (from position 18)
Enqueued: 19 (from position 19)
Enqueued: 20 (from position 20)
Enqueued: 21 (from position 21)
Processing position: 3
Visited: 4 (from position 4)
Visited: 5 (from position 5)
Visited: 6 (from position 6)
Visited: 7 (from position 7)
Enqueued: 8 (from position 8)
Enqueued: 9 (from position 9)
Processing position: 4
Visited: 5 (from position 5)
Visited: 6 (from position 6)
Visited: 7 (from position 7)
Visited: 8 (from position 8)
Visited: 9 (from position 9)
Enqueued: 10 (from position 10)
Processing position: 5
Visited: 6 (from position 6)
Visited: 7 (from position 7)
Visited: 8 (from position 8)
Visited: 9 (from position 9)
Visited: 10 (from position 10)
Enqueued: 11 (from position 11)
Processing position: 6
Visited: 7 (from position 7)
Visited: 8 (from position 8)
Visited: 9 (from position 9)
Visited: 10 (from position 10)
Visited: 11 (from position 11)
Enqueued: 12 (from position 12)
Processing position: 7
Visited: 8 (from position 8)
Visited: 9 (from position 9)
Visited: 10 (from position 10)
Visited: 11 (from position 11)
Visited: 12 (from position 12)
Visited: 13 (from position 13)
=== End of Loop (Move 2) ===


=== Start of Loop (Move 3) ===
Current Queue: Queue {
  _elements: [
    15,  3,  4,  5,  6, 7, 16,
    13, 18, 19, 20, 21, 8,  9,
    10, 11, 12
  ],
  _offset: 6
}
Queue size: 11
Processing position: 16
Visited: 13 (from position 17)
Visited: 18 (from position 18)
Visited: 19 (from position 19)
Visited: 20 (from position 20)
Visited: 21 (from position 21)
Enqueued: 22 (from position 22)
Processing position: 13
Enqueued: 35 (from position 14)
Visited: 15 (from position 15)
Visited: 16 (from position 16)
Visited: 13 (from position 17)
Visited: 18 (from position 18)
Visited: 19 (from position 19)
Processing position: 18
Visited: 19 (from position 19)
Visited: 20 (from position 20)
Visited: 21 (from position 21)
Visited: 22 (from position 22)
Enqueued: 23 (from position 23)
Enqueued: 24 (from position 24)
Processing position: 19
Visited: 20 (from position 20)
Visited: 21 (from position 21)
Visited: 22 (from position 22)
Visited: 23 (from position 23)
Visited: 24 (from position 24)
Enqueued: 25 (from position 25)
Processing position: 20
Visited: 21 (from position 21)
Visited: 22 (from position 22)
Visited: 23 (from position 23)
Visited: 24 (from position 24)
Visited: 25 (from position 25)
Enqueued: 26 (from position 26)
Processing position: 21
Visited: 22 (from position 22)
Visited: 23 (from position 23)
Visited: 24 (from position 24)
Visited: 25 (from position 25)
Visited: 26 (from position 26)
Enqueued: 27 (from position 27)
Processing position: 8
Visited: 9 (from position 9)
Visited: 10 (from position 10)
Visited: 11 (from position 11)
Visited: 12 (from position 12)
Visited: 13 (from position 13)
Visited: 35 (from position 14)
Processing position: 9
Visited: 10 (from position 10)
Visited: 11 (from position 11)
Visited: 12 (from position 12)
Visited: 13 (from position 13)
Visited: 35 (from position 14)
Visited: 15 (from position 15)
Processing position: 10
Visited: 11 (from position 11)
Visited: 12 (from position 12)
Visited: 13 (from position 13)
Visited: 35 (from position 14)
Visited: 15 (from position 15)
Visited: 16 (from position 16)
Processing position: 11
Visited: 12 (from position 12)
Visited: 13 (from position 13)
Visited: 35 (from position 14)
Visited: 15 (from position 15)
Visited: 16 (from position 16)
Visited: 13 (from position 17)
Processing position: 12
Visited: 13 (from position 13)
Visited: 35 (from position 14)
Visited: 15 (from position 15)
Visited: 16 (from position 16)
Visited: 13 (from position 17)
Visited: 18 (from position 18)
=== End of Loop (Move 3) ===


=== Start of Loop (Move 4) ===
Current Queue: Queue {
  _elements: [
    21,  8,  9, 10, 11, 12,
    22, 35, 23, 24, 25, 26,
    27
  ],
  _offset: 6
}
Queue size: 7
Processing position: 22
Visited: 23 (from position 23)
Visited: 24 (from position 24)
Visited: 25 (from position 25)
Visited: 26 (from position 26)
Visited: 27 (from position 27)
Enqueued: 28 (from position 28)
Processing position: 35
Enqueued: 36 (from position 36)
Processing position: 23
Visited: 24 (from position 24)
Visited: 25 (from position 25)
Visited: 26 (from position 26)
Visited: 27 (from position 27)
Visited: 28 (from position 28)
Enqueued: 29 (from position 29)
Processing position: 24
Visited: 25 (from position 25)
Visited: 26 (from position 26)
Visited: 27 (from position 27)
Visited: 28 (from position 28)
Visited: 29 (from position 29)
Enqueued: 30 (from position 30)
Processing position: 25
Visited: 26 (from position 26)
Visited: 27 (from position 27)
Visited: 28 (from position 28)
Visited: 29 (from position 29)
Visited: 30 (from position 30)
Enqueued: 31 (from position 31)
Processing position: 26
Visited: 27 (from position 27)
Visited: 28 (from position 28)
Visited: 29 (from position 29)
Visited: 30 (from position 30)
Visited: 31 (from position 31)
Enqueued: 32 (from position 32)
Processing position: 27
Visited: 28 (from position 28)
Visited: 29 (from position 29)
Visited: 30 (from position 30)
Visited: 31 (from position 31)
Visited: 32 (from position 32)
Enqueued: 33 (from position 33)
=== End of Loop (Move 4) ===


=== Start of Loop (Move 5) ===
Current Queue: Queue {
  _elements: [
    28, 36, 29, 30,
    31, 32, 33
  ],
  _offset: 0
}
Queue size: 7
Processing position: 28
Visited: 29 (from position 29)
Visited: 30 (from position 30)
Visited: 31 (from position 31)
Visited: 32 (from position 32)
Visited: 33 (from position 33)
Enqueued: 34 (from position 34)
Processing position: 36
Reached the end at position 36! Total moves: 4
```
