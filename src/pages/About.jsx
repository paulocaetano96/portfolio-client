import React from "react";

//bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import COMPONENTS
import BackgroundAnimation from "../components/BackgroundAnimation";
import PersonalImages from "../components/PersonalImages.json";
import Slider from "../components/Slider";

/* ----- IMPORT CSS FILES -------- */
import "../styles/about.css";

function About() {
  return (
    <div className="about-fullpage-container">
      {/* background animation div */}
      <div className="background-animation-container">
        <BackgroundAnimation />
      </div>

      <section className="about-top-container">
        <div className="text-area">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint
            sit nam autem in nisi, animi minima! Perferendis eius dolore quasi
            eos ipsum est. Incidunt ut debitis adipisci fugiat nobis.
          </p>
        </div>
        <div className="personal-images-carousel-container">
          <Slider slides={PersonalImages} className="slider" />
        </div>
      </section>

      <section className="about-bottom-container">
        <div className="education-container"></div>
        <div className="education-images-carousel-container"></div>
      </section>
    </div>
  );
}

export default About;
