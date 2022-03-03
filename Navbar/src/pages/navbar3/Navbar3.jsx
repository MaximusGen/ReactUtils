import React, { useState } from "react";
import './navbar3.css';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";


const Navbar3 = () => {
    const [menuToggle, setToggleMenu] = useState(false)

    return (
        <div className="containernavbar3">  
        <div className="toggle-button">
        {menuToggle ? (
          <RiCloseLine
            color="#000"
            size={35}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line color="#000" size={35} onClick={() => setToggleMenu(true)} />
        )}
        </div>

        {menuToggle && (
            <nav className="navbar3">
                <div className="navbar3_links">
                    <p><a href="#acceuil" onClick={() => setToggleMenu(false)}>Acceuil</a></p>
                    <p><a href="#navbar1" onClick={() => setToggleMenu(false)}>Navbar 1</a></p>
                    <p><a href="#navbar2" onClick={() => setToggleMenu(false)}>Navbar 2</a></p>
                    <p><a href="#sidenav" onClick={() => setToggleMenu(false)}>Sidenav</a></p>
                </div>
            </nav>
        )}
        </div>
    )
}

export default Navbar3;