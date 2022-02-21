import React, { useState } from "react";
import "./navbar2.css";
import { MenuItems } from "./NavbarMenuItems";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

// const MenuNavbar2 = () => (
//   <>
//                       <p><a href="/home">Home</a></p>
//                   <p><a href="/navbar2">Navbar 2</a></p>
//                   <p><a href="/sidenav">Sidenav</a></p>
//   </>
// )


const Navbar2 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar2">
      <h1 className="navbar2_logo">
        React<i class="bx bxl-react"></i>
      </h1>
      <div className="navbar2_menu_links">
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
      <div className="navbar2_menu-icon" onClick={() => setToggle(!toggle)}>
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
          <div className="navbar2-menu_container">
            <div className="navbar2-menu_container-links">
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
  );
};

export default Navbar2;
