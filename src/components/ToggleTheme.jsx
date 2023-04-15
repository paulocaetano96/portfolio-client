import React, { useState } from "react";
//css import
import "../styles/toggleTheme.css";

function ToggleTheme() {
  //start the state for the theme toggle
  const [isDarkMode, setIsDarkMode] = useState(true); //in here, we start the initial state as dark mode

  //function to handle theme toggle button click
  const handleToggleClick = () => {
    // update state to toggle theme mode
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      {/* Rendering toggle button */}
      <label className="switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onClick={handleToggleClick}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ToggleTheme;
