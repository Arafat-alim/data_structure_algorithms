function throttle(func, delay) {
  let lastTime = 0;
  return function (...args) {
    let now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

// Test Case 1: Basic throttle
const throttledLog = throttle(() => console.log("Hello, world!"), 1000);
throttledLog(); // Executes immediately
throttledLog(); // Ignored (within 1s)
setTimeout(throttledLog, 500); // Ignored (within 1s)
setTimeout(throttledLog, 1100); // Executes after 1.1s

// Test Case 2: Arguments passed to throttled function
const throttledSum = throttle((a, b) => console.log(a + b), 1000);
throttledSum(2, 3); // Executes immediately and logs "5"
throttledSum(4, 5); // Ignored (within 1s)
setTimeout(() => throttledSum(6, 7), 1100); // Executes after 1.1s and logs "13"
