import React from 'react'

import Board from './Board'

const width = 500

const App = () => (  
  <div className='game' style={{width: width*2}}>  
    <Board name='Player 1' width={width}/>
    <Board name='Player 2' width={width}/>
  </div>
)

export default App
