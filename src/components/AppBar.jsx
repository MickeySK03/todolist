import { styled, alpha } from "@mui/material/styles";
import SearchAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect, useState } from "react";
import useTodo from "../hooks/useTodo";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function AppBar() {
  const { searchTodo } = useTodo();
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      console.log("Search");
      if (searchKeyword.trim() !== "") searchTodo(searchKeyword);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchKeyword, searchTodo]);

  const handleChangeInput = (e) => {
    setSearchKeyword(e.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SearchAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <HomeIcon fontSize="large" />
          </IconButton>
          <Typography
            fontSize="1.5rem"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            TodoList
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchKeyword}
              onChange={handleChangeInput}
            />
          </Search>
        </Toolbar>
      </SearchAppBar>
    </Box>
  );
}
