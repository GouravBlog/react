import { useMemo, useState } from "react";

const Parent = () => {
  const [add, setAdd] = useState(1);
  const [minus, setMinus] = useState(100);

  //   function multiply() {
  //     console.log("Multiply Function Call");
  //     return add * 10;
  //   }

  const multiply = useMemo(() => {
    console.log("Multiply Function Call");
    return add * 10;
  }, [add]);

  return (
    <>
      <div>
        <h3>Multiply {multiply}</h3>
        <h2>{add}</h2>
        <button onClick={() => setAdd(add + 1)}>Addition</button>
        <h2>{minus}</h2>
        <button onClick={() => setMinus(minus - 1)}>Minus</button>
      </div>
    </>
  );
};

export default Parent;
