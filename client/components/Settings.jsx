import React from 'react'

class Settings extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name1: 'Player 1',
            computer1: false,
            name2: 'Computer',
            computer2: true
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        const currentState = this.state
        currentState[e.target.name] = e.target.value
        this.setState(currentState)
    }

    render(){
        return (
            <div>
                <h1>Settings</h1>
                <form>
                    <input name='name1' value={this.state.name1} type='text' onChange={this.onChange} />
                    <input type='radio' name='computer1' value={true} />Computer
                    <input type='radio' name='computer1' value={false} checked/>Human
                </form>
                <form>
                    <input name='name2' value={this.state.name2} type='text' onChange={this.onChange} />
                    <input type='radio' name='computer2' value={true} checked/>Computer
                    <input type='radio' name='computer2' value={false} />Human
                    <input type='submit' value='Start Game' onClick={() => this.props.startGame(this.state)} />
                </form>
            </div>
        )
    }
}

export default Settings