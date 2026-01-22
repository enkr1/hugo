---
title: "Python Notebook"
date: 2023-12-13 14:37:20
tags:
  - "programming"
categories:
  - ["Software Engineering", "Programming Languages", "Python"]
  - ["Notebooks"]
subtitle: "Mastering Python: From Basics to Advanced Techniques"
description: "Embark on a journey through the Python programming language, exploring its fundamental concepts, advanced features, and practical applications. This comprehensive guide is designed for both beginners and experienced developers looking to deepen their understanding of Python and enhance their coding skills. Discover the versatility and power of one of the most popular programming languages in the world today."
keywords:
  - "Python programming"
  - "Python tutorials"
  - "Advanced Python techniques"
  - "Python for beginners"
  - "Practical Python applications"
---



## Something i found interesting from learning Python
### Mutable!
In Python, lists are mutable, and when you pass them as arguments, any change inside the function reflects outside.



### Validation
```py
char.isdigit() # bool
```

### set
```py3
a = set([1, 2, 3])
b = set([2, 3, 4])

a - b     # ➜ {1}
a | b     # ➜ {1, 2, 3, 4}
a & b     # ➜ {2, 3}
a ^ b     # ➜ {1, 4}
```


### Set Operations

| Operation            | Method Name                       | Operator       |
| -------------------- | --------------------------------- | -------------- |
| Difference           | `set1.difference(set2)`           | `set1 - set2`  |
| Union                | `set1.union(set2)`                | `set1 \| set2` |
| Intersection         | `set1.intersection(set2)`         | `set1 & set2`  |
| Symmetric Difference | `set1.symmetric_difference(set2)` | `set1 ^ set2`  |

- ✅ Cleaner
- ✅ Faster to type
- ✅ Interviewer-friendly (they love when you know this)


### `sorted()` vs `.sort()` — Memory Tricks

**Problem:** Always forgetting which one returns a new list vs modifies in-place!

**Solution 1: "ED = nEw Data" Mnemonic**
```py
sorted(nums)    # sort-ED → has "ED" → returns nEw Data (new list)
nums.sort()     # no "ED" → modifies in-place, returns None
```

**Solution 2: Function vs Method Pattern**
```py
sorted(x)  # Sounds like a FUNCTION → creates NEW thing (like print(), len())
x.sort()   # Sounds like a METHOD → modifies EXISTING thing (like .append(), .pop())
```

**When to use which:**
- **Keep original?** → Use `sorted()` to get a new sorted list
- **Save memory?** → Use `.sort()` to sort in-place (no extra list created)

```py
# Example
nums = [3, 1, 4, 1, 5]

new_list = sorted(nums)    # nums unchanged, new_list = [1, 1, 3, 4, 5]
nums.sort()                # nums is now [1, 1, 3, 4, 5], returns None

# Common mistake:
result = nums.sort()       # ❌ result is None, not the sorted list!
```

**Quick test:** Which one would you use to keep the original list unchanged? → `sorted()` ✅


### Tuple Unpacking with `*` — The "Explode" Operator

**Concept:** Think of `*` as "exploding" a tuple/list — it spreads elements out.

```py
# Without unpacking (nested)
rank = 1
country_data = ('CountryA', 2, 3, 4)
output = (rank, country_data)
print(output)  # (1, ('CountryA', 2, 3, 4)) ← nested!

# With unpacking (flattened)
output = (rank, *country_data)
print(output)  # (1, 'CountryA', 2, 3, 4) ← flat! 💥
```

**Use cases:**
```py
# 1. Flattening tuples
nums = (1, 2, 3)
result = (0, *nums)      # (0, 1, 2, 3)

# 2. Combining lists
a = [1, 2]
b = [3, 4]
combined = [*a, *b]      # [1, 2, 3, 4]

# 3. Function arguments
def my_func(a, b, c):
    return a + b + c

args = (1, 2, 3)
my_func(*args)           # Same as my_func(1, 2, 3)
```

**Memory trick:** `*` = bomb emoji 💣 → explodes the container!


### extended slicing
```py
# extended slicing
# [start:stop:step]
# start: inclusive
# stop: exclusive
# step: optional
# default: start = 0, stop = len(list), step = 1
my_list = [10, 20, 30, 40, 50]
reversed_list = my_list[::-1]
print(reversed_list)

my_string = "hello"
reversed_string = my_string[::-1]
print(reversed_string)

# output
# [50, 40, 30, 20, 10]
# olleh
```

### strip()
```py
text = "   example string with spaces   \n"
trimmed_text = text.strip()
print(f"Original: '{text}'")
print(f"Trimmed:  '{trimmed_text}'")

# Output:
# Original: '   example string with spaces
# '
# Trimmed:  'example string with spaces'
```

## 🗺️ Roadmap Overview

This roadmap is structured to build my proficiency in Python and strengthen my understanding of fundamental data structures and algorithms. It is divided into several phases, each focusing on specific topics and associated problems.

### Phase 1: Python Fundamentals

Before diving into problem-solving, ensure i'm comfortable with Python's syntax and core concepts:

- **Data Types and Structures:** Lists, Tuples, Dictionaries, Sets
- **Control Flow:** Loops, Conditional Statements
- **Functions and Modules:** Defining functions, Importing modules
- **List Comprehensions and Lambda Functions**

*Resources:*

- [Python Official Documentation](https://docs.python.org/3/tutorial/index.html)
- [LeetCode's Explore Python Section](https://leetcode.com/explore/learn/card/python/)

### Phase 2: Arrays and Strings

These are foundational topics that frequently appear in interviews.

- **Two Sum:** [LeetCode Problem #1](https://leetcode.com/problems/two-sum/)
- **Best Time to Buy and Sell Stock:** [LeetCode Problem #121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- **Valid Anagram:** [LeetCode Problem #242](https://leetcode.com/problems/valid-anagram/)
- **Product of Array Except Self:** [LeetCode Problem #238](https://leetcode.com/problems/product-of-array-except-self/)
- **Longest Substring Without Repeating Characters:** [LeetCode Problem #3](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

### Phase 3: Two Pointers and Sliding Window

Techniques that optimize traversal of arrays and linked lists.

- **Valid Palindrome:** [LeetCode Problem #125](https://leetcode.com/problems/valid-palindrome/)
- **Container With Most Water:** [LeetCode Problem #11](https://leetcode.com/problems/container-with-most-water/)
- **3Sum:** [LeetCode Problem #15](https://leetcode.com/problems/3sum/)
- **Minimum Size Subarray Sum:** [LeetCode Problem #209](https://leetcode.com/problems/minimum-size-subarray-sum/)
- **Longest Repeating Character Replacement:** [LeetCode Problem #424](https://leetcode.com/problems/longest-repeating-character-replacement/)

### Phase 4: Hashing and Hash Maps

Efficient data retrieval and storage techniques.

- **Two Sum:** [LeetCode Problem #1](https://leetcode.com/problems/two-sum/)
- **Group Anagrams:** [LeetCode Problem #49](https://leetcode.com/problems/group-anagrams/)
- **Top K Frequent Elements:** [LeetCode Problem #347](https://leetcode.com/problems/top-k-frequent-elements/)
- **Happy Number:** [LeetCode Problem #202](https://leetcode.com/problems/happy-number/)
- **Longest Consecutive Sequence:** [LeetCode Problem #128](https://leetcode.com/problems/longest-consecutive-sequence/)

### Phase 5: Linked Lists

Understanding linked lists is crucial for many algorithmic problems.

- **Reverse Linked List:** [LeetCode Problem #206](https://leetcode.com/problems/reverse-linked-list/)
- **Merge Two Sorted Lists:** [LeetCode Problem #21](https://leetcode.com/problems/merge-two-sorted-lists/)
- **Linked List Cycle:** [LeetCode Problem #141](https://leetcode.com/problems/linked-list-cycle/)
- **Remove Nth Node From End of List:** [LeetCode Problem #19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- **Reorder List:** [LeetCode Problem #143](https://leetcode.com/problems/reorder-list/)

### Phase 6: Trees and Graphs

Explore hierarchical data structures and their traversal algorithms.

- **Maximum Depth of Binary Tree:** [LeetCode Problem #104](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- **Same Tree:** [LeetCode Problem #100](https://leetcode.com/problems/same-tree/)
- **Invert Binary Tree:** [LeetCode Problem #226](https://leetcode.com/problems/invert-binary-tree/)
- **Binary Tree Level Order Traversal:** [LeetCode Problem #102](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- **Number of Islands:** [LeetCode Problem #200](https://leetcode.com/problems/number-of-islands/)

### Phase 7: Dynamic Programming

Techniques for solving complex problems by breaking them down into simpler subproblems.

- **Climbing Stairs:** [LeetCode Problem #70](https://leetcode.com/problems/climbing-stairs/)
- **Coin Change:** [LeetCode Problem #322](https://leetcode.com/problems/coin-change/)
- **Longest Increasing Subsequence:** [LeetCode Problem #300](https://leetcode.com/problems/longest-increasing-subsequence/)
- **House Robber:** [LeetCode Problem #198](https://leetcode.com/problems/house-robber/)
- **Unique Paths:** [LeetCode Problem #62](https://leetcode.com/problems/unique-paths/)

### Phase 8: Advanced Topics

Delve into more complex data structures and algorithms.

- **Implement Trie (Prefix Tree):** [LeetCode Problem #208](https://leetcode.com/problems/implement-trie-prefix-tree/)
- **Design Add and Search Words Data Structure:** [LeetCode Problem #211](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
- **Word Search II:** [LeetCode Problem #212](https://leetcode.com/problems/word-search-ii/)
- **Merge Intervals:** [LeetCode Problem #56](https://leetcode.com/problems/merge-intervals/)
- **Insert Interval:** [LeetCode Problem #57](https://leetcode.com/problems/insert-interval/)

## Additional Resources

- **LeetCode 75 Study Plan:** A curated list of 75 essential problems for interview preparation. citeturn0search2
- **Top Interview 150 Study Plan:** A comprehensive set of 150 classic interview questions. citeturn0search1
- **NeetCode's Blind 75:** A popular list of algorithm practice problems with video



---



## 🧩 LeetCode Practices

### [997. Find the Town Judge](https://leetcode.com/problems/find-the-town-judge/)

**Key Insight**

Identify the town judge by tracking trust relationships: the judge is trusted by everyone else but trusts no one.

**Python Implementation**

```python
class Solution(object):
    def findJudge(self, n, trust):
        """
        :type n: int
        :type trust: List[List[int]]
        :rtype: int
        """

        # trust relationships are directed edges

        # loop by n
        # find from list
        # if index is not found in list
        # return index
        # else return -1

        nb_trusts = [0] * (n+1)
        nb_trusted_by = [0] * (n+1)

        for a, b in trust:
            nb_trusts[a] += 1
            nb_trusted_by[b] += 1

        print("nb_trusts", nb_trusts)
        print("nb_trusted_by", nb_trusted_by)


        for i in range(1, n+1):
            if nb_trusts[i] == 0 and nb_trusted_by[i] == n-1: # not trusting anyone & trusted by everyone
                return i

        return -1
```

**Python-Specific Learnings**

1. **List Initialisation**
   Use a list to track trust scores for each person.
2. **Loop Structure**
   Iterate over trust pairs to adjust scores.
3. **Return Value**
   Check for the person with a trust score of `n-1`.

**Edge Cases**

- Single person with no trust relationships → returns 1
- No person satisfies the judge conditions → returns -1

**Complexity**

- Time: $O(T + n)$, where $T$ is the length of the trust list
- Space: $O(n)$

**Why This Works**

- The judge has a trust score of `n-1` because= they are trusted by everyone else and trust no one.

---

### [3432. Count Partitions with Even Sum Difference](https://leetcode.com/problems/count-partitions-with-even-sum-difference/description/)

**Problem**: Count partitions where the difference between the sum of left and right partitions is even.

**Learning Journey**

1. Initial approach with itertools:
```py
# Using accumulate for prefix sums
prefix_sum_from_left = list(itertools.accumulate(nums))
prefix_sum_from_right = list(itertools.accumulate(reversed(nums)))
prefix_sum_from_right.reverse()
```

**Key Insight**: While clean, straightforward, this creates 2 extra arrays (O(n) space) and reverses twice

First naive solution:
```py
class Solution:
    def countPartitions(self, nums: List[int]) -> int:


        # prefix_sum_from_left = []
        prefix_sum_from_left = list(itertools.accumulate(nums))
        prefix_sum_from_right = list(itertools.accumulate(reversed(nums)))
        prefix_sum_from_right.reverse()

        # print("prefix_sum_from_left", prefix_sum_from_left)
        # print("prefix_sum_from_right", prefix_sum_from_right)

        count = 0
        for i in range(1, len(nums)):
            print("i", i)
            if (prefix_sum_from_left[i-1] - prefix_sum_from_right[i]) % 2 == 0:
                count += 1

        return count
```

2. Optimised approach:
```py
total_sum = sum(nums)  # Single O(n) operation
for num in nums[:-1]:  # O(n) iteration
    prefix_sum += num
    suffix_sum = total_sum - prefix_sum  # O(1) calculation
```

Optimised solution:
```py
class Solution:
    def countPartitions(self, nums: List[int]) -> int:
        # Calculate total sum to avoid computing it multiple times.
        total_sum = sum(nums)
        print("total_sum", total_sum)

        prefix_sum = 0
        count = 0

        # We only need to check up to n-1 for partitioning.
        # for i in range(0, len(nums)-1):
        for i in nums[:-1]:
            prefix_sum += nums[i]
            current_oposite = total_sum - prefix_sum
            # print("prefix_sum", prefix_sum)
            # print("current_oposite", current_oposite)

            # Check if the difference between left and right partition sums is even.
            if ((prefix_sum - current_oposite) % 2) == 0:
                count += 1

        return count
```

**Optimisation**: Reduced space complexity from $O(n)$ → $O(1)$ by calculating suffix on the fly

**Complexity Deep Dive**

| Approach  | Time | Space | Real-World Impact                  |
| --------- | ---- | ----- | ---------------------------------- |
| Initial   | O(n) | O(n)  | 2x memory usage for large datasets |
| Optimised | O(n) | O(1)  | Handles 1M+ elements efficiently   |

**Why This Matters in Interviews**

- Shows progression from "make it work" → "make it efficient"
- Demonstrates understanding of space-time tradeoffs
- Highlights ability to optimize mathematical operations

**Common Follow-Up Questions**

1. "How would you handle negative numbers in the array?"
   - Current solution works (sum properties hold), but test edge cases
2. "What if the array contains zeros?"
   - Valid partition points still work, need to verify with examples
3. "Can you solve this with constant space without calculating total sum first?"
   - Challenge: Requires different mathematical approach

**Related Interview Topics**
- Prefix sum variations (2D arrays, circular arrays)
- Space-time complexity tradeoff decisions
- Mathematical pattern recognition (even/odd properties)
- Edge case identification (empty arrays, single elements)

**Similar Problems**
- [Split Array with Equal Sum](https://leetcode.com/problems/split-array-with-equal-sum/)
- [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
- [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)



---


### [1848. Minimum Distance to the Target Element](https://leetcode.com/problems/minimum-distance-to-the-target-element/)

**Problem**: Find minimum absolute difference between indices containing target value and given start index.

```py
class Solution:
    def getMinDistance(self, nums: List[int], target: int, start: int) -> int:
        if nums[start] == target:
            return 0

        min_dist = float('inf')

        for i, num in enumerate(nums):
            if nums[i] == target:
                min_dist = min(min_dist, abs(i - start))

        return min_dist
```

**Key Learnings**:

1. `enumerate()`: Efficiently track both index and value during iteration
   - More Pythonic than `range(len(nums))`
   - Clearer intent when needing both index and value
2. `min()`: Built-in function for maintaining minimum value
   - More efficient than manual comparisons
   - Handles edge cases implicitly
3. `float('inf')`: Initialize with infinite value pattern
   - Common algorithm technique for minimization problems
   - Guarantees first valid value will replace it

**Complexity**:

- Time: $O(n)$ - Single pass through array
- Space: $O(1)$ - Constant extra space

---

### [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

**Problem**: Merge nums2 into nums1 in-place while maintaining sorted order.

**Key Insight**
Utilise 3-pointer technique starting from the end of both arrays to avoid overwriting nums1 values.

**Python Implementation**

```py
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """

        pointer_nums1 = m - 1
        pointer_nums2 = n - 1
        pointer_placement = m + n - 1

        while pointer_nums1 >= 0 and pointer_nums2 >= 0:
            if nums1[pointer_nums1] > nums2[pointer_nums2]:
                nums1[pointer_placement] = nums1[pointer_nums1]
                pointer_nums1 -= 1
            else:
                nums1[pointer_placement] = nums2[pointer_nums2]
                pointer_nums2 -= 1

            pointer_placement -= 1

        nums1[: pointer_nums2 + 1] = nums2[: pointer_nums2 + 1]
```

**Python-Specific Learnings**
1. **In-place Modification**
   Directly modifies nums1 without extra space
2. **Pointer Manipulation**
   Negative indices work naturally in Python for reverse traversal
3. **Slice Assignment**
   `nums1[:p2 + 1] = ...` efficiently copies remaining elements -> `nums1[: pointer_nums2 + 1] = nums2[: pointer_nums2 + 1]`

**Complexity**
- Time: $O(m + n)$ - Single pass through both arrays
- Space: $O(1)$ - No additional data structures used


---



...


---

### 🎯 to be added more ...

---




## LeetCode Grind Plan 🔥
1. learn the basics of python3 such as
   1. syntax
   2. data types
   3. builtin functions
   4.


### Python note
- Uses `snake_case`
- `PascalCase` for class names
- `""" ... """` to do multiple lines comments like `/* */` in js
- Use explicit `is` for `None` comparisons: `if x is None`
  ```py
  # 🚨 Dangerous (might give false positives)
  def process_data(data=[]):
      if not data:  # Could be None, empty list, 0, False, etc
          print("No data received")

  # ✅ Explicit check
  def process_data(data=None):
      if data is None:  # Only triggers for None
          data = []
      # process data...
  ```
- Prefer list comprehensions over loops where readable
  ```py
  # Traditional loop
  squares = []
  for num in range(10):
      if num % 2 == 0:
          squares.append(num ** 2)

  # List comprehension (same result)
  squares = [num ** 2 for num in range(10) if num % 2 == 0]

  # Nested example (still readable)
  matrix = [[1,2], [3,4], [5,6]]
  flattened = [num for row in matrix for num in row]
  ```


### Set
```py
# simply just
# Create a set
set = set()

# then you can directly use the existing array to a set like
list = [1,2,3]
set = set(list)
# then you can use the set to do some operations
print(set)
```

### Array


### Map
```py
# Create a dictionary

```










---

> below are outdated notes, to be refined later

## Variables
```py
print()
print("Hello", "World")
# "Hello World"
print("Hello", "World", sep="")
# "HelloWorld"
```


```py
type()
```

```py
// # this forces the output to be integer
```

### Type Conversion: The process of converting one data type to another data type is called type conversion.

In Python, we can perform two types of type conversion.
1. Implicit Type Conversion - Here, Python automatically converts one data type to another in order to avoid data loss.
   > e.g. 1 * 1.23 = 1.23 as there is no data loss
2. Explicit Type Conversion - Here, the user can convert the data type of a variable to the required data type by using the in-built functions int(), float(), str(), etc.
  > e.g. `"Hello " + str(123)`


## Data Structures
### List
```py
list = [0,1,2,3]
len(list)
# 4
min(list)
# 0
max(list)
# 3
```

#### first N items in list
```py
print(list[0:3]) # Exclusive 3 - incl:excl
# [0, 1, 2]
```

#### Last item
```py
print(list[-1])
```

#### Remove last and return
```py
list.pop()
# 3
print(list)
# [0,1,2]
```

#### Add to last
```py
list.append(4)
print(list)
# [0,1,2,4]
```

### Tuples
```py
storage = (32,64,128,256)
print(storage)
# (32, 64, 128, 256)
```

```py
print(storage[1])
# 64
```

*Tuples are immutable*

### Dictionary (Map)
```py
# creating a dictionary
attributes = {
    'Brand': 'Apple',
    'RAM (in GB)': 4,
    'Storage (in GB)': 128,
    'Price (in $)': 800
    }
print(attributes)
# {'Brand': 'Apple', 'RAM (in GB)': 4, 'Storage (in GB)': 128, 'Price (in $)': 800}
```

```py
type(attributes)
# dict
```

```py
# creating a dictionary for storing data.
products = {
    'Brand': brand_list,
    'RAM (in GB)': ram_list,
    'Storage (in GB)': storage_list,
    'Price (in $)': price_list
    }

print(products)
# {'Brand': ['Apple', 'Samsung', 'LG', 'Motorola'], 'RAM (in GB)': [4, 12, 8, 8], 'Storage (in GB)': [128, 128, 64, 128], 'Price (in $)': [900, 899, 600, 1000]}
```


```py
# keys of a dictionary
keys = products.keys()
print('The keys of the dictionary are :\n',keys)
# ['Brand', 'RAM (in GB)', 'Storage (in GB)', 'Price (in $)']
```
```py
# values of a dictionary
values = products.values()
print('The values of the dictionary are :\n', values)
# [['Apple', 'Samsung', 'LG', 'Motorola'], [4, 12, 8, 8], [128, 128, 64, 128], [900, 899, 600, 1000]]
```

#### update({key: value})
```py
dictionary={1: "USA", 2: "India", 3: "China"}
dictionary.update({3:"Japan"})
print(dictionary)
# {1: 'USA', 2: 'India', 3: 'Japan'}
```

#### pop(key)
```py
dictionary={1:"USA", 2:"India", 3:"China"}
dictionary.pop(2)
print(dictionary)
# {1: 'USA', 3: 'China'}
```


## Conditional Statements
... nth much
```py
price = 900
# define the budget price
budget = int(input('Enter your budget(in dollars): '))

# if-else statement
if price <= budget:
  print('Congrats! You can buy the Iphone')
else:
  print('Sorry! The mobile price is more than your budget')
```

## Looping Statements
```py
print(range(6))
# range(0, 6)
```

```py
print(list(range(6)))
# [0, 1, 2, 3, 4, 5]
```

```py
print(list(range(2,6)))
# [2, 3, 4, 5]

```
```py
print(list(range(6, 14, 2))) # Iterating by 2
# [6, 8, 10, 12]
```


## List Comprehensions

Example 1:
from:
```py
discounted_price_list=[]

for x in price_list:
  discounted_price = x - (x*(5/100))
  discounted_price_list.append(discounted_price)

print(discounted_price_list)
```
to:
```py
discounted_price_list = [x - (x*(5/100)) for x in price_list]
print(discounted_price_list)
```

Example 2:
from:
```py
within_budget = []

for x in discounted_price_list:
  if x <= budget:
    within_budget.append('Yes')
  else:
    within_budget.append('No')

print(within_budget)
```
to:
```py
# asking for customer's budget
budget = int(input('Enter your budget(in dollars): '))

# creating a list of Yes/No based on budget and discounted prices
within_budget = ['Yes' if x <= budget else 'No' for x in discounted_price_list]
print(within_budget)
```


## Functions
### lambda functions
```py
dis_price_lambda = lambda discount : 900 - ( 900 * (discount / 100) )
# call the function with discount = 10%
dis_price_lambda(10)
# 810.0
```
> Wow ...

```py
def say(message, times):
    print(message*times)
say("How are you", 2)
# How are youHow are you
```

```py
(lambda x: (x+2)*5/2)(4)
# 15.0
```
> Due to the division operation in the expression, which produces a floating-point result in Python 3. Use `//` instead, if you want to perform floor division.


## *args and **kwargs
from:
```py
def total_amount(price1, price2, price3, price4, price5):
    """
    This function takes the price of five phones ordered
    and returns the total order amount.
    """
    # computing the total order amount
    total = price1 + price2 + price3 + price4 + price5

    # return the total amount
    return total

print('Total order amount:', total_amount(700, 599, 650, 900, 820))
# Total order amount: 3669
```
to:
```py
def total_amount(*args): # can be renamed to *prices
    """
    This function takes the prices of phones ordered
    and returns the total order amount.
    """
    total = 0
    # computing the total order amount
    for arg in args:
        total += arg

    # return the total amount
    return total

print('Total order amount:', total_amount(700, 599, 650, 900, 820))
# Total order amount: 3669
print('Total order amount:', total_amount(700, 599, 650, 900, 820, 630, 520, 799, 999, 840))
# Total order amount: 7457
```
> like a general param in Elixir

```py
def customer_net_spend(*prices, discount=0.0, **kwargs):
    """
    This function takes the prices of phones ordered,
    the discount percentage, and any other cost additions/subtractions,
    and returns the customer's net spend on the order.
    """
    total = 0
    # computing the total order amount
    for price in prices:
        total += price

    total_discounted_price = total - discount*total

    net_spend = total_discounted_price - kwargs['cashback']

    # return the total amount
    return net_spend

additionals = {'cashback': 5}
print('Customer net spend (during last day of festive season):', customer_net_spend(700, 599, 650, discount=0.05, **additionals))
# Customer net spend (during last day of festive season): 1846.55
```
> kwargs is like a %{key: value} in Elixir

```py
def order_summary(*prices, **additionals):
    """
    This function takes the prices of phones ordered
    and any other cost additions/subtractions,
    and returns the total amount, net spend,
    and rewards points earned for the order.
    """
    total = 0
    # computing the total order amount
    for price in prices:
        total += price

    net_spend = total - additionals['discount']*total - additionals['cashback']

    if total >= 10000:
        reward_points = 300
    elif total >= 5000:
        reward_points = 200
    elif total >= 2000:
        reward_points = 100
    else:
        reward_points = 0

    # return the total amount
    return total, net_spend, reward_points # Is going to return as tuple

additionals = {'discount':0.05, 'cashback': 5}
ta, ns, rp = order_summary(700, 599, 750, **additionals)
print('Customer Order Summary:\n', '\nTotal Amount:', ta, '\nTotal Discounted Amount:', ns, '\nReward Points Earned:', rp)

# Customer Order Summary:
#
# Total Amount: 2049
# Total Discounted Amount: 1941.55
# Reward Points Earned: 100
```

### Invalid Syntax
```py
def my_function(a, b, **kwargs, *args):
    return a+b
my_function(5,6)
```
> because *args (for variable-length positional arguments) must be placed before **kwargs (for variable-length keyword arguments).

```py
def my_function(a, b, *args, **kwargs):
    print("a:", a)
    print("b:", b)
    print("args:", args)
    print("kwargs:", kwargs)

my_function(1, 2, 3, 4, 5, x=6, y=7)
# a: 1
# b: 2
# args: (3, 4, 5)
# kwargs: {'x': 6, 'y': 7}
```

```py
def fun(A, B=30):
    return A + B

# A is a positional argument and B is a keyword argument
```

---
## Some findings
```py
list_mul = ['2','2','2']
list_mul*2
```

---

## Comparison

| **Aspect**                                  | **Python**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | **JavaScript**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Syntax & Code Structure**                 | **Clean, minimal syntax:** Uses indentation and colons to define code blocks instead of curly braces, leading to cleaner and more readable code ([Why I moved from JavaScript to Python for LeetCode - DEV Community](https://dev.to/davinderpalrehal/why-i-moved-from-javascript-to-python-for-leetcode-3pm1#:~:text=of%20miss%20how%20less%20code,like%20in%20JavaScript%20and%20Python)). No semicolons are required and there is less boilerplate (e.g. no parentheses around if conditions) ([Why I moved from JavaScript to Python for LeetCode - DEV Community](https://dev.to/davinderpalrehal/why-i-moved-from-javascript-to-python-for-leetcode-3pm1#:~:text=As%20you%20can%20see%2C%20Python,the%20code%20more%20elegant%20and)). Python also offers syntactic sugar like list comprehensions, multiple assignment, and tuple unpacking that make code more concise and expressive ([Why I moved from JavaScript to Python for LeetCode - DEV Community](https://dev.to/davinderpalrehal/why-i-moved-from-javascript-to-python-for-leetcode-3pm1#:~:text=As%20you%20can%20see%2C%20Python,the%20code%20more%20elegant%20and)).                                                                                                                                                                                                                                                                                     | **C-style syntax:** Uses curly braces `{ }` to denote code blocks and typically uses semicolons to terminate statements (though semicolons are optional in modern JS) ([Why I moved from JavaScript to Python for LeetCode - DEV Community](https://dev.to/davinderpalrehal/why-i-moved-from-javascript-to-python-for-leetcode-3pm1#:~:text=of%20miss%20how%20less%20code,like%20in%20JavaScript%20and%20Python)). This results in a bit more verbose structure and punctuation compared to Python ([Why I moved from JavaScript to Python for LeetCode - DEV Community](https://dev.to/davinderpalrehal/why-i-moved-from-javascript-to-python-for-leetcode-3pm1#:~:text=As%20you%20can%20see%2C%20Python,the%20code%20more%20elegant%20and)). JavaScript’s syntax is flexible (e.g. arrow functions, object literals, destructuring) but generally requires more symbols, which can make simple logic appear slightly more cluttered than Python.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Pros (Coding Interviews)**                | **Readable and quick to write:** Python’s simple, English-like syntax lets you implement solutions quickly – it often feels like writing pseudocode ([Why JavaScript is actually a great LeetCode/Interview language - DEV Community](https://dev.to/braeden/why-javascript-is-actually-a-great-leetcode-interview-language-34g1#:~:text=On%20the%20other%20hand%2C%20people,is%20fast%20to%20iterate%20upon)) ([Which language is best for interviews?](https://www.designgurus.io/answers/detail/which-language-is-best-for-interviews#:~:text=Python%20is%20often%20considered%20the,that%20can%20simplify%20complex%20algorithms)). It has a rich set of built-in functions and data structures (lists, dictionaries, sets, etc.) that simplify common tasks without extra code ([Which language is best for interviews?](https://www.designgurus.io/answers/detail/which-language-is-best-for-interviews#:~:text=Python%20is%20often%20considered%20the,that%20can%20simplify%20complex%20algorithms)). Python is widely used on LeetCode and in interviews, so many interviewers are familiar with it, and there are plenty of solution resources available in Python.                                                                                                                                                                                                                                                  | **Versatile and fast:** JavaScript works for both frontend and backend (Node.js), so using it in interviews can be advantageous if you’re applying for web development roles ([Which language is best for interviews?](https://www.designgurus.io/answers/detail/which-language-is-best-for-interviews#:~:text=,languages%20like%20Python%20or%20C)). Its syntax is relatively simple (no explicit types) and far less verbose than Java or C++, which means you can still code and iterate quickly under time pressure. The V8 engine gives JavaScript very high execution speed, so performance is rarely a bottleneck for algorithmic problems ([Why JavaScript is actually a great LeetCode/Interview language - DEV Community](https://dev.to/braeden/why-javascript-is-actually-a-great-leetcode-interview-language-34g1#:~:text=Worry%20no%20longer%20about%20execution,js)). Additionally, JavaScript has handy built-in methods (like `Array.prototype.map`, `filter`, `reduce`) that can make code succinct and show off elegant problem-solving when used appropriately.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Cons (Coding Interviews)**                | **Performance and speed limits:** Python’s runtime speed is slower than some other languages, which can lead to timeouts on extremely large test cases if the solution isn’t optimal ([Which language is best for interviews?](https://www.designgurus.io/answers/detail/which-language-is-best-for-interviews#:~:text=,critical%20interviews)) ([Why JavaScript is actually a great LeetCode/Interview language - DEV Community](https://dev.to/braeden/why-javascript-is-actually-a-great-leetcode-interview-language-34g1#:~:text=Language%20specific%20time,larger%20test%20cases%20in%20Python)). It also has higher memory overhead for data structures (e.g. a list or dict may use more memory than a similar structure in C/C++ or JS) ([Node.js vs Python: Selecting the Ideal Backend Tech for 2024](https://movadex.com/blog/article/node-js-vs-python-selecting-the-ideal-backend-tech-for-2024#:~:text=1,intensive%20than%20their%20JavaScript%20counterparts)). Additionally, Python’s significant whitespace (indentation) means a simple indent mistake can cause a syntax error – this is easy to fix with practice, but it’s a gotcha for those not used to it.                                                                                                                                                                                                                                            | **Limited data structures & subtle quirks:** JavaScript has fewer native data structures for algorithms – for example, it lacks a built-in heap/priority queue, so you might need to implement one manually if needed ([Why JavaScript is actually a great LeetCode/Interview language - DEV Community](https://dev.to/braeden/why-javascript-is-actually-a-great-leetcode-interview-language-34g1#:~:text=A%20few%20downfalls%20or%20dislikes%3A)) ([Which language is best for interviews?](https://www.designgurus.io/answers/detail/which-language-is-best-for-interviews#:~:text=,languages%20like%20Python%20or%20C)). Some language quirks can also cause bugs: JavaScript’s loose typing and type coercion (e.g. `"5" + 2` vs `"5" - 2`) can lead to unexpected behavior if you’re not careful. And unlike Python, certain errors won’t stop execution (e.g. out-of-bounds array access just yields `undefined` instead of throwing an error), so logic bugs might not be immediately obvious. Historically, algorithm communities had fewer JS solutions (though this is improving), meaning slightly less community guidance for tricky problems compared to Python.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Code Readability & Conciseness**          | **Highly readable:** Python’s enforced indentation and uncluttered syntax make code easy to follow. It generally requires fewer lines to solve a problem than JavaScript, thanks to features like list comprehensions and the lack of extra symbols ([Why I moved from JavaScript to Python for LeetCode - DEV Community](https://dev.to/davinderpalrehal/why-i-moved-from-javascript-to-python-for-leetcode-3pm1#:~:text=As%20you%20can%20see%2C%20Python,the%20code%20more%20elegant%20and)). In practice, Python code is often considered more concise and closer to pseudocode, which helps others (including interviewers) understand your solution quickly ([Python Vs Javascript: What are the Differences? in 2025](https://www.sayonetech.com/blog/python-vs-javascript-what-are-differences/#:~:text=Python%27s%20syntax%20is%20generally%20more,for%20more%20complex%20programming%20constructs)).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **Fairly readable (with more syntax):** JavaScript code includes braces and semicolons, which add some visual noise. However, its syntax is familiar to many developers and is still relatively succinct compared to languages like Java. Modern ES6+ features (arrow functions, destructuring, etc.) have improved JavaScript’s conciseness, but Python’s syntax is typically shorter for equivalent logic ([Python Vs Javascript: What are the Differences? in 2025](https://www.sayonetech.com/blog/python-vs-javascript-what-are-differences/#:~:text=Python%27s%20syntax%20is%20generally%20more,for%20more%20complex%20programming%20constructs)). Clear formatting and naming in JS are important to approach Python’s level of readability.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Built-in Data Structures & Libraries**    | **“Batteries included”:** Python offers a wide range of built-in data structures – lists, dictionaries (hash maps), sets, tuples – each optimized for different use cases ([Why I moved from JavaScript to Python for LeetCode - DEV Community](https://dev.to/davinderpalrehal/why-i-moved-from-javascript-to-python-for-leetcode-3pm1#:~:text=A%20major%20difference%20between%20JavaScript,example%2C%20here%20is%20how%20to)). It also has modules like `collections` (providing deque, Counter, etc.) and `heapq` for heaps, which are extremely handy for interview problems involving queues, stacks, or priority queues. Many algorithms can be implemented using Python’s standard library (e.g. sorting with `sorted()`, binary search with `bisect`), reducing the amount of code you must write. This richness means Python often has a ready-made tool for common interview tasks ([Why I moved from JavaScript to Python for LeetCode - DEV Community](https://dev.to/davinderpalrehal/why-i-moved-from-javascript-to-python-for-leetcode-3pm1#:~:text=Another%20difference%20between%20JavaScript%20and,scipy%2C%20pandas%2C%20matplotlib%2C%20and%20sklearn)) ([Why I moved from JavaScript to Python for LeetCode - DEV Community](https://dev.to/davinderpalrehal/why-i-moved-from-javascript-to-python-for-leetcode-3pm1#:~:text=packages%20that%20are%20useful%20for,how%20to%20calculate%20the%20mean)). | **Basic structures only:** JavaScript historically had just arrays (for lists) and objects (for key-value maps) as built-ins ([Why I moved from JavaScript to Python for LeetCode - DEV Community](https://dev.to/davinderpalrehal/why-i-moved-from-javascript-to-python-for-leetcode-3pm1#:~:text=A%20major%20difference%20between%20JavaScript,example%2C%20here%20is%20how%20to)). ES6 added `Map` and `Set` classes for dictionaries and sets, but there is still no native deque or heap structure ([Why JavaScript is actually a great LeetCode/Interview language - DEV Community](https://dev.to/braeden/why-javascript-is-actually-a-great-leetcode-interview-language-34g1#:~:text=A%20few%20downfalls%20or%20dislikes%3A)). You can use arrays to simulate stacks/queues (with `push/pop` and `shift`), but operations like removing from the front of an array are not as efficient as Python’s `collections.deque` ([Why I moved from JavaScript to Python for LeetCode - DEV Community](https://dev.to/davinderpalrehal/why-i-moved-from-javascript-to-python-for-leetcode-3pm1#:~:text=As%20you%20can%20see%2C%20Python,terms%20of%20time%20and%20space)). Similarly, to get a priority queue, you would have to use an array and sort it or implement a heap manually. JavaScript’s standard library has fewer algorithm-specific utilities, so interview solutions may require writing more helper code from scratch (libraries exist but usually aren’t available in coding test environments).                                                                                                                                                            |
| **Execution Speed & Memory Usage**          | **Slower execution, higher memory:** Python is generally slower at runtime because it’s interpreted (CPython has no JIT). For very large inputs or heavy computations, a Python solution might run close to the time limit – there are anecdotes of hitting timeouts in Python even with optimal algorithms ([Why JavaScript is actually a great LeetCode/Interview language - DEV Community](https://dev.to/braeden/why-javascript-is-actually-a-great-leetcode-interview-language-34g1#:~:text=Language%20specific%20time,larger%20test%20cases%20in%20Python)). In contrast, JavaScript’s JIT-compiled engine often runs the same algorithm faster. Python’s structures also tend to use more memory (each object has overhead), so a large list/dict can consume more memory than an equivalent structure in JS ([Node.js vs Python: Selecting the Ideal Backend Tech for 2024](https://movadex.com/blog/article/node-js-vs-python-selecting-the-ideal-backend-tech-for-2024#:~:text=1,intensive%20than%20their%20JavaScript%20counterparts)). The upside is that Python’s high-level operations (big integers, slicing, etc.) are handled for you (convenience at some cost). In most interview problems, if your algorithmic complexity is good, Python is fast enough, but it’s something to keep in mind for edge cases.                                                                                              | **Fast JIT execution, lower memory:** JavaScript executes very fast under modern engines – its JIT compilation and optimizations let it approach the speed of lower-level languages like Java/C++ ([Why JavaScript is actually a great LeetCode/Interview language - DEV Community](https://dev.to/braeden/why-javascript-is-actually-a-great-leetcode-interview-language-34g1#:~:text=Worry%20no%20longer%20about%20execution,js)). This means if you write an efficient algorithm in JS, you’re unlikely to hit performance issues on coding platforms. Memory usage for JavaScript’s data types is generally lower than Python’s for the same workload, since primitive types (numbers, booleans) are lightweight. Both Python and JS have garbage collection, so memory is managed for you, but JS’s overall memory footprint for a large data structure tends to be a bit smaller ([Node.js vs Python: Selecting the Ideal Backend Tech for 2024](https://movadex.com/blog/article/node-js-vs-python-selecting-the-ideal-backend-tech-for-2024#:~:text=1,intensive%20than%20their%20JavaScript%20counterparts)). In short, JavaScript provides better raw performance, which can be a confidence boost when handling big inputs in interviews.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Ecosystem & Job Market Relevance**        | **Versatile ecosystem:** Python has a massive ecosystem in areas like web backends (Django/Flask), data science, machine learning, automation, etc. It’s often ranked just behind JavaScript in overall popularity, reflecting its broad use across industries ([Programming languages with the highest labor demand 2024 : r/AskProgramming](https://www.reddit.com/r/AskProgramming/comments/17ex3lg/programming_languages_with_the_highest_labor/#:~:text=match%20at%20L568%20Javascript%2C%20Javascript%2C,Javascript%E2%80%A6is%20absolutely%20dominating%20right%20now)). In interview practice, Python is extremely common – many competitive programming and LeetCode discussions use Python, so a wealth of learning resources is available. For job hunting, knowing Python opens up roles in AI/ML, data analysis, scientific computing, and backend development ([Python vs JavaScript: What to Choose in 2024 - Monarch Innovation](https://www.monarch-innovation.com/python-vs-javascript#:~:text=Both%20Python%20versus%20JavaScript%20open,ML%2C%20and%20data%20science)). Many companies (especially in those domains) allow or encourage Python in interviews. (For front-end roles, Python is less directly relevant, but those interviews might focus on system design or algorithms where Python can still be used.)                                                                                    | **Dominant for web:** JavaScript is arguably the most in-demand programming language today, powering the vast majority of web applications ([Programming languages with the highest labor demand 2024 : r/AskProgramming](https://www.reddit.com/r/AskProgramming/comments/17ex3lg/programming_languages_with_the_highest_labor/#:~:text=Javascript%2C%20Javascript%2C%20Javascript%E2%80%A6is%20absolutely%20dominating,right%20now)). Its ecosystem (Node.js, NPM, and frameworks like React/Angular) makes it indispensable for front-end and full-stack development ([Python vs JavaScript: What to Choose in 2024 - Monarch Innovation](https://www.monarch-innovation.com/python-vs-javascript#:~:text=Both%20Python%20versus%20JavaScript%20open,ML%2C%20and%20data%20science)). In coding interviews, JavaScript is commonly used if you’re targeting a front-end or full-stack position, and companies hiring for those roles will expect proficiency in it. While historically algorithm interview communities were dominated by Python/Java/C++, JavaScript has become very popular as more candidates from web backgrounds use it. Job-market wise, JavaScript skills are highly marketable – it’s often said to be “absolutely dominating” job postings, with Python in second place ([Programming languages with the highest labor demand 2024 : r/AskProgramming](https://www.reddit.com/r/AskProgramming/comments/17ex3lg/programming_languages_with_the_highest_labor/#:~:text=Javascript%2C%20Javascript%2C%20Javascript%E2%80%A6is%20absolutely%20dominating,right%20now)). So choosing JS for interviews is wise if it aligns with the job’s tech stack. |
| **Debugging & Error Handling**              | **Clear errors:** Python tends to fail fast and loud. It is strongly typed at runtime, so invalid operations (like adding incompatible types or accessing an out-of-range index) immediately raise exceptions with informative tracebacks ([Why are using exceptions more acceptable in python than javascript - Stack Overflow](https://stackoverflow.com/questions/29472883/why-are-using-exceptions-more-acceptable-in-python-than-javascript#:~:text=My%20take%20on%20this%20would,bubbles%20up%20the%20call%20graph)). This helps with debugging during interviews, since mistakes are caught early rather than silently producing wrong results. Python uses `try/except` blocks for error handling; exceptions are a normal part of control flow for unusual conditions (e.g. catching a `KeyError` instead of checking existence every time). Overall, Python’s error messages are usually clear (pointing out the exact issue and location), which makes it straightforward to fix bugs in your code.                                                                                                                                                                                                                                                                                                                                                                                                                | **Silent failures possible:** JavaScript uses `try/catch` for exceptions similarly, but many errors won’t throw exceptions by default. The language often **“glosses over” issues** – for example, using a non-existent array index just gives `undefined` and keeps running, rather than throwing an error ([Why are using exceptions more acceptable in python than javascript - Stack Overflow](https://stackoverflow.com/questions/29472883/why-are-using-exceptions-more-acceptable-in-python-than-javascript#:~:text=Javascript%20and%20many%20other%20interpreted,to%20defend%20against%20Javascript%20itself)). This means a bug can fail silently, and you have to carefully watch for unexpected `undefined/NaN` values. Type coercion can also cause subtle issues without any error (e.g. `"5" * 2` becomes 10 in JS, whereas in Python `"5" * 2` would throw a TypeError). In practice, debugging JavaScript might involve more manual checks or console logs to pinpoint logic errors. On the plus side, modern debuggers (browser DevTools, Node.js inspector) are very powerful for stepping through code when you have that environment. In interview platforms, you’ll primarily rely on test cases, so in JS it’s important to add your own validations or use strict equality (`===`) to avoid tricky coercion bugs.                                                                                                                                                                                                                                                                                                                                     |
| **Transitioning from JavaScript to Python** | **Adapting to Python:** If you’re moving from JS to Python, focus on Python’s idioms and differences. Embrace whitespace – Python uses indentation instead of `{}` braces, and a missing colon or wrong indent will cause errors, so practice writing neatly indented code. Get used to Python syntax for common constructs (e.g. `for x in list` instead of C-style index loops, `and`/`or` instead of `&&`/`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `, and `True`/`False` instead of `true`/`false`). Leverage Python’s powerful built-ins and libraries rather than coding everything manually – for instance, use `collections.Counter` for frequency counts or `heapq` for a priority queue (in JS you might have had to write these from scratch). Also, be mindful that Python won't implicitly convert types; you'll need to convert types explicitly (e.g. use `str()` to convert a number to a string) where JavaScript might do it for you, but this strictness prevents certain bugs. One big advantage of switching is the abundance of resources – many tutorials and solution discussions are in Python, so you can directly study those instead of translating from JS ([Why I moved from JavaScript to Python for LeetCode - DEV Community](https://dev.to/davinderpalrehal/why-i-moved-from-javascript-to-python-for-leetcode-3pm1#:~:text=Everytime%20I%20get%20stuck%20in,step%20through%20with%20different%20inputs)). Practice plenty of problems in Python and read Pythonic solutions to adjust your coding style and avoid common pitfalls. | **Mindset shift:** As a JS developer, you already understand core programming concepts, but avoid carrying over JavaScript-specific habits. Don’t rely on JS truthy/falsy quirks or loose typing in Python – Python will enforce correctness (e.g. 0 vs `None` vs `False` are distinct). Be ready to write out data structure manipulations using Python's methods (for example, `my_list.append(x)` instead of `array.push(x)`). In short, transitioning from JS is about unlearning JS-specific syntax and embracing Python’s way of doing things. *(Transitioning from Python to JavaScript would involve the opposite – learning to use braces/semicolons, managing type coercion, etc. – but that’s outside our scope here.)* |


### JavaScript vs Python Core Concepts

| Concept            | JavaScript Example                             | Python Example & Notes                                                                      |
| ------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Variables**      | `let x = 10;`<br>`const y = 20;`               | `x = 10` (dynamic typing)<br>`y = 20` (reassignable)                                        |
| **Constants**      | `const PI = 3.14;`                             | `PI = 3.14` (by convention)<br>`from math import pi` (built-in constants)                   |
| **Functions**      | `function add(a, b) { return a + b; }`         | `def add(a, b): return a + b`<br>Indentation defines blocks                                 |
| **Data Types**     | Dynamic typing                                 | Dynamic typing:<br>`s = "text"`<br>`n = 3.14` (type hints optional: `n: float = 3.14`)      |
| **Collections**    | `const arr = [1,2];`<br>`const obj = {key:1};` | `arr = [1,2]` (list)<br>`d = {"key": 1}` (dict)<br>`t = (1,2)` (tuple)<br>`s = {1,2}` (set) |
| **Zero Values**    | `undefined`, `null`                            | `None` (single null-like value)<br>No undefined concept                                     |
| **Error Handling** | `try/catch`                                    | `try/except`<br>EAFP: "Easier to ask forgiveness than permission"                           |
| **Concurrency**    | `Promise`, `async/await`                       | `asyncio`, `async/await`<br>`threading`, `multiprocessing`                                  |
| **Memory**         | Automatic GC                                   | Automatic GC<br>Reference counting + cycle detection                                        |
| **Build**          | `node script.js`                               | `python script.py`<br>Interpreted, no compilation step                                      |
