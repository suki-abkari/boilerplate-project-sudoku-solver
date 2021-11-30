'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function(app) {

  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {

    });

  // You can POST /api/solve with form data containing puzzle which will be a string containing a combination of numbers (1-9) and periods . to represent empty spaces. The returned object will contain a solution property with the solved puzzle.
  app.route("/api/solve").post((req, res) => {
    const puzzleString = req.body.puzzle;

    // If the object submitted to /api/solve is missing puzzle
    if (!puzzleString) return res.json({ error: "Required field missing" });

    // If the puzzle submitted to /api/solve is greater or less than 81 characters
    if (!solver.validate(puzzleString))
      return res.json({ error: "Expected puzzle to be 81 characters long" });

     const solution = solver.solve(puzzleString);
    // If the puzzle submitted to /api/solve is invalid or cannot be solved
    if (!solution) return res.json({ error: 'Puzzle cannot be solved' });
    res.json({ solution });
  });
};
