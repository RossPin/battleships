import React from 'react'

import Game from './Game'
import Settings from './Settings'

const width = 500

function startGame(setting) {
  console.log(setting)
}

const App = () => ( 
  <div>
  <Settings startGame={startGame} />
  <Game width={width} />
  </div>
)

export default App
