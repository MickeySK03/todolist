import { createContext, useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
export default function TodoContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [showTodos, setShowTodos] = useState([]);

  useEffect(() => {
    const getTodo = JSON.parse(localStorage.getItem("todolist") || "[]");
    setAllTodos(getTodo);
    setShowTodos(getTodo);
  }, []);

  const createTodo = (TaskInput) => {
    const newTodo = {
      id: uuidv1(),
      task: TaskInput,
      status: false,
    };
    setAllTodos((prev) => [newTodo, ...prev]);
    setShowTodos((prev) => [newTodo, ...prev]);
    localStorage.setItem("todolist", JSON.stringify([newTodo, ...allTodos]));
  };

  const editTodoTask = (todoId, updateTask) => {
    const updateTodos = allTodos.map((todo) =>
      todo.id === todoId ? { ...todo, task: updateTask } : todo
    );
    setAllTodos(updateTodos);
    setShowTodos(updateTodos);
    localStorage.setItem("todolist", JSON.stringify(updateTodos));
  };

  const checkListStatus = (todoId, status) => {
    const updateCheckList = allTodos.map((todo) =>
      todo.id === todoId ? { ...todo, status: status } : todo
    );
    setAllTodos(updateCheckList);
    setShowTodos(updateCheckList);
    localStorage.setItem("todolist", JSON.stringify(updateCheckList));
  };

  const deleteTodo = (todoId) => {
    const deleteItem = allTodos.filter((todo) => todo.id !== todoId);
    setAllTodos(deleteItem);
    setShowTodos(deleteItem);
    localStorage.setItem("todolist", JSON.stringify(deleteItem));
  };

  const searchTodo = (keyword) => {
    if (keyword.trim() === "") setShowTodos(allTodos);
    const newItems = allTodos.filter(
      (todoObj) =>
        todoObj.task.header.toLowerCase().includes(keyword.toLowerCase()) ||
        todoObj.task.description.toLowerCase().includes(keyword.toLowerCase())
    );
    setShowTodos(newItems);
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
    searchTodo,
    showTodos,
    setShowTodos,
  };
  return (
    <TodoContext.Provider value={objTodo}>{children}</TodoContext.Provider>
  );
}
