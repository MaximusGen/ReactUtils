import {motion} from 'framer-motion'
import { useState } from 'react'
import './App.css'


function App() {
   const [show, hide] = useState(false)

  const famer ={
    duration: 1.5,
    type: 'tween',
  }

const hello = {
   in: {
    opacity: 0,
    x: 300,
    y:300
   },
   out:{
    opacity: 1,
    x: 0,
    y:0,
   }
}


  return (
    <div className="container">
      <motion.div
       animate={{ y:0}}
       initial={{y:310}}
       transition={{ease: [0.6,0.01, -0.05, 0.9], duration: 1}}
       className="hello"
       >
        Hello World
      </motion.div>

    </div>
  )
}

export default App
