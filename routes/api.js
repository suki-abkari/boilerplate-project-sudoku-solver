'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function(app) {

  let solver = new SudokuSolver();

  app.route('/api/check') 
    .post((req, res) => {

    });

  // You can POST /api/solve with form data containing puzzle which will be a string containing a combination of numbers (1-9) and periods . to represent empty spaces. The returned object will contain a solution property with the solved puzzle.
  app.route('/api/solve')
    .post((req, res) => {
      let puzzle = req.body.puzzle
      let error;

      // error if puzzle is missing
      if (puzzle == null) {
        error = { error: 'Required field missing' }
        res.json(error)
      }

      // solve puzzle
      let result = solver.solve(puzzle)
      res.json(result)
    });
};
