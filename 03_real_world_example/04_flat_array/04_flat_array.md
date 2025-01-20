## Flatten a Nested Array

**Problem:**

You are given a nested array of integers, where each element can be either an integer or another nested array. Write a function `flatten` that takes this nested array as input and returns a single flattened array containing all the integers in the original array, in the order they appear.

**Constraints:**

- The input array can have an arbitrary level of nesting.
- The elements in the array will be either integers or other nested arrays.
- The maximum depth of nesting will not exceed 1000.
- The total number of elements in the flattened array will not exceed 10000.

**Function Signature:**

```javascript
/**
 * @param {Array} nestedArray
 * @return {Array}
 */
var flatten = function (nestedArray) {
  // Your code here
};
```

**Example 1:**

```
Input: nestedArray = [1, [2, [3, 4], 5], 6]
Output: [1, 2, 3, 4, 5, 6]
```

**Example 2:**

```
Input: nestedArray = [[1, 1], 2, [1, 1]]
Output: [1, 1, 2, 1, 1]
```

**Example 3:**

```
Input: nestedArray = []
Output: []
```

**Example 4:**

````
Input: nestedArray = [0]
Output: [0]
```  //Important test case to check if student handle a simple case correctly



**Follow up:**  (Optional, to increase difficulty)

Could you solve this problem without using recursion? Can you implement an iterative solution using a stack?
````
