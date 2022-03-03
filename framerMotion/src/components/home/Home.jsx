import React from "react";
import { motion } from "framer-motion";
import "./home.css";

const Home = () => {
  const variants = {
    initial: {
      scale: 0,
    },
    out: {
      scale: 1,
    },
  };

  const lines = {
    initial: {
      rotate: 360,
      y: -700,
    },
    out: {
      rotate: 0,
      y: 0,
    },
  };

  const h1 = {
    initial: {
      x: -1500
    },
    out: {
      x:0
    }
  }

  return (
    <div className="container-home">
      <motion.div
      initial="initial"
      animate="out"
      transition={{duration:2, delay:1.5}}
      variants={h1}
      >
      <motion.h1
        whileHover={{ x:[2,3,0.5,2] }}
      >Framer Motion</motion.h1>
      </motion.div>
      <div className="home-links">

      <motion.p
        initial="initial"
        animate="out"
        variants={variants}
        transition={{ duration: 2 }}
      >
        <a href="/slider">Slider</a>
      </motion.p>
      <motion.div
        initial="initial"
        animate="out"
        variants={lines}
        transition={{ duration: 2 }}
        whileHover={{ rotate: 360 }}
        className="line"
      ></motion.div>
      <motion.p
        initial="initial"
        animate="out"
        variants={variants}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <a href="/textanimation">Text Animation</a>
      </motion.p>
      <motion.div
        initial="initial"
        animate="out"
        variants={lines}
        transition={{ duration: 2, delay: 0.5 }}
        whileHover={{ rotate: 360 }}
        className="line"
      ></motion.div>
      <motion.p
        initial="initial"
        animate="out"
        variants={variants}
        transition={{ duration: 2, delay: 1 }}
      >
        <a href="/modaldrag">Modal et Drag</a>
      </motion.p>
      <motion.div
        initial="initial"
        animate="out"
        variants={lines}
        transition={{ duration: 2, delay: 1 }}
        whileHover={{ rotate: 360 }}
        className="line"
      ></motion.div>
            <motion.p
        initial="initial"
        animate="out"
        variants={variants}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <a href="/filter">Filter</a>
      </motion.p>
      <motion.div
        initial="initial"
        animate="out"
        variants={lines}
        transition={{ duration: 2, delay: 1.5 }}
        whileHover={{ rotate: 360 }}
        className="line"
      ></motion.div>
      </div>
    </div>
  );
};

export default Home;
