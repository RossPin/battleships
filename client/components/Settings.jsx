import React from 'react'

class Settings extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name1: props.name1,
            computer1: props.computer1,
            name2: props.name2,
            computer2: props.computer2
        }
        this.onChange = this.onChange.bind(this)
        this.radioOnChange = this.radioOnChange.bind(this)
        this.startBtn = this.startBtn.bind(this)
    }

    onChange(e){
        const currentState = this.state
        currentState[e.target.name] = e.target.value
        this.setState(currentState)
    }

    radioOnChange(e){
      const currentState = this.state
      currentState[e.target.name] = (e.target.value == 'true')
      this.setState(currentState)
  }

    startBtn(e){
      e.preventDefault()
      this.props.startGame(this.state)
    }

    render(){
        return (
            <div className='settings'>
                <h1>Settings</h1>
                <form>
                    <input name='name1' value={this.state.name1} type='text' onChange={this.onChange} />
                    <input type='radio' name='computer1' value='true' checked={this.state.computer1} onChange={this.radioOnChange}/>Computer
                    <input type='radio' name='computer1' value='false' checked={!this.state.computer1} onChange={this.radioOnChange}/>Human
                </form>
                <form>
                    <input name='name2' value={this.state.name2} type='text' onChange={this.onChange} />
                    <input type='radio' name='computer2' value='true' checked={this.state.computer2} onChange={this.radioOnChange}/>Computer
                    <input type='radio' name='computer2' value='false' checked={!this.state.computer2} onChange={this.radioOnChange}/>Human
                    
                </form>
                <button onClick={this.startBtn}>Start Game</button>
            </div>
        )
    }
}

export default Settings