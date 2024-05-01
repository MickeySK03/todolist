import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppBar from "./components/AppBar";
import "./App.css";

function App() {
  return (
    <div className="todo">
      <div className="todo_header">
        <AppBar />
      </div>
      <div className="todo_sidebar">SideBar</div>
      <div className="todo_content">todolist</div>
    </div>
  );
}

export default App;
