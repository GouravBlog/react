import React, { Component } from "react";
import ThirdComponent from "./Components/ThirdComponent";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";

export class Main extends Component {
  render() {
    return (
      <>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home name="Vishal" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer/> */}
      </>
    );
  }
}

export default Main;
