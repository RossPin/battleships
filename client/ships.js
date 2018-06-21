
function placeShips(grid) {
  let ships = {
  ship1: placeShip(5, grid),
  ship2: placeShip(4, grid),
  ship3: placeShip(3, grid),
  ship4: placeShip(3, grid),
  ship5: placeShip(2, grid),
  ship6: placeShip(2, grid)
  }
  return ships
}

function placeShip(length, grid){
  if (Math.random() > 0.5) return placeShipHorizontal(length, grid)
  else return placeShipVertical(length, grid)
}

function placeShipHorizontal(length, grid) {
  const row = Math.floor(Math.random()*grid.length)
  const col = Math.floor(Math.random()*(grid.length - length))
  let ship = []
  for (let i=0; i<length; i++){
    if (grid[row][col+i].ship) return placeShipHorizontal(length, grid)
  }
  for (let i=0; i<length; i++){
    grid[row][col+i].ship = true
    ship.push([row, col+i])
  }
  return ship
}

function placeShipVertical(length, grid) {
  const col = Math.floor(Math.random()*grid.length)
  const row = Math.floor(Math.random()*(grid.length - length))
  let ship = []
  for (let i=0; i<length; i++){
    if (grid[row+i][col].ship) return placeShipHorizontal(length, grid)
  }
  for (let i=0; i<length; i++){
    grid[row+i][col].ship = true
    ship.push([row+i, col])
  }
  return ship
}

module.exports = {placeShips}
