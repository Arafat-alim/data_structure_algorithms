function flat(array, depth) {
  if (depth < 1) return array.slice();

  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc.push(...flat(curr, depth - 1));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

const arr = [1, 2, 3, [32, 50, [34, 54, [65, 67]]]];
const arr1 = [[1, 1], 2, [1, 1]];
const arr2 = [];
console.log(flat(arr1, Infinity));

/*
[
   1,  2,  3, 32, 50,
  34, 54, 65, 67
]
*/
