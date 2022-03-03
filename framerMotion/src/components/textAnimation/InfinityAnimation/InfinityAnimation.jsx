import {motion} from 'framer-motion'


const infintyTransition = {
    duration: 4,
    repeat: Infinity,
  };

  const infinityVariants = {
    visible: {
      x: -1500,
    },
    hidden: {
      x: 1500,
    },
  };


const InfinityAnimation = () => {

    
    return (
        <div className="motion-inifinity">
        <motion.h1
          initial="visible"
          animate="hidden"
          variants={infinityVariants}
          transition={infintyTransition}
          className="text-infinity"
        >
          Framer Motion
        </motion.h1>
      </div>
    )
}


export default InfinityAnimation