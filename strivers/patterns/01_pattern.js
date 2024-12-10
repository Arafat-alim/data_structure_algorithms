/**
 * Print the following pattern:
 * ****
 * ****
 * ****
 * ****
 *
 * Steps:
 * 1. Number of outer loops = 4 rows
 * 2. Number of inner loops = 4 columns
 * 3. Print "*" in each column and move to the next line after each row
 */

function pattern1(outerLoop, innerLoop) {
  for (let i = 0; i < outerLoop; i++) {
    for (let j = 0; j < innerLoop; j++) {
      document.write("*");
    }
    document.write("<br/>");
  }
}

// Function call to display the pattern
pattern1(4, 4);
