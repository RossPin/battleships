import React from 'react'

import Cell from './Cell'
import {generateGrid} from '../array'

class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            grid: generateGrid(10),            
        }
    }

    render(){
        const grid = this.state.grid
        const cellSize = this.props.width / grid.length
        return (
            <div className='board' style={{width: this.props.width}}>
                <h2>Board</h2>
                {this.state.grid.map((row, i) => (
                    <div key={i} className='row' style={{height: cellSize}}>
                        {row.map((cell, i) => (                            
                                <Cell key={i} cellSize={cellSize} cell={cell}/>                            
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}

export default Board