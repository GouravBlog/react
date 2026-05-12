import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // const handleCounter2 = () => {
  //   setCounter2(counter2 + 1);
  // };

  const handleCounter2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]);

  return (
    <>
      <div>
        <h1>
          Count <span>{counter1}</span>
        </h1>
        <Child handleCounter2={handleCounter2} />
        <button onClick={() => setCounter1(counter1 + 1)}>Inc Counter1</button>
      </div>
    </>
  );
};

export default Parent;
