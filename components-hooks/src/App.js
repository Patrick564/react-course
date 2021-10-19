import { useState, useEffect } from 'react'

// Hooks rules
// Not for use in loop, conditionals, while, etc only in the top of component
// Just for React Components or Custom Hooks
// A custom Hook ever is call as use* at first
const useCounter = (initial) => {
    const [counter, setCounter] = useState(initial)

    const increment = () => {
        setCounter(counter + 1)
    }

    return [counter, increment]
}

const Interval = ({ counter }) => {
    useEffect(() => {
        const i = setInterval(() => {
            console.log(counter)
        }, 1000)

        return () => clearInterval(i)
    }, [counter])

    return (
        <p>Interval</p>
    )
}

const App = () => {
    let [counter, increment] = useCounter(0)
    useEffect(() => {
        document.title = counter
        console.log('i am an effect')
    }, [counter])

    return (
        <div>
            Counter: {counter}
            <button onClick={increment}>Increment</button>
            <Interval counter={counter} />
        </div>
    )
}

export default App
