import React, { useState } from "react";
import './navbar1.css';
import logo from '../../assets/logo2.png';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
    <>
                        <p><a href="/home">Home</a></p>
                    <p><a href="/navbar2">Navbar 2</a></p>
                    <p><a href="/sidenav">Sidenav</a></p>
    </>
)

const Navbar1 = () => {
   const [toggle, setToggle] = useState(false)

    return (
        <header>
        <nav className="navbar1">
            <div className="nav-links">
                <div className="nav-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                
                <div className="nav-links_container">
                   <Menu />
                </div>
            </div>
            <div className="nav-sign">
                <p>Sign in</p>
                <button type="button" className="">Sign Up</button>
            </div>
            <div className="nav-menu">
               {toggle    
               ?  < RiCloseLine color="#fff" size={27} onClick={() => setToggle(false)}/>
               :  <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)}/>
             }
             {toggle && (
                 <div className="nav-menu_container scale-up-center">
                    <div className="nav-menu_container-links">
                       <Menu />
                    </div>
                    <div className="nav-menu_container-links-sign">
                    <p>Sign in</p>
                <button type="button" className="">Sign Up</button>
                    </div>
                 </div>
             )}
            </div>
        </nav>
        </header>
        
    )
}

export default Navbar1;