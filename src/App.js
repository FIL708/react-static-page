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
        backgroundColor: "#21222A"
      },
      mainBgc: {
        backgroundColor: "#282D35"
      },
      font: {
        color: "#FFFFFF"
      },
      button: {
        transform: "translateX(100%) translateY(-50%)"
      }
    },
    light: {
      headerBgc: {
        backgroundColor: "#e0aba8"
      },
      mainBgc: {
        backgroundColor: "#FFFFFF"
      },
      font: {
        color: "#2B283A"
      },
      button: {
        transform: "translateX(0) translateY(-50%)"
      }
    }
  }

  return (
    <div className='container'>
      <Navbar 
        darkMode={darkMode} 
        toggle={changeDarkMode} 
        styles={styles} 
      />
      <Main 
        darkMode={darkMode}
        styles={styles}
      />
    </div>
  )
}

export default App;
