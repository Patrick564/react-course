const App = () => {
    const submit = (e) => {
        e.preventDefault()
        const data = Array.from(new FormData(e.target))
        console.log(Object.fromEntries(data))
    }

    return (
        <form onSubmit={submit}>
            <div>
                <span>
                    Lala
                </span>
                <input name={'field'} />
            </div>
            <input name={'campo-2'} />
            <input type={'submit'} value={'Send'} />
        </form>
    )
}