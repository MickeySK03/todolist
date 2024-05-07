import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import useTodo from "../hooks/useTodo";

export default function FilterTodo() {
  const { setShowTodos, allTodos } = useTodo();

  const handleShowAll = () => setShowTodos(allTodos);
  const handleShowCompleted = () =>
    setShowTodos(allTodos.filter((todo) => todo.status == true));
  const handleShowInComplete = () =>
    setShowTodos(allTodos.filter((todo) => todo.status == false));

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Filter</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="show all"
          control={<Radio />}
          label="show all"
          onClick={handleShowAll}
        />
        <FormControlLabel
          value="completed"
          control={<Radio />}
          label="completed"
          onClick={handleShowCompleted}
        />
        <FormControlLabel
          value="incomplete"
          control={<Radio />}
          label="incomplete"
          onClick={handleShowInComplete}
        />
      </RadioGroup>
    </FormControl>
  );
}
