/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const frequencyMap = new Map();

  for (let char of s) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  for (let char of s) {
    if (frequencyMap.get(char) === 1) {
      console.log(char);
      return s.indexOf(char);
    }
  }

  return -1;
};
