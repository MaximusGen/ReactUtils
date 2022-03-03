import {motion} from 'framer-motion'
import Backdrop from '../Backdrop'

const dropIn ={
    hidden:{
      y: "-100vh",
      opacity: 0,
    },
    visible:{
     y: "0",
     opacity: 1,
     transition: {
         duration:0.1,
         type: "spring",
         damping: 100,
         stiffness: 500,
     },
    },
    exit:{
     y: "100vh",
     opacity: 0,
    }
}

const Modal = ({handleClose, text}) => {
    return (
      <Backdrop
      onClick={handleClose}
      >
       <motion.div
       drag
       whileTap={{cursor:"grabbing"}}
       onClick={(e) => e.stopPropagation()}
       className="modal"
       variants={dropIn}
       initial="hidden"
       animate="visible"
       exit="exit"
       >
        {text}
       </motion.div>

      </Backdrop>
    )
}

export default Modal