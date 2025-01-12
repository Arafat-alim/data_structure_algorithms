/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return false;

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i); // return here
      }
    }
  }
  return strs[0]; // if each and every element matches
};

/**
 *Let's dry run the code with the example `strs = ["flower","flow","flight"]`.

**Initialization:**

* The `strs` array is not empty, so the first `if` condition is false.
* The outer loop starts with `i = 0`.


**Outer Loop (i = 0):**
* **Inner Loop (j = 1):**
    * `strs[0][0] ('f') !== strs[1][0] ('f')` is false.
* **Inner Loop (j = 2):**
    * `strs[0][0] ('f') !== strs[2][0] ('f')` is false.

**Outer Loop (i = 1):**
* **Inner Loop (j = 1):**
    * `strs[0][1] ('l') !== strs[1][1] ('l')` is false.
* **Inner Loop (j = 2):**
    * `strs[0][1] ('l') !== strs[2][1] ('l')` is false.


**Outer Loop (i = 2):**
* **Inner Loop (j = 1):**
    * `strs[0][2] ('o') !== strs[1][2] ('o')` is false.
* **Inner Loop (j = 2):**
    * `strs[0][2] ('o') !== strs[2][2] ('i')` is true.
    * The function returns `strs[0].slice(0, 2)`, which is `"fl"`.


**Result:** The function returns "fl".


**Time and Space Complexity Analysis:**

**Time Complexity:**

* **Outer loop:** Iterates up to `m` times (where `m` is the length of the first string in the array).
* **Inner loop:** Iterates up to `n` times (where `n` is the number of strings in the array).
* In the worst case (all strings are the same except for the last character), the inner loop runs almost all the time in each iteration of the outer loop.


* **Result: O(m * n)**  The time complexity is proportional to the product of the length of the first string and the number of strings in the array. More accurately, it's the sum of the lengths of common prefixes across all the strings.  In the worst-case scenario when all characters match until the end of the shortest string. 

**Space Complexity:**

* The code uses a few variables (`i`, `j`) and returns a substring of the first string. The space used for these variables is constant and doesn't scale with the input size. The space used for the returned substring is at most `m` (the length of the first string), but in many cases, it will be less.  However, we often consider the output space separately from auxiliary space complexity.

* **Result: O(1) - Constant Space Complexity** (considering auxiliary space). The space used does not depend on the size of the input array or the length of the strings. If we include the output string in the space complexity analysis, it would be O(m), where 'm' is the length of the longest common prefix, which in the worst case could be the length of the shortest string in the input.  But again, output space is usually considered separately. 

 */
