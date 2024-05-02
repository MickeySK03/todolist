import Button from "@mui/material/Button";

// eslint-disable-next-line react/prop-types
export default function TodoForm({ setIsOpen }) {
  const handleCancel = () => setIsOpen(false);
  return (
    <form className="todo_form">
      <input
        type="text"
        className="todo_form_input"
        placeholder="Task name"
        id="inputTask"
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
