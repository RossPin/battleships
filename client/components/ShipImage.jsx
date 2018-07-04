import React from 'react'



const ShipImage = props => {
    const cellSize = props.cellSize
    const ship = props.ship
    //const image = ship[0].sunk ? '/images/sunk.png' : `/images/ship${ship.length}.png`
    const image = `/images/ship${ship.length}.png`
    
    return (
      <img className='shipImg' src={image} style={{width: ship[0].horizontal ? (cellSize+1)*ship.length : (cellSize)*ship.length, height: cellSize, top: ship[0].row*(cellSize), left: ship[0].col*(cellSize+1), transform: ship[0].horizontal ? '' : `translateX(${cellSize}px) rotate(90deg)`, transformOrigin: `left top`}} />  
    )
}

export default ShipImage