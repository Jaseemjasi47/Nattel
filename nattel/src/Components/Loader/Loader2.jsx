import React from 'react'
import logoN from '../../Assets/N.png';
import flight from '../../Assets/flight.png';
import './Loader.css'; 

function Loader2() {
  return (
    <div className="loader-container">
      <img src={logoN} alt="Loading..." className="logoN" />
      <img src={flight} alt="Loading..." className="flight" />
    </div>
  )
}

export default Loader2
