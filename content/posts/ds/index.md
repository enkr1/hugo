---
title: "Data Structure Notebook"
date: 2024-08-29 23:56:49
tags:
  - "programming"
  - "data-structures"
categories:
  - ["Software Engineering", "Data Structures & Algorithms"]
  - ["Notebooks"]
subtitle: "Mastering Data Structures: A Comprehensive Guide"
description: "Delve into the core concepts, practical implementations, and advanced techniques of essential data structures. This notebook covers topics like Union-Find, path compression, union by rank, and more, providing developers with the knowledge to tackle complex algorithmic challenges. Ideal for those looking to deepen their understanding of data structures and their applications in solving diverse problems."
keywords:
  - "Union-Find"
  - "Disjoint Set Union"
  - "DSU"
  - "Path Compression"
  - "Union by Rank"
  - "Data Structures"
  - "Algorithms"
  - "Programming Notes"
  - "Graph Algorithms"
  - "Software Engineering"
---



## Union Find (DSU)
[Union-Find](https://www.geeksforgeeks.org/introduction-to-disjoint-set-data-structure-or-union-find-algorithm/), also known as **Disjoint Set Union (DSU)**, is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets. It provides efficient methods for two key operations: (1) **Union**: Merging two subsets into a single subset. (2) **Find**: Determining which subset a particular element is in. This can be used to check if two elements are in the same subset.

Union-Find is particularly useful in problems that involve **finding connected components in a graph**, such as **detecting cycles in an undirected graph**, solving **connectivity problems**. For instance, grouping stones in the [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/description/) problem.



### Components of Union-Find
- The **Parent Array/Map** keeps track of the "root/leader" or **representative** of each set. Initially, every element is its own parent, meaning every element is in its own distinct set. As sets are merged (unioned), this array/map is updated to reflect which elements share the same representative.
- **Path Compression**: While performing `find`, we make the structure flatter by making each node point directly to the root. This significantly speeds up future operations, reducing the tree height and making the amortized time complexity of both `find` and `union` nearly constant, i.e., $O(\alpha(n))$, where $\alpha$ is the inverse Ackermann function.
- **Union by Rank/Size**: To keep the tree shallow and operations fast, the smaller tree (in terms of rank or size) is usually attached under the root of the larger tree. **Rank** refers to an approximate measure of tree depth, while **Size** refers to the number of elements in the tree. This ensures that the tree does not grow too deep, which would slow down future operations.



### Implementing Union-Find
```js
class UnionFind {
  constructor() {
    this.parent = new Map();
    this.rank = new Map();
    console.log("Initial parent map:", JSON.stringify([...this.parent]));
    console.log("Initial rank map:", JSON.stringify([...this.rank]));
  }

  add(x) {
    if (this.parent.has(x)) return;

    this.parent.set(x, x);
    this.rank.set(x, 1);
  }

  find(x) {
    console.log(`~~> Find(${x})`);

    // Find the root of the element x
    if (this.parent.get(x) !== x) {
      console.log(`Path compression for element ${x}`);
      this.parent.set(x, this.find(this.parent.get(x))); // Path compression
    }

    console.log(`Find(${x}) -> Root is ${this.parent.get(x)}`);
    return this.parent.get(x);
  }

  union(x, y) {
    console.log(`\nUnion(${x}, ${y})`);

    this.add(x);
    this.add(y);

    // Find the roots of x and y
    console.log(`~> before find:`, JSON.stringify([...this.parent]));
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX !== rootY) {
      console.log(`Union(${x}, ${y}) -> Already in the same set`);
      return;
    }

    let rankX = this.rank.get(rootX);
    let rankY = this.rank.get(rootY);

    console.log(`rootX: ${rootX}, \nrootY: ${rootY}, \nrankX: ${rankX}, \nrankY: ${rankY}`);
    console.log(`~~~> after find:`, JSON.stringify([...this.parent]));

    // If they have different roots, perform union
    if (rankX > rankY) {
      console.log(`(x <- y) -> Root of ${y} (root ${rootY}) attached to root ${rootX}`);
      this.parent.set(rootY, rootX);
    } else if (rankX < rankY) {
      console.log(`(x -> y) -> Root of ${x} (root ${rootX}) attached to root ${rootY}`);
      this.parent.set(rootX, rootY);
    } else {
      console.log(`(x <- y) -> Roots are equal, root ${rootY} attached to root ${rootX}`);
      this.parent.set(rootY, rootX);
      this.rank.set(rootX, rankX + 1); // ONLY increase the rank of the new root
    }

    console.log(`parent:  ${JSON.stringify([...this.parent])}`);
    console.log(`rank:    ${JSON.stringify([...this.rank])}`);
  }
}
```

> Path compression is a crucial optimization in Union-Find that ensures the data structure remains efficient over a series of operations. It works by flattening the tree during the find operation so that all nodes in a set point directly to the root, minimizing the depth of the tree and speeding up future operations. The example you provided demonstrates how path compression helps keep the structure flat and efficient, particularly when combining different sets through union operations.
> Path compression only happens when find() is called. If find() is never called on an element, that element may still point to an intermediate parent rather than directly to the root.
> Path compression is a key optimisation that helps flatten the Union-Find tree. Without it, the tree could become deep, making future operations slower.
> Always ensure that find() is called when necessary to maintain an optimised structure.

Without path compression, if there were many islands connected in a long chain, the time complexity for each find() operation could become quite large. With path compression, we ensure that the trees stay shallow, making future queries much faster.


### Key Points to Understand
#### Find Operation
- In the `find` operation, if `x` is not the root of its set, we recursively find its root and perform path compression by setting the parent of `x` directly to the root.
- **Path compression** makes the tree flatter, leading to faster future operations.

#### Union Operation
- In the `union` operation, if the roots of `x` and `y` are different, we connect them.
- **Union by rank** ensures that we always attach the smaller tree to the larger tree, minimising the tree height and improving efficiency.

#### Time Complexity
- With both path compression and union by rank, the time complexity for each operation is almost constant, $O(\alpha(n))$, where $\alpha$ is the inverse Ackermann function, which grows very slowly.

### Example Usage
To illustrate how Union-Find works, let's consider an example of merging sets and finding connected components.

```js
let uf = new UnionFind(10);

uf.union(1, 2); // Union sets containing 1 and 2
uf.union(2, 3); // Union sets containing 2 and 3
uf.union(4, 5); // Union sets containing 4 and 5

console.log(uf.find(1)); // Should return the root of the set containing 1 (same as 2, 3)
console.log(uf.find(3)); // Should return the same root as above
console.log(uf.find(4)); // Should return the root of the set containing 4 (same as 5)
console.log(uf.find(6)); // Should return 6, as it's not connected to others

// Check if 1 and 3 are in the same set
console.log(uf.find(1) === uf.find(3)); // true

// Check if 1 and 4 are in the same set
console.log(uf.find(1) === uf.find(4)); // false
```

```js
// Create an instance of UnionFind with 8 elements (0 through 7)
let uf = new UnionFind(8);

// Test Cases
console.log("\nTest Case 1: Union operations");
uf.union(1, 2);
uf.union(2, 3);
uf.union(4, 5);
uf.union(6, 7);
uf.union(5, 6);
uf.union(3, 7); // This will connect two previously separate sets
```

#### Example: [Number of Islands](https://leetcode.com/problems/number-of-islands/description/)
While doing Number of Islands, you will hit the issue of having 2D array, there is a trick to make 2nd input (Y) unique, by:
```js
let y = i * cols + j;
```

> The formula `i * cols + j` converts a 2D grid position `(i, j)` into a unique 1D index by counting how many total elements are in the rows before `i` and adding the position `j` in the current row.

```
  (0, 0) -> index 0
  (0, 1) -> index 1
  (0, 2) -> index 2
  (1, 0) -> index 3
  (1, 1) -> index 4
  (1, 2) -> index 5
  (2, 0) -> index 6
  (2, 1) -> index 7
  (2, 2) -> index 8
```

```js
const grid = [
  ["1", "1", "0"],
  ["1", "0", "0"],
  ["0", "0", "1"]
];

const print2Dto1D = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;

  const getIndex = (i, j) => i * cols + j;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      console.log(`Grid(${i}, ${j}) = 1D index: ${getIndex(i, j)}`);
    }
  }
};

print2Dto1D(grid);
```


```
Grid(0, 0) = 1D index: 0
Grid(0, 1) = 1D index: 1
Grid(0, 2) = 1D index: 2
Grid(1, 0) = 1D index: 3
Grid(1, 1) = 1D index: 4
Grid(1, 2) = 1D index: 5
Grid(2, 0) = 1D index: 6
Grid(2, 1) = 1D index: 7
Grid(2, 2) = 1D index: 8
```

```js
const numIslands = (grid) => {
    // 0 = water
    // 1 = land
    const uf = new UnionFind();
    let rows = grid.length; // row
    let cols = grid[0].length; // col

    const getIndex = (i, j) => (i * cols) + j;

    // console.log(`uf: ${uf}`);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "0") continue;

            let currIndex = getIndex(i, j);
            // add current land
            uf.add(currIndex);
            // right
            if (((j + 1) < cols) && grid[i][j + 1] === "1") uf.union(currIndex, getIndex(i, j + 1));
            // bottom
            if (((i + 1) < rows) && grid[i + 1][j] === "1") uf.union(currIndex, getIndex(i + 1, j));
        }
    }

    // console.log(`uf: ${uf}`);
    let uniqueIslands = new Set();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "1") uniqueIslands.add(uf.find(getIndex(i, j)));
        }
    }

    // console.log(`uniqueIslands: ${uniqueIslands.size}`);
    return uniqueIslands.size;
}
```

### Applications of Union-Find
- **Connected Components**: Finding how many connected components exist in a graph.
- **Cycle Detection**: Checking whether adding an edge to a graph will form a cycle.
- **Kruskal's Algorithm**: Finding the minimum spanning tree in a graph.

### Practice with Simple Problems
1. **Friend Circles**: Given a list of friendships, determine how many friend circles (connected components) exist.
2. **Number of Islands**: Determine the number of islands (connected groups of 1s) in a grid.


### Applying Union-Find to the "Most Stones Removed with Same Row or Column" Problem

In the [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/description/) problem, we treat each stone's row and column as unique identifiers. We use Union-Find to group stones that share a row or column into the same connected component. Once we've grouped them, the number of stones that can be removed is equal to the total number of stones minus the number of connected components.

More:
- LeetCode 261: Graph Valid Tree
- LeetCode 684: Redundant Connection


### Conclusion
Union-Find is a versatile and efficient data structure for managing disjoint sets. By understanding and practicing the basic operations and optimisations like path compression and union by rank, you'll be able to apply it to a wide range of problems involving connectivity and component finding.


### Summary

- **Union-Find** is a powerful and efficient data structure used to manage and find connected components.
- **Path Compression** and **Union by Rank** are optimizations that make Union-Find operations almost constant time, $O(\alpha(n))$, where $\alpha$ is the inverse Ackermann function.
- **Applications**: Union-Find is widely used in problems related to connectivity, such as Kruskal's algorithm for finding minimum spanning trees, finding cycles in graphs, and solving the "Most Stones Removed with Same Row or Column" problem.





### References
- [Top 5 Most Common Graph Algorithms for Coding Interviews](https://www.youtube.com/watch?v=utDu3Q7Flrw&list=PLot-Xpze53ldBT_7QA8NVot219jFNr_GI)



---



## Linked List
### Types of Linked List

1. **Singly Linked List**
2. **Doubly Linked List**
3. **Circular Linked List**
4. Doubly Circular Linked List
5. Skip List
6. Unrolled Linked List
7. Multi-linked List
8. XOR Linked List
9. Self-Organizing Linked List
10. Tail-Linked List
11. Lock-Free Linked List
12. Multi-Level Linked List


#### Singly Linked List
A **singly linked list** is the simplest form of a linked list where each node contains:
- **Data**: The value or information stored.
- **Next Pointer (`next`)**: A reference to the next node in the sequence.

##### Characteristics
- **Unidirectional Traversal**: Can only be traversed in one direction, from head to tail.
- **Simple Structure**: Easier to implement due to having only one pointer per node.

##### Visual Representation
```
  [Head]
    |
    v
[1 | Next] -> [2 | Next] -> [3 | Next] -> null
```
```
[ 1 | [ 2 | [ 3 | null ] ] ]
```

##### Operations
**Insertion at Head**:

- Create a new node.
- Set its `next` to the current head.
- Update head to the new node.

**Insertion at Tail**:

- Traverse to the last node.
- Set its `next` to the new node.

**Deletion**:

- To delete a node, update the `next` pointer of the preceding node to skip the deleted node.

##### Use Cases
- Implementing simple data structures like **stacks** and **queues**.
- Scenarios where backward traversal isn't required.

##### Pros and Cons
- **Pros**:
  - Minimal memory usage per node (only one pointer).
  - Simple to implement and understand.

- **Cons**:
  - Inefficient for operations that require backward traversal.
  - Searching for an element takes $O(n)$ time.

---

#### Doubly Linked List
A **doubly linked list** enhances the singly linked list by adding a **previous pointer (`prev`)** to each node.

##### Characteristics
- **Bidirectional Traversal**: Can traverse the list both forward and backward.
- **More Flexible Operations**: Easier to delete nodes without traversing from the head.

##### Visual Representation
```
null <- [1 | Prev | Next] <-> [2 | Prev | Next] <-> [3 | Prev | Next] -> null
```

##### Operations
- **Insertion**:
  - Similar to singly linked lists but also update the `prev` pointer of the succeeding node.

- **Deletion**:
  - Update both `next` and `prev` pointers of adjacent nodes to exclude the target node.

- **Traversal**:
  - Can start from head and move forward or start from tail and move backward.

##### Use Cases
- Implementing **browser history** (back and forward navigation).
- Applications requiring frequent insertions and deletions from both ends.

##### Pros and Cons
- **Pros**:
  - Efficient in both directions.
  - Easier node deletion with a reference to the node.

- **Cons**:
  - Uses more memory per node (two pointers).
  - Slightly more complex to implement compared to singly linked lists.

---

#### Circular Linked List
A **circular linked list** connects the last node back to the first node, forming a circle. It can be implemented as either singly or doubly linked.

##### Types
1. **Singly Circular Linked List**
2. **Doubly Circular Linked List**

##### Characteristics
- **No `null` Terminator**: The last node points back to the first node.
- **Continuous Traversal**: Can cycle through the list indefinitely.

##### Operations
- **Insertion**:
  - Similar to singly or doubly linked lists but ensures the last node points to the head.

- **Deletion**:
  - Requires updating pointers to maintain the circular nature.

- **Traversal**:
  - Start at any node and continue indefinitely; often requires a stopping condition to prevent infinite loops.

##### Use Cases
- Implementing **round-robin schedulers**.
- Applications requiring cyclic traversal, like **playlist players** or **game turns**.

##### Pros and Cons
- **Pros**:
  - Seamless cycling through elements.
  - Useful for applications needing continuous looping.

- **Cons**:
  - More complex termination conditions.
  - Potential for infinite loops if not handled carefully.

---

### Pros on using Linked Lists
1. **Dynamic Size**:
   - **Flexibility**: Easily grow or shrink in size by adding or removing nodes.
   - **Memory Efficiency**: Allocate memory as needed, which can be more efficient for certain applications.

2. **Ease of Insertion/Deletion**:
   - **Efficient Operations**: Insertions and deletions can be performed without shifting elements, unlike in arrays.
   - **Constant Time Operations**: If you have a pointer/reference to the node, operations can be done in constant time $O(1)$.


### Use Cases:
- **Dynamic Memory Allocation**: When the number of elements is unpredictable.
- **Browser Navigation**: Forward and backward traversal in web browsers.
- **Music Players**: Playing songs in a playlist where you can add or remove songs easily.



### Comparing Linked Lists with Arrays
| **Feature**                   | **Linked List**                                                                                                                                                                               | **Array**                                                                                                                                                                                                                                       |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Size**                      | **Dynamic**: Can grow or shrink as needed without reallocating memory.                                                                                                                        | **Fixed Size**: Typically has a predetermined size, especially in static arrays.                                                                                                                                                                |
| **Memory Allocation**         | **Non-Contiguous**: Each element (node) is allocated separately in memory.                                                                                                                    | **Contiguous**: All elements are stored in consecutive memory locations.                                                                                                                                                                        |
| **Access Time**               | **Sequential Access**: Accessing the nth element requires traversing from the head, resulting in $O(n)$ time complexity.                                                                      | **Random Access**: Directly access any element by index in $O(1)$ time.                                                                                                                                                                         |
| **Insertion/Deletion**        | **Efficient**: Adding or removing elements is $O(1)$ if the position is known (i.e., you have a reference to the node). Especially efficient at the beginning or middle.                      | **Inefficient**: Inserting or deleting elements (except at the end in dynamic arrays) requires shifting subsequent elements, leading to $O(n)$ time complexity.                                                                                 |
| **Memory Overhead**           | **Extra Memory**: Requires additional memory for storing pointers (e.g., `next` and/or `prev` references) in each node.                                                                       | **Minimal Overhead**: No extra memory is needed beyond storing the actual elements.                                                                                                                                                             |
| **Traversal**                 | **Flexible**: Can easily traverse in one direction (singly linked) or both directions (doubly linked).                                                                                        | **Single Direction**: Traversal is typically linear from start to end.                                                                                                                                                                          |
| **Cache Performance**         | **Poor**: Non-contiguous memory allocation can lead to cache misses, making traversal slower due to scattered memory access.                                                                  | **Excellent**: Contiguous memory allocation enhances cache locality, resulting in faster traversal and access times.                                                                                                                            |
| **Implementation Complexity** | **Higher**: More complex to implement due to the need to manage pointers/references and handle edge cases (e.g., inserting at the head or tail).                                              | **Lower**: Simpler to implement, especially in languages with built-in array support.                                                                                                                                                           |
| **Use Cases**                 | - Implementing **Stacks** and **Queues**<br>- **Dynamic Memory Allocation** scenarios<br>- **Graph Representations** (e.g., adjacency lists)<br>- **Undo/Redo** functionality in applications | - Situations requiring **fast random access** (e.g., lookup tables)<br>- **Static datasets** where size doesn't change<br>- **Matrix and multidimensional data storage**<br>- **Implementing other data structures** like heaps and hash tables |



### Example in Code
```js
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Definition of a Singly Linked List
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert a new node at the beginning
    insertAtHead(val) {
        const newNode = new ListNode(val, this.head);
        this.head = newNode;
    }

    // Print the list
    printList() {
        let current = this.head;
        let list = '';
        while (current) {
            list += current.val + ' -> ';
            current = current.next;
        }
        list += 'null';
        console.log(list);
    }
}

// Usage
const list = new LinkedList();
list.insertAtHead(3);
list.insertAtHead(2);
list.insertAtHead(1);
list.printList(); // Output: 1 -> 2 -> 3 -> null
```

### WIP: Partition List Problem (Simple Notes)

#### **Problem**:
- **Task**: Split the linked list into two parts:
  1. **Smaller part**: All nodes with values **less than `x`**.
  2. **Larger part**: All nodes with values **greater than or equal to `x`**.

- **Goal**:
  - Keep the **relative order** of the nodes in both parts.
  - Join both parts into a single list.

#### **Solution (Simple Story)**:
1. **Build two chains**:
   - One for **small nodes** (less than `x`).
   - One for **big nodes** (greater than or equal to `x`).

2. **Process**:
   - **Traverse** the linked list.
   - **Add nodes** to the correct chain (either small or big).

3. **At the end**:
   - **Cut off** the last node of the big list (`moreTail.next = null`), so there's no cycle.
   - **Join** the big list to the **end** of the small list (`lessTail.next = equalOrMoreNodeList.next`).

4. **Return** the new head of the combined list.

#### **Story for easy recall**:
- **Think of it like making two chains of beads**:
  - First chain for **small beads**.
  - Second chain for **big beads**.
- When you're done, you **cut the big chain** so it doesn't continue, then you **attach the big chain** to the end of the small one.
- Now you have **one long chain** with all the small beads at the front, and the big ones at the end!

#### **Key Code**:
```javascript
var partition = function (head, x) {
    let lessNodeList = new ListNode(0); // Chain for smaller values
    let equalOrMoreNodeList = new ListNode(0); // Chain for larger or equal values
    let lessTail = lessNodeList;
    let moreTail = equalOrMoreNodeList;

    while (head !== null) {
        if (head.val < x) {
            lessTail.next = head;
            lessTail = lessTail.next;
        } else {
            moreTail.next = head;
            moreTail = moreTail.next;
        }
        head = head.next;
    }

    moreTail.next = null; // End the big chain
    lessTail.next = equalOrMoreNodeList.next; // Attach the big chain to the small chain

    return lessNodeList.next; // Return the head of the new list
};
```



---

## TODOs
- [trie](https://www.geeksforgeeks.org/trie-insert-and-search/)
