import React from 'react'

import Cell from './Cell'
import {generateGrid} from '../array'

class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            grid: generateGrid(10),
            width: props.width
        }
    }

    render(){
        const grid = this.state.grid
        const height = this.state.width / grid.length
        return (
            <div className='board'>
                <h2>Board</h2>
                {this.state.grid.map((row, i) => (
                    <div key={i} className='row' style={{height: height}}>
                        {row.map((cell, i) => (                            
                                <Cell key={i} height={height} cell={cell}/>                            
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}

export default Board