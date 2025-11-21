import { useReducer } from "react";
import Button from "../To-Do-App/Button";

export default function CounterApp() {
  const initialState = {
    count: 0,
    stockCount: 10,
  };
  const [state, dispatch] = useReducer(clickHandler, initialState);
  function clickHandler(state, action) {
    if (action.type == "Increment") {
      return { ...state, count: state.count + 1 };
    } else if (action.type == "Decrement") {
      return { ...state, count: state.count - 1 };
    }
    return state;
  }
  return (
    <div className="container">
      <h2 className="d-flex flex-row border justify-content-center align-content-center border-2 p-2 ">
        <p className="fw-bold  ">Stock available:</p>
        {state.stockCount - state.count === 0 ? (
          <p className="text-danger fw-medium">Out of Stock</p>
        ) : (
          state.stockCount - state.count
        )}
      </h2>
      <div className="d-flex flex-row justify-content-center align-content-center p-4 ">
        <h3 className="d-flex flex-column justify-content-center">Add item:</h3>
        <Button
          disabled={state.count <= 0}
          label="-"
          color="danger"
          onClick={() => {
            dispatch({ type: "Decrement" });
          }}
        />
        <h3 className="d-flex flex-column justify-content-center">
          {state.count}
        </h3>
        <Button
          disabled={state.count >= state.stockCount}
          label="+"
          color="success"
          onClick={() => {
            dispatch({ type: "Increment" });
          }}
        />
      </div>
    </div>
  );
}
