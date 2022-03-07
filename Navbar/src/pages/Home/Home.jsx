import React from "react";
import './home.css';


const Home = () => {
    return(
      <>
      <h1 className="title">Utils React Navbar</h1>
      <div className="container-home">
          <a href="/navbar"><span>Navbar</span></a>
          <a href="/navtransition"><span>Nav Transition</span></a>
          <a href="/navtransitionright"><span>Navbar Transition Right</span></a>
      </div>
      </>
    );
}


export default Home