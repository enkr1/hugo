---
title: "Floyd-Warshall Algorithm: Comprehensive Guide to All-Pairs Shortest Paths"
date: 2024-05-19 06:17:35
tags:
  - "algorithm"
  - "dynamic programming"
categories:
  - "Software Engineering"
  - "Data Structures & Algorithms"
subtitle: "A Comprehensive Guide to Understanding Floyd-Warshall Algorithm"
description: "Explore the Floyd-Warshall algorithm for finding shortest paths between all pairs of vertices in a weighted graph. Learn about its applications, benefits, and limitations in handling both positive and negative edge weights."
keywords:
  - "Floyd-Warshall algorithm"
  - "shortest path algorithm"
  - "dynamic programming"
  - "graph algorithms"
  - "all-pairs shortest path"
  - "negative weight cycles"
---

## What is Floyd-Warshall Algorithm?
The Floyd-Warshall algorithm is a **dynamic programming algorithm** used to find the shortest paths between **all pairs of vertices in a weighted graph**. It can **handle both positive and negative edge weights**, provided there are no negative weight cycles.

### Positive and Negative Edge Weights
- **Positive Edge Weights:** Represent positive costs or distances (e.g., road lengths).
- **Negative Edge Weights:** Represent scenarios where moving reduces the total cost (e.g., financial gains).

### Negative Weight Cycles
- **Definition:** A cycle where the sum of the edge weights is negative.
- **Issue:** Makes shortest path calculations meaningless as you can reduce the path cost indefinitely by looping through the cycle.

### Floyd-Warshall Algorithm
- **Capability:** Handles both positive and negative edge weights.
- **Limitation:** **Cannot** compute shortest paths correctly if there are negative weight cycles.

### Detection
- **Method:** After running the algorithm, check if any diagonal element (`dist[i][i]`) in the distance matrix is negative. If so, a negative weight cycle exists.

## When to Use Floyd-Warshall Algorithm
**Use Cases:**
1. **Dense Graphs:** When the graph is dense, meaning **the number of edges is close to the square of the number of vertices**.
2. **All-Pairs Shortest Paths:** When you need to find the **shortest paths between every pair of vertices**.
3. **Negative Weights:** When the graph contains **negative edge weights but no negative weight cycles**.

### Example Applications:
- **Network Routing:** Determining the shortest paths for data packet routing in a network.
- **Transitive Closure:** Finding the transitive closure of a graph to determine reachability.
- **Shortest Path Problems in Graphs with Negative Weights:** When other algorithms like Dijkstra's are not suitable due to negative weights.


## Why Floyd-Warshall Algorithm?
### Advantages
1. **Handles Negative Weights:** It can handle graphs with negative edge weights, unlike Dijkstra's algorithm.
2. **All-Pairs Shortest Paths:** It efficiently computes shortest paths between all pairs of vertices.
3. **Simplicity:** The algorithm is straightforward to implement with a triple nested loop.

But, **Cannot Handle:** Negative weight cycles (they make shortest path calculations invalid).

### Drawbacks
1. **Time Complexity:**
    $$O(V^3)$$

    > which can be prohibitive for very large graphs.

2. **Space Complexity:**
    $$O(V^2)$$

    > requiring significant memory for storing the distance matrix.


## Step-by-Step Guide to Implement Floyd-Warshall Algorithm
1. **Understand the Problem:**
   - You need to find the shortest paths between all pairs of vertices in a weighted directed graph.
   - The graph is represented as an adjacency matrix.
   - If there is no direct edge between two vertices, the weight is `Infinity`.

2. **Initialisation Distance Matrix:**
   - Create a 2D array of distance matrix `dist` as a copy of the input graph. This will store the shortest distances.
   - Set the diagonal elements to 0, because the shortest distance from any vertex to itself is 0.

3. **Algorithm Execution:**
   - Use three nested loops:
     - Outer loop iterates over each vertex `k` as an intermediate vertex.
     - Middle loop iterates over each vertex `i` as the source.
     - Inner loop iterates over each vertex `j` as the destination.
   - Update `dist[i][j]` if a shorter path through `k` is found:
     ```javascript
     if (dist[i][k] + dist[k][j] < dist[i][j]) {
       dist[i][j] = dist[i][k] + dist[k][j];
     }
     ```

4. **Result:**
   - After all iterations, `dist[i][j]` will contain the shortest distance from vertex `i` to vertex `j`.
   - Output the Result: Print the `dist` matrix, replacing `Infinity` with `∞` for readability.

### Memorisation Tips
- **Initialisation:**
  - `dist[i][j] = graph[i][j]` for all pairs `(i, j)`.

- **Update Rule:**
  - `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])`.

- **Loop Structure:**
  - Three nested loops for `k`, `i`, and `j`.

- **Edge Cases:**
  - Self-loops are always `0`.
  - Use `Infinity` for no direct path.


### Detailed Example in JavaScript
```javascript
function floydWarshall(graph) {
  const dist = [];
  const V = graph.length;

  // Step 1: Initialise the distance matrix
  for (let i = 0; i < V; i++) {
  dist[i] = [];
    for (let j = 0; j < V; j++) {
      dist[i][j] = graph[i][j];
    }
  }

  // Step 2: Apply Floyd-Warshall Algorithm
  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  // Step 3: Return the shortest distance matrix
  return dist;
}

// Example graph
const graph = [
  [0, 3, Infinity, 7],
  [8, 0, 2, Infinity],
  [5, Infinity, 0, 1],
  [2, Infinity, Infinity, 0]
];

const result = floydWarshall(graph);

// Format the output for readability
result.forEach(row => {
  console.log(row.map(value => (value === Infinity ? "∞" : value)).join(" "));
});

/*
Expected output:
[
  [0, 3, 5, 6],
  [5, 0, 2, 3],
  [3, 6, 0, 1],
  [2, 5, 7, 0]
]
*;
```

### Example 1: Basic Graph
A simple graph with four vertices (A, B, C, D) and both finite and infinite distances:
```javascript
const graph1 = [
  [0, 3, Infinity, 7],
  [8, 0, 2, Infinity],
  [5, Infinity, 0, 1],
  [2, Infinity, Infinity, 0]
];
```

### Example 2: Graph with No Edges
A graph where no vertices are directly connected except for self-loops:
```javascript
const graph2 = [
  [0, Infinity, Infinity, Infinity],
  [Infinity, 0, Infinity, Infinity],
  [Infinity, Infinity, 0, Infinity],
  [Infinity, Infinity, Infinity, 0]
];
```

### Example 3: Complete Graph
A fully connected graph where every vertex is directly connected to every other vertex with varying weights:
```javascript
const graph3 = [
  [0, 1, 4, 6],
  [1, 0, 2, 3],
  [4, 2, 0, 5],
  [6, 3, 5, 0]
];
```

### Example 4: Graph with Negative Weights (No Negative Cycles)
A graph with some edges having negative weights, but no negative weight cycles:
```javascript
const graph4 = [
  [0, 3, -2, 8],
  [Infinity, 0, Infinity, 1],
  [Infinity, Infinity, 0, 4],
  [Infinity, Infinity, Infinity, 0]
];
```

### Example 5: Sparse Graph
A sparse graph with more infinite distances (disconnected vertices):

```javascript
const graph5 = [
  [0, 5, Infinity, 10],
  [Infinity, 0, 3, Infinity],
  [Infinity, Infinity, 0, 1],
  [Infinity, Infinity, Infinity, 0]
];
```

### Running the Algorithm
You can use the `floydWarshall` function provided in the previous example to compute the shortest paths for each of these graphs. Here's how you can do it for one of the examples:
```javascript
const graph1 = [
  [0, 3, Infinity, 7],
  [8, 0, 2, Infinity],
  [5, Infinity, 0, 1],
  [2, Infinity, Infinity, 0]
];

floydWarshall(graph1);

/*
Expected output:
[
  [0, 3, 5, 6],
  [5, 0, 2, 3],
  [3, 6, 0, 1],
  [2, 5, 7, 0]
]
*/
```

You can similarly run the function for the other graphs by replacing `graph1` with `graph2`, `graph3`, `graph4`, or `graph5`. This will give you the shortest path distances between all pairs of vertices for each input graph.

---

## Side Knowledge: Floyd-Warshal Algorithm vs Dijkstra's Algorithm

| **Aspect**                   | **Floyd-Warshall Algorithm**                                                                                                                                                                    | **Dijkstra's Algorithm**                                                                                                                                                    |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Time Complexity**          | $$O(V^3)$$                                                                                                                                                                                      | $$O((V + E) \log V)$$ With a priority queue                                                                                                                                 |
| **Space Complexity**         | $$O(V^2)$$                                                                                                                                                                                      | $$O(V)$$ For distances and the priority queue                                                                                                                               |
| **Purpose**                  | All-pairs shortest paths                                                                                                                                                                        | Single-source shortest path                                                                                                                                                 |
| **Graph Type**               | Weighted graphs with positive and negative weights (no cycles)                                                                                                                                  | Weighted graphs with non-negative weights                                                                                                                                   |
| **Algorithm Steps**          | 1. Initialize distance matrix<br>2. Set `dist[i][i]` to 0<br>3. Update distances using: `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])`<br>4. Result in `dist[i][j]` for shortest paths | 1. Initialize distances<br>2. Use priority queue to select vertex with smallest distance<br>3. Update distances for neighbors<br>4. Repeat until all vertices are processed |
| **Use Cases**                | Dense graphs, network analysis, finding transitive closure                                                                                                                                      | Sparse graphs, map routing, network routing                                                                                                                                 |
| **Handles Negative Weights** | Yes, but no negative cycles                                                                                                                                                                     | No                                                                                                                                                                          |

### Side Note: Single-Source Shortest Path
**Single-source shortest path** refers to finding the shortest paths from a single starting vertex (source) to all other vertices in the graph. The term "single-source" distinguishes this problem from the "all-pairs shortest path" problem, which seeks to find the shortest paths between every pair of vertices.
