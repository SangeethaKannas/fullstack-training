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