import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
export class Header extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
              to="/"
            >
              Home
            </NavLink>{" "}
            &nbsp;&nbsp;&nbsp;
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
              to="/about"
            >
              About
            </NavLink>{" "}
            &nbsp;&nbsp;&nbsp;
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
}

export default Header;
