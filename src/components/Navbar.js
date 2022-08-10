import logo from '../images/logo192.png'
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
            <h4 className='project-name'>React Course - Project 1</h4>
        </nav>
    )
}