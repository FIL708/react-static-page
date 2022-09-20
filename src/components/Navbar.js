import logo from '../images/logo192.png'
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='title-container'>
                <img 
                    src={logo}
                    alt="react logo"
                    className='logo'  />
                <h3 className='page-title'>ReactFacts</h3>
            </div>
            <div className='navbar--darMode'>
                <FaSun className='navbar--sun'/>
                <div className='navbar--toggleBar'>
                    <div className='navbar--toggleCircle'></div>
                </div>
                <FaMoon className='navbar--moon'/>
            </div>
        </nav>
    )
}