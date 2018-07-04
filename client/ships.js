
function placeShips(grid) {
  let ships = []
  ships.push(placeShip(5, grid))
  ships.push(placeShip(4, grid))
  ships.push(placeShip(3, grid))
  ships.push(placeShip(3, grid))
  ships.push(placeShip(2, grid))
  ships.push(placeShip(2, grid)) 
 
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
    Object.assign(grid[row][col+i], {ship: true, horizontal: true})
    ship.push(grid[row][col+i])
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
    Object.assign(grid[row+i][col], {ship: true, horizontal: false})
    ship.push(grid[row+i][col])
  }
  return ship
}

module.exports = {placeShips}
