import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>
      
      {/* Overlay that shows when sidebar is open */}
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleMenu}></div>
      
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>

      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className={`toggle-bar ${isOpen ? 'rotate' : ''}`}></span>
        <span className={`toggle-bar ${isOpen ? 'hide' : ''}`}></span>
        <span className={`toggle-bar ${isOpen ? 'rotate-reverse' : ''}`}></span>
      </div>
    </nav>
  );
}

export default Navbar;
