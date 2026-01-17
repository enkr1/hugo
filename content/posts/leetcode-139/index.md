---
title: "LeetCode-139: Word Break"
date: 2024-09-21 16:16:43
tags:
  - "leetcode"
  - "leetcode-medium"
  - "algorithm"
  - "dynamic-programming"
  - "javascript"
  - "interview-preparation"
  - "top-interview-150"
categories:
  - "Software Engineering"
  - "Coding Problems"
subtitle: "Comprehensive Guide to Solving LeetCode Problem 139: Word Break Using Dynamic Programming"
description: "An in-depth guide to solving LeetCode 139 with Dynamic Programming. Understand the problem, approach, and implementation step by step with detailed explanations and examples."
keywords:
  - "LeetCode 139 solution"
  - "Word Break"
  - "Dynamic Programming"
  - "Algorithm"
  - "Coding Interview Preparation"
---



## [139. Word Break](https://leetcode.com/problems/word-break/description/?envType=study-plan-v2&envId=top-interview-150)
- **Goal**: Determine if a string `s` can be segmented into a space-separated sequence of one or more dictionary words from `wordDict`.
- **Constraints**:
  - `1 <= s.length <= 300`
  - `1 <= wordDict.length <= 1000`
  - `1 <= wordDict[i].length <= 20`
  - `s` and `wordDict[i]` consist of only lowercase English letters.
  - All the strings of `wordDict` are unique.



### Understanding the Problem
Given a string `s` and a list of words `wordDict`, we need to check if `s` can be broken down into a sequence of one or more words from `wordDict`. The same word from the dictionary can be used multiple times.



#### Analogy: Puzzle Pieces
- **String `s`**: Think of `s` as a long puzzle strip.
- **Dictionary Words (`wordDict`)**: Each word is like a puzzle piece.
- **Goal**: Use the puzzle pieces to completely cover the puzzle strip without gaps or overlaps.



### Example
```plaintext
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true

Explanation:
We can segment "leetcode" as "leet code".
```

---

## Quick Steps for Solving the Problem
### 1. Use Dynamic Programming (DP)
- **Define Subproblems**: Determine if substrings `s[0..i]` can be segmented using `wordDict`.
- **DP Array (`dp`)**: Create an array `dp` where `dp[i]` is `true` if `s[0..i-1]` can be segmented.

### 2. Initialise the DP Array
- Set `dp[0] = true` since an empty string can always be segmented.

### 3. Fill the DP Array
- For each position `i` from `1` to `s.length`:
  - For each `j` from `max(0, i - maxWordLength)` to `i`:
    - If `dp[j]` is `true` and `s[j..i-1]` is in `wordDict`, set `dp[i] = true` and break the inner loop.

> `maxWordLength` is a way to optimise - without it, you inner loop can go over longest length from dict.

### 4. Return the Result
- Return `dp[s.length]`, which indicates whether `s` can be segmented.

---

## Step-by-Step Implementation
### 1. Initialise Variables
- **`N`**: Length of the string `s`.
- **`wordSet`**: A `Set` containing words from `wordDict` for efficient lookup.
- **`maxWordLength`**: The maximum length of words in `wordDict` (denoted as **`L`**).

### 2. Compute `maxWordLength`
```js
let maxWordLength = 0;
for (const word of wordDict) {
  maxWordLength = Math.max(maxWordLength, word.length);
}
```

### 3. Initialise DP Array
```js
const dp = new Array(N + 1).fill(false);
dp[0] = true; // Base case: empty string
```

### 4. Fill the DP Array Using DP Algorithm
```js
for (let i = 1; i <= N; i++) {
  for (let j = Math.max(0, i - maxWordLength); j < i; j++) { // Directly starts off from j where fits the max word length
    if (dp[j] && wordSet.has(s.substring(j, i))) {
      dp[i] = true;
      break; // Early exit for efficiency
    }
  }
}
```

e.g. if we dont break:
```
s[0:1]: c
s[0:2]: ca
s[1:2]: a
s[0:3]: cat
s[1:3]: at // As you can see its still to look up, even tho the current dp[j] is already set to true. To be more efficient. Even there is "ca", "at" in the list, this will always be true regardless.
s[2:3]: t
s[0:4]: cats
```

if we break:
```
s[0:1]: c
s[0:2]: ca
s[1:2]: a
s[0:3]: cat
break.
s[0:4]: cats
s[1:5]: atsa
s[2:5]: tsa
s[3:5]: sa
s[4:5]: a
```
> it optimises a lot when we dealing with longer strings.



### 5. Return the Result
```js
return dp[N];
```



---



## JavaScript Implementation
```js
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let wordSet = new Set(wordDict);
    let maxWordLength = 0;
    for (let word of wordDict) {
        maxWordLength = Math.max(maxWordLength, word.length);
    }

    // console.log(`wordSet`, wordSet)
    // console.log(`maxWordLength`, maxWordLength)

    const N = s.length;
    let dp = new Array(N + 1).fill(false);
    dp[0] = true;
    // console.log(`dp`, dp)

    // Dynamic programming requires checking all possible partition points to ensure correctness.
    for (let i = 1; i <= N; i++) {
        // console.log("> j:", Math.max(0, i - maxWordLength))
        for (let j = Math.max(0, i - maxWordLength); j < i; j++) {
            let subStr = s.substring(j, i); // i = exclusive
            // console.log(`s[${j}:${i}]:`, subStr);

            if (dp[j] && wordSet.has(subStr)) {
                dp[i] = true;
                // Efficiency: The break statement exits the inner loop as soon as we find a valid segmentation for the substring s[0..i-1].
                // No Further Checks Needed: Once dp[i] is set to true, it means we have found at least one way to segment s[0..i-1]. Checking further j values won't change dp[i].
                // console.log("break.")
                break; // break inner loop
            }

            // console.log(`dp: ${dp}`)
            // if (isSubStr) {
            //     dp[i] = true;
            // }
        }
    }

    // console.log(`dp`, dp)
    return dp[N];
};
```



### Time & space complexity expressions:
- **O(N * L)**:
  - **N**: The length of the input string `s`.
  - **L**: The maximum length of the words in the dictionary `wordDict`.

- **O(N + W)**:
  - **N**: The length of the input string `s`.
  - **W**: The total number of words in `wordDict`.



---



## Detailed Explanation

### Understanding the DP Array (`dp`)

- **`dp[i]`**: A boolean value indicating whether the substring `s[0..i-1]` can be segmented into words from `wordDict`.

### Why Use `maxWordLength`?

- **Purpose**: To optimize the inner loop by limiting the range of `j`.
- **Effect**: Reduces the number of iterations, improving the time complexity.
- **Definition of `L`**: The maximum length of words in `wordDict`.

### Time and Space Complexity

- **Time Complexity**: O(N * L), where:
  - **N**: Length of the string `s`.
  - **L**: Maximum length of the words in `wordDict`.
- **Space Complexity**: O(N + W), where:
  - **N**: Length of the string `s` (for the `dp` array).
  - **W**: Total number of words in `wordDict` (for the `wordSet`).

---

## Example Walkthrough
### Example: `s = "leetcode"`, `wordDict = ["leet", "code"]`
#### Initialisation
- `N = 8` (length of "leetcode")
- `maxWordLength = 4` (max length of words in `wordDict`)
- `dp = [true, false, false, false, false, false, false, false, false]`


#### Filling the DP Array
1. **i = 4**
   - **j from max(0, 4 - 4) = 0 to 3**
     - **j = 0**: `s[0:4] = "leet"` is in `wordDict`, and `dp[0]` is `true`.
     - Set `dp[4] = true` and break.

2. **i = 8**
   - **j from max(0, 8 - 4) = 4 to 7**
     - **j = 4**: `s[4:8] = "code"` is in `wordDict`, and `dp[4]` is `true`.
     - Set `dp[8] = true` and break.


#### Final DP Array
`dp = [true, false, false, false, true, false, false, false, true]`


#### Result
Since `dp[8] = true`, the string "leetcode" can be segmented.



---



## Additional Notes
### Why Use `break` in the Inner Loop?
- **Efficiency**: Once we find a valid segmentation at position `i`, there's no need to check further.
- **Early Termination**: Improves performance by reducing unnecessary iterations.

### Handling Edge Cases
- **Empty String**: `dp[0] = true` ensures that we can handle an empty string.
- **Words Longer Than `maxWordLength`**: The inner loop accounts for this by starting from `max(0, i - maxWordLength)`.



---



## Summary
- **Dynamic Programming**: An effective approach for solving the Word Break problem by breaking it down into subproblems.
- **Optimization with `maxWordLength`**: Limits the inner loop iterations, improving time complexity.
- **Time Complexity**: $O(N * L)$, efficient for the given constraints; $L$: The maximum length of the words in the dictionary wordDict.
- **Space Complexity**: $O(N + W)$, acceptable given the problem size; $W$: The total number of words in wordDict.



---


## Conclusion
By understanding the dynamics of the problem and applying dynamic programming with appropriate optimisations, we can efficiently solve the Word Break problem. Remember to:

- **Define the DP State Clearly**: Know what each element in your DP array represents.
- **Optimise Loops**: Use variables like `maxWordLength` to reduce unnecessary computations.
- **Practice**: Apply similar strategies to other DP problems to reinforce your understanding.



### Reminder from GPT:
Dynamic Programming (DP) is a powerful tool for solving problems with overlapping subproblems and optimal substructure, like the Word Break problem. By meticulously defining subproblems, optimising iterations, and utilising appropriate data structures, you can craft efficient and effective solutions.

- **Define Clear States**: Understand what each state in your DP array represents.
Optimise Loops: Use constraints like `maxWordLength` to limit unnecessary computations.
- **Early Exits**: Implement break statements where applicable to enhance performance.
- Keep practicing similar DP problems to reinforce these concepts, and you'll gain deeper intuition and mastery over such algorithms.


---



## Practice Problems
To strengthen your understanding, consider practicing these related problems:

- **LeetCode 140**: Word Break II
- **LeetCode 472**: Concatenated Words
