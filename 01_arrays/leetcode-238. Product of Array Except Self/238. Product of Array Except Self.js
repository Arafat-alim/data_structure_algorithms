/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = [];
  let productOfAllBeforeCurrent = 1;
  let productOfAllAfterCurrent = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = productOfAllBeforeCurrent;
    productOfAllBeforeCurrent *= nums[i];
  }

  console.log(res); // [ 1, 1, 2, 6 ]
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= productOfAllAfterCurrent;
    productOfAllAfterCurrent *= nums[i];
  }

  return res;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [ 24, 12, 8, 6 ]
