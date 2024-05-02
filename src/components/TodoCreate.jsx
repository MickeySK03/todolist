import AddIcon from "@mui/icons-material/Add";

export default function TodoCreate() {
  return (
    <>
      <div className="todo_create">
        <div className="todo_create_button">
          <AddIcon />
        </div>
        <h3 className="todo_create_text">Add Task</h3>
      </div>
    </>
  );
}
