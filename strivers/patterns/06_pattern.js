/**
 * Print the following pattern:
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 *
 * Steps:
 * 1. Number of outer loops = 4 rows
 * 2. Number of inner loops
 * 0th row - 1 2 3 4 5
 * 1st row - 1 2 3 4
 * 2nd row - 1 2 3
 * 3rd row - 1 2
 * 4th row - 1
 * 3. Print "*" in each column and move to the next line after each row
 */

function pattern1(outerLoop) {
  for (let i = 0; i < outerLoop; i++) {
    for (let j = 0; j < outerLoop - i; j++) {
      //   document.write(`* `);
      document.write(`${j + 1} `);
    }
    document.write("<br/>");
  }
}

// Function call to display the pattern
pattern1(5);
