import React from "react";
import './home.css';


const Home = () => {
    return(
      <>
      <h1 className="title">Utils React Navbar</h1>
      <div className="container-home">
          <a href="/navbar1"><span>Navbar 1</span></a>
          <a href="/navbar2"><span>Navbar 2</span></a>
          <a href="/navbar3"><span>Navbar 3</span></a>
          {/* <a href="/sidenav"><span>SideNav</span></a> */}
      </div>
      </>
    );
}


export default Home