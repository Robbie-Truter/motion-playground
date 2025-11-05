import { motion } from "motion/react";
import ScrollFade from "../components/ScrollFade";

const ButtonSection = () => {
  return (
    <ScrollFade
      className="space-y-8"
      transition={{ delay: 0.1, type: "spring", bounce: 0.7, duration: 1.5 }}
    >
      <h1>Button animations</h1>
      <div>
        <motion.button
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Click Me!
        </motion.button>
      </div>
    </ScrollFade>
  );
};

export default ButtonSection;
