import List from "@mui/material/List";
import useTodo from "../hooks/useTodo";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function TodoLists() {
  const { allTodos } = useTodo();
  console.log(allTodos);
  const [checked, setChecked] = useState([0]);
  console.log("checkstatus", checked);
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
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
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
                />
              </ListItemIcon>
              <ListItemText id={todo.id} primary={todo.task} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
