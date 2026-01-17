---
title: "Greedy Algorithm: Optimal Solutions for Local Decisions"
date: 2024-09-10 03:02:12
tags:
  - "algorithm"
  - "greedy-algorithm"
categories:
  - ["Software Engineering", "Data Structures & Algorithms"]
subtitle: "Solving Problems with Greedy Techniques for Optimal Efficiency"
description: "A comprehensive guide to understanding greedy algorithms and how they provide efficient, optimal solutions by making locally optimal choices. Explore key concepts, implementation examples, and applications in real-world problem-solving scenarios."
keywords:
  - "Greedy algorithm"
  - "Greedy techniques"
  - "Optimal solutions"
  - "Algorithm notes"
  - "Problem-solving strategies"
---

## What is the Greedy Approach?

A **greedy algorithm** is a type of algorithmic strategy where we make the best possible decision **at each step** without worrying about the future consequences. In other words, we **choose the locally optimal solution** at each stage with the hope that these local solutions will lead to the **global optimum** (the best overall solution).


### Greedy Algorithms as an Umbrella Term
**Greedy** is an **umbrella term** used to describe a broad class of algorithms that follow a specific strategy: making the best possible choice (local optimal choice) at each step with the hope that this will lead to the best global solution. However, not all algorithms are greedy—only those that follow this decision-making process at every step. The **greedy approach** is a problem-solving paradigm, much like **dynamic programming** or **divide and conquer**. It is applied to a variety of algorithms across different domains, but only in scenarios where making local decisions (without considering future consequences) leads to a globally optimal solution.



### Greedy Algorithm Example: [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
In this context, the greedy approach makes sense because we are allowed to make multiple transactions (buy/sell as many times as we want). So, **every time there's a price increase**, the most "greedy" thing to do is to sell the stock and capture the profit from that small increase. By summing up all the small profits, we end up with the maximum profit.
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let N = prices.length;
    let accProfit = 0;

    for (let i = 0; i < N; i++) {
        if (i + 1 == N) continue;
        let next = prices[i + 1];
        let curr = prices[i];
        if (next > curr) {
            accProfit += next - curr; // Take profit on every price rise
        }
    }

    return accProfit;
};
```



#### Why is this a Greedy Algorithm?
1. **Immediate decisions**: At every step, we check if the next day's price is higher than today's. If it is, we "sell" immediately, taking the profit without looking further into the future.
2. **No looking back**: Once we take the profit, we don't go back or reconsider the decision. We only focus on the current gain, not future possibilities.
3. **Efficient**: This algorithm runs in $O(n)$ time, making it fast and scalable. Even though it's simple, this greedy approach guarantees the maximum profit because it captures every price increase.



#### Why Does the Greedy Approach Work Here?
The greedy approach is effective because the problem allows each local profit (from a price increase) to contribute directly to the overall solution. In this scenario, there are no penalties or constraints for making multiple transactions. Each price increase represents an independent opportunity for profit, and by capturing every small gain, the total profit is maximised. This is why the greedy strategy is both efficient and optimal—it seizes each profit opportunity without the need for backtracking or complex calculations.



## Algorithms Applying the Greedy Approach
The greedy approach is a well-established strategy in algorithm design, especially for **optimisation problems** where local decisions lead to a globally optimal solution. This strategy focuses on making the best choice at each step without considering the entire problem, which often results in simpler and faster algorithms.

### Is This Really an Algorithm?
Yes, this is a valid and efficient algorithm! The greedy approach is recognised for its ability to solve problems that can be broken down into smaller, independent parts. By making a series of locally optimal choices, the algorithm can arrive at the best possible solution without needing complex calculations or backtracking.



### Why Does It Seem So Simple?
The beauty of the greedy approach is that it often leads to very simple and efficient solutions for problems that can be broken down into smaller, independent steps. It's one of the reasons greedy algorithms are widely used—they're often easy to implement and very efficient, even though they may not always guarantee the optimal solution for every problem (but in this case, it does!).



### Algorithms Using the Greedy Approach
Here are some well-known algorithms that fall under the greedy umbrella, with examples of problems to practice:

1. **Dijkstra's Algorithm** (Shortest Path in Graphs):
   - At each step, Dijkstra's algorithm **greedily** selects the node with the smallest known distance from the start node.
   - **Practice Problems**:
     1. [Shortest Path in a Grid](https://leetcode.com/problems/shortest-path-in-binary-matrix/) — Given a binary matrix, find the shortest path from the top-left to the bottom-right.
     2. [Network Delay Time](https://leetcode.com/problems/network-delay-time/) — Find how long it takes for all nodes to receive a signal sent from a specific node.
     3. [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) — Find the cheapest flight route from one city to another within K stops.

2. **Prim's and Kruskal's Algorithms** (Minimum Spanning Tree):
   - **Kruskal's Algorithm**: Greedily adds the smallest edge that doesn't create a cycle, ensuring the minimum total weight of edges in the spanning tree.
   - **Prim's Algorithm**: Greedily adds the lowest weight edge that connects to an unvisited node.
   - **Practice Problems**:
     1. [Minimum Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) — Find the minimum cost to connect all points in a 2D plane.
     2. [Connecting Cities with Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/) — Given cities connected by roads, find the minimum cost to connect all cities.
     3. [Minimum Spanning Tree](https://www.hackerrank.com/challenges/kruskalmstrsub/problem) — A classic problem involving Kruskal's algorithm to find the minimum spanning tree of a graph.

3. **Huffman Coding** (Data Compression):
   - Greedily combines the two nodes with the smallest frequencies to build a **prefix tree**. This ensures an optimal way of compressing data by using shorter codes for more frequent characters.
   - **Practice Problems**:
     1. [Huffman Decoding](https://www.hackerrank.com/challenges/tree-huffman-decoding/problem) — Implement Huffman decoding for compressed strings.
     2. [Optimal File Merge Patterns](https://www.geeksforgeeks.org/optimal-file-merge-patterns/) — Find the optimal way to merge files, minimizing the total cost of merging.
     3. [Shannon-Fano Algorithm](https://www.geeksforgeeks.org/shannon-fano-algorithm-for-data-compression/) — Implement a Huffman-like greedy algorithm for data compression.

4. **Activity Selection Problem**:
   - Greedily selects the next activity that finishes the earliest, ensuring maximum non-overlapping activities in the schedule.
   - **Practice Problems**:
     1. [Activity Selection](https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/) — Classic problem where you maximize the number of activities without overlap.
     2. [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) — Given a list of meeting time intervals, find the minimum number of conference rooms required.
     3. [Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/) — Attend the maximum number of events without overlaps.

5. **Fractional Knapsack Problem**:
   - Greedily chooses the item with the highest value-to-weight ratio and continues until the knapsack is full, ensuring maximum profit.
   - **Practice Problems**:
     1. [Fractional Knapsack](https://www.geeksforgeeks.org/fractional-knapsack-problem/) — Given weights and values, find the maximum value that can fit in a knapsack.
     2. [Partition Labels](https://leetcode.com/problems/partition-labels/) — Partition a string into as many parts as possible such that each letter appears in at most one part.
     3. [Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/) — Given box types with their corresponding units, maximize the units you can load onto a truck.



### Why Aren't All Algorithms Greedy?
Not all problems can be optimally solved using the greedy approach because:

- **Greedy algorithms make decisions based on the local optimum**, which may not always result in the global optimum.
- Some problems, like the **0/1 Knapsack Problem**, require considering multiple combinations of items (or solutions) to guarantee an optimal outcome, which the greedy strategy does not explore.

#### Examples of where greedy fails:
- **0/1 Knapsack Problem**: A greedy strategy of picking the highest value-to-weight ratio may leave behind items that could have provided a better total value when combined with other items.
- **Job Scheduling Problem**: A greedy approach that selects jobs based on their profit might miss an optimal schedule that maximizes total profit.

In contrast, **dynamic programming** and **divide and conquer** algorithms systematically explore multiple options, solving subproblems and combining them for the globally optimal solution.



## Characteristics of Problems Suitable for Greedy Algorithms:

1. **Greedy Choice Property**: A globally optimal solution can be arrived at by making a series of locally optimal choices.
2. **Optimal Substructure**: The problem can be broken down into subproblems that can be solved independently, and the solution to the problem can be built from the solutions to the subproblems.

If both of these properties hold, a greedy algorithm is likely to give you the correct solution. However, not all problems have these properties, and that's why greedy algorithms aren't always the right choice.



### Summary:
A **greedy algorithm** solves problems by making the best possible choice at each step, without considering the broader consequences of those decisions. It works well for problems where local optimal choices lead to a global optimal solution. The key characteristics of greedy algorithms are the **Greedy Choice Property** (making local decisions leads to the best overall solution) and **Optimal Substructure** (the problem can be broken into smaller, solvable subproblems). Examples include **Dijkstra's** and **Kruskal's** algorithms, but greedy methods don't always work, like in the **0/1 Knapsack Problem**, where a dynamic programming approach is required to ensure the best solution.


---

## Jump Game I & II

### Greedy Algorithm for Jump Game I and II

**Jump Game I (LeetCode 55)**:
Given an array `nums`, where each element represents your maximum jump length at that position, determine whether you can reach the last index starting from index 0.

**Jump Game II (LeetCode 45)**:
Similarly, given an array `nums`, find the **minimum number of jumps** required to reach the last index, starting from index 0.

---

### Why Use a Greedy Approach for Both Problems?

The greedy algorithm works for both problems because it makes **locally optimal choices** at each step to ensure an efficient solution. The core idea is to track how far you can jump from each position and decide when to commit to a jump (in the case of Jump Game II).

---

### Greedy Approach for **Jump Game I**:

#### Goal:
Determine if you can reach the last index from the starting position.

#### Strategy:
1. **Track Farthest Reach**: As you traverse the array, keep track of the farthest point you can reach (`furthestIndex`).
2. **Check Reachability**: If at any point the current index exceeds the farthest reachable index, return `false` since you can't proceed further.
3. **End Condition**: If the farthest reachable index is greater than or equal to the last index, return `true`.

#### Code:

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let furthestIndex = 0; // Farthest index we can reach

    for (let i = 0; i < nums.length; i++) {
        if (i > furthestIndex) return false; // If we can't reach this index
        furthestIndex = Math.max(furthestIndex, i + nums[i]); // Update farthest reach
        if (furthestIndex >= nums.length - 1) return true; // If we can reach the end
    }

    return true;
};
```

#### Key Points:
- **Locally Optimal**: The algorithm checks whether you can reach the last index by calculating the farthest index you can jump to at each step.
- **Efficient**: Runs in **O(n)** time, making a single pass through the array.

---

### Greedy Approach for **Jump Game II**:

#### Goal:
Find the minimum number of jumps needed to reach the last index.

#### Strategy:
1. **Track Farthest Reach**: Just like in Jump Game I, track the farthest index you can reach (`furthestIndex`).
2. **Decide When to Jump**: Keep track of when you **must** make a jump by monitoring the current jump's range (`jumpAtIndex`). When you reach the end of this range, make a jump and update the range to the farthest point you can reach.
3. **Early Exit**: As soon as you find that you can reach or surpass the last index, return the jump count.

#### Code:

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const N = nums.length;

    let jumpAtIndex = nums[0]; // The current jump range
    let furthestIndex = nums[0]; // Farthest we can reach
    let nbOfJump = 1; // Minimum 1 jump if N > 1

    for (let i = 1; i < N - 1; i++) {
        // Update the farthest reachable index
        furthestIndex = Math.max(nums[i] + i, furthestIndex);

        // When we reach the end of the current jump range
        if (jumpAtIndex === i) {
            nbOfJump++; // Increment jump count
            jumpAtIndex = furthestIndex; // Update jump range

            // If we can reach the last index, return the jump count
            if (furthestIndex >= N - 1) {
                return nbOfJump;
            }
        }
    }

    return nbOfJump;
};
```

#### Key Points:
- **Locally Optimal**: Each time you decide to jump, you aim to reach the farthest point possible, ensuring the fewest number of jumps.
- **Efficient**: Runs in **O(n)** time, making a single pass through the array.

---

### Summary of Greedy Approach:

- **Jump Game I** focuses on checking whether the last index is reachable, while **Jump Game II** focuses on minimizing the number of jumps needed.
- In both problems, we use the greedy strategy to **track the farthest point** reachable at every step and decide when to jump (in Jump Game II).
- **Greedy algorithms** are effective here because they allow us to make local decisions (the farthest jump at each step) that lead to the global solution (whether we can reach the end or minimize jumps).

This greedy approach ensures efficiency and correctness for both problems, providing an optimal solution in linear time.
