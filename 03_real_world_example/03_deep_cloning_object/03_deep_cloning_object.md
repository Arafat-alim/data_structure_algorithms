## Deep Clone an Object

**Problem:**

You are given a JavaScript object that may contain nested objects and arrays. Write a function `deepClone` that creates a deep copy of the given object. A deep copy means that changes to the cloned object should not affect the original object, and vice-versa. This includes changes to nested objects and arrays.

**Constraints:**

- The input object can have an arbitrary level of nesting.
- The object can contain primitive data types (numbers, strings, booleans, null, undefined) as well as nested objects and arrays.
- Circular references are not allowed in the input object. (This simplifies the problem for introductory purposes.)
- Dates should be cloned as new Dates

**Function Signature:**

```javascript
/**
 * @param {object | Array} obj
 * @return {object | Array}
 */
var deepClone = function (obj) {
  // Your code here
};
```

**Example 1:**

```javascript
const original = {
  a: 1,
  b: "hello",
  c: [1, 2, 3],
  d: { e: { f: 4 } },
};

const cloned = deepClone(original);

cloned.a = 2;
cloned.c.push(4);
cloned.d.e.f = 5;

console.log(original); // Output: { a: 1, b: "hello", c: [ 1, 2, 3 ], d: { e: { f: 4 } } }
console.log(cloned); // Output: { a: 2, b: "hello", c: [ 1, 2, 3, 4 ], d: { e: { f: 5 } } }
```

**Example 2:**

```javascript
const original = [1, [2, 3], { a: 4 }];
const cloned = deepClone(original);

cloned[0] = 5;
cloned[1].push(4);
cloned[2].a = 5;

console.log(original); // Output: [ 1, [ 2, 3 ], { a: 4 } ]
console.log(cloned); // Output: [ 5, [ 2, 3, 4 ], { a: 5 } ]
```

**Example 3:**

```javascript
const original = null;
const cloned = deepClone(original);
console.log(cloned); // Output: null
```

**Follow Up:** (Optional - Advanced)

How would you modify your solution to handle circular references gracefully? (e.g., detect them and either throw an error or handle them in a specific way to avoid infinite recursion). For example:

```javascript
const obj = {};
obj.circular = obj; // Creates a circular reference.
```
