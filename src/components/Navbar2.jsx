import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ----- import hamburguer button package -------- */
import { Spin as Hamburger } from "hamburger-react";

/* ----- import components -------- */
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";

/* ----- import css file -------- */
import "../styles/navbar2.css";

function Navbar2() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="cover">
      <div className="navbar">
        <Hamburger
          label="Show Menu"
          color="red"
          rounded
          toggled={isOpen}
          toggle={setOpen}
          hideOutlined={false}
          size={30}
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
                <Link to="/aboutme" className="link">
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
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar2;
