---
title: "LeetCode Notebook"
date: 2024-10-02 03:42:03
tags:
  - "programming"
  - "leetcode"
categories:
  - ["Software Engineering", "Programming Languages"]
  - ["Notebooks"]
description: "Personal LeetCode scratch pad - interview tips, BFS walkthroughs, and raw debug traces I keep for reference."
---

> Raw working notebook - LeetCode traces, interview framing, BFS walkthroughs. [Full problem tracker on Notion](https://enkr.notion.site/ebd/af5b4b790deb4dd5b5f7e990c18f65c5).

## Interview Framing: Odd-Even Linked List

How to explain the [odd-even linked list](https://leetcode.com/problems/odd-even-linked-list/) in an interview:

"I used a two-pointer strategy - one for odd-indexed nodes, one for even. I treat the list as two interleaved sublists and rewire `.next` pointers to separate them.

The critical insight: updating `.next` alone is not enough - I also need to advance the tail pointer. Once I update `odd.next`, I move `odd = odd.next` so the tail stays accurate for future rewiring.

After separation, I stitch the odd list's end to the saved even-list head. In-place, O(1) space, O(n) time."

Key phrasings that signal depth:

- "I reused the existing node structure instead of allocating new nodes."
- "Safe pointer progression - modifying `.next` and moving the active pointer in tandem."
- "It's a pointer-surgery problem with clear sequencing logic."

---

## BFS Walkthrough: 909. Snakes and Ladders

6x6 board (positions 1-36) with ladders (2->15, 14->35) and a snake (17->13). Goal: reach 36 in minimum dice rolls.

Why BFS: each roll branches into 6 next states. BFS explores all states at depth *d* before *d+1*, so the first path to 36 is guaranteed shortest.

Board as flat array (0-indexed, position 0 unused):

```js
[ 0, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 35, -1, -1, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
```

<!-- more -->

Critical path: **1 -> 2(ladder->15) -> ... -> 13(via snake) -> 14(ladder->35) -> 36**

<details>
<summary>Full BFS trace</summary>

```log
=== Move 1 ===
Queue: [1]
Processing position: 1
  Enqueued: 15 (pos 2 -> ladder)
  Enqueued: 3, 4, 5, 6, 7

=== Move 2 ===
Queue: [15, 3, 4, 5, 6, 7]
Processing position: 15 -> enqueues 16, 13(snake from 17), 18, 19, 20, 21
Processing positions: 3-7 -> enqueues 8, 9, 10, 11, 12
  (most neighbours already visited)

=== Move 3 ===
Queue: [16, 13, 18, 19, 20, 21, 8, 9, 10, 11, 12]
Processing position: 13 -> enqueues 35 (pos 14 -> ladder!), rest visited
Processing others -> enqueues 22-27
  (critical: position 14's ladder to 35 discovered here)

=== Move 4 ===
Queue: [22, 35, 23, 24, 25, 26, 27]
Processing position: 35 -> enqueues 36
Processing others -> enqueues 28-33

=== Move 5 ===
Queue: [28, 36, 29, 30, 31, 32, 33]
Processing position: 36
  Reached end! Total moves: 4
```

</details>

Answer: **4 moves**. Position 36 is enqueued at BFS depth 4 (Move 4). Move 5 dequeues and confirms.
