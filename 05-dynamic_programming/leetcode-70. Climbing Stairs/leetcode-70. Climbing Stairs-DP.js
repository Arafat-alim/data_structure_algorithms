/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = Array(n + 1).fill(-1);
  return solve(n, dp);
};

function solve(n, dp) {
  if (n === 0) return 1;
  if (n < 0) return 0;

  if (dp[n] !== -1) {
    return dp[n];
  } else {
    let ans1 = solve(n - 1, dp);
    let ans2 = solve(n - 2, dp);
    dp[n] = ans1 + ans2;
    // return ans1 + ans2;
    return dp[n];
  }
}

/*
Time Complexity:

    Overlapping Subproblems: The solve function is recursive, and it recalculates the result for the same values of n multiple times. For example, solve(3) would call solve(2) and solve(1), and solve(4) would also call solve(2). This creates overlapping subproblems.

    Memoization (DP): The use of the dp array for memoization significantly reduces the time complexity. Once a result for solve(n) is calculated, it's stored in dp[n], and subsequent calls for the same n simply return the stored value without redundant computations. The if (dp[n] !== -1) check ensures this.

    Linear Time: Due to memoization, each value of n from 0 to the input n is calculated and stored in the dp table exactly once. The time spent on each calculation (excluding recursive calls) is constant (addition and assignment).

    Therefore, the time complexity is O(n).

Space Complexity:

    Recursion Stack: The recursive nature of solve uses space on the call stack. In the worst case (without memoization), the depth of the recursion could be n, leading to O(n) stack space. However, with memoization, the maximum depth of recursion becomes much smaller because branches are pruned by the dp[n] !== -1 check.

    DP Array: The dp array has a size of n + 1. This contributes to the space complexity.

    Overall Space: O(n). While the recursion stack can use up to O(n) space in the unmemoized version, with memoization it becomes much less of a factor. The dominant space usage is the dp array.

In summary:

    Time Complexity: O(n) - Linear time due to the use of dynamic programming (memoization).

    Space Complexity: O(n) - Linear space primarily due to the dp array used for memoization. The recursion stack space becomes less significant with memoization, though technically it can still reach O(n) in the worst-case initial descent before memoization fills in.

*/
