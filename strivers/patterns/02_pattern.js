/**
 * Print the following pattern:
 * *
 * **
 * ***
 * ****
 * *****
 *
 * Steps:
 * 1. Number of outer loops = 5 rows
 * 2. Number of inner loops =
 * 0th row = 1
 * 1st row = 2
 * 2nd row = 3
 * 3rd row = 4
 * 4th row = 5
 * 3. Print "*" in each column and move to the next line after each row
 */

function pattern2(outerLoop) {
  for (let i = 0; i < outerLoop; i++) {
    for (let j = 0; j < i; j++) {
      document.write("* ");
    }
    document.write("<br/>");
  }
}

// Function call to display the pattern
pattern2(5);
