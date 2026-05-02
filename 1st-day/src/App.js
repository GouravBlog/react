import React from "react";
import A from "./A";
import FirstComponent from "./Components/FirstComponent";
import SecondComponent from "./Components/SecondComponent";
import Parent from "./Components/Parent";

class App extends React.Component {

  // constructor() {
  //   super();
  //   console.log("Constructor Method Call");
  //   this.state = {
  //     name: "Rahul"
  //   }
  // }

  // componentDidMount() {
  //   console.log('Component Did Mount Call');
  // }

  // componentDidUpdate() {
  //   console.log('ComponentDid Update Method Call');
  // }


  render() {
    // console.log("Render Method Call");
    return (
      <>
        {/* <h1>App Class Component {this.state.name}</h1>
        <button onClick={() => this.setState({ name: "Vishal" })}>Change Name</button> */}
        {/* <A/> */}
        {/* <FirstComponent /> */}
        {/* <SecondComponent /> */}
        {/* <Parent /> */}
        {/* Third Component */}
      </>
    )
  }

}


export default App