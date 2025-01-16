function debounce(func, delay) {
  let timeoutId;

  // Return a debounced function
  return function (...args) {
    // Clear the previous timer if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timer
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Call the original function with arguments
    }, delay);
  };
}

const logMessage = () => console.log("Hello, world!");
const debouncedLog = debounce(logMessage, 2000);

debouncedLog(); // Call immediately
debouncedLog(); // Ignored
setTimeout(debouncedLog, 2500); // Executes after 2.5s
