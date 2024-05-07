import List from "@mui/material/List";
import useTodo from "../hooks/useTodo";
import TodoItem from "./TodoItem";

export default function TodoLists() {
  const { showTodos } = useTodo();

  return (
    <>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {showTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </>
  );
}
