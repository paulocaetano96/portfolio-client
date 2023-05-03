/* ----- IMPORT FUNDAMENTAL PACKAGES -------- */
import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ----- IMPORT EXTRA PACKAGES -------- */
import { Spin as Hamburger } from "hamburger-react";

/* ----- IMPORT COMPONENT FILES -------- */
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";

/* ----- IMPORT CSS FILES -------- */
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <Link to="/">
          <img
            src="/src/assets/images/logo-full.png"
            alt="three sails logo - Paulo Caetano web development and Web Solutions"
            className="logoImage"
          />
        </Link>
      </div>

      <div className="">
        <Hamburger
          label="Show Menu"
          color="red"
          rounded
          toggled={isOpen}
          toggle={setOpen}
          hideOutlined={false}
          size={25}
          direction="left"
          duration={0.8}
          distance="md"
        />
        {isOpen && (
          <div className="menu">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact Me
                </Link>
              </li>
              <li>
                <Link to="/CV" className="link">
                  Curriculum Vitae
                </Link>
              </li>
              <li className="languagePicker">
                <ToggleLanguage />
              </li>
              <li className="themeToggle">
                <ToggleTheme />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
