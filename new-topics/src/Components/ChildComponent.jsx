import React from "react";

function ChildComponent({ arr, obj, xyz }) {
  return (
    <>
      <ul>
        {arr &&
          arr.map((value, i) => (
            <li>
              Index of {i + 1} element is {value}
            </li>
          ))}
      </ul>
      <ul>
        <li>{obj.name}</li>
        <li>{obj.age}</li>
        <li>{obj.degree ? "Yes" : "No"}</li>
        <li>{xyz(arr[3])}</li>
      </ul>
      <button onClick={() => xyz(arr[3])}>Click Me</button>
    </>
  );
}

export default ChildComponent;
