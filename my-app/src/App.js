import { Component } from 'react'

class App extends Component {
    state = {
        value: 3,
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <p>Hello world</p>
                <button className={`${this.state.value}`} onClick={() => this.setState({ value: 2 })}>
                    Send
                </button>
            </div>
        )
    }
}

export default App
