---
title: "Linked List Notebook"
date: 2024-09-22 12:16:33
subtitle: "A Simple Approach to Reversing a Linked List"
description: "In this note, I walk through how I reverse a singly linked list using a dummy node in JavaScript. Sharing my thought process and a step-by-step breakdown, this guide is for anyone looking to understand the logic behind linked list reversal with clear, visual examples."
tags:
  - "programming"
  - "data-structures"
categories:
  - "Software Engineering"
  - "Data Structures & Algorithms"
  - "Notebooks"
keywords:
  - "reverse singly linked list"
  - "linked list algorithm"
  - "JavaScript linked list"
  - "dummy node in linked list"
  - "reverse linked list code example"
---

## WIP ...




---

## Singlely Linked List
### Understanding pointer
Fantastic question — this is where understanding **references and memory models** in Python really levels you up in linked list questions.

Let’s go deep but keep it intuitive 🧠:

---

#### 🔗 What does it mean: `slow = head` or `return head`?

When you write:

```python
slow = head
```

You are **not copying** the node.

You are saying:
> “`slow` now points to the same `ListNode` object in memory as `head`.”

So if you do:
```python
slow.val = 999
```

Then:
```python
print(head.val)  # Will also be 999!
```

Because they’re both referencing the **same node**.

---

#### 🧩 Why can we return `head` at the end?

```python
return head
```

Even though we changed `prev.next`, we **never reassigned `head`** — it’s still pointing to the first node of the linked list.

What we did inside:
- Used `slow` and `fast` to **move through the list**
- Used `prev.next = slow.next` to **cut out the middle node**

But `head` was never modified directly. That’s why we can return it safely — it's still the "start" of the list, even if we changed its internals.

---

### 🎯 Think of Linked Lists Like This:

#### Visual:
```
head → [1] → [2] → [3] → [4]
          ↑      ↑
         prev   slow (to delete 3)
```

When you do:
```python
prev.next = slow.next  # remove 3
```

You now have:
```
head → [1] → [2] ------→ [4]
```

And `head` is still pointing to the first `[1]` node. 💡

---

### 🔁 How to Remember This:

1. **Every assignment** (`slow = head`, `prev = slow`) is a **reference**, not a copy.
2. **`head` never changes**, so it’s safe to return.
3. When deleting:
   - You don’t delete the node itself — just **skip it** by reassigning `.next`.

---

### ✍️ Mental Model:
> Think of `ListNode` variables as **fingers pointing to nodes**.
> You move the fingers (`slow`, `fast`, `prev`) to navigate and edit.
> But the **original finger** (`head`) still points at the start.


### Examples
#### [2095. Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75)
```py3
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # slow & faster pointer
        if head.next is None:
            return None

        slow = head
        fast = head
        prev = None

        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next

        if slow:
            prev.next = slow.next

        return head
```

#### [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/description/?envType=study-plan-v2&envId=leetcode-75)
```py3

```
> 🗣️ Strong-Hire Explanation Script
> "To solve this, I used a two-pointer strategy — one for odd-indexed nodes and one for even-indexed nodes. I conceptually treat the linked list like two interleaved sublists — one for all odd nodes and one for even ones.
>
> As I traverse, I rewire the .next pointers to separate these two sequences. The critical insight is understanding that in a linked list, updating .next alone is not enough — I also need to move the tail pointer forward. I call this the 'tail > follows head' principle: once I update odd.next, I must move odd = odd.next so that the tail pointer remains accurate for future rewiring.
>
> After separation, I stitch the end of the odd list to the head of the even list, which I preserved before modification. This keeps the operation in-place with O(1) space and O(n) time."


🔁 Bonus phrases to mix in:

- “I reused the existing node structure instead of allocating new nodes.”
- “The key is safe pointer progression — modifying .next and moving the active pointer in tandem.”
- “It’s a pointer-surgery problem with clear sequencing logic.”


---



## How to reverse a Singly Linked List
The `reverseList` function reverses a singly linked list. It uses a **dummy node** to simplify the insertion of nodes at the beginning of the new list. Here's the function for reference:
### Solution
#### JavaScript
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
    let dummy = new ListNode()
    let new_head = dummy;

    while (head !== null) {
        dummy.next = new ListNode(head.val, dummy.next);
        head = head.next;
    }

    return new_head.next;
};
```

#### Python
```py3
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head
        previous = None
        next_node = head

        while current:
            next_node = current.next
            current.next = previous
            previous = current
            current = next_node

        return previous
```

> "This is a classic pointer reversal problem. My strategy is to walk through the list with a current pointer and flip the `.next` pointer of each node as I go.
>
> To avoid losing the rest of the list during this process, I track a next_node (like a bookmark to the future), and a previous pointer to build the reversed list in-place. The loop progresses as: store the future, reverse the link, and move > forward.
>
> The biggest trap here is forgetting to return the new head. Once current becomes None, the previous pointer is left pointing at the new head of the reversed list, so that's what we return."


🔁 Bonus phrasing:

- “This is a classic three-pointer walk: prev, current, and next_node.”
- “The reversal happens in-place with O(1) space and O(n) time.”
- “The key idea is to flip the arrows one by one without losing access to the future nodes.”


Reversive:

```py3
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        reversed_head = self.reverseList(head.next)
        head.next.next = head
        head.next = None
        return reversed_head
```



### Key Components:
- **Dummy Node (`dummy`)**: Acts as a placeholder to help build the reversed list.
- **New Head (`new_head`)**: Initially points to `dummy` and will eventually point to the head of the reversed list.
- **Original List (`head`)**: The input linked list that we want to reverse.

### Step-by-Step Visualisation
Let's walk through an example to see how the function works. Suppose we have the following linked list:

```
Original List:
1 -> 2 -> 3 -> null
```

### Initial Setup

1. **Create `dummy` and `new_head`:**

```
dummy -> null
new_head -> dummy
```

2. **Original List (`head`):**

```
head points to node with value 1
```

### Iteration 1: Processing Node with Value 1
1. **Create a New Node and Insert at the Beginning:**

```js
dummy.next = new ListNode(head.val, dummy.next);
```

- `head.val` is `1`.
- `dummy.next` was `null`, so the new node points to `null`.

```
dummy -> 1 -> null
new_head -> dummy
```

2. **Move `head` to the Next Node:**
```
head points to node with value 2
```

### Iteration 2: Processing Node with Value 2
1. **Create a New Node and Insert at the Beginning:**
```js
dummy.next = new ListNode(head.val, dummy.next);
```

- `head.val` is `2`.
- `dummy.next` is currently `1 -> null`, so the new node points to `1 -> null`.

```
dummy -> 2 -> 1 -> null
new_head -> dummy
```

2. **Move `head` to the Next Node:**
```
head points to node with value 3
```

### Iteration 3: Processing Node with Value 3
1. **Create a New Node and Insert at the Beginning:**
```js
dummy.next = new ListNode(head.val, dummy.next);
```

- `head.val` is `3`.
- `dummy.next` is currently `2 -> 1 -> null`, so the new node points to `2 -> 1 -> null`.

```
dummy -> 3 -> 2 -> 1 -> null
new_head -> dummy
```

2. **Move `head` to the Next Node:**
```
head is now null
```

### Final Step: Returning the Reversed List
```js
return new_head.next;
```

- `new_head` points to `dummy`.
- `new_head.next` points to `3 -> 2 -> 1 -> null`, which is the reversed list.

```
Reversed List:
3 -> 2 -> 1 -> null
```

## Detailed Explanation of `dummy` and `new_head`
### Why Use `dummy`?
- **Simplifies Edge Cases:** Using a dummy node avoids having to handle special cases for the head of the new list. It provides a consistent starting point.
- **Easy Insertion:** Each new node is inserted right after the dummy node, effectively building the reversed list by prepending nodes.

### Role of `new_head`
- **Initial Assignment:** `new_head` is assigned to `dummy` at the beginning.

  ```javascript
  let new_head = dummy;
  ```

- **Not Updated in the Loop:** `new_head` remains pointing to `dummy` throughout the loop. This is intentional because `dummy.next` is continuously updated to point to the new head of the reversed list.

- **Accessing the Reversed List:** After the loop, `new_head.next` points to the actual head of the reversed list.

### How `dummy.next` Works

- **Building the List:** In each iteration, `dummy.next` is updated to a new node that points to the current start of the reversed list.

  ```js
  dummy.next = new ListNode(head.val, dummy.next);
  ```

- **Effectively Prepending:** This line creates a new node with `head.val` and sets its `next` to the current `dummy.next`, effectively inserting it at the beginning.

- **Maintaining the Link:** Since `new_head` points to `dummy`, and `dummy.next` is always the latest node added, `new_head.next` will always point to the head of the reversed list.

## Visual Summary
Let's summarise the process with a table showing the state of the list after each iteration:

| Iteration | `head.val` | `dummy.next`          | `new_head` Points To           |
| --------- | ---------- | --------------------- | ------------------------------ |
| Start     | 1          | `null`                | `dummy -> null`                |
| 1         | 1          | `1 -> null`           | `dummy -> 1 -> null`           |
| 2         | 2          | `2 -> 1 -> null`      | `dummy -> 2 -> 1 -> null`      |
| 3         | 3          | `3 -> 2 -> 1 -> null` | `dummy -> 3 -> 2 -> 1 -> null` |
| End       | `null`     | `3 -> 2 -> 1 -> null` | `dummy -> 3 -> 2 -> 1 -> null` |

- **Final Return:** `new_head.next` → `3 -> 2 -> 1 -> null`

## Why `new_head` Isn't Updated

- **Fixed Reference:** `new_head` is a fixed reference to `dummy`. It doesn't need to be updated because `dummy.next` is where the dynamic changes happen.
- **Access Point:** By keeping `new_head` pointing to `dummy`, you have a consistent way to access the head of the reversed list via `new_head.next`.

## Final Visualisation

Here's a simplified text-based diagram showing the progression:

1. **Initial:**

```
dummy -> null
new_head -> dummy
head -> 1 -> 2 -> 3 -> null
```

2. **After Inserting 1:**

```
dummy -> 1 -> null
new_head -> dummy
head -> 2 -> 3 -> null
```

3. **After Inserting 2:**

```
dummy -> 2 -> 1 -> null
new_head -> dummy
head -> 3 -> null
```

4. **After Inserting 3:**

```
dummy -> 3 -> 2 -> 1 -> null
new_head -> dummy
head -> null
```

5. **Final Reversed List Returned:**

```
new_head.next -> 3 -> 2 -> 1 -> null
```

## Conclusion

- **`dummy` Node:** Acts as a placeholder to simplify the insertion process.
- **`new_head`:** Keeps a fixed reference to `dummy` to access the reversed list via `new_head.next`.
- **`dummy.next`:** Continuously updated to point to the new head of the reversed list by prepending nodes.

By using a dummy node and always inserting new nodes at the beginning (`dummy.next`), the function efficiently builds the reversed list. The `new_head` remains pointing to `dummy`, ensuring that `new_head.next` always references the head of the reversed list.
