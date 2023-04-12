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
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //toggle burguer menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav>
        <div className="logo-container">
          <img
            className="logo-image"
            src="/src/assets/images/logo-full.png"
            alt="three sails logo - Paulo Caetano web development and Web Solutions"
          />
        </div>

        <div className="menuToggle">
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>
        <div className={menu_class}>
          <ul className="menu">
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/aboutme" className="link">
              <li>About Me</li>
            </Link>
            <Link to="/portfolio" className="link">
              <li>Portfolio</li>
            </Link>
            <Link to="/contact" className="link">
              <li>Contact Me</li>
            </Link>
            <Link to="/CV" className="link">
              <li>Curriculum Vitae</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
