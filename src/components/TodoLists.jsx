import List from "@mui/material/List";
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

export default function TodoLists() {
  const { allTodos, deleteTodo } = useTodo();

  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {allTodos.map((todo) => {
        return (
          <ListItem key={todo.id} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(todo.task)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(todo.task) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": todo.id }}
                  icon={<RadioButtonUncheckedOutlinedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                />
              </ListItemIcon>
              <ListItemText
                id={todo.id}
                primary={todo.task}
                primaryTypographyProps={{ fontSize: "20px" }}
              />
            </ListItemButton>
            <ListItemSecondaryAction sx={{ zIndex: 1 }}>
              <IconButton edge="end" aria-label="edit" sx={{ mx: 2 }}>
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
        );
      })}
    </List>
  );
}
