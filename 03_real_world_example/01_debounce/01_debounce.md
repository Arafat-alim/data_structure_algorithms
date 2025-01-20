## Implement a Debounce Function

**Definition:**

Debouncing is a programming technique used to limit the rate at which a function is executed. It's commonly used to prevent excessive or redundant function calls when an event is triggered repeatedly over a short period, such as when a user types in an input field or resizes a window. A debounced function will postpone its execution until a certain amount of time has passed since the last invocation. If the function is invoked again within that time window, the timer is reset, and the execution is postponed again.

**Problem:**

Implement a `debounce` function that takes two arguments:

- `func`: The function to be debounced.
- `delay`: The delay in milliseconds before the debounced function should be executed.

The `debounce` function should return a new function that, when called, will only execute the original function (`func`) after the specified `delay` has passed since the last invocation. If the returned function is called again within the `delay` period, the timer should be reset, and `func` should only be executed after the full `delay` has passed since the _last_ call. Essentially, leading edge invocations of the returned function are ignored, and only the final trailing edge invocation after `delay` ms of inactivity will trigger `func`.

**Function Signature:**

```javascript
/**
 * @param {function} func The function to debounce.
 * @param {number} delay The delay in milliseconds.
 * @return {function} The debounced function.
 */
function debounce(func, delay) {
  // Your code here
}
```

**Example Usage:**

```javascript
function myFunction() {
  console.log("Debounced function executed!");
}

const debouncedFunction = debounce(myFunction, 300); // Debounce with a 300ms delay

// Simulate rapid function calls
debouncedFunction();
debouncedFunction();
debouncedFunction();

// Only one log message will be printed after 300ms of inactivity/silence.

setTimeout(debouncedFunction, 400); //This will execute after 400ms from this line
```

**Test Cases:**

Your implementation should pass the following test cases:

1. **Multiple Calls Within Delay:** Multiple calls to the debounced function within the `delay` period should only result in a single execution of the original function after the `delay`.
2. **Call After Delay:** A call to the debounced function after the `delay` has passed should execute the original function immediately.
3. **Clear Timer:** Ensure that the timer is properly cleared and reset when the debounced function is called again within the `delay`.

This problem statement clearly defines debouncing, provides a concise problem description, specifies the function signature, gives an example of how the `debounce` function would be used, and outlines test cases to verify the correctness of the implementation. It guides the student to focus on the core logic of debouncing without the added complexity of integrating it with a specific application (like the autocomplete search in the previous example).
