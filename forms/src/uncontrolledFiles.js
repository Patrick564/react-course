import { useRef } from 'react'

const App = () => {
    const input = useRef()
    const file = useRef()
    const submit = () => {
        console.log(input.current.value)
        const form = new FormData()
        form.append('archive', file.current.files[0])
        form.append('field', input.current.value)
        fetch('/lala', { method: 'POST', body: form })
    }

    return (
        <div>
            <div>
                <span>Lala</span>
                <input type="text" name={'field'} ref={input} />
                <input type="file" name={'file'} ref={file} />
            </div>
            <input type="submit" value={'send'}  onClick={submit} />
        </div>
    )
}