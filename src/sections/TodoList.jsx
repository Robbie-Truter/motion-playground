import { useState } from "react";
import { motion, Reorder, useDragControls } from "motion/react";

import ScrollFade from "../components/ScrollFade";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(["Test to-do item"]);

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
      const hasTodo = todos.some((todo) => todo === input);
      !hasTodo && setTodos((prev) => [...prev, input]);
      setInput("");
    }
  };

  const removeTodo = (selectedItem) => {
    setTodos(todos.filter((todo) => todo !== selectedItem));
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

      <Reorder.Group axis="y" values={todos} onReorder={setTodos} className="space-y-4">
        {todos.map((item) => (
          <Todo key={item} item={item} removeTodo={removeTodo} />
        ))}
      </Reorder.Group>
    </ScrollFade>
  );
};

const Todo = ({ item, removeTodo }) => {
  const controls = useDragControls();
  const [isDragging, setIsDragging] = useState(false);

  const dragVariants = {
    dragging: {
      scale: 1.3,
      transition: { duration: 0.6 },
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    },
    inactive: {
      scale: 1,
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    },
  };

  const dragButtonVariants = {
    dragging: {
      scale: 2.5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    inactive: {
      scale: 1,
    },
  };

  return (
    <Reorder.Item
      className="relative flex items-center justify-between w-56 p-3 overflow-visible bg-white rounded-xl font-bold border-2"
      key={item}
      id={item}
      value={item}
      dragListener={false}
      dragControls={controls}
      variants={dragVariants}
      animate={isDragging ? "dragging" : "inactive"}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
    >
      {item}
      <motion.button
        className="text-[10px] p-1 bg-red-500 text-white cursor-pointer font-semibold rounded shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => removeTodo(item)}
      >
        Delete
      </motion.button>
      <motion.button
        onPointerDown={(e) => controls.start(e)}
        className="absolute right-[-5px] -top-2.5 text-[5px] text-white font-bold size-5 bg-indigo-600 rounded-full border border-black cursor-grab active:cursor-grabbing"
        variants={dragButtonVariants}
        animate={isDragging ? "dragging" : "inactive"}
      >
        Drag
      </motion.button>
    </Reorder.Item>
  );
};

export default TodoList;
