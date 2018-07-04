import React from 'react'



const ShipImage = props => {
    const cellSize = props.cellSize
    const ship = props.ship
    
    return (
      <img className='shipImg' src='/images/DeadFishArt.png' style={{width: (cellSize+1)*ship.length, height: cellSize, top: ship[0].row*(cellSize), left: ship[0].col*(cellSize+1), transform: ship[0].horizontal ? '' : `translateX(${cellSize}px) rotate(90deg)`, transformOrigin: `left top`}} />  
    )
}

export default ShipImage