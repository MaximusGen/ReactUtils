import React from "react";
import "./scrollx.css";

const ScrollX = () => {
  return (
    <>
      <div className="container-scrollx">
        <div className="blockHorizontal">
          <div className="section bg1">
            <a href="#">Slide 1</a>
          </div>
          <div className="section bg2">
            <a href="/reactscroll">React Scroll Animation</a>
          </div>
          <div className="section bg3">
            <a href="/scrollfull">Scroll Full Page</a>
          </div>
          <div className="section bg4">
            <a href="/">Home</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollX;
