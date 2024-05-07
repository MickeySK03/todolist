/* eslint-disable react/prop-types */
import useTodo from "../hooks/useTodo";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { ListItemSecondaryAction } from "@mui/material";
import TodoForm from "./TodoForm";

export default function TodoItem({ todo }) {
  const { deleteTodo, checkListStatus } = useTodo();
  const [todoOpenForm, setTodoOpenForm] = useState(false);
  const [checked, setChecked] = useState(todo?.status || false);

  const handleEdit = () => {
    setTodoOpenForm(!todoOpenForm);
  };

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    checkListStatus(todo.id, newChecked);
  };
  return (
    <>
      {todoOpenForm ? (
        <TodoForm editTodo={todo} setTodoOpenForm={setTodoOpenForm} />
      ) : (
        <ListItem key={todo.id} disablePadding>
          <ListItemButton role={undefined} onClick={handleToggle} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked}
                // tabIndex={-1}
                disableRipple
                // inputProps={{ "aria-labelledby": todo.id }}
                icon={<RadioButtonUncheckedOutlinedIcon />}
                checkedIcon={<CheckCircleIcon />}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
              />
            </ListItemIcon>
            <ListItemText
              id={todo.id}
              primary={todo.task.header}
              primaryTypographyProps={{ fontSize: "20px" }}
              secondary={todo.task.description}
            />
          </ListItemButton>
          <ListItemSecondaryAction sx={{ zIndex: 1 }}>
            <IconButton
              edge="end"
              aria-label="edit"
              sx={{ mx: 2 }}
              onClick={handleEdit}
            >
              <EditIcon />
            </IconButton>

            <IconButton
              edge="end"
              aria-label="delete"
              color="secondary"
              onClick={() => deleteTodo(todo.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </>
  );
}
