
function takeTurn(grid, ships){
    if (ships) {
        if (shipBurning(ships)) return targetShip(grid, ships)
    }
    let row = Math.floor(Math.random()*grid.length)
    let col = Math.floor(Math.random()*grid[row].length)
    if (grid[row][col].hit) return takeTurn(grid)
    else return grid[row][col]   
}

function shipBurning(ships){
    let burning = ships.find(ship => ship.find(cell => (cell.hit && !cell.sunk)))
    return burning
}

function targetShip(grid, ships) {
    let ship = shipBurning(ships)
    let cell = ship.find(cell => !cell.hit)
    return cell
}

module.exports = {
    takeTurn
}