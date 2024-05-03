import AddIcon from "@mui/icons-material/Add";
import TodoForm from "./TodoForm";
import useTodo from "../hooks/useTodo";

export default function TodoCreate() {
  const { isOpen, setIsOpen } = useTodo();
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
