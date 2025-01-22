# [701. Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/description/)

<div id="companyTagContainer" style="display: flex; flex-direction: row; margin-bottom: 20px; gap: 5px; margin-top: 10px;"><button style="display: flex; align-items: center; justify-content: center; min-width: 100px; height: 25px; padding: 1px; border-radius: 10px; font-size: 10px; background-color: rgb(51, 51, 51); color: rgb(255, 255, 255);"><img src="https://logo.clearbit.com/linkedin.com" style="height: 12px; width: 12px; margin-right: 5px;">LinkedIn</button><button style="display: flex; align-items: center; justify-content: center; min-width: 100px; height: 25px; padding: 1px; border-radius: 10px; font-size: 10px; background-color: rgb(51, 51, 51); color: rgb(255, 255, 255);"><img src="https://logo.clearbit.com/amazon.com" style="height: 12px; width: 12px; margin-right: 5px;">Amazon</button><button style="display: flex; align-items: center; justify-content: center; min-width: 100px; height: 25px; padding: 1px; border-radius: 10px; font-size: 10px; background-color: rgb(51, 51, 51); color: rgb(255, 255, 255);"><img src="https://logo.clearbit.com/goldmansachs.com" style="height: 12px; width: 12px; margin-right: 5px;">Goldman Sachs</button>You are given the `root` node of a binary search tree (BST) and a `value` to insert into the tree. Return the root node of the BST after the insertion. It is **guaranteed**  that the new value does not exist in the original BST.

**Notice** that there may existmultiple valid ways for theinsertion, as long as the tree remains a BST after insertion. You can return **any of them** .

**Example 1:**
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/insertbst.jpg" style="width: 752px; height: 221px;">

<pre style="display: block;">Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
Explanation: Another accepted tree is:
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/bst.jpg" style="width: 352px; height: 301px;">
```

**Example 2:** 

<pre style="display: block;">Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]
```

**Example 3:** 

<pre style="display: block;">Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]
```

**Constraints:** 

- The number of nodes inthe tree will be in the range `[0,10^4]`.
- `-10^8 <= Node.val <= 10^8`
- All the values `Node.val` are **unique** .
- `-10^8 <= val <= 10^8`
- It's **guaranteed**  that `val` does not exist in the original BST.
