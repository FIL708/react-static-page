import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(true)

  const changeDarkMode = () => {
    console.log("turn")
    setDarkMode(prevState => !prevState)
  }

  return (
    <div className='container'>
      <Navbar darkMode={darkMode} toggle={changeDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App;
