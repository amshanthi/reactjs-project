import { createContext, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
export const UserContext = createContext(null);
export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [filterType, setFilterType] = useState("all");
  return (
    <UserContext.Provider
      value={{ tasks, setTasks, filterType, setFilterType }}
    >
      <div className="bg-light min-vh-100 d-flex justify-content-center pt-5">
        <div className="">
          <div className="d-flex flex-row">
            <TaskForm />
          </div>
          <div className="mt-3">
            <TaskList />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}
