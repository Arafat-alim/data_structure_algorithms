## Implement a Throttle Function

**Definition:**

Throttling is a programming technique used to control the maximum rate at which a function can be executed over time. Unlike debouncing, which delays execution until a period of inactivity, throttling allows the function to execute at regular intervals, but prevents it from being called more frequently than a specified limit. This can be useful for rate-limiting API calls, handling scroll events, or other scenarios where you want to control the frequency of function execution. Essentially, a throttled function guarantees a _maximum_ invocation rate.

**Problem:**

Implement a `throttle` function that takes two arguments:

- `func`: The function to be throttled.
- `delay`: The minimum time interval in milliseconds between successive executions of the throttled function.

The `throttle` function should return a new function that, when called, will execute the original function (`func`) only if it hasn't been called within the last `delay` milliseconds. If the throttled function is called again within the `delay` period, it will be ignored until the `delay` has passed. This ensures that `func` is executed at most once every `delay` milliseconds. Leading edge invocations are allowed, but subsequent invocations within `delay` are dropped.

**Function Signature:**

```javascript
/**
 * @param {function} func The function to throttle.
 * @param {number} delay The throttle delay in milliseconds.
 * @return {function} The throttled function.
 */
function throttle(func, delay) {
  // Your code here
}
```

**Example Usage:**

```javascript
function myFunction() {
  console.log("Throttled function executed!");
}

const throttledFunction = throttle(myFunction, 1000); // Throttle to execute at most once per second

// Simulate rapid function calls
throttledFunction(); // Executes immediately
throttledFunction(); // Ignored (within the 1000ms delay)
throttledFunction(); // Ignored (within the 1000ms delay)

setTimeout(throttledFunction, 1200); // Executes after 1200ms delay since the first call
setTimeout(throttledFunction, 1400); // Ignored because it's within 1000ms of previous exec
setTimeout(throttledFunction, 2200); // Executes 2200ms after the initial call
```

**Test Cases:**

Your implementation should pass the following test cases:

1. **Initial Call:** The first call to the throttled function should always execute the original function immediately.
2. **Calls Within Delay:** Subsequent calls within the `delay` period should be ignored.
3. **Call After Delay:** A call to the throttled function after the `delay` has passed since the last execution should execute the original function.
4. **Consistent Interval:** Ensure that the original function is executed at approximately consistent intervals, regardless of how frequently the throttled function is called.

This revised problem statement clearly defines throttling, differentiates it from debouncing, provides a concise problem description, specifies the function signature, illustrates the usage with an example, and lists test cases to validate the correctness of the solution. It guides the student towards a deeper understanding of the throttling mechanism and its practical implementation.
