import React, { Component } from "react";

export class FormClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">First Name : </label>
            <br />
            <input
              type="text"
              placeholder="Enter Your First Name"
              value={this.state.firstname}
              onChange={(e) => this.setState({ firstname: e.target.value })}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="">Last Name : </label> <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              value={this.state.lastname}
              onChange={(e) => this.setState({ lastname: e.target.value })}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="">Email Id : </label> <br />
            <input
              type="email"
              placeholder="Enter Your Email ID"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="">Password : </label> <br />
            <input
              type="password"
              value={this.state.password}
              placeholder="********"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <br />
          <button type="submit">Submit Form</button>
        </form>
      </>
    );
  }
}

export default FormClassComponent;
