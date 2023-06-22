import React, { useState } from "react";
import "../Styles/Navbars.css";

const Navbars = () => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div className="Navbar" id="navbar">
      <span className="nav-logo">
        <img
          src="https://datahex.in/wp-content/uploads/2023/04/DataNex_Logo1-768x85-1-1.png"
          alt=""
          width={"250px"}
        />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        <a href="#about">About Us</a>
        <a href="#projects">Our Projects</a>
        <a href="#contactpage">Contact Us</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => SetIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbars;
