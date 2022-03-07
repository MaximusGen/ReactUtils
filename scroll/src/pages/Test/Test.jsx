import React, { useEffect, useState } from 'react';
import './test.css';
import {BiArrowFromBottom} from 'react-icons/bi'

import { className } from '../../utils/classeName'


const Test = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
      if(window.pageYOffset > 1500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const scrollToTop = () => {
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }

    useEffect(() =>{
        window.addEventListener('scroll', toggleVisibility)

        return () => {
          window.removeEventListener('scroll', toggleVisibility)
        }
    },[])

    return (
      <div className="container-btn-scroll">
        <button type="button" onClick={scrollToTop} className={className(isVisible ? 'btn-full' : 'btn-empty')}>
        <BiArrowFromBottom  size={30} aria-hidden="true"/>  
        </button>
      </div>
    ) 
}

export default Test