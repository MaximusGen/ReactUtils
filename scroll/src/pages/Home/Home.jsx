import React from "react";
import {motion} from 'framer-motion'
import './home.css'

const Home = () => {
    const variants = {
       initial: {
        opacity:0,
        x:-500
       },
       out: {
         opacity:1,
         x:0
       }
    }

    const transition = {
        type: 'spring',
        duration: 1,
    }
    
    return (
      <motion.div 
      className="container"
      initial="initial"
      animate="out"
      variants={variants}
      transition={transition}
      >
          <div className="home-title">
              <h1>React-Utils Scroll</h1>
          </div>
          <div className="links">
              <p><motion.a  href="/scrollfull">Scroll Full Page</motion.a></p>
          </div>
      </motion.div>
    )
}

export default Home