// ! using recursion method
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  return solve(n);
};

//! using recursion
function solve(n) {
  if (n === 0) return 1;
  if (n < 0) return 0;

  let ans1 = solve(n - 1);
  let ans2 = solve(n - 2);

  return ans1 + ans2;
}

/*
We cant able to solve the above question recursion, we are getting TLE
*/
