import React from 'react';
import './Footer.css';
import facebookIcon from '../../Assets/Icons/facebook.png';
import twitterIcon from '../../Assets/Icons/twitter.png';
import instagramIcon from '../../Assets/Icons/instagram.png';
import linkedinIcon from '../../Assets/Icons/linkedin.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="">Nattel Associates</h2>
          <p>© 2021 by Nattel Associates</p>
          <p>Bangalore - 16</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>#31/2A, NRI Layout, Ramamurthy Nagar, Bangalore - 16</p>
          <p>Email: nattelassociates@gmail.com</p>
          <p>India: (+91) - 7899001569 / 9036224017</p>
          <p>Europe: +374 93 893085</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us On</h3>
          <div className="footer-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
