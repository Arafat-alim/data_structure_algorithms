/**
 * Print the following pattern:
 *         *
 *       * * *
 *     * * * * *
 *   * * * * * * *
 * * * * * * * * * *
 *
 * Steps:
 * 1. Number of outer loops = 5 rows
 * 2. Number of inner loops = space star(s) space
 * 0th row - space - 4, star - 1, space 4
 * 1st row - space - 3, star - 3, space 3
 * 2nd row - space - 2, star - 5, space 2
 * 3rd row - space - 1, star - 7, space 1
 * 4th row - space - 0, star - 9, space 0
 * We have run inner loops for three times in total, one for the space and one for the star and then loop for space
 * Formula for space: outerloop - 1 - j
 * Formula for stars: 2 * i - 1
 * 3. Print "*" in each column and move to the next line after each row
 */

function pattern7(outerLoop) {
  for (let i = 0; i < outerLoop; i++) {
    //! loop for space
    for (let j = 0; j < outerLoop - 1 - i; j++) {
      document.write("&nbsp;&nbsp;");
    }
    //! loop for stars
    for (let k = 0; k < 2 * i + 1; k++) {
      document.write("*");
    }
    //! loop for space
    for (let j = 0; j < outerLoop - 1 - i; j++) {
      document.write("&nbsp;&nbsp;");
    }
    document.write("<br/>");
  }
}

// Function call to display the pattern
pattern7(5);
