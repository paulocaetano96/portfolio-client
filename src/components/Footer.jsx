import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="icons-container">
        <a href="https://github.com/paulocaetano96">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            color="white"
            className="mx-3"
          />
        </a>
        <a href="https://www.linkedin.com/in/paulocaetano-dev/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            color="white"
            className="mx-3"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            color="white"
            className="mx-3"
          />
        </a>
        <a href="/contact">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            color="white"
            className="mx-3"
          />
        </a>
      </div>
      <div className="author">
        <span>2023 &copy; by Paulo Caetano</span>
      </div>
    </footer>
  );
}

export default Footer;
