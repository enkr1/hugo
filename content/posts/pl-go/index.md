---
title: "Go Notebook"
sticky: 0
date: 2025-02-08 19:05:55
tags:
  - "programming"
  - "go"
  - "golang"
  - "notes"
categories:
  - "Software Engineering"
  - "Programming Languages"
  - "Go"
  - "Notebooks"
subtitle: "A JavaScript Developer's Journey into Go: Building High-Performance Tools for Big Data Challenges"
description: "Follow my hands-on Go learning journey through LeetCode solutions and real-world comparisons with JavaScript. Discover how Go's concurrency and memory efficiency solve problems where JS hits limits."
keywords:
  - "JavaScript to Go transition"
  - "Learning Golang for JS developers"
  - "Go concurrency patterns"
  - "Memory optimization in Go"
  - "LeetCode solutions in Go and JS"
  - "Big data processing comparison"
  - "Practical Go programming examples"
  - "Go vs JavaScript performance"
---



## 🚀 Intro

i'm diving into Go to add a new tool to my coding arsenal, aiming to harness its speed and efficiency for those times when JavaScript just can't keep up with massive datasets. By tackling LeetCode problems and comparing solutions with JS, i'm not just learning a new language—i'm preparing for real-world scenarios where Go's lightweight nature and concurrency shine. Whether it's crunching big data or optimising performance, having Go as an option means i'm ready for whatever coding challenges come my way. 🚀



| Criteria          | Go 🦫                                                       | JavaScript 🟨                                 |
| ----------------- | ---------------------------------------------------------- | -------------------------------------------- |
| Speed             | 5-10x faster for CPU tasks                                 | Slower, but adequate for most web apps       |
| Memory Efficiency | ~1/3 JS usage, manual control                              | Automatic, hits ~4GB limit                   |
| Best For          | - Big data (>1GB) <br> - High concurrency <br> - CLI tools | - Web APIs <br> - UI apps <br> - Prototyping |
| Concurrency       | Goroutines (cheap, 1MB each)                               | Worker threads (heavy, ~10MB)                |
| Ecosystem         | Growing stdlib, fewer libs                                 | Massive NPM ecosystem                        |
| Learning Curve    | Strict types, explicit error handling                      | Familiar syntax, flexible types              |
| When to Use       | Data pipelines, microservices                              | Full-stack apps, quick scripts               |

> Data Pipeline = A series of automated steps that collect, process, and move data from one system to another (e.g., CSV files → cleaned data → database).

**Decision Checklist**:

1. Processing >1GB data? → Go
2. Need precise memory control? → Go
> Precise Memory Control = In Go, you manually manage memory allocation (e.g., buffer := make([]byte, 0, 1024) pre-allocates 1KB), preventing unexpected memory spikes common in JS.
1. Building UI/API? → JS
2. Team knows JS better? → JS
3. Need single binary? → Go (A self-contained executable with all dependencies packed in)



---



## 📌 Core Concepts

| Concept            | JavaScript Example                             | Go Example & Notes                                                                        |
| ------------------ | ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Variables**      | `let x = 10;`                                  | `x := 10` (type inferred)<br>`var y int = 20` (explicit)                                  |
| **Constants**      | `const PI = 3.14;`                             | `const PI = 3.14` (untyped)<br>`const (A=1; B=2)` (grouped)                               |
| **Functions**      | `function add(a, b) { ... }`                   | `func add(a int, b int) int { ... }`<br>Multiple returns: `(int, error)`                  |
| **Data Types**     | Dynamic typing                                 | Static typing:<br>`var s string = "text"`<br>`n := 3.14` (float64)                        |
| **Collections**    | `const arr = [1,2];`<br>`const obj = {key:1};` | `arr := []int{1,2}` (slice)<br>`m := map[string]int{"key":1}`<br>`type S struct{Key int}` |
| **Zero Values**    | `undefined`, `null`                            | `0`, `""`, `false`, `nil` (explicit defaults)                                             |
| **Error Handling** | `try/catch`                                    | `if err != nil { ... }`<br>`val, err := someFunc()`                                       |
| **Concurrency**    | `Promise`, `async/await`                       | `go func() { ... }` (goroutines)<br>`ch := make(chan int)`                                |
| **Memory**         | Automatic GC                                   | Manual control:<br>`buf := make([]byte, 0, 1024)` (pre-alloc)                             |
| **Build**          | `node script.js`                               | `go build` → single binary<br>No external runtime needed                                  |



### Code Examples

```js
// JavaScript
let name = "John";
let age = 30;
let scores = [90, 85, 95];
```

```go
// Go
name := "John"          // string
var age int = 30        // explicit type
scores := []int{90, 85, 95}  // slice
```


### Common Questions

1. What is `:=` in Go? → Short variable declaration (creates and assigns value at once).
2. Can you use `let` in Go? → No, use `var` or `:=` instead.
3. Can you reassign a variable in Go? → Yes, but you can't redeclare the same variable name.
4. Can `:=` be used to reassign new value to a variable? → Yes, but you can't redeclare the same variable name.
5. Do I need to specify types in Go? → No, but Go is statically typed. Use `var x int = 10` or `x := 10`.
6. What is hoisting? → In JavaScript, `var` declarations are moved to the top of the scope before code execution. Go does not have hoisting, so variables must be declared before use.
7. What is `*` in Go? → It is a pointer. It is used to store the address of a variable.
   1. When should I use it? → When you want to pass a variable by reference. (Need more explanation)



---



## ⚙️ Functions

| Feature         | JavaScript                   | Go                                   |
| --------------- | ---------------------------- | ------------------------------------ |
| Basic Function  | `function add(a, b) { ... }` | `func add(a int, b int) int { ... }` |
| Return Values   | Single value                 | Multiple values: `return val, err`   |
| Anonymous Func  | `() => {}`                   | `func() { ... }`                     |
| Closure Support | ✅                            | ✅                                    |


### Code Examples

```js
// JavaScript
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
```

```go
// Go
func sum(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num
    }
    return total
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a/b, nil
}
```

### Common Questions

1. Can functions return multiple values? → Yes, `return val1, val2`.
2. How do I handle optional parameters? → Use variadic functions: `func sum(nums ...int) int`.
3. Can we pass an object-like structure to a function like JS? → Use structs in Go.



---



## 🛠 Data Structures

### Arrays/Slices vs JS Arrays

| Operation | JavaScript             | Go                         |
| --------- | ---------------------- | -------------------------- |
| Create    | `const arr = [1,2,3];` | `slice := []int{1,2,3}`    |
| Append    | `arr.push(4)`          | `slice = append(slice, 4)` |
| Length    | `arr.length`           | `len(slice)`               |
| Capacity  | Dynamic                | `cap(slice)`               |

#### Code Examples

```js
// JavaScript
const numbers = [1, 2, 3];
numbers.push(4);
```

```go
// Go
numbers := []int{1, 2, 3}
numbers = append(numbers, 4)

// Pre-allocate capacity
buffer := make([]int, 0, 10)  // length 0, capacity 10 - A slice with a pre-allocated capacity
```

#### Key Differences

| Aspect                | JavaScript                  | Go                                |
| --------------------- | --------------------------- | --------------------------------- |
| **Memory Management** | Automatic                   | Manual control                    |
| **Array Growth**      | `push()` handles everything | `append()` may need reallocations |
| **Performance**       | Optimised for convenience   | Optimised for control             |
| **Best Practice**     | Just use `push()`           | Pre-allocate when size is known   |

#### (WIP) Practical Example: Collecting 1M Numbers

##### JavaScript (Automatic)
```js
const numbers = [];
for (let i = 0; i < 1000000; i++) {
    numbers.push(i); // Engine handles everything
}
```

##### Go (Manual Control)
```go
// Best Practice: Pre-allocate when size is known
numbers := make([]int, 0, 1000000) // Single allocation
for i := 0; i < 1000000; i++ {
    numbers = append(numbers, i) // No reallocations
}
```

#### When to Pre-allocate in Go
1. **Known Size** - When you know the maximum elements
2. **Performance Critical** - High-frequency operations
3. **Large Data** - Processing big datasets
4. **Memory Efficiency** - Constrained environments

#### When Not to Pre-allocate
1. **Small Data** - Few elements, minimal impact
2. **Unknown Size** - Can't predict capacity
3. **Prototyping** - Focus on functionality first

#### Real-world Pattern
```go
// Typical Go approach
func processItems(items []Item) {
    // Pre-allocate result slice
    results := make([]Result, 0, len(items))

    for _, item := range items {
        result := process(item)
        results = append(results, result)
    }

    return results
}
```

#### Key Takeaways
1. **JavaScript** - Just use `push()`, engine handles memory
2. **Go** - Pre-allocate with `make()` when performance matters
3. **Trade-off** - Go gives control, JavaScript offers simplicity
4. **Best Practice** - In Go, pre-allocate for known sizes, otherwise let `append` handle it

#### Common Questions
1. What is the difference between arrays and slices? → Arrays have fixed sizes; slices are dynamic.
2. How do I initialize an empty slice? → `var arr []int` or `arr := make([]int, 0)`.



---

### Objects vs Structs

| Feature      | JavaScript              | Go                            |
| ------------ | ----------------------- | ----------------------------- |
| Definition   | `const obj = { ... };`  | `type Struct struct { ... }`  |
| Methods      | `obj.method = () => {}` | `func (s Struct) Method() {}` |
| Immutability | `Object.freeze()`       | Unexported fields             |

#### Code Examples

```js
// JavaScript
const user = {
    id: 1,
    name: "John",
    greet() {
        console.log(`Hello ${this.name}`);
    }
};
```

```go
// Go
type User struct {
    ID   int
    Name string
}

func (u User) Greet() {
    fmt.Printf("Hello %s", u.Name)
}

john := User{ID: 1, Name: "John"}
john.Greet()
```

### JS Maps vs Go Maps

| Feature         | JavaScript                 | Go                           |
| --------------- | -------------------------- | ---------------------------- |
| Create a Map    | `const myMap = new Map();` | `myMap := make(map[int]int)` |
| Set a Value     | `myMap.set(1, 'a');`       | `myMap[1] = "a"`             |
| Get a Value     | `myMap.get(1)`             | `val := myMap[1]`            |
| Check Existence | `myMap.has(1)`             | `val, exists := myMap[1]`    |

```go
// Instead of JS objects
type User struct {
    ID        int    `json:"id"`
    Name      string `json:"name"`
    Age       int    `json:"age"`
    CreatedAt time.Time
}

// Creating instances
user := User{
    ID:   1,
    Name: "John",
    Age:  30,
}
```

#### Common Questions
1. How do I check if a key exists in Go? → `val, exists := myMap[key]` (returns value & boolean in `_, _` format).
2. Does Go have an equivalent of JavaScript objects? → Use structs instead of maps for structured data.



---



## 🚨 Error Handling (WIP)

| Pattern        | JavaScript                     | Go                               |
| -------------- | ------------------------------ | -------------------------------- |
| Basic Handling | `try { ... } catch(err) {}`    | `if err != nil { return err }`   |
| Error Creation | `throw new Error("error ...")` | `return errors.New("error ...")` |
| Custom Errors  | `class CustomError`            | `type CustomError struct{...}`   |

### Code Examples
```js
// JavaScript
try {
    riskyOperation();
} catch (err) {
    console.error(err);
}
```
```go
// Go
func main() {
    err := riskyOperation()
    if err != nil {
        log.Fatal(err)
    }
}

// Custom error
type TimeoutError struct {
    Operation string
    Duration  time.Duration
}

func (e *TimeoutError) Error() string {
    return fmt.Sprintf("%s timed out after %v", e.Operation, e.Duration)
}
```

### Common Questions
1. Does Go have exceptions? → No, Go uses `if err != nil`.
   - How to handle errors like a pro? Is there a cleaner way to handle errors?
2. How do I create a custom error? → `errors.New("message")`.



---



## 🔄 Concurrency Patterns (WIP)

| Concept         | JavaScript     | Go                     |
| --------------- | -------------- | ---------------------- |
| Async Operation | `async/await`  | Goroutines             |
| Communication   | Promises       | Channels               |
| Parallelism     | Worker Threads | Goroutines + CPU Cores |

### Code Examples

```js
// JavaScript
async function fetchData() {
    const res = await fetch(url);
    return res.json();
}
```

```go
// Go
func fetchData(url string, ch chan<- Result) {
    res, err := http.Get(url)
    if err != nil {
        ch <- Result{Error: err}
        return
    }
    ch <- parseResponse(res)
}

func main() {
    ch := make(chan Result)
    go fetchData("https://api.example.com", ch)
    result := <-ch
}
```


---



## 🏆 Best Practices (WIP)
```go
// 1. Error Wrapping
func processFile(path string) error {
    f, err := os.Open(path)
    if err != nil {
        return fmt.Errorf("processFile: %w", err)
    }
    defer f.Close()
    // ... file processing ...
}

// 2. Interface Design
type Writer interface {
    Write([]byte) (int, error)
}

// 3. Memory Management
func processLargeData() {
    data := make([]byte, 0, 1e6)  // Pre-allocate
    // ... process data ...
}
```



---



## 📚 Python vs Go: Choosing the Right Tool
| Criteria                        | Python 🐍                                                              | Go 🦫                                                               |
| ------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Code Readability                | ✅ Super concise, easy to read                                         | ❌ More verbose (need structs, types)                               |
| Library Support                 | ✅ Tons of built-in functions (heapq, collections, bisect)             | ❌ Need to manually implement data structures like heaps, sets      |
| Typing                          | ✅ Dynamic (faster coding)                                             | ❌ Static (safer but more rigid)                                    |
| Execution Speed                 | ❌ Slower for large inputs (interpreted)                               | ✅ Faster (compiled, better memory efficiency)                      |
| Memory Usage                    | ❌ Higher (Garbage Collected, dynamic objects)                         | ✅ Lower (Manual memory control, efficient types)                   |
| Concurrency                     | ❌ Python's GIL limits true parallel execution                         | ✅ Go routines are lightweight and great for concurrency            |
| Industry Use in SWE             | ✅ Used in ML, Web Dev, and Scripting (most interviews support Python) | ✅ Used in backend, cloud, and infra (great for system-heavy roles) |
| LeetCode Community & Discussion | ✅ More Python solutions, easier to find help                          | ❌ Fewer Go solutions, harder to debug                              |



---



## 🚀 LeetCode Roadmap for Go
### Phase 1: Learning Go Basics (1-2 Weeks)
> Goal: Get comfortable with Go syntax and basic concepts.

- ✅ Variables, Constants, and Types (`:=`, `var`, `const`)
- ✅ Functions (`func`, multiple return values)
- ✅ Data Structures (`map`, `slice`, `struct`)
- ✅ Pointers (`*`, `&`)
- ✅ Loops (`for`, `range`)
- ✅ Error Handling (`if err != nil`)

### Phase 2: Easy LeetCode Questions (2-3 Weeks)
> Goal: Manage to solve easy questions in Go without much help.

- ✅ Arrays & Strings
- ✅ HashMaps & Sets
- ✅ Linked Lists

### Phase 3: Medium LeetCode Questions (3-5 Weeks)
> Goal: Manage to solve medium questions in Go without much help.

- ✅ Sorting & Searching
- ✅ Recursion & Backtracking
- ✅ Graphs & Trees

### Phase 4: Hard LeetCode Questions (Ongoing)
> Goal: Manage to solve hard questions in Go without much help.

- ✅ Graphs & Trees

### Phase 5: Advanced Go Concepts
> Goal: Get comfortable with advanced Go concepts.

- ✅ Goroutines & Concurrency
- ✅ Channels & Select Statements
- ✅ Writing Go Unit Tests (testing package)



---



## 🧩 LeetCode Practices

### [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)

**Key Insight**

Binary search implementation where `left` pointer naturally converges to insertion point when target not found.

**Go Implementation**

```go
func searchInsert(nums []int, target int) int {
    left, right := 0, len(nums)-1

    for left <= right {
        mid := left + (right-left)/2 // Prevent overflow
        switch {
        case nums[mid] == target:
            return mid
        case nums[mid] < target:
            left = mid + 1
        default:
            right = mid - 1
        }
    }
    return left // Insert position when not found
}
```

**Go-Specific Learnings**

1. **Loop Structure**
   `for left <= right` replaces JS `while` loop
2. **Mid Calculation**
   `left + (right-left)/2` prevents integer overflow
3. **Return Value**
   `left` always points to insertion index post-loop

**Edge Cases**

- Empty array → returns 0
- Target smaller than all elements → 0
- Target larger than all elements → len(nums)

**Complexity**

- Time: $O(log n)$
- Space: $O(1)$

**Why This Works**

- Binary search reduces problem space by half each iteration
- Final `left` position reflects where target would maintain sorted order



### [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/)

**Key Insight**

Pre-allocate slices and manually initialize endpoints since Go arrays lack built-in fill methods.

**Go Implementation**
```go
func generate(numRows int) [][]int {
    res := make([][]int, numRows) // Outer slice
    for i := range res {
        res[i] = make([]int, i+1) // Inner slice
        res[i][0], res[i][i] = 1, 1 // Endpoints
        for j := 1; j < i; j++ {
            res[i][j] = res[i-1][j-1] + res[i-1][j] // Sum parents
        }
    }
    return res
}
```

**Go-Specific Learnings**

1. **Slice Initialisation**
   - `make([]int, n)` creates zero-initialised slices
   - Must manually set first/last elements to 1
2. **Nested Slices**
   `make([][]int, rows)` → Each inner slice needs separate allocation
3. **Index Boundaries**
   `j` runs from `1` to `i-1` to avoid overwriting endpoints

**Memory Management**

| Approach     | Go                         | JavaScript               |
| ------------ | -------------------------- | ------------------------ |
| **Creation** | `make([]int, 0, capacity)` | `new Array(n).fill(0)`   |
| **Fill**     | Manual initialisation      | Built-in `fill()` method |
| **Matrix**   | Nested `make()` calls      | Array of arrays          |

Example for `make([]int, 0, capacity)`:
```go
// Without pre-allocation
var slow []int          // Length 0, Capacity 0
slow = append(slow, 1) // New allocation needed

// With pre-allocation
fast := make([]int, 0, 1000)
for i := 0; i < 1000; i++ {
    fast = append(fast, i) // No reallocations
}
```

**Edge Cases**

- `numRows = 0` → Return empty slice
- `numRows = 1` → `[[1]]`

**Complexity**

- Time: $O(n²)$ - Each element computed once
- Space: $O(n²)$ - Stores entire triangle

**Why This Works**

- Pre-allocation avoids slice growth overhead
- Mathematical properties of Pascal's Triangle enable efficient computation



### [2364. Count Number of Bad Pairs](https://leetcode.com/problems/count-number-of-bad-pairs/)

**Key Insight**

Transform `j - i != nums[j] - nums[i]` → `i - nums[i] != j - nums[j]`. Track `i - nums[i]` counts using map.

**Go Implementation**
```go
func countBadPairs(nums []int) int64 {
    total := int64(len(nums)*(len(nums)-1)/2)
    good := int64(0)
    cache := make(map[int]int) // Key: i - nums[i]

    for i, num := range nums {
        key := i - num
        good += int64(cache[key]) // Count existing matches
        cache[key]++ // Update after counting
    }

    return total - good
}
```

**Go-Specific Learnings**

1. **Map Initialisation**
   `cache := make(map[int]int)`
   - Zero-value initialised (no `nil` issues)
   - Auto-expands as needed

2. **Unused Variables**
   Go compiler errors if:
   ```go
   for i, num := range nums { // Must use both i and num
       // If not, use _: for _, num := range nums
   }
   ```

3. **Efficient Counting**
   - `cache[key]` returns 0 if missing (no panic)
   - `cache[key]++` handles insertion/update

**Complexity**

- Time: $O(n)$ - Single pass with map lookups
- Space: $O(n)$ - Worst-case unique keys

**Why This Works**

- Each `key` collision represents a good pair
- Total pairs = $n * (n-1)/2$
- Bad pairs = Total - Good



---



### [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)

**Key Insight**

Track last seen indices using a hashmap to check for duplicates within `k` distance in $O(n)$ time.

**Go Implementation**
```go
func containsNearbyDuplicate(nums []int, k int) bool {
	// N = 6
	// k = 2
	// [0,1,2,3,4,5]
	// [1,2,3,1,2,3]
	// e.g. 3
	// => 3 - 2 = 1

	numToIndexMap := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		if existedIndex, exists := numToIndexMap[nums[i]]; exists {

			// if existedIndex >= (i-k) || (i+k) <= existedIndex {
			if (i - existedIndex) <= k {
				return true
			}
		}

		numToIndexMap[nums[i]] = i
	}

	return false
}
```

**Go-Specific Learnings**

1. **Map Initialisation**
   `make(map[int]int)` creates an empty hashmap that auto-expands

2. **Index Management**
   - Store current index on each iteration
   - Check `i-j` (not absolute value since `i > j`)

3. **Efficiency**
   - Single pass $O(n)$ time
   - Worst-case $O(n)$ space for all unique elements

**Edge Cases**

- `k=0` → Always false (indices must differ)
- All elements unique → false
- Duplicates exactly `k` apart → true

**Complexity**

- Time: $O(n)$
- Space: $O(n)$



---



### [228. Summary Ranges](https://leetcode.com/problems/summary-ranges/)

**Key Insight**

Track range starts and detect gaps in a single pass, leveraging Go's slice efficiency for $O(n)$ time.

**Go Implementation**
```go
func summaryRanges(nums []int) []string {
	N := len(nums)
	ranges := []string{}

	if N == 0 {
		return ranges
	}

	startIndex := 0
	for i := 1; i < N; i++ {
		if nums[i-1] != (nums[i] - 1) {
			var tempStr string

			if startIndex == i-1 {
				tempStr = fmt.Sprintf("%d", nums[startIndex])
			} else {
				tempStr = fmt.Sprintf("%d->%d", nums[startIndex], nums[i-1])
			}
			ranges = append(ranges, tempStr)
			startIndex = i
		}
	}

	var tempStr string
	if startIndex == (N - 1) {
		tempStr = fmt.Sprintf("%d", nums[startIndex])
	} else {
		tempStr = fmt.Sprintf("%d->%d", nums[startIndex], nums[N-1])
	}
	ranges = append(ranges, tempStr)

	return ranges
}
```

**Go-Specific Learnings**

1. **Slice Management**
   - Pre-allocate with `var ranges []string`
   - Use `append` for dynamic growth

2. **Helper Functions**
   Extract formatting logic for cleaner code

3. **Edge Cases**
   - Empty input → return empty slice
   - Single element → `["5"]`

**Complexity**

- Time: $O(n)$ - Single pass through array
- Space: $O(n)$ - Worst case stores n/2 ranges

**Why This Works**

- Detects non-consecutive numbers (`nums[i] != nums[i-1]+1`)
- Builds ranges incrementally
- Handles final range outside loop



---



## 🚧 WIP ...
