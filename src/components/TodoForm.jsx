/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import { useState } from "react";
import useTodo from "../hooks/useTodo";

export default function TodoForm({ editTodo, setTodoOpenForm }) {
  const { setIsOpen, createTodo, editTodoTask } = useTodo();
  const [taskInput, setTaskInput] = useState(
    editTodo?.task || { header: "", description: "" }
  );

  const handleCancel = () => {
    if (editTodo) {
      setTodoOpenForm(false);
    } else setIsOpen(false);
  };
  const handleAddTask = (e) => {
    e.preventDefault();
    createTodo(taskInput);
    setIsOpen(false);
  };

  const handleEditTask = (e) => {
    e.preventDefault();
    editTodoTask(editTodo.id, taskInput);
    setTodoOpenForm(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form className="todo_form">
      <input
        name="header"
        type="text"
        className="todo_form_input"
        placeholder="Task name"
        id="inputTask"
        value={taskInput.header}
        onChange={handleChange}
      />
      <input
        name="description"
        type="text"
        className="todo_form_input"
        placeholder="Description"
        id="inputDescription"
        value={taskInput.description}
        onChange={handleChange}
      />
      <div className="todo_form_button">
        <Button variant="outlined" color="error" onClick={handleCancel}>
          Cancel
        </Button>
        {editTodo ? (
          <Button variant="contained" onClick={handleEditTask}>
            Edit Task
          </Button>
        ) : (
          <Button variant="contained" onClick={handleAddTask}>
            Add Task
          </Button>
        )}
      </div>
    </form>
  );
}
