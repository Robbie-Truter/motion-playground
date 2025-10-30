import { motion } from "motion/react";
import "./App.css";

const box = {
  width: 100,
  height: 100,
  backgroundColor: "red",
  borderRadius: 5,
};

const App = () => {
  return (
    <>
      <main>
        <section className="space-y-5 bg-[#9bb8cd]">
          <h1>Hover animations</h1>
          <div className="flex gap-5">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={box} />
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={box} />
          </div>
        </section>
        <section className="space-y-5 bg-[#fff7d4] text-black">
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
        </section>
      </main>
    </>
  );
};

export default App;
