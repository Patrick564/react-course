// import logo from './logo.svg';
// import './App.css';
import './main.css'

const style = ({ bg = '#222' }) => ({
    backgroundColor: bg,
    color: '#fff',
    padding: '10px 15px',
    margin: '10px 15px',
})

const style2 = {
    boxShadow: '0 5px 3px rgba(0, 0, 0, 0.5',
}

const Li = ({ children }) => {
  return (
      <li className='class-li'>
          {children}
      </li>
  )
}

function App() {
  //  const valor = 'feliz'

  return (
      <ul className='class-css'>
        <Li state='feliz'>Valor de li</Li>
      </ul>
  )
}

export default App
