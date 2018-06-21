

function generateGrid(size) {
    var grid = []
    for (var i=0; i < size; i++){
        var row = []
        for (var j=0; j < size; j++) {
            row.push({
                row: i,
                col: j,
                ship: (Math.random() < 0.1),
                hit: false
            })
        } 
        grid.push(row)
    }
    return grid
}

module.exports = {
    generateGrid
}