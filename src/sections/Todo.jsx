import { useState } from "react";
import { motion } from "motion/react";
import ScrollFade from "../components/ScrollFade";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    let { value } = e.target;
    setInput(value);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputElement = form.elements.todoInput;

    if (input.trim() === "") {
      setInput("");
      inputElement.value = "";
      form.reportValidity();
    } else {
      setTodos((prev) => [...prev, input]);
      setInput("");
    }
  };

  const removeTodo = (selectedIndex) => {
    setTodos(todos.filter((_, index) => index !== selectedIndex));
  };

  return (
    <ScrollFade
      className="space-y-8 w-full"
      transition={{ delay: 0.3, type: "spring", bounce: 0.7, duration: 1.2 }}
    >
      <h1>To-do list</h1>

      <form onSubmit={submitTodo} className="flex flex-col gap-5">
        <input
          name="todoInput"
          placeholder="Brush kitty..."
          value={input}
          onChange={handleInputChange}
          className="bg-white rounded-full font-bold p-4 border-3"
          required
        />
        <motion.button
          className="px-6 py-3 bg-indigo-600 text-white cursor-pointer font-semibold rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Add item +
        </motion.button>
      </form>

      <ul className="space-y-4">
        {todos.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between w-56 p-3 bg-white rounded-xl font-bold border-2"
          >
            {item}
            <motion.button
              className="text-[10px] p-1 bg-red-500 text-white cursor-pointer font-semibold rounded shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => removeTodo(index)}
            >
              Delete
            </motion.button>
          </li>
        ))}
      </ul>
    </ScrollFade>
  );
};

export default Todo;
