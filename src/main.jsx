import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TodoList from "./To-Do-App/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./Project.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
    <TodoList /> */}
    <Project />
  </StrictMode>
);
