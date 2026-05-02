import React, { Component } from "react";

export default class A extends Component {
  componentWillUnmount() {
    console.log("Component Will Unmount Call");
  }
  render() {
    return <div>A Component</div>;
  }
}
