import { useContext } from "react";
import { counterContext } from "../Context/CounterContext";

const B = () => {
  const { count, setCount } = useContext(counterContext);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>DEC</button>
    </>
  );
};

export default B;
