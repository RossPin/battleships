import React from 'react'

import Game from './Game'
import Settings from './Settings'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
            name1: 'Player 1',
            computer1: false,
            name2: 'Computer',
            computer2: true,
            width: 500
    }
    this.gameStarted = false
    this.startGame = this.startGame.bind(this)
    this.newGame = this.newGame.bind(this)
  }

  startGame(setting) {
    this.gameStarted = true   
    this.setState(setting)    
  }

  newGame(e){
    e.preventDefault()
    this.gameStarted = false
    this.setState({})
  }

  render(){
    return ( 
      <div>
        <h1>BATTLESHIPS</h1>
      {this.gameStarted ? <Game newGame={this.newGame} {...this.state} /> : <Settings startGame={this.startGame} {...this.state} />}     
      </div>
    )
  }
} 

export default App
