import React from "react";
import {motion} from 'framer-motion'
import {pageVariants, pageTransition, pageStyles} from '../../utils'
import './home.css'

const Home = () => {

    
    return (
      <motion.div 
      className="container"
      initial="initial" 
      animate="in" 
      exit="out" 
      variants={pageVariants}
      transition={pageTransition}
      style={pageStyles}
      >
          <div className="home-title">
              <h1>React-Utils Scroll</h1>
          </div>
          <div className="links">
              <p><motion.a  href="/scrollfull">Scroll Full Page</motion.a></p>
              <p><motion.a  href="/scrollx">Scroll X Page</motion.a></p>
              <p><motion.a  href="/reactscroll"> React Scroll Animation</motion.a></p>
              {/* <p><motion.a  href="/test"> React Scroll Animation</motion.a></p> */}
          </div>
      </motion.div>
    )
}

export default Home