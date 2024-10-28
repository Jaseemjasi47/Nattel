import React from 'react';
import logo from '../../Assets/bluelogo.png';
import flogo from '../../Assets/Nattel-sub.png';
import './Loader.css'; // Import the CSS file for styling

function Loader() {
  return (
    <div className="loader-container">
      {/* <img src={logo} alt="Loading..." className="loader-logo" />
      <img src={flogo} alt="Loading..." className="footer-logo" /> */}
      <img src={flogo} alt="Loading..." className="loader-logo2" />
    </div>
  );
}

export default Loader;
