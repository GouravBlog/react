import React, { useReducer } from "react";

function CountingState() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function reducer(state, action) {
    switch (action.type) {
      case "Increament":
        return { count: state.count + 1 };
      case "Decreament":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  return (
    <>
      <button onClick={() => dispatch({ type: "Increament" })}>Inc</button>{" "}
      <span>{state.count}</span>{" "}
      <button onClick={() => dispatch({ type: "Decreament" })}>Dec</button>
    </>
  );
}

export default CountingState;
