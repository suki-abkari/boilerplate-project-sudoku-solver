class SudokuSolver {
  // The validate function should take a given puzzle string and check it to see if it has 81 valid characters for the input.
   validate(puzzleString) {
    // check if invalid characters
    if(puzzleString.match(/[^1-9\.]/g)) {
      return { error: 'Invalid characters in puzzle' };
    }

    // check if 81 characters
    if (puzzleString.length !== 81) {
      return { error: 'Expected puzzle to be 81 characters long' }
    }

    return {status : 'valid'}
  }
  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    // validate puzzle
    let validate = this.validate(puzzleString)
    if (validate.error) { return validate }

  }

}

module.exports = SudokuSolver;

