import { motion } from "motion/react";

const ScrollFade = ({ className, transition, children }) => {
  return (
    <motion.div
      className={`${className} flex flex-col items-center`}
      initial={{ opacity: 0, transform: "translateY(50px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      transition={transition}
      viewport={1}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFade;
