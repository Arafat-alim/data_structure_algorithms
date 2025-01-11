/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let closest = 1e9;
  let value = 1e9;

  for (let num of nums) {
    if (Math.abs(num) - 0 < closest) {
      closest = Math.abs(num) - 0;
      value = num;
    } else if (num === closest) {
      value = Math.max(value, num);
    }
  }
  return value;
};

console.log(findClosestNumber([-4, -2, 1, 4, 8])); // 1
