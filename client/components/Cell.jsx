import React from 'react'



const Cell = props => {
    const clickHandler = () => {
        props.strikeHandler(props.cell)
    }

    const ship = (props.cell.ship) ? 'ship' : ''
    const hit = (props.cell.hit) ? (props.cell.ship) ? 'hit' : 'miss' : ''
    return (
        <div className={`cell ${ship} ${hit}`} style={{height: props.cellSize, width: props.cellSize}} onClick={clickHandler}>
        </div>
    )
}

export default Cell
