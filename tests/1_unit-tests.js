const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
const puzzlesAndSolutions = require('../controllers/puzzle-strings');
let solver = new Solver();

suite('UnitTests', () => {
  suite('Function validate(puzzleString)', function() {

    test('logic handles a valid puzzle string of 81 characters', function(done) {

      let input = puzzlesAndSolutions.puzzlesAndSolutions[0]
      input = input[0].split(',')
      input = input[0];
      assert.equal(solver.validate(input), true);
      done();
    });
  })
});