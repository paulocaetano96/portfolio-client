import React from "react";

/* ----- IMPORT CSS FILES -------- */
import "../styles/home.css";

/* ----- IMPORT COMPONENT FILES -------- */
import BackgroundAnimation from "../components/BackgroundAnimation";

function Home() {
  return (
    <div>
      <div className="background-animation-container">
        <BackgroundAnimation />
      </div>
      <section className="banner">
        <div className="inner">
          <div className="intro-text">
            <div className="intro-text-upper">
              <h3>HELLO WORLD! I'M</h3>
              <div>PAULO CAETANO</div>
              <h3>
                BUT YOU CAN CALL ME <span>THE DUDE!</span>
              </h3>
            </div>
            <div className="intro-text-lower">
              <p>I'm a Full-Stack Developer, Skipper & Food Afficionado</p>
            </div>
            <div>
              <div className="intro-text-learnMore">
                <h4>Learn More</h4>
                <p>arrow down</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>Section 2</div>
      <div>Section 3</div>
      <div>Section 4</div>
    </div>
  );
}

export default Home;
