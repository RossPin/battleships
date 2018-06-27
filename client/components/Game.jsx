import React from 'react'

import Board from './Board'
import {generateGrid} from '../array'

class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            player1: {turn: true,
                        computer: false,
                    name: 'Player 1'},
            player2: {turn: false,
                computer: true,
                name: 'Computer'},
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
        winner = player
        this.setState({player1, player2, winner})
    }

    render(){
        return (
            <div>
                <div className='game' style={{width: this.props.width*2}}>  
            <Board {...this.state.player1}  
                    changeTurn={this.changeTurn} gameWon={this.gameWon} width={this.props.width}/>
                    <Board {...this.state.player2}
                    changeTurn={this.changeTurn} gameWon={this.gameWon} width={this.props.width}/>                
                </div>
                {this.state.winner && <h1>{this.state.winner} WINS!!!!!!!</h1>}
            </div>
        )
    }
}

export default Game