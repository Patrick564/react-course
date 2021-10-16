import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import App from './App.js'

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)

//  <p>hola mundo</p>
//  React.createElement('p', null, 'hola mundo')
/*const Li = ({ children, state }) => {
    return (
        <li>{children} {state}</li>
    )
}

const X = () =>
    <ul>
        <Li state={'Happy'} house={false} age={24}>Chanchito</Li>
        <Li state={'Regular'}>Feliz</Li>
        <Li state={'Indifirente'}>Triste</Li>
    </ul>

ReactDOM.render(
    <X />, document.getElementById('root')
)*/

reportWebVitals();
