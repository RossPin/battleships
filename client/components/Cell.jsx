import React from 'react'

const Cell = props => {
    return (
        <div className='cell' style={{height: props.cellSize, width: props.cellSize}}>
        </div>
    )
}

export default Cell