export const pageVariants = {
    initial: {
     opacity: 0,
     x: "-100vh",
     scale: 0.8
    },
   in: {
     opacity: 1,
     x: 0,
     scale: 1
   },
   out: {
     opacity: 0,
     x: "100vh",
     scale: 1.2
   },
  };
  
  export const pageTransition ={
   type: "spring",
   ease: "anticipate",
   duration: 1
  };
  
  export const pageStyles = {
   position: "absolute",
  }