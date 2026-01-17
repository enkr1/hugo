---
title: "JavaScript Notebook"
date: 2024-04-11 01:31:56
tags:
  - "programming"
categories:
  - "Software Engineering"
  - "Programming Languages"
  - "JavaScript"
  - "Notebooks"
subtitle: "Mastering JavaScript: A Comprehensive Guide for Developers"
description: "Delve into the world of JavaScript with this extensive guide designed for programmers at all levels. From basic syntax to advanced functionalities, this post explores the core concepts and latest features of JavaScript, providing practical examples and expert tips to enhance your coding skills. Whether you're a beginner looking to understand the basics or an experienced developer aiming to refine your JavaScript techniques, find valuable insights and resources here."
keywords:
  - "JavaScript tutorials"
  - "Learning JavaScript"
  - "JavaScript programming tips"
  - "Advanced JavaScript techniques"
  - "JavaScript for beginners"
---


Welcome to my JavaScript notebook! Here, I've compiled a variety of tips, tricks, and simple snippets that I've gathered over time. These notes come from various sources, including my professional work, problem-solving on LeetCode, and personal projects. My aim is to document these insights for my own reference and to share them with anyone who might find them useful or interesting. Whether you're a fellow developer or just curious about JavaScript, I hope you'll find something valuable in these pages.



## Array
Creating an array filled with empty arrays:
```js
let filledWithEmptyArrays = Array(3).fill().map(() => []);
```

Creating a 2D array (e.g., for a visitation matrix):
```js
let visited = Array.from({ length: l }, () => Array.from({ length: l }, () => 0));
```

Creating an array filled with zeros:
```js
Array(26).fill(0);
```

Creating an array filled with false:
```js
Array(n).fill(false);
```


### dp
```js
let dp = new Array(N).fill(0);
```

### 2D array
```js
const N = 5;
const M = 5;
let dp = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(0));
```

output:
```js
dp [
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ]
]
```



### visited
0 = Unvisited, 1 = Visiting, 2 = Visited;
Or simply use boolean, depends on the use case.
```js
let visited = new Array(numCourses).fill(0);
```



### adjacency
This approach is explicit about initialising the array with null values before mapping.
```js
let N = 10
let adj = new Array(N).fill(null).map(() => []);
let prerequisites = [[1,0],[0,1]];

prerequisites.forEach(([a, b]) => adj[a].push(b));
```


### Sorting Arrays
Sort an array of numbers in ascending order:
```js
[11, 2, 22, 1].sort((a, b) => a - b);
```

---



## Priority Queue (pq)
Min-Heap based on sum of pairs:
```js
const pq = new PriorityQueue({
  compare: (a, b) => a.sum - b.sum
});
```

Max-Heap based on sum of pairs:
```js
const pq = new PriorityQueue({
  compare: (a, b) => b.sum - a.sum
});
```

Can enqueue with data set like so:
```js
pq.enqueue({ sum: 100, i: 0, j: 0 });
```

### MinPriorityQueue
- This class allows you to manage elements in a min-heap fashion, where the smallest element is always at the top.
- It's particularly useful for problems where you need to efficiently access and remove the smallest element repeatedly.

### MaxPriorityQueue
- This class manages elements in a max-heap fashion, where the largest element is always at the top.
- Use it when you need to access and remove the largest element efficiently.

#### Example Usage:
Here's a quick example of using a `MinPriorityQueue` in a LeetCode problem:

```js
let heap = new MinPriorityQueue();
heap.enqueue(10);
heap.enqueue(5);
heap.enqueue(20);
console.log(heap.dequeue().element); // Outputs 5
```

**Note**: These classes are specific to the LeetCode environment and are not available in standard JavaScript. You will need to implement your own or use a third-party library if you are working outside LeetCode.
```sh
npm install --save @datastructures-js/priority-queue
```

```js
const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue
} = require('@datastructures-js/priority-queue');
```

> PriorityQueue in this repo is implemented as 3 types:
>
> - PriorityQueue that accepts a custom comparator between elements.
> - MinPriorityQueue which considers an element with smaller priority number as higher in priority.
> - MaxPriorityQueue which cosiders an element with bigger priority number as higher in priority.


### Build From Scratch
#### Min-Heap Implementation

A min-heap is a binary tree where the parent nodes are smaller than their children. Here's a basic implementation:

```js
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    enqueue(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    dequeue() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return minValue;
    }

    heapifyDown(index) {
        let smallest = index;
        const leftChild = this.getLeftChildIndex(index);
        const rightChild = this.getRightChildIndex(index);

        if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }
        if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }
        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    size() {
        return this.heap.length;
    }
}
```

#### Max-Heap Implementation
A max-heap is similar to a min-heap, but the parent nodes are larger than their children.

```js
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    enqueue(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] < this.heap[index]) { // Max-Heap condition
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    dequeue() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const maxValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return maxValue;
    }

    heapifyDown(index) {
        let largest = index;
        const leftChild = this.getLeftChildIndex(index);
        const rightChild = this.getRightChildIndex(index);

        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) { // Max-Heap condition
            largest = leftChild;
        }
        if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) { // Max-Heap condition
            largest = rightChild;
        }
        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    size() {
        return this.heap.length;
    }
}
```

#### Key Points to Remember:

- **Min-Heap**: Always keeps the smallest element at the top.
- **Max-Heap**: Always keeps the largest element at the top.
- **Time Complexity**: Insertion and deletion operations both take $O(\log n)$ time, where $n$ is the number of elements in the heap.
- **Use Cases**: Min-heaps are useful for problems requiring efficient access to the minimum element (e.g., Dijkstra's algorithm), while max-heaps are used when you need quick access to the maximum element (e.g., priority scheduling).



### LeetCode Imported Tips
When working on LeetCode problems, you might come across built-in utility classes like `MinPriorityQueue` and `MaxPriorityQueue`. These classes are provided by the LeetCode environment to simplify the process of implementing priority queues, which are essentially min-heaps and max-heaps.

```
JavaScript	node.js 20.10.0
Your code is run with --harmony flag, enabling new ES6 features.

lodash.js library is included by default.

For Priority Queue / Queue data structures, you may use 5.4.0 version of datastructures-js/priority-queue and 4.2.3 version of datastructures-js/queue.
```

- [LeetCode - What are the environments for the programming languages?](https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages)
- [GitHub - @datastructures-js/priority-queue](https://github.com/datastructures-js/priority-queue/blob/v5/README.md#contents)



---

## Working with JSON
Convert an object or array to a JSON string:
```js
JSON.stringify(obj);
```

---

## map - set()
Initialise a map with key-value pairs:
```js
const myMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);
```

Convert map values to an array:
```js
const valuesArray = Array.from(myMap.values());
```



## set - add()
...

---

## Math
Find the maximum value in a list of numbers:
```js
Math.max(...list);
```

Round a number to at most 2 decimal places:
```js
Math.round(num * 100) / 100;
```

To ensure numbers like 1.005 round correctly:
```js
Math.round((num + Number.EPSILON) * 100) / 100;
```

---




## CSS: Adding Styles to :before and :after
Dynamically add CSS styles to `:before` and `:after` selectors:
```js
var styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = ".add-fading-" + nth + ":before { z-index: 1 !important; }";
```



## NPM Packages
### md-file-tree by [@michalbe](http://github.com/michalbe)
Generate a markdown tree of all files in a directory, recursively:

```
## Display in console
md-file-tree

## Output to a file such as README.md
md-file-tree > README.md
```

### JavaScript Obfuscator
Obfuscate JavaScript code to make it harder to understand:
```js
var fs = require("fs");
var jsObfuscator = require("js-obfuscator");

fs.readFile("./000_unencrypted-js/main.js", "UTF-8", function (error, code) {
    if (error) throw error;
    var obfuscatedResult = jsObfuscator.obfuscate(code);
    fs.writeFile("./js/main.js", obfuscatedResult.getObfuscatedCode(), function (fsError) {
        if (fsError) console.log(fsError);
        console.log("Obfuscated.");
    });
});
```

## TypeScript: Child Manager Configuration
Example configuration for managing multiple processes:
```json
{
  "processes": [
    {
      "name": "Frontend",
      "command": {
        "executor": "yarn",
        "args": [
          "start"
        ],
        "path": "../fe-project",
        "isWindows": false
      },
      "maxLogs": 200
    },
    {
      "name": "WebSocket",
      "command": {
        "executor": "yarn",
        "args": [
          "start"
        ],
        "path": "../server-project",
        "isWindows": false
      },
      "maxLogs": 300
    },
    {
      "name": "Docker",
      "command": {
        "executor": "docker-compose",
        "args": [
          "up"
        ],
        "path": "../be-project",
        "isWindows": false
      },
      "maxLogs": 300
    }
  ],
  "captureExit": true,
  "longLive": false,
  "debug": false
}
```

## HTML: onkeydown
To put on `<form>` to prevent user clicks on enter.

```js
onkeydown="return event.key != 'Enter';"
```

## Spread operator
```js
const obj = { name: "Jing Hui", age: 24 }

console.log(obj)

const test = {...obj, age: 25, nationality: "malaysian"}
```


---

## Destructuring assignments
You can use them in different contexts, such as swapping values, extracting properties from objects or arrays, and working with functions:

### Swapping Two Variables
This is the most common use case: swapping two variables without using a temporary variable.

```js
let a = 5;
let b = 10;

// Swap a and b
[a, b] = [b, a];

console.log(a); // Output: 10
console.log(b); // Output: 5
```

> got this from Rotate Array (todo add link)


### Extracting Values from Arrays
You can use destructuring to assign array elements to variables.

```js
const numbers = [1, 2, 3, 4];

// Destructure first two elements
const [first, second] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2

// Skip elements
const [, , third] = numbers;

console.log(third);  // Output: 3
```

### Default Values in Array Destructuring
If the array is shorter than expected, you can provide default values.

```js
const colors = ['red'];

// Destructure with a default value
const [primaryColor, secondaryColor = 'blue'] = colors;

console.log(primaryColor);  // Output: 'red'
console.log(secondaryColor); // Output: 'blue' (default value)
```

### Object Destructuring
You can destructure objects to extract specific properties into variables.

```js
const person = {
  name: 'Alice',
  age: 30,
  job: 'Engineer'
};

// Destructure object properties
const { name, age } = person;

console.log(name); // Output: 'Alice'
console.log(age);  // Output: 30
```

### Object Destructuring with Aliases
You can also rename the extracted properties by assigning them to new variable names.

```js
const employee = {
  firstName: 'John',
  lastName: 'Doe'
};

// Destructure with alias
const { firstName: fName, lastName: lName } = employee;

console.log(fName); // Output: 'John'
console.log(lName);  // Output: 'Doe'
```

### Nested Object Destructuring
Destructuring can also be used for nested objects.

```js
const student = {
  info: {
    name: 'Mark',
    grade: 'A'
  },
  courses: ['Math', 'Physics']
};

// Destructure nested properties
const { info: { name }, courses: [firstCourse] } = student;

console.log(name);        // Output: 'Mark'
console.log(firstCourse); // Output: 'Math'
```

### Function Parameter Destructuring
You can destructure objects or arrays passed as function parameters.

```js
// Destructure object in function parameters
function printStudent({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

const student = { name: 'Emily', age: 25 };
printStudent(student); // Output: 'Emily is 25 years old.'

// Destructure array in function parameters
function sum([a, b]) {
  return a + b;
}

console.log(sum([3, 7])); // Output: 10
```

### Rest Operator in Destructuring (Spread Operator)
You can use the rest (`...`) operator to capture the remaining elements after destructuring.

```js
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Destructure first element and capture the rest
const [firstFruit, ...otherFruits] = fruits;

console.log(firstFruit);   // Output: 'apple'
console.log(otherFruits);  // Output: ['banana', 'cherry', 'date']
```

### Ignoring Values in Destructuring
You can ignore certain elements when destructuring arrays.

```js
const scores = [100, 90, 85, 80];

// Ignore the second score
const [firstScore, , thirdScore] = scores;

console.log(firstScore); // Output: 100
console.log(thirdScore); // Output: 85
```

### Combining Arrays and Destructuring
Destructuring works seamlessly when combining multiple arrays.

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine and destructure
const combined = [...arr1, ...arr2];
const [first, second, ...rest] = combined;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5, 6]
```


## TODO: Rest Operator (`...`)

The **rest operator** is used to **gather** multiple elements into a single array or object. You usually see it in function parameters or destructuring.

### Example 1: Rest in Function Parameters
In functions, the rest operator gathers all the extra arguments passed to the function into an array.

```js
function showNumbers(...numbers) {
  console.log(numbers); // Gathers arguments into an array
}

showNumbers(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]
```

#### Breakdown:
- The `...numbers` gathers all the arguments (1, 2, 3, 4, 5) into a single array named `numbers`.

---

### Example 2: Rest in Array Destructuring
In destructuring, the rest operator gathers remaining elements of an array into a new array.

```js
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);   // Output: 10
console.log(second);  // Output: 20
console.log(rest);    // Output: [30, 40, 50]
```

#### Breakdown:
- `first` gets the value `10`, `second` gets `20`, and the rest of the values (`30, 40, 50`) are collected into the `rest` array.

---

### Example 3: Rest in Object Destructuring
You can also use the rest operator to gather remaining properties of an object.

```js
const person = { name: 'Alice', age: 25, country: 'USA' };
const { name, ...details } = person;
console.log(name);     // Output: Alice
console.log(details);  // Output: { age: 25, country: 'USA' }
```

#### Breakdown:
- `name` gets `Alice`, and the remaining properties (`age`, `country`) are collected into the `details` object.

---

## Spread Operator (`...`)

The **spread operator** is used to **spread out** the elements of an array, object, or iterable into individual elements.

### Example 1: Spread in Arrays
Spread operator expands the elements of an array. This is often used to combine arrays.

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4]
```

#### Breakdown:
- `...arr1` spreads out `[1, 2]`, and `...arr2` spreads out `[3, 4]`, combining them into one array.

---

### Example 2: Spread in Function Calls
You can pass the elements of an array as individual arguments to a function using the spread operator.

```js
const numbers = [5, 6, 7];
console.log(Math.max(...numbers)); // Output: 7
```

#### Breakdown:
- `...numbers` spreads the array `[5, 6, 7]` into `Math.max` as individual arguments (`5, 6, 7`).

---

### Example 3: Spread in Objects
The spread operator can copy properties from one object to another.

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2, c: 3 }
```

#### Breakdown:
- `...obj1` spreads the properties of `obj1` into a new object, followed by `...obj2` spreading the properties of `obj2`.

---

### Summary of Differences
| Feature     | Rest Operator (`...`)                 | Spread Operator (`...`)                |
| ----------- | ------------------------------------- | -------------------------------------- |
| **Purpose** | Gathers elements into an array/object | Spreads elements into individual items |
| **Usage**   | Function parameters, destructuring    | Function calls, array/object merging   |
| **Example** | `function(...args) {}`                | `Math.max(...[1, 2, 3])`               |

---

### Final Thoughts

- **Rest** collects multiple elements into an array or object.
  - Example: Collect remaining arguments in a function.

- **Spread** takes an array or object and breaks it into individual elements.
  - Example: Pass an array as arguments to a function or merge arrays/objects.

---



## 🐛 Common Errors
### Array Referencing Issue
The method that causes all elements to reference the same array:
```js
let adj = new Array(N).fill([]);
```

1. When using fill with objects (including arrays), it copies the reference to the object.
2. For primitive types (like numbers or strings), it copies the value.
3. Avoiding Common Pitfalls: Don't use fill with mutable objects if you need distinct instances.

#### ✅ The Correct Way!
This approach is more concise and directly initialises the array elements:
```js
let adj = new Array(N).fill(null).map(() => []);
// OR
let adj = Array.from({ length: N }, () => []);
```


---

## TODO
- https://threejs.org/
