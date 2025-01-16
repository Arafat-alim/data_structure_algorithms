/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const obj = {};

  for (let char of s) {
    obj[char] = (obj[char] || 0) + 1;
  }

  for (let char of s) {
    if (obj[char] === 1) {
      return s.indexOf(char);
    }
  }

  return -1;
};
