import React from 'react'



const Cell = props => {
    const clickHandler = () => {
        props.strikeHandler(props.cell)
    }
    const image = (props.cell.ship) ? '/images/explosion.gif' : '/images/splash.gif'
    const ship = (props.cell.ship) ? 'ship' : ''
    const hit = (props.cell.hit) ? (props.cell.ship) ? 'hit' : 'miss' : ''
    const sunk = (props.cell.sunk) ? 'sunk' : ''
    return (
        <div className={`cell ${ship} ${hit} ${sunk}`} style={{height: props.cellSize, width: props.cellSize}} onClick={clickHandler}>
            {props.cell.animation && <img className='animation' src={`${image}?${Date.now()}`} alt='' />}
        </div>
    )
}

export default Cell
