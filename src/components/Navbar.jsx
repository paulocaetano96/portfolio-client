/* ---- Packages IMPORTS -------------------*/
import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

/* ---- CSS IMPORTS -------------------*/
import "../styles/navbar.css";
/* ---- COMPONENT IMPORTS -------------------*/
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";

/* ---- PAGES IMPORTS -------------------*/

/* ---- EXTRA IMPORTS -------------------*/

function Navbar() {
  return (
    <nav className="navbar-container">
      <div>
        <img src="" alt="" />
      </div>

      <div>
        <Link to="/">
          <h5>Home</h5>
        </Link>
        <Link to="/aboutme">
          <h5>About Me</h5>
        </Link>
        <Link to="/portfolio">
          <h5>Portfolio</h5>
        </Link>
        <Link to="/contact">
          <h5>Contact Me</h5>
        </Link>
        <Link to="/CV">
          <h5>Curriculum Vitae</h5>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
