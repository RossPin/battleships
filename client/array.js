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
                hit: false
            })
        }
        grid.push(row)
    }
    let ships = placeShips(grid)
    return grid
}

module.exports = {
    generateGrid
}
