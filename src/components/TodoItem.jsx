// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
// import CommentIcon from "@mui/icons-material/Comment";
// import { useState } from "react";

// // eslint-disable-next-line react/prop-types
// export default function TodoItem({ id, task }) {
//   const [checked, setChecked] = useState([0]);
//   console.log("checkstatus", checked);
//     const handleToggle = (value) => () => {
//       const currentIndex = checked.indexOf(value);
//       const newChecked = [...checked];

//       if (currentIndex === -1) {
//         newChecked.push(value);
//       } else {
//         newChecked.splice(currentIndex, 1);
//       }

//       setChecked(newChecked);
//     };
//   return (
//     <ListItem
//       key={id}
//       secondaryAction={
//         <IconButton edge="end" aria-label="comments">
//           <CommentIcon />
//         </IconButton>
//       }
//       disablePadding
//     >
//       <ListItemButton role={undefined} onClick={handleToggle(task)} dense>
//         <ListItemIcon>
//           <Checkbox
//             edge="start"
//             checked={checked.indexOf(task) !== -1}
//             tabIndex={-1}
//             disableRipple
//             inputProps={{ "aria-labelledby": id }}
//           />
//         </ListItemIcon>
//         <ListItemText id={id} primary={task} />
//       </ListItemButton>
//     </ListItem>
//   );
// }
