import React from 'react'
import VendorPrefix from 'react-vendor-prefix'



const ShipImage = props => {
    const cellSize = props.cellSize
    const ship = props.ship
    const horz = ship[0].horizontal
    const rotate = horz ? '' : 'rotate'
    const rotation = `translateX(${cellSize}px) rotate(90deg)`       
    // const image = ship[0].sunk ? '/images/sunk.png' : `/images/ship${ship.length}.png`
    const image = `/images/ship${ship.length}.png`
    
    return (
      <img className={`shipImg ${rotate}`} src={image} style={{
        width: horz ? (cellSize+1)*ship.length : (cellSize)*ship.length, height: cellSize, 
      top: ship[0].row*(cellSize), left: ship[0].col*(cellSize+1), transform: horz ? '' : rotation,
      WebkitTransform: horz ? '' : rotation, MozTransform: horz ? '' : rotation, MsTransform: horz ? '' : rotation,
      OTransform: horz ? '' : rotation}} />  
    )
}

export default ShipImage