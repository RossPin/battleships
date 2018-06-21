import React from 'react'

const Cell = props => {
    const ship = (props.cell.ship) ? 'ship' : ''    
    return (
        <div className={`cell ${ship}`} style={{height: props.cellSize, width: props.cellSize}}>
        </div>
    )
}

export default Cell