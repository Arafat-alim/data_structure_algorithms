/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let sell = 0;
  let buy = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[sell] < prices[buy]) {
      buy = sell;
    } else {
      let profit = prices[sell] - prices[buy];
      max = Math.max(max, profit);
    }
    sell++;
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5

/**
 * Let's analyze the space and time complexity of the provided JavaScript code:

**Time Complexity:**

The code iterates through the `prices` array once using a `for` loop.  Inside the loop, there are constant-time operations (comparisons, subtractions, assignments, and `Math.max`). Therefore, the dominant operation is the loop, which runs `n` times where `n` is the length of the `prices` array.

* **Result: O(n) - Linear Time Complexity.** The execution time grows linearly with the size of the input.

**Space Complexity:**

The code uses a fixed number of variables: `max`, `sell`, `buy`, `i`, and `profit`.  The number of these variables does not change with the size of the input array `prices`.

* **Result: O(1) - Constant Space Complexity.** The memory used remains constant regardless of the size of the input.  This is also known as *in-place* because it doesn't use extra memory that scales with the input size.


**Summary:**

The algorithm is efficient in terms of both time and space complexity.  It processes the input in a single pass and uses a constant amount of extra memory. This makes it suitable for handling even large datasets of stock prices.

 */
