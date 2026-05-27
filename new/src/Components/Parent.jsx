import React, { useState } from "react";

function Parent(WrappedComponent, num) {
  function Parent(props) {
    const [count, setCount] = useState(0);

    function anldleclick() {
      setCount(count + num);
    }
    return (
      <WrappedComponent
        count={count}
        anldleclick={anldleclick}
        {...props}
      ></WrappedComponent>
    );
  }

  return Parent;
}

export default Parent;
