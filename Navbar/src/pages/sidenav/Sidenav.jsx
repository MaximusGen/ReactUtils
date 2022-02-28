import React, { useState } from "react";
import './sidenav.css'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";


const Sidenav = () => {
          
   const [inactive, setInactive] = useState(false);

    return(
      <>
         <nav className="side-menu">
              <div className="toggle-menu-btn" onClick={() =>  setInactive(!inactive)}>
                 {inactive ? 
                 <RiMenu3Line color="#fff" size={30} /> 
                 : 
                 <RiCloseLine color="#fff" size={30}  />
                 } 
              </div>
              <div className="side-menu_main">
                 <p>Text</p>
                 <p>Text</p>
                 <p>Text</p>
                 <p>Text</p>
              </div>
         </nav>


            <div className="side-menu_main">
            </div>

            </>
    );
}


export default Sidenav