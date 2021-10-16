import logo from './logo.svg';
import './App.css';

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
