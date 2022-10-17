import "./NavBar.css";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="malt-matcher">
        <h1 className="malt">Malt</h1>
        <h1 className="matcher">Matcher</h1>
      </div>
      <div>
        <h4 className="about">About Us</h4>
      </div>
    </div>
  );
};

export default NavBar;
