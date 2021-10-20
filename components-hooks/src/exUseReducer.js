import { useReducer, useState } from 'react'

// cont state = { counter: 0 }
// const action = { type: 'CLEAR', payload: {'any'} }
const initial = { counter: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + 1 }
        case 'decrement':
            return { counter: state.counter - 1 }
        case 'set':
            return { counter: action.payload }
        default:
            return state
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initial)
    const [value, setValue] = useState(0)

    return (
        <div>
            Counter: {state.counter}
            <input type={'number'} value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => dispatch({ type: 'increment' })}>More</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Minus</button>
            <button onClick={() => dispatch({ type: 'set', payload: Number(value) })}>Set</button>
        </div>
    )
}
