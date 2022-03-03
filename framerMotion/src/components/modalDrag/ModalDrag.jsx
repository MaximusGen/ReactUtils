import React from 'react'
import {motion} from 'framer-motion'
import './modalDrag.css'
import { useState } from 'react';
import Modal from './components/Modal';


const ModalDrag = () => {
   const [modalOpen, setModalOpen] = useState(false)

   const close = () => setModalOpen(false)
   const open = () => setModalOpen(true)

    return (
        <div className="container-modaldrag">
          <motion.button
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          className="button"
          onClick={() => (modalOpen ? close() : open())}
          >
            Launch Modal
          </motion.button>

          {modalOpen && <Modal text="Attrape-Moi" modalOpen={modalOpen} handleClose={close}/>}
        </div>
    )
}

export default ModalDrag