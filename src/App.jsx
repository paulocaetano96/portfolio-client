/* ---- Packages IMPORTS -------------------*/
import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

/* ---- CSS IMPORTS -------------------*/
import "./styles/App.css";
/* ---- COMPONENT IMPORTS -------------------*/
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ---- PAGES IMPORTS -------------------*/
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import CurriculumVitae from "./pages/CurriculumVitae";
import ZASKS3000Details from "./pages/ZASKS3000Details";
import TrackMyHealthDetails from "./pages/TrackMyHealthDetails";
import TeamCommsDetails from "./pages/TeamCommsDetails";
import CargoLoaderCorvoDetails from "./pages/CargoLoaderCorvoDetails";

/* ---- EXTRA IMPORTS -------------------*/

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/CV" element={<CurriculumVitae />} />
        <Route path="/zasks3000" element={<ZASKS3000Details />} />
        <Route path="/trackmyhealth" element={<TrackMyHealthDetails />} />
        <Route path="/teamcomms" element={<TeamCommsDetails />} />
        <Route path="/cargoloader" element={<CargoLoaderCorvoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
