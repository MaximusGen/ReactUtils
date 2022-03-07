import React, { useState } from "react";
import './navbarResponsive.css'
import { MenuItems } from "./NavbarMenu";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const NavbarResponsive = () => {

    const [toggle, setToggle] = useState(false);


    return (
        <nav className="navbar">
        <h1 className="navbar_logo">
          React<i class="bx bxl-react"></i>
        </h1>
        <div className="navbar_menu_links">
          {MenuItems.map((item, index) => {
            return (
              <p key={index}>
                <a href={item.url} className={item.class}>
                  {item.title}
                </a>
              </p>
            );
          })}
        </div>
        <div className="navbar_menu-icon" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggle(false)}
            />
          ) : (
            <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)} />
          )}
              </div>
          {toggle && (
            <div className="navbar-menu_container">
              <div className="navbar-menu_container-links">
              {MenuItems.map((item, index) => {
            return (
              <p key={index}>
                <a href={item.url} className={item.class}>
                  {item.title}
                </a>
              </p>
            );
          })}
              </div>
            </div>
          )}
      </nav>
    )
}


export default  NavbarResponsive