import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <p className="navLink active-navlink">Work</p>
      <p className="navLink">About</p>
      <p className="navLink">Play</p>
      <p className="navLink">Notes</p>
      <p className="navLink ">Contact</p>
    </div>
  );
};

export default Navbar;
