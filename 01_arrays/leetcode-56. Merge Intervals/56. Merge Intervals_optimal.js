/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];

  let currentInterval = intervals[0];
  merged.push(currentInterval);

  for (let i = 1; i < intervals.length; i++) {
    let nextInterval = intervals[i];

    if (currentInterval[1] >= nextInterval[0]) {
      //! overlap
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
    } else {
      //! not overlap
      currentInterval = nextInterval;

      merged.push(currentInterval);
    }
  }
  return merged;
};

let arr = [
  [15, 18],
  [8, 10],
  [2, 6],
  [1, 3],
];
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
