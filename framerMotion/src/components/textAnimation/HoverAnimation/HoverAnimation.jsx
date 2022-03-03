import { motion } from "framer-motion";

const text1 = "Hi";
const text2 = "Je suis Maxime";
const text3 = "Développeur Web";

const spanVariants = {
  visible: {
    y: 0,
    scaleY: 1,
  },
  hover: {
    y: [-1, -2, -2.8, 0.9, 0],
    scaleY: [1, 1.3, 0.8, 1, 1.2],
    color: "var(--color-font2)",
  },
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const items = {
  visible: {
    opacity: 1,
    y: [-1, 1.9, -2.7, 1],
    saleY: [1, 1.3, 0.8, 1],
  },
  hidden: {
    opacity: 0,
  },
};

const HoverAnimation = () => {
  return (
    <div className="animation-letters">
      <div className="text-hover">
        <motion.h1 variants={list} initial="hidden" animate="visible">
          {text1.split("").map((letter, id) => (
            <motion.span variants={items}>
              <motion.span
                key={id}
                variants={spanVariants}
                initial="visible"
                whileHover="hover"
              >
                {letter}
              </motion.span>
            </motion.span>
          ))}
        </motion.h1>
        <motion.h1 variants={list} initial="hidden" animate="visible">
          {text2.split("").map((letter, id) => {
            if (letter === "M")
              return (
                <motion.span variants={items}>
                  <motion.span
                    key={id}
                    style={{ color: "var(--color-font2)", fontSize: "5rem" }}
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              );
            else
              return (
                <motion.span variants={items}>
                  <motion.span
                    key={id}
                    variants={spanVariants}
                    initial="visible"
                    whileHover="hover"
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              );
          })}
        </motion.h1>
        <motion.h1 variants={list} initial="hidden" animate="visible">
          {text3.split("").map((letter, id) => (
            <motion.span variants={items}>
              <motion.span
                key={id}
                variants={spanVariants}
                initial="visible"
                whileHover="hover"
              >
                {letter}
              </motion.span>
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};

export default HoverAnimation;
