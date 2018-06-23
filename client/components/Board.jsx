import React from 'react'

import Cell from './Cell'
import {generateGrid} from '../array'
import autoPlay from '../autoPlay'


class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = generateGrid(20)
        this.strikeHandler = this.strikeHandler.bind(this)
        this.checkShips = this.checkShips.bind(this)
        this.auto = this.auto.bind(this)
    }

    strikeHandler(cell) {
        if (this.state.destroyed) return
        if (!this.props.turn) return         
        const grid = this.state.grid
        grid[cell.row][cell.col].hit = true
        this.checkShips()      
        this.setState({grid})
        if (this.state.ships.length<1) {
            this.setState({destroyed: true})
            this.props.gameWon(this.props.name)
        }
        else this.props.changeTurn()
    }

    checkShips(){
        let ships = this.state.ships
        ships.forEach((ship, i) => {
           if (this.checkSunk(ship, i)){
               ship.forEach(cell => cell.sunk = true)
               let sunk = this.state.sunk
               sunk.push(ship)
               ships.splice(i, 1)
               this.setState({sunk, ships})
           }
        });
    }

    checkSunk(ship){
        let cellsRemaining = ship.filter(cell => !cell.hit)
        return (cellsRemaining.length < 1)
    }
    
    auto(){
        this.strikeHandler(autoPlay.takeTurn(this.state.grid))
    }

    render(){
        if (this.props.computer && this.props.turn) setTimeout(this.auto, 500)        
        const grid = this.state.grid
        const width = this.props.width
        const cellSize = width / grid.length
        const strikeHandler = this.props.computer ? ()=>'' : this.strikeHandler
        return (
            <div className='board' >
                <h1>{this.props.name || 'Player'}</h1>
                <div className={`grid ${this.props.turn && 'turn'}`} >
                    {this.state.grid.map((row, i) => (
                        <div key={i} className='row' style={{height: cellSize}}>
                            {row.map((cell, i) => (
                                <Cell key={i} strikeHandler={strikeHandler} cellSize={cellSize} cell={cell}/>
                            ))}
                        </div>
                    ))}
                </div>
                {this.state.destroyed && <h1>All Ships Destroyed</h1>}
            </div>
        )
    }
}

export default Board
