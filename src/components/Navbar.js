import logo from '../images/logo192.png'
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar(props) {
    console.log(props.styles);
    
    return (
        <nav 
            className='navbar'
            style={props.darkMode ? props.styles.dark.headerBgc : props.styles.light.headerBgc}
        >
            <div className='title-container'>
                <img 
                    src={logo}
                    alt="react logo"
                    className='logo'  />
                <h3 className='page-title'>ReactFacts</h3>
            </div>
            <div className='navbar--darkMode'>
                <FaSun 
                    className='navbar--sun navbar--icon' 
                    fill={props.darkMode ? "#4A4D52" : "#61DAFB"}
                />
                <div className='navbar--toggleBar' onClick={()=> props.toggle()}>
                    <div 
                        className='navbar--toggleCircle'
                        style={props.darkMode ? props.styles.dark.button : props.styles.light.button}
                    ></div>
                </div>
                <FaMoon 
                    className='navbar--moon navbar--icon'
                    fill={props.darkMode ? "#61DAFB" : "#4A4D52"}
                />
            </div>
        </nav>
    )
}