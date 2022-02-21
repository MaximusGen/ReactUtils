import React from 'react'
import {pageVariants, pageTransition, pageStyles} from '../App'
import {motion} from 'framer-motion'

const About = () => {
    return(
        <motion.div 
        initial="initial" 
        animate="in" 
        exit="out" 
        variants={pageVariants}
        transition={pageTransition}
        style={pageStyles}
        >
        <h1>About</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          deleniti.
        </p>
      </motion.div>
    )
}

export default About