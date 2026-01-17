---
title: "Dijkstra's Algorithm: Efficient Shortest Path Finding in Graphs"
date: 2024-05-19 12:06:35
tags:
  - "algorithm"
  - "heap-map"
  - "breadth-first-search"
  - "shortest-path"
  - "graph-algorithms"
  - "leetcode"
categories:
  - "Software Engineering"
  - "Data Structures & Algorithms"
subtitle: "Understanding Dijkstra's Algorithm for Optimal Pathfinding"
description: "Dive into Dijkstra's Algorithm, a fundamental graph algorithm for finding the shortest paths between nodes with non-negative weights. Learn how it works, its use cases, and how it compares to other shortest path algorithms."
keywords:
  - "Dijkstra's Algorithm"
  - "shortest path algorithm"
  - "Graph algorithms"
  - "Non-negative weights"
  - "Algorithm notes"
---

## What is Dijkstra's Algorithm?
Dijkstra's Algorithm is a well-known algorithm used to **find the shortest path between nodes in a graph**. It was created by the computer scientist **Edsger Wybe Dijkstra**. This algorithm is one of the most efficient for finding the shortest path in a graph with **non-negative weights**, **especially for sparse graphs**. However, it is not always the fastest or most optimised algorithm for all shortest path problems. The choice of algorithm depends on the specific characteristics of the graph and the requirements of the problem.

## Is Dijkstra's Algorithm the Fastest and Most Optimised?
Dijkstra's Algorithm is highly efficient for its intended use case: **finding the shortest paths from a single source in graphs with non-negative edge weights**. However, other algorithms may be more suitable for different scenarios:

1. **Bellman-Ford Algorithm:**
   - **Use Case**: Graphs with negative weights.
   - **Strengths**: Handles graphs with negative edge weights and can detect negative weight cycles.
   - **Drawbacks**: Generally slower than Dijkstra's algorithm for graphs without negative weights.
   - **Complexity**: $$O(VE)$$

2. **A\* Algorithm:**
   - **Use Case**: Pathfinding in navigation and games.
   - **Strengths**: Uses heuristics to focus the search, making it faster in practice for many problems.
   - **Drawbacks**: Requires a good heuristic to be effective.
   - **Complexity**: Depends on the heuristic used, often better than Dijkstra's for practical problems.

3. **Johnson's Algorithm:**
   - **Use Case**: All-pairs shortest paths in sparse graphs.
   - **Strengths**: Efficient for sparse graphs, transforms the problem to allow using Dijkstra's algorithm.
   - **Drawbacks**: More complex than Floyd-Warshall for dense graphs.
   - **Complexity**: $$O(V^2 \log V + VE)$$

4. **Floyd-Warshall Algorithm:**
   - **Use Case**: All-pairs shortest paths.
   - **Strengths**: Simple implementation, handles negative weights (no cycles).
   - **Drawbacks**: Not suitable for large graphs due to cubic time complexity.
   - **Complexity**: $$O(V^3)$$

### Summary
- **Dijkstra's Algorithm** is optimal for single-source shortest path problems in graphs with non-negative weights, especially for sparse graphs.
- **Bellman-Ford Algorithm** is better for graphs with negative weights.
- **A\* Algorithm** is often faster in practical scenarios with a good heuristic.
- **Floyd-Warshall Algorithm** is suited for all-pairs shortest path problems in [dense graphs](https://en.wikipedia.org/wiki/Dense_graph).
- **Johnson's Algorithm** is efficient for all-pairs shortest path problems in [sparse graphs](https://stackoverflow.com/a/12599199).

> While Dijkstra's Algorithm is highly efficient for its specific use case, it is not universally the fastest or most optimised for all shortest path problems. The choice of algorithm should be based on the specific properties and requirements of the problem at hand.


## How Does Dijkstra's Algorithm Work?
Dijkstra's Algorithm works by iteratively selecting the node with the smallest known distance, updating the distances of its neighbors, and marking it as "visited" until the shortest path to all nodes is determined. Here's a simplified step-by-step explanation:

1. **Initialisation**: Set the distance to the start node to `0` and all other nodes to `infinity`. Add all nodes to a `priority queue`.
2. **Selection**: While the priority queue is not empty, select the node with **the smallest distance**.
3. **Update**: For the selected node, update the distances to its neighboring nodes if a shorter path is found.
4. **Repeat**: Mark the selected node as visited and remove it from the queue. Continue the process until all nodes are visited.


## Dijkstra's Algorithm Overview
- **Graph**: Adjacency list
- **Priority Queue**: Min-heap

### Complexity
- **Time**: $O((V + E) \log V)$
- **Space**: $O(V)$

### Cheat Sheat
1. `dist[start] = 0`
2. `pq.enqueue(start, 0)`
3. While `!pq.isEmpty()`:
   - `minNode = pq.dequeue().node`
   - For each `neighbor` of `minNode`:
     - `alt = dist[minNode] + weight`
     - If `alt < dist[neighbor]`:
       - `dist[neighbor] = alt`
       - `prev[neighbor] = minNode`
       - `pq.enqueue(neighbor, alt)`
4. Backtrack from `end` using `prev`


## Example in JS
```js
// Create a priority queue
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(node, priority) {
    this.queue.push({ node, priority });
    this.sort();
  }

  dequeue() {
    return this.queue.shift();
  }

  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return !this.queue.length;
  }
}

// The graph is represented as an adjacency matrix
function shortestPath(graph, startNode, endNode) {
  let distances = [];
  let prev = [];
  let pq = new PriorityQueue();

  distances[startNode] = 0;
  pq.enqueue(startNode, 0);

  for(let node in graph) {
    if(node !== startNode) {
      distances[node] = Infinity;
    }
    prev[node] = null;
  }

  while(!pq.isEmpty()) {
    let minNode = pq.dequeue().node;

    for(let neighbor in graph[minNode]) {
      let alt = distances[minNode] + graph[minNode][neighbor];

      if(alt < distances[neighbor]) {
        distances[neighbor] = alt;
        prev[neighbor] = minNode;
        pq.enqueue(neighbor, distances[neighbor]);
      }
    }
  }

  let shortestPath = [];
  let u = endNode;
  while(u !== null) {
    shortestPath.push(u);
    u = prev[u];
  }
  shortestPath.reverse();

  return {
    distance: distances[endNode],
    path: shortestPath,
  };
}

let graph = {
  'A': { 'B': 1, 'C': 4 },
  'B': { 'A': 1, 'C': 2, 'D': 5 },
  'C': { 'A': 4, 'B': 2, 'D': 1 },
  'D': { 'B': 5, 'C': 1 }
};

console.log(shortestPath(graph, 'A', 'D')); // Output: { distance: 3, path: [ 'A', 'B', 'C', 'D' ] }
```

In the above example, we first define a priority queue to help pick the node with the smallest distance that hasn't been visited yet. Then, we define the `shortestPath` function which implements Dijkstra's algorithm on a graph represented as an adjacency matrix (an object with nested objects). Each key in the graph object represents a node, and its value is another object that represents all the nodes that it is connected to along with the weight of the edges.

In the `shortestPath` function, we first initialise the distances and previous node (prev) arrays. The distances array keeps track of the shortest distance from the start node to each node, while the prev array keeps track of the path we have taken to get to each node. We also enqueue the start node into the priority queue.

We then enter a loop where we **dequeue the node with the smallest distance that hasn't been visited yet**. We explore all its neighbors and update their distances if we have found a shorter path. If a node's distance is updated, we enqueue it back to the priority queue with its new distance and update the prev array.

Once we've visited all nodes, we **build the shortest path by backtracking from the end node to the start node using the prev array**.

Finally, we use this function to find the shortest path from node 'A' to 'D' in a graph. The output indicates that the shortest path is 'A' -> 'B' -> 'C' -> 'D' with a total distance of 3.

---

## Notes for Myself
shortest path graph algorithm: bfs + min heap

**Conceptual explanation:**

1. You start with a graph, where each node is a point and the edges represent a path from one point to another. These paths have a cost, represented by the weight of the edges.
2. Pick a node to be your starting point. Mark the distance from this node to itself as 0 and the distance from this node to all other nodes as infinity $∞$.
3. From the starting node, visit each of its adjacent nodes. For each visited node, calculate the distance from the start node to it by summing the weight of the edge connecting them to the current shortest path distance to the start node. If the calculated distance is less than the currently assigned shortest path distance to that node, update it.
4. Once you have visited all the adjacent nodes of the start node and updated the shortest paths, mark the start node as visited. A visited node will not be checked ever again.
5. Now, select the node that has the smallest shortest-path distance and is not visited yet, make it the current node and go back to step 3.
6. Repeat the process until all the nodes in the graph have been visited.
