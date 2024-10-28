import React from 'react';
import logo from '../../Assets/bluelogo.png';
import './Loader.css'; // Import the CSS file for styling

function Loader() {
  return (
    <div className="loader-container">
      <img src={logo} alt="Loading..." className="loader-logo" />
    </div>
  );
}

export default Loader;
