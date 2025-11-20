import App from "./App";
import Button from "./To-Do-App/Button";
import TodoList from "./To-Do-App/TodoList";
import { useState } from "react";

export default function Project() {
  const [current, setCurrent] = useState("ToDoList");

  const Component = {
    Quote: <App />,
    ToDoList: <TodoList />,
  };

  function loadHandler() {
    return Component[current];
  }
  return (
    <>
      <h1 className="d-flex flex-row justify-content-center text-danger">
        My Projects
      </h1>
      <hr />
      <div>
        {/* Create a button for each key */}
        {Object.keys(Component).map((key) => (
          <button
            className="btn btn-primary p-2 m-2"
            key={key}
            onClick={() => setCurrent(key)}
          >
            {key}
          </button>
        ))}

        {/* <hr /> */}

        {/* Show selected component */}
        {Component[current]}
      </div>
    </>
  );
}
