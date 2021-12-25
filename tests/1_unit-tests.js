const chai = require("chai");
const assert = chai.assert;

const Solver = require("../controllers/sudoku-solver.js");
const puzzlesAndSolutions = require("../controllers/puzzle-strings");
let solver = new Solver();

const invalidPuzzle = "X.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.";
// let invalidPuzzle = "X.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.";
let validPuzzle = "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.";

suite("UnitTests", () => {
  suite("Function validate(puzzleString)", function () {
    // valid puzzle string of 81 characters
    test("logic handles a valid puzzle string of 81 characters", function (done) {
      let input = puzzlesAndSolutions.puzzlesAndSolutions[0];
      input = input[0].split(",");
      input = input[0];
      assert.equal(solver.validate(input), true);
      done();
    });
    // puzzle string with invalid characters (not 1-9 or .)
    test("logic handles a puzzle string with invalid characters (not 1-9 or .)", function (done) {
      let result = "Invalid characters in puzzle";
      assert.equal(solver.solve(invalidPuzzle).error, result);
      done();
    });

    // puzzle string that is not 81 characters in length
    test("logic handles a puzzle string that is not 81 characters in length)", function (done) {
        let result = "Invalid characters in puzzle"
        assert.equal(solver.solve(invalidPuzzle).error, result);
        done();
    });
  });
});
