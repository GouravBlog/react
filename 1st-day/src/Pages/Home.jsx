import React, { Component } from "react";
import Layout from "../Components/Layout/Layout";

export class Home extends Component {
  render() {
    return <Layout>Home Page {this.props.name}</Layout>;
  }
}

export default Home;
