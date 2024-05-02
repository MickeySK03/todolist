import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import TodoForm from "./TodoForm";

export default function TodoCreate() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      {isOpen ? (
        <TodoForm setIsOpen={setIsOpen} />
      ) : (
        <div className="todo_create" onClick={handleClick}>
          <div className="todo_create_button">
            <AddIcon />
          </div>
          <h3 className="todo_create_text">Add Task</h3>
        </div>
      )}
    </>
  );
}
