import {motion} from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import images from './images'
import './App.css'


function App() {
 const [width, setWidth] = useState(0)
 const carousel = useRef()

  useEffect(() =>{
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel])

  const transition ={
    duration: 4,
    repeat: Infinity,
    delayTransition:0.5
  }

  const variants ={
    initial:{
      x:-1000
    },
    out:{
      x:1000
    },
  }

  return (
    <>


     <div className="motion-inifinity">
       <motion.h1
       initial="initial"
       animate="out" 
       variants={variants}
       transition={transition}
       className="hello">Slide to right</motion.h1>
       <motion.h1
       initial="initial"
       animate="out" 
       variants={variants}
       transition={transition}
       className="hello">Slide to left</motion.h1>
     </div>

    <div className="App">
      <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
        <motion.div 
        drag="x" 
        dragConstraints={{right:0, left: -width}} 
        className="inner-carousel"
        >
            {images.map(image => {
              return(
                <motion.div className="item" key={image}>
                  <img src={image} alt='' />
                </motion.div>
              );
            })}
        </motion.div>
      </motion.div>
    </div>
      </>
  )
}



export default App
