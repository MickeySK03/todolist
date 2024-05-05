import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import AppBar from "./components/AppBar";
import SideBar from "./components/SideBar";
import TodoCreate from "./components/TodoCreate";
import TodoLists from "./components/TodoLists";

function App() {
  return (
    <div className="todo">
      <div className="todo_header">
        <AppBar />
      </div>
      <div className="todo_sidebar">
        <SideBar />
      </div>
      <div className="todo_content">
        <div className="todo_Inbox">Inbox</div>
        <div>
          <TodoCreate />
          <TodoLists />
        </div>
      </div>
    </div>
  );
}

export default App;
