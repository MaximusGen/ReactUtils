import React, {useState, useEffect, useRef} from 'react'
import {motion} from 'framer-motion'
import './slider.css'
import images from '../../images'

const Slider = () => {

    const [width, setWidth] = useState(0)
    const carousel = useRef()
   
     useEffect(() =>{
       // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
       setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
     }, [carousel])

    return (
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
    )
}

export default Slider