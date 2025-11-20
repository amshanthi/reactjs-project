import { useContext, useState } from "react";
import Button from "./Button";
import { UserContext } from "../To-Do-App/TodoList";

export default function TaskForm() {
  const { tasks, setTasks } = useContext(UserContext);
  const { filterType, setFilterType } = useContext(UserContext);
  const [currentTask, setCurrentTask] = useState("");
  const addTaskHandler = () => {
    if (currentTask != "") {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          Text: currentTask,
          Complete: false,
        },
      ]);
      setFilterType("all");
      setCurrentTask("");
    }
  };
  function taskHandler(e) {
    setCurrentTask(e.target.value);
  }
  return (
    <>
      <input
        className=" form-control-lg border-info focus-ring focus-ring-info"
        type="text"
        name=""
        id=""
        value={currentTask}
        placeholder="Write your task....."
        onChange={taskHandler}
        maxLength={35}
      />
      <Button label="Add New Task" color="primary" onClick={addTaskHandler} />
    </>
  );
}
