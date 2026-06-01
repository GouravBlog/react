import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <NavLink to="/">Home</NavLink> &nbsp;&nbsp;
      <NavLink to="/cart">Cart</NavLink> &nbsp;&nbsp;
      <span>Cart ({cart.length})</span>
    </>
  );
};

export default Navbar;
