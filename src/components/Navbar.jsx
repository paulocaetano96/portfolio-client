/* ---- Packages IMPORTS -------------------*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ---- CSS IMPORTS -------------------*/
import "../styles/navbar.css";
/* ---- COMPONENT IMPORTS -------------------*/
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";

/* ---- PAGES IMPORTS -------------------*/

/* ---- EXTRA IMPORTS -------------------*/

function Navbar() {
  //to change the burguer classes
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");

  //toggle burguer menu change
  const updateMenu = () => {
    if (burgerClass === "burger-bar unclicked") {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
  };

  return (
    <>
      <nav className="cover">
        <div className="logo-container">
          <img
            className="logo-image"
            src="/src/assets/images/logo-full.png"
            alt="three sails logo - Paulo Caetano web development and Web Solutions"
          />
        </div>

        <div>
          <ToggleLanguage />
          <ToggleTheme />
        </div>

        <div className="menuToggle">
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div>
        </div>
        <div className={menuClass}>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/aboutme" className="link">
            About Me
          </Link>
          <Link to="/portfolio" className="link">
            Portfolio
          </Link>
          <Link to="/contact" className="link">
            Contact Me
          </Link>
          <Link to="/CV" className="link">
            Curriculum Vitae
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
