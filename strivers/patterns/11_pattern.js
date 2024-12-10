/**
 * Print the following pattern:
 * 1
 * 0 1
 * 1 0 1
 * 0 1 0 1
 * 1 0 1 0 1
 * Steps:
 * 1. Number of outer loops = 4 rows
 * 2. Number of inner loops
 * 0th row - 1
 * 1st row - 0 1
 * 2nd row - 1 0 1
 * 3rd row - 0 1 0 1
 * 4th row - 1 0 1 0 1
 * Even position start with 1 and odd position starts with 0
 * 3. Print "*" in each column and move to the next line after each row
 */

function pattern11(outerLoop) {
  let start = 0;
  for (let i = 0; i < outerLoop; i++) {
    if (i % 2 === 0) {
      start = 1;
    } else {
      start = 0;
    }
    for (let j = 0; j <= i; j++) {
      document.write(`${start} `);
      start = 1 - start;
    }
    document.write("<br/>");
  }
}

// Function call to display the pattern
pattern11(5);
