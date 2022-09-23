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

  const styles = {
    dark: {
      headerBgc: {
        backGroundColor: "#21222A"
      },
      mainBgc: {
        backGroundColor: "#F5F5F5"
      },
      font: {
        color: "#FFFFFF"
      }
    },
    light: {
      bgc: {
        backGroundColor: "#FFFFFF"
      },
      font: {
        color: "#2B283A"
      }
    }
  }

  return (
    <div className='container'>
      <Navbar darkMode={darkMode} toggle={changeDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App;
