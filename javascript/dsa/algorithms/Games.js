A Sudoku board is a 9x9 grid, where each row, column and each 3x3 subbox contains the number from 1-9. Here's an example of a Sudoku board.
-------------
|534|678|912|
|672|195|348|
|198|342|567|
|------------
|859|761|423|
|426|853|791|
|713|924|856|
|------------
|961|537|284|
|287|419|635|
|345|286|179|
|------------

Given a 9x9 board, determine if it is a valid Sudoku board. The board may be partially filled, where an empty cell will be represented by the space character ' '.

Here's an example and some starting code:

def validate_sudoku(board):
  # Fill this in.

board = [
    [5, ' ', 4, 6, 7, 8, 9, 1, 2],
    [6, ' ', 2, 1, 9, 5, 3, 4, 8],
    [1,   9, 8, 3, 4, 2, 5, 6, 7],
    [8,   5, 9, 7, 6, 1, 4, 2, 3],
    [4,   2, 6, 8, 5, 3, 7, 9, 1],
    [7,   1, 3, 9, 2, 4, 8, 5, 6],
    [9,   6, 1, 5, 3, 7, 2, 8, 4],
    [2,   8, 7, 4, 1, 9, 6, 3, 5],
    [3,   4, 5, 2, 8, 6, 1, 7, 9],
]

print(validate_sudoku(board))
# True



Given a list of possible coins in cents, and an amount (in cents) n, return the minimum number of coins needed to create the amount n. If it is not possible to create the amount using the given coin denomination, return None.

Here's an example and some starter code:

def make_change(coins, n):
  # Fill this in.
  
print(make_change([1, 5, 10, 25], 36))
# 3 coins (25 + 10 + 1)


Design a Tic-Tac-Toe game played between two players on an n x n grid. A move is guaranteed to be valid, and a valid move is one placed on an empty block in the grid. A player who succeeds in placing n of their marks in a horizontal, diagonal, or vertical row wins the game. Once a winning condition is reached, the game ends and no more moves are allowed. Below is an example game which ends in a winning condition:

Given n = 3, assume that player 1 is "X" and player 2 is "O" 
board = TicTacToe(3);

board.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

board.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

board.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

board.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

board.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

board.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

board.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|


Here's a starting point:

class TicTacToe(object):
  def __init__(self, n):
    # Fill this in.

  def move(self, row, col, player):
    # Fill this in.

board = TicTacToe(3)
board.move(0, 0, 1)
board.move(0, 2, 2)
board.move(2, 2, 1)
board.move(1, 1, 2)
board.move(2, 0, 1)
board.move(1, 0, 2)
print(board.move(2, 1, 1))


N-Queens is the problem where you find a way to put n queens on a nxn chess board without them being able to attack each other. Given an integer n, return 1 possible solution by returning all the queen's position.

Here's an example and some starter code:

def n_queens(n):
  # Fill this in.

print(n_queens(5))
# There can be many answers
# [(0, 0), (1, 2), (2, 4), (3, 1), (4, 3)]

# Q . . . .
# . . . Q .
# . Q . . .
# . . . . Q
# . . Q . .




/**

Simple Calculator

*/
const NUMBER_PATTERN = /[0-9]*/i

const EXPR_PATTERN = /[0-9]*[+-/*/][0-9]/i

const OPERATORS_PATTERN = /[+-/*/]/i;

/**
 * Expression that needs to be arrafied
 * @param {string} expression 
 */
function getValueArrays(expression) {    
    let result = [];
    while(expression.length > 0) {
        let searchString = expression.match(NUMBER_PATTERN);
        result.push(Number(searchString[0]));
        expression = expression.replace(searchString[0], '')
        if(expression.length > 0) {
            result.push(expression[0]);
            expression = expression.substr(1, expression.length);
        } else {
            break;
        }
    }
    
    //If array .contains 

    return result;
}

function calci(inputexpr) {

    const OPERATORS_PATTERN = /[+-/*/]/i;

    //Remove white spaces
    inputexpr = inputexpr.replace(/\s/g, '');    
    let currentValue = 0;

    //Iterate until all brackets are removed
    while( inputexpr.match(OPERATORS_PATTERN).length > 0 ) {

        if(inputexpr.indexOf('(') > - 1 ) {

            //Get the innermost brackets
            let startOfExpr = inputexpr.lastIndexOf('(') + 1;
            
            //Get the enclosing brackets
            let endOfExpr = inputexpr.indexOf(')', startOfExpr);

            //calculate current expression
            let currentExpression = inputexpr.substr( startOfExpr, endOfExpr - startOfExpr ) 
            currentValue = calculateValue( currentExpression );
            console.log("SubString " + currentExpression );
            
            //Replace current expression with corresponding value
            inputexpr = inputexpr.replace( inputexpr.substr(startOfExpr - 1, endOfExpr - startOfExpr + 2), currentValue );
            
            console.log("Input Expression", inputexpr);            

        } else {

            //Evaluvate current expression without brackets
            let startOfExpr = inputexpr.lastIndexOf('/') + 1;
            
            //Get the enclosing brackets
            let endOfExpr = inputexpr.indexOf('/', startOfExpr);
            console.log(getValueArrays(inputexpr));

            break;

        }        
    }    

    return currentValue;
    
    // //Check if 
    // if( inputexpr.match(EXPR_PATTERN) ) {
    //     return calculateValue(inputexpr);
    // } else { // Invalid expression
    //     return undefined;
    // }    
 
}

console.log(calci('1*(2+4)+(3*2)'));

/**
 * Calculates the value of given expression
 * Expected : String is a valid expression
 * @param {string} expression 
 */
function calculateValue(expression) {
    const NUMBER_PATTERN = /[0-9]*/i    

    let firstNumber = expression.match(NUMBER_PATTERN)[0];
    let operator = expression.charAt(firstNumber.length);
    let secondNumber = expression.substring(firstNumber.length + 1, expression.length);
    let value = 0;
    switch(operator){
        case '+': value = Number(firstNumber) + Number(secondNumber);break;
        case '-': value = Number(firstNumber) - Number(secondNumber);break;
        case '*': value = Number(firstNumber) * Number(secondNumber);break;
        case '/': value = Number(firstNumber) / Number(secondNumber);break;
    }
    
    return value;
}
