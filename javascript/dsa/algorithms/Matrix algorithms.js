Reshaping a matrix means to take the same elements in a matrix but change the row and column length. This means that the new matrix needs to have the same elements filled in the same row order as the old matrix. Given a matrix, a new row size x and a new column size y, reshape the matrix. If it is not possible to reshape, return None.

Here's an example and some starter code.

def reshape_matrix(mat, x, y):
  # Fill this in.

print(reshape_matrix([[1, 2], [3, 4]], 1, 4))
# [[1], [2], [3], [4]]

print(reshape_matrix([[1, 2], [3, 4]], 2, 3))
# None


A maze is a matrix where each cell can either be a 0 or 1. A 0 represents that the cell is empty, and a 1 represents a wall that cannot be walked through. You can also only travel either right or down.

Given a nxm matrix, find the number of ways someone can go from the top left corner to the bottom right corner. You can assume the two corners will always be 0.

Example:

Input: [[0, 1, 0], [0, 0, 1], [0, 0, 0]]
# 0 1 0
# 0 0 1
# 0 0 0
Output: 2

The two paths that can only be taken in the above example are: down -> right -> down -> right, and down -> down -> right -> right.

Here's some starter code:

def paths_through_maze(maze):
  # Fill this in.

print(paths_through_maze([[0, 1, 0],
                          [0, 0, 1],
                          [0, 0, 0]]))
# 2


Given a matrix that is organized such that the numbers will always be sorted left to right, and the first number of each row will always be greater than the last element of the last row (mat[i][0] > mat[i - 1][-1]), search for a specific value in the matrix and return whether it exists.

Here's an example and some starter code.

def searchMatrix(mat, value):
  # Fill this in.
  
mat = [
    [1, 3, 5, 8],
    [10, 11, 15, 16],
    [24, 27, 30, 31],
]

print(searchMatrix(mat, 4))
# False

print(searchMatrix(mat, 10))
# True


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


You are given a 2D array of characters, and a target string. Return whether or not the word target word exists in the matrix. Unlike a standard word search, the word must be either going left-to-right, or top-to-bottom in the matrix.

Example:

[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]


Given this matrix, and the target word FOAM, you should return true, as it can be found going up-to-down in the first column.

Here's the function signature:

def word_search(matrix, word):
  # Fill this in.
  
matrix = [
  ['F', 'A', 'C', 'I'],
  ['O', 'B', 'Q', 'P'],
  ['A', 'N', 'O', 'B'],
  ['M', 'A', 'S', 'S']]
print word_search(matrix, 'FOAM')
# True


Given a 2d n x m matrix where each cell has a certain amount of change on the floor, your goal is to start from the top left corner mat[0][0] and end in the bottom right corner mat[n - 1][m - 1] with the most amount of change. You can only move either left or down.

Here's some starter code:

def max_change(mat):
  # Fill this in.

mat = [
    [0, 3, 0, 2],
    [1, 2, 3, 3],
    [6, 0, 3, 2]
]

print(max_change(mat))
# 13


Given a matrix, transpose it. Transposing a matrix means the rows are now the column and vice-versa.

Here's an example:

def transpose(mat):
  # Fill this in.

mat = [
    [1, 2, 3],
    [4, 5, 6],
]

print(transpose(mat))
# [[1, 4],
#  [2, 5],
#  [3, 6]]


/**
 * 
 * Finding Islands
 * 
 * Given a 2-dimensional grid consisting of 1's (land blocks) and 0's (water blocks), count the number of islands present in the grid. The definition of an island is as follows:
1.) Must be surrounded by water blocks.
2.) Consists of land blocks (1's) connected to adjacent land blocks (either vertically or horizontally).
Assume all edges outside of the grid are water.

Input: 
10001
11000
10110
00000

Output: 3
 */

function findNumberOfIslandsInRow(array) {
    
  var rowIsland = []

  
  for(const index in array) {

      if(array[index] === 1) {
          console.log(rowIsland)

          if(rowIsland[rowIsland.length - 1] !== undefined ) {
              if( rowIsland[rowIsland.length - 1].indexOf('-') !=-1 ) {
                  const latestCol = Number(rowIsland[rowIsland.length - 1].split("-")[1])
                  if(latestCol + 1 === index) {                                            
                      rowIsland[rowIsland.length - 1] = rowIsland[rowIsland.length - 1].split("-")[0] +'-' + index 
                  } else {
                      rowIsland.push(index + '')
                  }
              } else {                
                  rowIsland[rowIsland.length - 1] = rowIsland[rowIsland.length - 1] + '-' + index 
              }
              ``
              
          } else {
              rowIsland.push(index + '')
          }

      } else {
          continue
      }
  }
  return rowIsland
}

function findNumberOfIslands(grid) {
  console.log(findNumberOfIslandsInRow(grid[0]))
}

const grid = [
  [1, 1, 0, 0, 1],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0]
]

findNumberOfIslands(grid)