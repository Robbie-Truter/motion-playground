import { motion } from "motion/react";
import ScrollFade from "../components/ScrollFade";

const HoverSection = () => {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 5,
  };

  return (
    <ScrollFade
      className="space-y-8"
      transition={{ delay: 0.1, type: "spring", bounce: 0.7, duration: 1.5 }}
    >
      <h1>Hover animations</h1>
      <div className="flex gap-5">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={box} />
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={box} />
      </div>
    </ScrollFade>
  );
};

export default HoverSection;
