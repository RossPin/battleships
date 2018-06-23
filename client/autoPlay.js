
function takeTurn(grid){
    let row = Math.floor(Math.random()*grid.length)
    let col = Math.floor(Math.random()*grid[row].length)
    if (grid[row][col].hit) return takeTurn(grid)
    else return grid[row][col]
   
}

module.exports = {
    takeTurn
}