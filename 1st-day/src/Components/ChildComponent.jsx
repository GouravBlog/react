import React, { Component } from "react";

export class ChildComponent extends Component {
  render() {
    return (
      <>
        <div>
          Child Component {this.props.name} {this.props.name1}
        </div>
      </>
    );
  }
}

export default ChildComponent;
