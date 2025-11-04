import { motion } from "motion/react";
import ScrollFade from "./components/ScrollFade";
import TodoList from "./sections/TodoList";
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
        <section className="bg-[#9bb8cd]">
          <ScrollFade
            className="space-y-8"
            transition={{ delay: 0.1, type: "spring", bounce: 0.7, duration: 0.8 }}
          >
            <h1>Hover animations</h1>
            <div className="flex gap-5">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={box} />
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={box} />
            </div>
          </ScrollFade>
        </section>

        <section className="space-y-5 bg-[#fff7d4] text-black">
          <ScrollFade
            className="space-y-8"
            transition={{ delay: 0.3, type: "spring", bounce: 0.7, duration: 1.2 }}
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
        </section>

        <section className="space-y-5 bg-[#FFA4A4] text-black">
          <TodoList />
        </section>
      </main>
    </>
  );
};

export default App;
