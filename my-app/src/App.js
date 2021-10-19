import { Component } from 'react'

class Input extends Component {
    render() {
        return (
            <input
                value={this.props.value}
                onChange={this.props.onChange}
            />
        )
    }
}

class App extends Component {
    state = {
        name: '',
        last_name: '',
    }

    updateValues = (prop, value) => {
        this.setState({ [prop]: value })
    }

    render() {
        return (
            <p>
                Full name: {`${this.state.name} ${this.state.last_name}`}
                <Input
                    value={this.state.name}
                    onChange={e => this.updateValues('name', e.target.value)}
                />
                <Input
                    value={this.state.last_name}
                    onChange={e => this.updateValues('last_name', e.target.value)}
                />
            </p>
        )
    }
}

/*class Button extends Component {
    state = {}

    constructor(props) {
        super(props)
        console.log('constructor', props)
    }

    componentDidMount() {
        console.log('Im did mount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Im did update', prevProps, prevState)
    }

    componentWillUnmount() {
        console.log('unmount component', this.props, this.state)
    }

    render() {
        console.log('ejecutando metodo render del button')
        return (
            <button onClick={() => this.setState({ prop: 1 })}>
                Send
            </button>
        )
    }
}

class App extends Component {
    state = {
        value: 3,
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <p>Hello world</p>
                {this.state.value === 3 ? <Button chanchito={'feliz'}/> : null}
                <button className={`${this.state.value}`} onClick={() => this.setState({ value: 2 })}>
                    Send in App
                </button>
            </div>
        )
    }
}*/

export default App
