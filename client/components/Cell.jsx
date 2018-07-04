import React from 'react'



const Cell = props => {
    const clickHandler = () => {
        props.strikeHandler(props.cell)
    }
    const image = (props.cell.ship) ? '/images/explosion.gif' : '/images/splash.gif'
    const ship = (props.cell.ship) ? (props.opponentComputer) ? 'ship' : 'hiddenShip' : ''    
    const miss = (props.cell.hit && !props.cell.ship) ?  'miss' : ''
    const sunk = (props.cell.sunk) ? 'sunk' : ''
    return (
        <div className={`cell ${ship} ${miss} ${sunk}`} style={{height: props.cellSize, width: props.cellSize}} onClick={clickHandler}>
            {(props.cell.hit && props.cell.ship) && <img className='animation' src={`/images/fire.gif`} alt='' />} 
            {props.cell.animation && <img className='animation' src={`${image}?${Date.now()}`} alt='' />}
        </div>
    )
}

export default Cell
