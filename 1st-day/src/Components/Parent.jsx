import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export class Parent extends Component {
  constructor() {
    super();
    this.state = {
      name1: "Salman Khan",
    };
  }

  changeName = () => {
    this.setState({ name1: "Amir Khan" });
  };
  render() {
    return (
      <div>
        Parent <ChildComponent name="Vishal Panchal" name1={this.state.name1} />
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default Parent;
