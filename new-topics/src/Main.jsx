import React from "react";
import ParentComponent from "./Components/ParentComponent";
import FormClassComponent from "./Components/FormClassComponent";
import FormFunctionalComponent from "./Components/FormFunctionalComponent";

function Main() {
  const logedIn = true;
  let message = "";

  //   if (logedIn) {
  //     message = "Welcome To The User";
  //     return <h1>{message}</h1>;
  //   } else {
  //     message = "You are not logedin please login first";
  //     return <h2>{message}</h2>;
  //   }

  return (
    // <h1>
    //   {logedIn
    //     ? "Welcome To The User"
    //     : "You are not logedin please login firs"}
    // </h1>
    // <h1>{logedIn && "Welcome To The User"}</h1>
    // <h1>Hello Main Component</h1>
    // <ParentComponent />
    // <FormClassComponent />
    <FormFunctionalComponent />
  );
}

export default Main;
