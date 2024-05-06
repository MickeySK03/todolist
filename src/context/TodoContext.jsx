import { createContext, useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
export default function TodoContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getTodo = JSON.parse(localStorage.getItem("todolist") || "[]");
    setAllTodos(getTodo);
    setItems(getTodo);
  }, []);

  const createTodo = (TaskInput) => {
    const newTodo = {
      id: uuidv1(),
      task: TaskInput,
      status: false,
    };
    setAllTodos((prev) => [newTodo, ...prev]);
    setItems((prev) => [newTodo, ...prev]);
    localStorage.setItem("todolist", JSON.stringify([newTodo, ...items]));
  };

  const editTodoTask = (todoId, updateTask) => {
    const updateTodos = allTodos.map((todo) =>
      todo.id === todoId ? { ...todo, task: updateTask } : todo
    );
    setAllTodos(updateTodos);
    setItems(updateTodos);
    localStorage.setItem("todolist", JSON.stringify(updateTodos));
  };

  const checkListStatus = (todoId, status) => {
    const updateCheckList = allTodos.map((todo) =>
      todo.id === todoId ? { ...todo, status: status } : todo
    );
    setAllTodos(updateCheckList);
    setItems(updateCheckList);
    localStorage.setItem("todolist", JSON.stringify(updateCheckList));
  };

  const deleteTodo = (todoId) => {
    const deleteItem = allTodos.filter((todo) => todo.id !== todoId);
    setAllTodos(deleteItem);
    setItems(deleteItem);
    localStorage.setItem("todolist", JSON.stringify(deleteItem));
  };

  const objTodo = {
    allTodos,
    setAllTodos,
    isOpen,
    setIsOpen,
    createTodo,
    deleteTodo,
    editTodoTask,
    checkListStatus,
  };
  return (
    <TodoContext.Provider value={objTodo}>{children}</TodoContext.Provider>
  );
}
