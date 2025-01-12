/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const ans = [];
  let i = 0;
  while (i < nums.length) {
    let start = nums[i];
    while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) {
      i++;
    }
    if (start !== nums[i]) {
      ans.push(String(start) + "->" + String(nums[i]));
    } else {
      ans.push(String(start));
    }
    i++;
  }
  return ans;
};

/**
 *Let's dry run the code with the example `nums = [0, 1, 2, 4, 5, 7]`.

**Initialization:**

* `ans = []` (Empty array to store the ranges)
* `i = 0`

**Outer `while` loop:**

**1. i = 0:**
   * `start = 0`
   * **Inner `while` loop:**
      * `i = 0`: `0 + 1 === 1` is true. `i` becomes 1.
      * `i = 1`: `1 + 1 === 2` is true. `i` becomes 2.
      * `i = 2`: `2 + 1 === 4` is false. Inner loop exits.
   * `start (0) !== nums[2] (2)` is true.
   * `ans.push("0->2")`  (`ans` is now `["0->2"]`)
   * `i` becomes 3.

**2. i = 3:**
   * `start = 4`
   * **Inner `while` loop:**
      * `i = 3`: `4 + 1 === 5` is true. `i` becomes 4.
      * `i = 4`: `5 + 1 === 7` is false. Inner loop exits.
   * `start (4) !== nums[4] (5)` is true.
   * `ans.push("4->5")` (`ans` is now `["0->2", "4->5"]`)
   * `i` becomes 5.

**3. i = 5:**
   * `start = 7`
   * **Inner `while` loop:**
      * `i = 5`:  The condition `i < nums.length - 1` (5 < 5) is false. Inner loop exits immediately.  
   * `start (7) !== nums[5] (7)` is false.
   * `ans.push("7")` (`ans` is now `["0->2", "4->5", "7"]`)
   * `i` becomes 6.


**Outer loop termination:**

* `i` is now 6, which is not less than `nums.length` (6). The outer loop terminates.


**Return:**

* The function returns `ans`, which is `["0->2", "4->5", "7"]`.


**Time and Space Complexity Analysis:**

**Time Complexity:**

* The outer `while` loop iterates through the `nums` array. However, the inner `while` loop can potentially skip elements. In the worst-case scenario (e.g., `[0, 1, 2, 3, 4, 5]`), the inner loop would iterate almost every element, but the outer loop's index `i` would also be incremented in the inner loop. Therefore each element is visited at most twice.

* **Result: O(n) - Linear Time Complexity.** The time taken is proportional to the number of elements in the input array.

**Space Complexity:**

* The `ans` array stores the ranges. In the worst-case scenario (all elements are non-consecutive, like in [1,3,5,7,9]), the `ans` array would store a string for each number.

* **Result: O(n) - Linear Space Complexity.** The space used is proportional to the number of elements in the input array in the worst-case. In the best-case (a single continuous range), the space complexity would be O(1).  The average case depends on the distribution of the numbers.

 */
