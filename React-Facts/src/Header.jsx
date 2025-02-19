import React from "react";
import logo from "./assets/images/react-logo.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} className="nav-logo" alt="React logo" />
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
