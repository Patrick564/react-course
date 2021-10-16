import Button from './Button.js'

const arr = [
    'Chanchito feliz',
    'Chanchito triste',
    'Chanchito emocionado',
]

const App = () => {
    const myVar = false

    if (myVar) {
        return (
            <p>My variable dio true</p>
        )
    }

    return (
        <div>
            <h1 onClick={(e) => console.log('ch1', e)}>Hola mundo</h1>
            { arr.map(el => <p key={el}>{ el }</p>) }
            <Button onClick={() => console.log('click')}>
                Enviar
            </Button>
        </div>
    )
}
