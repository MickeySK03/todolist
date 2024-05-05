import { createContext, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
export default function TodoContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [allTodos, setAllTodos] = useState([]);

  const createTodo = (TaskName) => {
    const newTodo = {
      id: uuidv1(),
      task: TaskName,
      status: false,
    };
    setAllTodos((prev) => [newTodo, ...prev]);
  };

  const objTodo = {
    allTodos,
    setAllTodos,
    isOpen,
    setIsOpen,
    createTodo,
  };
  return (
    <TodoContext.Provider value={objTodo}>{children}</TodoContext.Provider>
  );
}
