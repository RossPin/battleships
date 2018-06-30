import React from 'react'

import Cell from './Cell'
import {generateGrid} from '../array'
import {placeShips} from '../ships'
import autoPlay from '../autoPlay'

class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           grid: generateGrid(15),
           sunk: []                      
        } 
        this.destroyed = false       
        this.processing = false
        this.strikeHandler = this.strikeHandler.bind(this)
        this.checkShips = this.checkShips.bind(this)
        this.auto = this.auto.bind(this)
    }

    componentDidMount(){
        const grid = this.state.grid
        const ships = placeShips(grid)
        this.setState({grid, ships})
    }

    strikeHandler(cell) {
        if (cell.hit || !this.props.turn || this.processing) return        
        this.processing =true
        const timeout = cell.ship ? 2000 : 1200          
        const grid = this.state.grid
        grid[cell.row][cell.col].hit = true
        grid[cell.row][cell.col].animation = true
        //this.playSound(cell.ship)             
        this.setState({grid})
        setTimeout(()=>{
            this.checkShips()
            grid[cell.row][cell.col].animation = false
            this.setState({grid})
            this.processing = false
            if (this.state.ships.length<1) {
                this.destroyed = true
                this.props.gameWon(this.props.name)
            }
            else this.props.changeTurn()
        }, timeout)                
    }

    playSound(ship){
        const soundFile = ship ? '/sounds/bomb.mp3' : '/sounds/splash.mp3'
        const audio = new Audio(soundFile)
        audio.play()
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
        this.strikeHandler(autoPlay.takeTurn(this.state.grid, this.state.ships))
    }

    render(){
        if (this.props.opponentComputer && this.props.turn && !this.processing) setTimeout(this.auto, 500)        
        const grid = this.state.grid
        const width = this.props.width
        const cellSize = width / grid.length
        const strikeHandler = this.props.opponentComputer ? ()=>'' : this.strikeHandler
        return (
            <div className='board' >                
                <div className={`gridSurround${this.props.turn ? 'Turn' : ''}`} >
                  <div className={`grid ${this.props.turn && 'turn'}`} >
                      {this.state.grid.map((row, i) => (
                          <div key={i} className='row' style={{height: cellSize}}>
                              {row.map((cell, i) => (
                                  <Cell key={i} strikeHandler={strikeHandler} cellSize={cellSize} cell={cell}/>
                              ))}
                          </div>
                      ))}
                  </div>
                </div>
                <h2>{this.props.name || 'Player'}</h2>
                {this.destroyed && <h2>All Ships Destroyed</h2>}
            </div>
        )
    }
}

export default Board
