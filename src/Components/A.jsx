import { inc, dec, reset } from "../redux/actions/CountingActions";
import { useDispatch, useSelector } from "react-redux";

const A = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);
  return (
    <>
      <button onClick={() => dispatch(inc(5))}>Increament</button> &nbsp;&nbsp;
      <span>{count}</span> &nbsp;&nbsp;
      <button onClick={() => dispatch(dec(2))}>Decreament</button> <br />
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default A;
