# 2. Debounce

**What is Debounce?**

Debouncing ensures that a function is executed only after a certain period of inactivity. It delays the execution of the function until the user has stopped performing the action.
How Does Debounce Work?

- When a debounced function is called, a timer is set.

- If the function is called again before the timer expires, the timer is reset.

- The function is executed only after the timer expires (i.e., after the user has stopped performing the action).

Use Cases:

- Search bar input: Wait until the user has stopped typing before making an API call.

- Window resizing: Execute a function only after the user has finished resizing the window.

- Button clicks: Prevent accidental double-clicks.
