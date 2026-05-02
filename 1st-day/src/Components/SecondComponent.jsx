import React, { Component } from "react";

export default class SecondComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  //   count = 0;

  increament = () => {
    // this.count++;
    // console.log("count", this.count);
    this.setState({ count: this.state.count + 1 });
    console.log("count", this.state.count);
  };

  decreament = () => {
    // this.count--;
    // console.log("count", this.count);
    this.setState({ count: this.state.count - 1 });
    console.log("count",this.state.count);
  };

  render() {
    return (
      <>
        <button onClick={this.increament}>Inc</button> &nbsp;&nbsp;
        <span>{this.state.count}</span> &nbsp;&nbsp;
        <button onClick={this.decreament}>Dec</button>
      </>
    );
  }
}
