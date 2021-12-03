# [Sudoku Solver](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/sudoku-solver)

## User Stories

1. You can POST /api/solve with form data containing puzzle which will be a string containing a combination of numbers (1-9) and periods . to represent empty spaces. The returned object will contain a solution property with the solved puzzle.
2. If the object submitted to /api/solve is missing puzzle, the returned value will be { error: 'Required field missing' }
3. If the puzzle submitted to /api/solve contains values which are not numbers or periods, the returned value will be { error: 'Invalid characters in puzzle' }
4. If the puzzle submitted to /api/solve is greater or less than 81 characters, the returned value will be { error: 'Expected puzzle to be 81 characters long' }
5. If the puzzle submitted to /api/solve is invalid or cannot be solved, the returned value will be { error: 'Puzzle cannot be solved' }
6. You can POST to /api/check an object containing puzzle, coordinate, and value where the coordinate is the letter A-I indicating the row, followed by a number 1-9 indicating the column, and value is a number from 1-9.
7. The return value from the POST to /api/check will be an object containing a valid property, which is true if the number may be placed at the provided coordinate and false if the number may not. If false, the returned object will also contain a conflict property which is an array containing the strings "row", "column", and/or "region" depending on which makes the placement invalid.
8. If value submitted to /api/check is already placed in puzzle on that coordinate, the returned value will be an object containing a valid property with true if value is not conflicting.
9. If the puzzle submitted to /api/check contains values which are not numbers or periods, the returned value will be { error: 'Invalid characters in puzzle' }
10. If the puzzle submitted to /api/check is greater or less than 81 characters, the returned value will be { error: 'Expected puzzle to be 81 characters long' }
11. If the object submitted to /api/check is missing puzzle, coordinate or value, the returned value will be { error: Required field(s) missing }
12. If the coordinate submitted to api/check does not point to an existing grid cell, the returned value will be { error: 'Invalid coordinate'}
13. If the value submitted to /api/check is not a number between 1 and 9, the returned values will be { error: 'Invalid value' }
14. All 12 unit tests are complete and passing. See /tests/1_unit-tests.js for the expected behavior you should write tests for.
15. All 14 functional tests are complete and passing. See /tests/2_functional-tests.js for the functionality you should write tests for.


## Main functions
- The validate function should take a given puzzle string and check it to see if it has 81 valid characters for the input.
- The check functions should be validating against the current state of the board.
- The solve function should handle solving any given valid puzzle string, not just the test inputs and solutions. You are expected to write out the logic to solve this.


## Tests

### Unit tests
1. Logic handles a valid puzzle string of 81 characters
2. Logic handles a puzzle string with invalid characters (not 1-9 or .)
3. Logic handles a puzzle string that is not 81 characters in length
4. Logic handles a valid row placement
5. Logic handles an invalid row placement
6. Logic handles a valid column placement
7. Logic handles an invalid column placement
8. Logic handles a valid region (3x3 grid) placement
9. Logic handles an invalid region (3x3 grid) placement
10. Valid puzzle strings pass the solver
11. Invalid puzzle strings fail the solver
12. Solver returns the expected solution for an incomplete puzzle

### Functional tests
1. Solve a puzzle with valid puzzle string: POST request to /api/solve
2. Solve a puzzle with missing puzzle string: POST request to /api/solve
3. Solve a puzzle with invalid characters: POST request to /api/solve
4. Solve a puzzle with incorrect length: POST request to /api/solve
5. Solve a puzzle that cannot be solved: POST request to /api/solve
6. Check a puzzle placement with all fields: POST request to /api/check
7. Check a puzzle placement with single placement conflict: POST request to /api/check
8. Check a puzzle placement with multiple placement conflicts: POST request to /api/check
9. Check a puzzle placement with all placement conflicts: POST request to /api/check
10. Check a puzzle placement with missing required fields: POST request to /api/check
11. Check a puzzle placement with invalid characters: POST request to /api/check
12. Check a puzzle placement with incorrect length: POST request to /api/check
13. Check a puzzle placement with invalid placement coordinate: POST request to /api/check
14. Check a puzzle placement with invalid placement value: POST request to /api/check
