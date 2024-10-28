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
    <nav className="my-navbar">
      <div className="my-navbar-logo">
        <img src={whitelogo} alt="Nattel Logo" className="my-logo" />
      </div>

      {/* Overlay to dim background when sidebar is open */}
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleMenu}></div>

      <ul className={`my-navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/' ? 'my-active' : ''}`}>Home</li>
        </Link>
        <Link to="/about" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/about' ? 'my-active' : ''}`}>About</li>
        </Link>
        <Link to="/admissions" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/admissions' ? 'my-active' : ''}`}>Admissions</li>
        </Link>
        <Link to="/nursing" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/nursing' ? 'my-active' : ''}`}>UK Nursing Opportunities</li>
        </Link>
        <Link to="/careers" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/careers' ? 'my-active' : ''}`}>Careers</li>
        </Link>
        <Link to="/education" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/education' ? 'my-active' : ''}`}>Global Education</li>
        </Link>
        <Link to="/contact" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/contact' ? 'my-active' : ''}`}>Contact Us</li>
        </Link>
        <Link to="/consultation" onClick={toggleMenu} className='link'>
          <li className={`${location.pathname === '/consultation' ? 'my-active' : ''}`}>Schedule a Consultation</li>
        </Link>
      </ul>

      <div className="my-navbar-toggle" onClick={toggleMenu}>
        <span className={`my-toggle-bar ${isOpen ? 'rotate' : ''}`}></span>
        <span className={`my-toggle-bar ${isOpen ? 'hide' : ''}`}></span>
        <span className={`my-toggle-bar ${isOpen ? 'rotate-reverse' : ''}`}></span>
      </div>
    </nav>
  );
}

export default Navbar;
