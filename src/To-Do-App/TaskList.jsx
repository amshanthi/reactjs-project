import { useContext, useState } from "react";
import Button from "./Button";
import { UserContext } from "./TodoList";

export default function TaskList() {
  const { tasks, setTasks } = useContext(UserContext);
  const { filterType, setFilterType } = useContext(UserContext);
  function allCompleteHandler() {
    setFilterType("complete");
  }
  function allBtnHandler() {
    setFilterType("all");
  }

  function allPendingHandler() {
    setFilterType("pending");
  }

  function deleteHandler(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }
  const filterTasks = tasks.filter((task) => {
    if (filterType == "pending") {
      return !task.Complete;
    } else if (filterType == "complete") {
      return task.Complete;
    } else {
      return true;
    }
  });
  function textHandler(e) {
    const completeTask = tasks.map((task) => {
      if (task.id === Number(e.target.id)) {
        const done = {
          ...task,
          Complete: !task.Complete,
        };
        console.log(done);
        return done;
      } else {
        return task;
      }
    });
    setTasks(completeTask);
  }
  return (
    <>
      <div>
        <Button
          label="All"
          disabled={filterType === "all" ? true : false}
          color="primary"
          onClick={allBtnHandler}
        />
        <Button
          disabled={filterType === "pending" ? true : false}
          label="Pending"
          color="primary"
          onClick={allPendingHandler}
        />
        <Button
          disabled={filterType === "complete" ? true : false}
          label="Completed"
          color="primary"
          onClick={allCompleteHandler}
        />
      </div>
      <ul className="list-group">
        {filterTasks.length == 0 && (
          <p className="d-flex flex-row justify-content-around border border-3 btn-outline-secondary">
            No task yet!
          </p>
        )}
        {filterTasks.map((task) => {
          return (
            <li
              key={task.id}
              className="list-group-item list-group-action d-flex justify-content-between align-items-center mb-1"
            >
              <span
                style={{
                  textDecoration: task.Complete ? "line-through" : "none",
                }}
                id={task.id}
                onClick={textHandler}
              >
                {task.Text}
              </span>
              <Button
                label="X"
                color="danger"
                onClick={() => {
                  deleteHandler(task.id);
                }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
