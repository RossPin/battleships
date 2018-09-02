import React from 'react'

import Board from './Board'
import {generateGrid} from '../array'

class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            player1: {turn: true,
                        opponentComputer: props.computer2,
                    name: props.name1},
            player2: {turn: false,
              opponentComputer: props.computer1,
                name: props.name2},
            winner: false            
        }
        this.changeTurn = this.changeTurn.bind(this)
        this.gameWon = this.gameWon.bind(this)
    }

    changeTurn(){
        let {player1, player2} = this.state
        player1.turn = !player1.turn
        player2.turn = !player2.turn
        this.setState({player1, player2})
    }

    gameWon(player){
        let {player1, player2, winner} = this.state
        player1.turn = false
        player2.turn = false
        winner = (player == player1.name) ? player2.name : player1.name
        this.setState({player1, player2, winner})
    }

    render(){
        return (
            <div>
              <button className='newGame' onClick={this.props.newGame}>New Game</button>
              {!this.state.winner && <h2>{this.state.player1.turn ? this.state.player2.name : this.state.player1.name} Attack!!!!</h2>}
              {this.state.winner && <h2>{this.state.winner} WINS!!!!!!!</h2>}
              <div className='game' style={{width: this.props.width*2.524}}>  
                <Board {...this.state.player1} winner={this.state.winner} 
                  changeTurn={this.changeTurn} gameWon={this.gameWon} width={this.props.width}/>
                <Board {...this.state.player2} winner={this.state.winner}
                  changeTurn={this.changeTurn} gameWon={this.gameWon} width={this.props.width}/>                
              </div>
              
            </div>
        )
    }
}

export default Game