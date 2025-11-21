import App from "./App";
import CounterApp from "./CounterApp/Counter";
import ProfileApp from "./Profile/ProfileApp";
import Button from "./To-Do-App/Button";
import TodoList from "./To-Do-App/TodoList";
import { useState } from "react";

export default function Project() {
  const [current, setCurrent] = useState("CounterApp");

  const Component = {
    // Profile: <ProfileApp />,
    CounterApp: <CounterApp />,
    Quote: <App />,
    ToDoList: <TodoList />,
  };

  function loadHandler() {
    return Component[current];
  }
  return (
    <div className="container-fluid">
      {/* -fluid */}
      {/* <h1 className="text-danger text-center">My Projects</h1>
      <hr /> */}
      <h1>Nav Link</h1>
      <div className="row">
        <div className="col-3 bg-secondary p-3" style={{ minHeight: "100vh" }}>
          <h4 className="text-light mb-3 text-center">Mini projects</h4>

          {Object.keys(Component).map((key) => (
            <button
              disabled={current === key}
              id={key}
              className="btn btn-primary w-100 p-2 mb-2 w-25"
              key={key}
              onClick={(e) => setCurrent(key)}
            >
              {key}
            </button>
          ))}
        </div>

        <div className="col-9">
          <div className=" ">{Component[current]}</div>
        </div>
      </div>
    </div>
  );
}
