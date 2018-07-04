
function takeTurn(grid, ships){
    if (shipBurning(ships)) return targetShip(grid, ships)
    let row = Math.floor(Math.random()*grid.length)
    let col = Math.floor(Math.random()*grid[row].length)    
    if (grid[row][col].hit) return takeTurn(grid, ships)
    else if (!shipCanFit(smallestShipLeft(ships), grid[row][col], grid)) return takeTurn(grid, ships)
    else return grid[row][col]   
}

function shipBurning(ships){
    let burning = ships.find(ship => ship.find(cell => (cell.hit && !cell.sunk)))
    return burning
}

function smallestShipLeft(ships){
    let orderedShips = ships.sort((a,b) => a.length - b.length)    
    return orderedShips[0].length
}

function shipCanFit(length, cell, grid){
    const row = cell.row
    const col = cell.col    
    let cellsLeft = 0
    while (cellsLeft < col) {
        if (grid[row][col-cellsLeft-1].hit) break
        else cellsLeft++
    }
    let cellsRight = 0
    while (cellsRight < grid.length - col-1) {
        if (grid[row][col+cellsRight+1].hit) break
        else cellsRight++
    }
    let cellsUp = 0
    while (cellsUp < row) {
        if (grid[row-cellsUp-1][col].hit) break
        else cellsUp++
    }
    let cellsDown = 0
    while (cellsDown < grid.length - row-1) {
        if (grid[row+cellsDown+1][col].hit) break
        else cellsDown++
    }
    if (cellsLeft + cellsRight +1 >= length) return true
    else if (cellsUp + cellsDown +1 >= length) return true
    else return false
}

function targetShip(grid, ships) {
    let ship = shipBurning(ships)
    let cells = ship.filter(cell => cell.hit)
    let cell = (cells.length > 1) ? (isHorizontal(cells) ? hitHorizontal(grid, cells) : hitVertical(grid, cells)) : hitSurround(grid, cells)
    return cell
}

function isHorizontal(cells) {
    return (cells[0].row == cells[1].row) ? true : false
}

function hitSurround(grid, cells) {
    const cell = getEmptySurrounds(grid, cells[0])
    return cell
}

function getEmptySurrounds(grid, cell){
    const row = cell.row
    const col = cell.col
    let surrounds = []
    if (row > 0 && !grid[row-1][col].hit) surrounds.push(grid[row-1][col])
    if (row < grid.length-1 && !grid[row+1][col].hit) surrounds.push(grid[row+1][col])
    if (col > 0 && !grid[row][col-1].hit) surrounds.push(grid[row][col-1])
    if (col < grid.length-1 && !grid[row][col+1].hit) surrounds.push(grid[row][col+1])    
    return surrounds[Math.floor(Math.random()*surrounds.length)]
}


function hitVertical(grid, cells){
    const row = cells[0].row
    const col = cells[0].col
    let cell = {}
    if (row > 0 && !grid[row-1][col].hit) cell = grid[row-1][col]
    else if (row + cells.length < grid.length && !grid[row+cells.length][col].hit) cell = grid[row+cells.length][col]
    return cell
}

function hitHorizontal(grid, cells){
    const row = cells[0].row
    const col = cells[0].col
    let cell = {}
    if (col > 0 && !grid[row][col-1].hit) cell = grid[row][col-1]
    else if (col + cells.length < grid.length && !grid[row][col+cells.length].hit) cell = grid[row][col+cells.length]
    return cell
}

module.exports = {
    takeTurn
}