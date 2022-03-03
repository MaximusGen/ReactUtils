import React from "react";
import { motion } from "framer-motion";
import "./textAnimation.css";
import InfinityAnimation from "./InfinityAnimation/InfinityAnimation";
import HoverAnimation from "./HoverAnimation/HoverAnimation";


const TextAnimation = () => {

  return (
    <div className="container-textanimation">
      {/* <InfinityAnimation /> */}
      <HoverAnimation />
    </div>
  );
};

export default TextAnimation;
