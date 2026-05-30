import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec, reset } from "../redux/action/CounterAction";

function A() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counterReducer);

  // console.log("count", state);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(inc(5))}>+</button>
      <button onClick={() => dispatch(dec())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
}

export default A;
