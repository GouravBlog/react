import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        &nbsp;&nbsp;
        <li>
          <NavLink to="/about">About</NavLink> &nbsp;&nbsp;
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
