import React, { } from "react";
import "./scrollfull.css";
import {motion} from 'framer-motion'
import {pageVariants, pageTransition, pageStyles} from '../../utils'

const ScrollFull = () => {


  return (
    <motion.div 
    className="container-scrollfull"
    initial="initial" 
    animate="in" 
    exit="out" 
    variants={pageVariants}
    transition={pageTransition}
    style={pageStyles}
    >

      <div className="section">
        <div className="content" id="sectionOne">
          <h2>Section One</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            quidem tenetur debitis assumenda vitae sint rerum nisi hic.
            Dignissimos consequuntur nesciunt suscipit, culpa quaerat similique?
          </p>
        </div>
      </div>
      <div className="section" id="sectionTwo">
        <div className="content">
          <h2>Section Two</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            quidem tenetur debitis assumenda vitae sint rerum nisi hic.
            Dignissimos consequuntur nesciunt suscipit, culpa quaerat similique?
          </p>
        </div>
      </div>
      <div className="section" id="sectionThree">
        <div className="content">
        <a href="/scrollx">Scroll X <i className="bx bx-right-arrow-alt"></i></a>
        </div>
      </div>
      <div className="section" id="sectionFour">
        <div className="content">
          <a href="/">Home <i className="bx bx-right-arrow-alt"></i></a>
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollFull;
