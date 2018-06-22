import {placeShips} from './ships'

function generateGrid(size) {
    var grid = []
    for (var i=0; i < size; i++){
        var row = []
        for (var j=0; j < size; j++) {
            row.push({
                row: i,
                col: j,
                ship: false,
                hit: false,
                sunk: false
            })
        }
        grid.push(row)
    }
    let ships = placeShips(grid)
    let sunk = []
    let destroyed = false    
    return {grid, ships, sunk}
}

module.exports = {
    generateGrid
}
