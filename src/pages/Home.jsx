import React from "react";
import { Link } from "react-router-dom";

/* ----- IMPORT CSS FILES -------- */
import "../styles/home.css";

/* ----- IMPORT COMPONENT FILES -------- */
import BackgroundAnimation from "../components/BackgroundAnimation";
import Footer from "../components/Footer";

function Home() {
  return (
    /* Full page div */
    <div>
      {/* background animation div */}
      <div className="background-animation-container">
        <BackgroundAnimation />
      </div>
      {/* -------- LANDING section START ----------------- */}
      <section className="banner">
        <div className="inner">
          <div className="intro-text">
            <div className="intro-text-upper">
              <h3>HELLO WORLD! I'M</h3>
              <h3 classname="name-nickname">PAULO CAETANO</h3>
              <h3>BUT YOU CAN CALL ME</h3>
              <h3 classname="name-nickname">THE DUDE!</h3>
            </div>

            <p className="personalDescription">
              I'm a Full-Stack Developer, Skipper & Food Afficionado
            </p>

            <div>
              <div className="intro-text-learnMore">
                <h4 className="learnMore-text">Learn More</h4>
                <div class="learnMore-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------- END of LANDING section ------------ */}

      {/* -------- START of SKILLS section ---------- */}
      <section className="skills-section">
        <h1 id="mySkills-h1">My Skills</h1>

        <div className="skills-image-bio-container">
          <div className="myImage-container">
            <img
              className="myImage"
              src="src/assets/images/homepage-mypicture.jpg"
              alt="a picture of Paulo Caetano"
              loading="lazy"
            />
          </div>
          <div className="skills-text-container">
            <div className="skills-squares-area">
              <ul>
                <li aria-label="Markup">HTML</li>
                <li aria-label="Styling">CSS</li>
                <li aria-label="Scripting">Javascript</li>

                <li aria-label="Frontend">React</li>
                <li aria-label="Database">MongoDB</li>
                <li aria-label="Backend">Node.js</li>

                <li aria-label="Version Control">Git</li>
                <li aria-label="Methodology">Agile</li>
                <li aria-label="Spreadsheets">Excel</li>
              </ul>
            </div>
            <div className="text-area">
              <h3 id="title-small-bio">I love building stuff 3 </h3>
              <p id="small-text-bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt hic necessitatibus deleniti maxime repellat? Cum sequi
                sint ut eum iusto? Iusto ad similique ratione itaque sequi sit
                sapiente dolores repudiandae.{" "}
              </p>
              <Link to="/about">Keep reading my bio</Link>
            </div>
          </div>
        </div>
      </section>
      {/* -------- END of SKILLS section ------------ */}

      {/* -------- START of RANDOM section ---------- */}
      <section>Section 3</section>
      {/* -------- END of RANDOM section ------------ */}

      {/* -------- START of CHAT section ------------ */}
      <section>Section 4</section>
      {/* -------- END of CHAT section -------------- */}

      <Footer />
    </div>
  );
}

export default Home;
