import React from 'react'
import {pageVariants, pageTransition, pageStyles} from '../App'
import {motion} from 'framer-motion'

const Home = () => {
    return(
        <motion.div 
        initial="initial" 
        animate="in" 
        exit="out" 
        variants={pageVariants}
        transition={pageTransition}
        style={pageStyles}
        >
        <h1>Home</h1>
        <p>
          React, les transitions entre les pages sont réalisées avec  <strong>Frame-motion</strong>
        </p>
      </motion.div>
    )
}

export default Home