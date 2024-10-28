import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import whitelogo from '../../Assets/whitelogo.png'
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={whitelogo} alt="Nattel Logo" className="logo" />
      </div>

      {/* Overlay to dim background when sidebar is open */}
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleMenu}></div>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/' ? 'active' : ''}`}>Home</li>
        </Link>
        <Link to="/about" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/about' ? 'active' : ''}`}>About</li>
        </Link>
        <Link to="/admissions" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/admissions' ? 'active' : ''}`}>Admissions</li>
        </Link>
        <Link to="/nursing" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/nursing' ? 'active' : ''}`}>UK Nursing Opportunities</li>
        </Link>
        <Link to="/careers" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/careers' ? 'active' : ''}`}>Careers</li>
        </Link>
        <Link to="/education" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/education' ? 'active' : ''}`}>Global Education</li>
        </Link>
        <Link to="/contact" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</li>
        </Link>
        <Link to="/consultation" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/consultation' ? 'active' : ''}`}>Schedule a Consultation</li>
        </Link>
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
