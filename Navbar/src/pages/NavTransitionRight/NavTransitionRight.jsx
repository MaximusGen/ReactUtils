import './navTransitionRight.css'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from 'react';

const NavTransitionRight = () => {
    const [menuToggle, setToggleMenu] = useState(false)
    return (
        <div className="navTransition-right-container">  
        <div className="toggle-button">
        {menuToggle ? (
          <RiCloseLine
            color="#000"
            size={25}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line color="#000" size={25} onClick={() => setToggleMenu(true)} />
        )}
        </div>

        {menuToggle && (
            <nav className="navTransition-right">
                <div className="navTransition-right_links">
                    <p><a href="/">Home</a></p>
                    <p><a href="/navbar">Navbar</a></p>
                    <p><a href="/navtransition">Nav Transition</a></p>
                </div>
            </nav>
        )}
        </div>
    )
}

export default NavTransitionRight