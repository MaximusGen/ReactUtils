import React, { useState } from "react";
import './sidenav.css'
import logo from '../../assets/react.png';
import user from '../../assets/user.jpg';
import { BsFillArrowLeftSquareFill, BsSearch,BsFillArrowRightSquareFill } from "react-icons/bs";
import SidenavMenu from "./SidenavMenu";


const Sidenav = () => {
          
   const [inactive, setInactive] = useState(false);

    return(
         <nav className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="side-menu_header">
              <div className="logo">
                <img src={logo} alt="react" />
              </div>
              <div className="toggle-menu-btn" onClick={() =>  setInactive(!inactive)}>
                 {inactive ? 
                 <BsFillArrowRightSquareFill color="#fff" size={25} /> 
                 : 
                 <BsFillArrowLeftSquareFill color="#fff" size={25}  />
                 } 
              </div>
            </div>
            <div className="side-menu_search-input">
              <input type="text" placeholder="Search" />
            <div className="divider"></div>
            </div>


            <div className="side-menu_main">
               <SidenavMenu />
            </div>

            <div className="side-menu_footer">
              <div className="side-menu_footer-avatar">
                <img src={user} alt="user" />
              </div>
              <div className="side-menu_footer-info">
                <h5>Maxime Paupy</h5>
                <p>maximepaupy@gmail.com</p>
              </div>
            </div>

         </nav>
    );
}


export default Sidenav