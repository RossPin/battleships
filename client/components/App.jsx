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
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const width = (window.window.innerHeight*1.4 < window.window.innerWidth) ? window.window.innerHeight*0.5419 : window.window.innerWidth*0.38

    this.setState({width});
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
