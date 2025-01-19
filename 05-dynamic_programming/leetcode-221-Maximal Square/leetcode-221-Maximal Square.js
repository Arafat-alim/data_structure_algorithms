/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  let maxSize = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;

  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
      if (matrix[i][j] == 1) {
        if (i == 0 || j == 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        maxSize = Math.max(maxSize, dp[i][j]);
      }
    }
  }
  return maxSize * maxSize;
};

let mat = [
  [1, 1, 0, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 1, 1],
  [1, 1, 0, 0],
];
let mat2 = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

const res = maximalSquare(mat2);
console.log(res); // 4

/*
Time Complexity:  O(mxn)
Space Complexity: O(m * n) due to the dp table used to store intermediate results. 

Note: Space Complexity: O(m * n) due to the dp table used to store intermediate results. The space used is proportional to the size of the input matrix. If you needed to optimize for space, you could potentially use only two rows of the dp table at a time since the calculation only depends on the previous row and the current row, reducing the space complexity to O(n).
*/
