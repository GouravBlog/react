import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const arr = ["Apple", "Banana", "Cary", "Orange"];
  const obj = {
    name: "Visal",
    age: 23,
    degree: true,
  };

  function abc(fruit) {
    if (fruit) {
      return fruit;
    }
  }
  return (
    <div>
      <ChildComponent arr={arr} obj={obj} xyz={abc} />
    </div>
  );
}

export default ParentComponent;
