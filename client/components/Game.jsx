import React from 'react'

import Board from './Board'
import {generateGrid} from '../array'

class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            player1: true,
            player2: false,
            winner: false            
        }
        this.changeTurn = this.changeTurn.bind(this)
        this.gameWon = this.gameWon.bind(this)
    }

    changeTurn(){
        let {player1, player2} = this.state
        player1 = !player1
        player2 = !player2
        this.setState({player1, player2})
    }

    gameWon(player){
        let {player1, player2, winner} = this.state
        player1 = false
        player2 = false
        winner = player
        this.setState({player1, player2, winner})
    }

    render(){
        return (
            <div>
                <div className='game' style={{width: this.props.width*2}}>  
                    <Board name='Player 1' turn={this.state.player1} width={this.props.width} 
                    changeTurn={this.changeTurn} gameWon={this.gameWon}/>
                    <Board name='Player 2' turn={this.state.player2} width={this.props.width} 
                    changeTurn={this.changeTurn} gameWon={this.gameWon}/>                
                </div>
                {this.state.winner && <h1>{this.state.winner} WINS!!!!!!!</h1>}
            </div>
        )
    }
}

export default Game