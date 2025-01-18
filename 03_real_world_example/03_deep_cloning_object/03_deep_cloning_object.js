function deepClone(input) {
  if (typeof input !== "object") {
    return input;
  }

  const copy = Array.isArray(input) ? [] : {};
  for (let key in input) {
    let value = input[key];
    copy[key] = deepClone(value);
  }

  return copy;
}
const obj = {
  name: "John",
  age: 30,
  details: {
    hobbies: ["reading", "cycling"],
    address: {
      city: "New York",
      zip: 10001,
    },
  },
};

const clonedObj = deepClone(obj);

console.log(clonedObj); // Deeply cloned object
console.log(clonedObj === obj); // false (different reference)
console.log(clonedObj.details === obj.details); // false (different nested object reference)
