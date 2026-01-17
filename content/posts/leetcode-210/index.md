---
title: "LeetCode-210: Course Schedule II"
date: 2024-06-23 19:49:05
tags:
  - "leetcode"
  - "leetcode-medium"
  - "algorithm"
  - "interview-preparation"
  - "javascript"
  - "topological-sort"
  - "queue"
  - "adjacency-list"
  - "indegree"
  - "top-interview-150"
categories:
  - ["Software Engineering", "Coding Problems"]
subtitle: "Solution and Explanation for LeetCode Problem 210: Course Schedule II"
description: "My notes on solving LeetCode Problem 210: Course Schedule II using Topological Sort. This guide includes the problem statement, approach, and code implementation."
keywords:
  - "LeetCode 210 solution"
  - "LeetCode Course Schedule II"
  - "Algorithm"
  - "Coding Interview Preparation"
  - "Problem Solving"
---

## [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/description/?envType=study-plan-v2&envId=top-interview-150)



### Problem Statement
There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses-1`. Some courses may have prerequisites, given as a list `prerequisites` where `prerequisites[i] = [a, b]` indicates that you must take course `b` before course `a`.

Return the ordering of courses you should take to finish all courses. If there are multiple valid answers, return any of them. If it is impossible to finish all courses, return an empty array.



### My Solution
To solve this problem, I used **Topological Sort**. Here's the step-by-step approach I took:

1. **Graph Representation**: Represent the courses and their prerequisites as a graph using an adjacency list.
2. **Indegree Array**: Keep track of how many prerequisites each course has.
3. **Queue for Zero Indegree**: Process courses with zero prerequisites first and update the indegree of their dependent courses accordingly.
4. **Cycle Detection**: Check if all courses have been processed to detect cycles.



## What is Topological Sort?
Topological Sort is a linear ordering of vertices in a directed graph such that for every directed edge `u -> v`, vertex `u` comes before `v` in the ordering. This is particularly useful in scenarios like scheduling tasks, course prerequisites, or any situation where certain tasks must precede others.

- [GeeksForGeeks](https://www.geeksforgeeks.org/topological-sorting/)

### Key Concepts:
1. **[Directed Acyclic Graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph)**: A graph with directed edges and no cycles. Topological sort only works on DAGs.
2. **Dependencies (Edges)**: If task `A` must be done before task `B`, there is a directed edge from `A` to `B`.
3. **Indegree**: The number of incoming edges to a node. Nodes with zero indegree can be processed immediately as they have no dependencies.
```
# Example: [[1, 0], [2, 0], [3, 1], [3, 2]]

# Graph:
0 -> 1: Course 0 is a prerequisite for Course 1.
0 -> 2: Course 0 is a prerequisite for Course 2.
1 -> 3: Course 1 is a prerequisite for Course 3.
2 -> 3: Course 2 is a prerequisite for Course 3.

# Indegree of a course = Number of prerequisites.
indegree[0] = 0 (No prerequisites)
indegree[1] = 1 (Prerequisite: Course 0)
indegree[2] = 1 (Prerequisite: Course 0)
indegree[3] = 2 (Prerequisites: Courses 1, 2)
```


### Steps to Perform Topological Sort:
1. **Graph Representation**: Represent the tasks and dependencies using an adjacency list.
2. **Indegree Calculation**: For each task, count the number of dependencies it has (indegree).
3. **Queue Initialisation**: Start with tasks that have no dependencies (indegree of zero).
4. **Process Tasks**: Repeatedly take tasks with zero indegree from the queue, add them to the result, and decrease the indegree of their dependent tasks. Add newly dependency-free tasks to the queue.
5. **Check for Cycles**: If all tasks are processed, a valid ordering exists. If not, there's a cycle, and a valid ordering is impossible.


## Applying Topological Sort to Course Schedule II:
To solve the Course Schedule II problem using topological sort, follow these steps:

1. **Graph Representation**: Use an adjacency list to represent courses and their prerequisites.
2. **Indegree Array**: Track the number of prerequisites (indegree) for each course.
3. **Queue for Zero Indegree**: Use a queue to manage courses with zero prerequisites.
4. **Topological Sort**:
    - Process nodes with zero indegree.
    - Add the course to the result list.
    - Reduce the indegree for all its neighbors.
    - Add neighbors with zero indegree to the queue.
5. **Cycle Detection**: If the number of processed courses is less than `numCourses`, there is a cycle, and you should return an empty array.

### Example Workflow:
Consider `numCourses = 4` and `prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]`:

1. **Graph and Indegree Construction**:
    - `adj = [[1, 2], [3], [3], []]`
    - `indegree = [0, 1, 1, 2]`

2. **Initialise Queue**:
    - Courses with zero indegree: `[0]`

3. **Process Courses**:
    - Process `0`: `result = [0]`
        - Decrease indegree of `1` and `2`: `indegree = [0, 0, 0, 2]`
        - Add `1` and `2` to queue: `queue = [1, 2]`
    - Process `1`: `result = [0, 1]`
        - Decrease indegree of `3`: `indegree = [0, 0, 0, 1]`
    - Process `2`: `result = [0, 1, 2]`
        - Decrease indegree of `3`: `indegree = [0, 0, 0, 0]`
        - Add `3` to queue: `queue = [3]`
    - Process `3`: `result = [0, 1, 2, 3]`

4. **Check for Cycles**:
    - `result.length === numCourses`: `[0, 1, 2, 3]`


### Code Implementation
```js
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let N = numCourses;
    let adj = new Array(N).fill(null).map(() => []);
    let indegree = new Array(N).fill(0);
    // let = prerequisites = [[1,0],[0,1]]; // [[1,0]]
    // Build the graph and fill the indegree array
    prerequisites.forEach(([course, pre]) => {
        adj[pre].push(course);
        indegree[course]++;
    });
    // console.log("adj", adj);
    // console.log("indegree", indegree);

    // Initialise the queue with courses having zero indegree
    let q = [];
    for (let i = 0; i < N; i++) {
        if (indegree[i] === 0) q.push(i);
    }
    console.log("q", q);

    let result = [];
    while (q.length > 0) {
        let course = q.shift();
        // console.log("shifted course", course)
        result.push(course);

        // Decrease the indegree of adjacent courses
        for (let nextCourse of adj[course]) {
            // console.log("next course", nextCourse)
            indegree[nextCourse]--;
            if (indegree[nextCourse] === 0) q.push(nextCourse);
        }
    }

    // Check if the result contains all courses
    return result.length === N ? result : [];
};
```



## Summary:
Topological sort is a powerful algorithm for ordering tasks with dependencies. Recognise it by looking for prerequisite relationships and apply it by ensuring tasks are processed only when their dependencies are met.
