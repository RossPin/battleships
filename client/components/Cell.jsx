import React from 'react'

const Cell = props => {
    return (
        <div className='cell' style={{height: props.cellSize, width: props.cellSize}}>
            {`${props.cell.row}, ${props.cell.col}`}
        </div>
    )
}

export default Cell