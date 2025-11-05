import { motion } from "motion/react";

const IntroSection = () => {
  return (
    <>
      <h1>Motion</h1>
      <div className="flex items-center">
        <motion.p
          className="overflow-hidden text-nowrap text-xl font-medium"
          initial={{ width: 0 }}
          animate={{ width: "37ch" }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 4,
          }}
        >
          A small playground for practicing motion animations
        </motion.p>

        <motion.div
          className="h-10 w-10 border-r-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        ></motion.div>
      </div>
    </>
  );
};

export default IntroSection;
