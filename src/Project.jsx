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
      <div className="">
        {/* <div className="d-flex flex-column justify-content-center align-items-center bg-secondary">
          <h1>Nav Link</h1>
        </div> */}
        <div className=" d-flex flex-row justify-content-start">
          {Object.keys(Component).map((key) => (
            <button
              disabled={current === key}
              id={key}
              className="btn btn-primary m-2"
              key={key}
              onClick={(e) => setCurrent(key)}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="">
          <div className=" ">{Component[current]}</div>
        </div>
      </div>
    </div>
  );
}
