import React, { useState } from "react";


const SidenavMenu = () => {

    const [toggleContent, setToggleContent] = useState(false);

    return (
        <>
        <div className="side-menu_main-links">
            <a href="/">
                <i class='bx bx-home'></i>
                <p>Acceuil</p>
            </a>
        </div>

        <div className="side-menu_main-links">
        <a href=".." onClick={() => setToggleContent(!toggleContent)}>
        <i class='bx bxs-book-content'></i>
        <p>Content</p>
        </a>
        </div>

         {toggleContent && (
        <div className="sub-menu">
               <a href=".."> <i class='bx bx-video'></i><p>Videos</p></a>
               <a href=".."> <i class='bx bx-image-alt' ></i><p>Images</p></a>
        </div>
         )
         }

        <div className="side-menu_main-links">
        <a href="/navbar1"><i class='bx bx-code-block'></i><p>Navbar 1</p> </a>
          
        </div>
        <div className="side-menu_main-links">
        <a href="/navbar2"><i class='bx bx-code-alt' ></i><p>Navbar 2</p></a>
        
        </div>
        <div className="side-menu_main-links">
        <a href="/navbar3"><i class='bx bxl-codepen'></i><p>Navbar 3</p></a>
        </div>
        </>
    )
}

export default SidenavMenu