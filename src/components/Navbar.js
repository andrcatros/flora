import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = () => {
  const [responsiveClass, setResponsiveClass] = useState("");
  const addResponsive = () => {
    setResponsiveClass("responsive");
  };

  const removeResponsive = () => {
    setResponsiveClass("");
  };
  return (
    <div className="Navbar">
      <div className="web-nav">
        <Link to="/about">About</Link>
        <Link to="/all-plants">All Plants</Link>
        <Link to="/home">Home </Link>
      </div>
      <div className={`mobile-nav ${responsiveClass}`}>
        <button type="dropbtn" onMouseEnter={addResponsive}>
          &#9776;
        </button>
        <div
          className={`dropdown-content ${responsiveClass}`}
          onMouseLeave={removeResponsive}
        >
          <Link to="/home">Home </Link>
          <Link to="/all-plants">All Plants</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
