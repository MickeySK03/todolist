import Button from "@mui/material/Button";
import { useState } from "react";
import useTodo from "../hooks/useTodo";

export default function TodoForm() {
  const { setIsOpen } = useTodo();
  const [taskInput, setTaskInput] = useState("");
  const handleCancel = () => setIsOpen(false);
  // const handleAddTask = (e) => {
  //   e.preventDefault();
  // };
  const handleChange = (e) => setTaskInput(e.target.value);

  return (
    <form className="todo_form">
      <input
        type="text"
        className="todo_form_input"
        placeholder="Task name"
        id="inputTask"
        value={taskInput}
        onChange={handleChange}
      />
      <input
        type="text"
        className="todo_form_input"
        placeholder="Description"
        id="inputDescription"
      />
      <div className="todo_form_button">
        <Button variant="outlined" color="error" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained">Add Task</Button>
      </div>
    </form>
  );
}
