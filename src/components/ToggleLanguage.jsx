import React, { useState } from "react";
import "../styles/toggleLanguage.css";

function ToggleLanguage() {
  // Start the state for the language toggle
  const [isPortuguese, setIsPortuguese] = useState(false);

  // Function to handle language toggle button click
  const handleToggleClick = () => {
    // Update state to toggle language mode
    setIsPortuguese(!isPortuguese);
  };

  return (
    <div>
      {/* Rendering toggle button */}
      <label className="switch">
        <input type="checkbox" onClick={handleToggleClick}></input>
        <span className="slider"></span>
      </label>
      {/*       {isPortuguese ? "English" : "Português"} */}
    </div>
  );
}

export default ToggleLanguage;
