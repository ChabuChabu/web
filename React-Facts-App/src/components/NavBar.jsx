import React from "react";
import logo from "../assets/react-logo.png";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="React logo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  );
};

export default NavBar;
