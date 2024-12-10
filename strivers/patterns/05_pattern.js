/**
 * Print the following pattern:
 * * * * * *
 * * * * *
 * * * *
 * * *
 * *
 *
 * Steps:
 * 1. Number of outer loops = 4 rows
 * 2. Number of inner loops
 * 0th row - * * * * *
 * 1st row - * * * *
 * 2nd row - * * *
 * 3rd row - * *
 * 4th row - *
 * 3. Print "*" in each column and move to the next line after each row
 */

function pattern1(outerLoop) {
  for (let i = 0; i < outerLoop; i++) {
    for (let j = 0; j < outerLoop - i; j++) {
      document.write(`* `);
    }
    document.write("<br/>");
  }
}

// Function call to display the pattern
pattern1(5);
