import './navTransitions.css';


const NavTransitions = () => {

    const navClick = (e) => {
        e.preventDefault();
        const menu = document.querySelector(".navTransition-menu")
        const menuOverlay = document.querySelector(".navTransition-menu-overlay")
 
         menu.classList.toggle("open")
         menuOverlay.classList.toggle("open")
     }
     
    return (
        <div className="navTransition-container">
        <div className="navTransition-menu" onClick={navClick}>
          <span className="navTransition-menu-circle"></span>
          <a href="#" className="navTransition-menu-link">
            <span className="navTransition-menu-icon">
              <span className="navTransition-menu-line menu-line-1"></span>
              <span className="navTransition-menu-line menu-line-2"></span>
              <span className="navTransition-menu-line menu-line-3"></span>
            </span>
          </a>
        </div>
  
        <div className="navTransition-menu-overlay">
          <a href="/">Home</a>
          <a href="/navbar">Navbar</a>
          <a href="/navtransitionright">Nav Transition Right</a>
        </div>

        <div className="content-block bg1"></div>
        {/* <div className="content-block bg2"></div>
        <div className="content-block bg3"></div>
        <div className="content-block bg4"></div> */}
      </div>
    )
}

export default NavTransitions