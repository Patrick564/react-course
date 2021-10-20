import { useState } from 'react'

const App = () => {
    const [value, setValue] = useState({
        normal: 'default',
        text: '',
        select: '',
        check: false,
        estado: 'feliz'
    })
    const handleChange = ({ target }) => {
        console.log(target.name)
        setValue((state) => ({
            ...state,
            [target.name]: target.type === 'checkbox' ? target.checked : target.value,
        }))
    }

    console.log(value)

    return (
        <div>
            {value.length < 5 ? <span>Min 5 length</span> : null}
            <input type={'text'} name={'normal'} value={value.normal} onChange={handleChange} />
            <textarea name={'text'} value={value.text} onChange={handleChange} cols="30" rows="10" />

            <select value={value.select} name={'select'} onChange={handleChange}>
                <option value=''>-- Select --</option>
                <option value='happy-porky'>-- Happy Porky --</option>
                <option value='happy-porky-jr'>-- Happy Porky Jr --</option>
                <option value='sad-porky'>-- Sad Porky --</option>
            </select>

            <input
                type={'checkbox'}
                name={'check'}
                onChange={handleChange}
                checked={value.check}
            />

            <div>
                <label>Porky</label>
                <input
                    onChange={handleChange}
                    type="radio"
                    value={'feliz'}
                    name={'estado'}
                    checked={value.estado === 'feliz'}
                /> Feliz
                <input
                    onChange={handleChange}
                    type="radio"
                    value={'triste'}
                    name={'estado'}
                    checked={value.estado === 'triste'}
                /> Triste
                <input
                    onChange={handleChange}
                    type="radio"
                    value={'felipe'}
                    name={'estado'}
                    checked={value.estado === 'felipe'}
                /> Felipe
            </div>
        </div>
    )
}

export default App
