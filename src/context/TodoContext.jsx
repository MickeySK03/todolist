import { createContext, useState } from "react";

export const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
export default function TodoContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [allTodos, setAllTodos] = useState([]);

  const objTodo = {
    allTodos,
    setAllTodos,
    isOpen,
    setIsOpen,
  };
  return (
    <TodoContext.Provider value={objTodo}>{children}</TodoContext.Provider>
  );
}
