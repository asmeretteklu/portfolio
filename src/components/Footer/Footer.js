import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Asmeret Teklu. All rights reserved.</p>
            <p className="footer-subtitle">
              Empowering the web with AI, creativity, and digital marketing strategy.
            </p>
          </div>
          <div className="footer-links">
            <button 
              className="footer-link"
              onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
            >
              ⬆️ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
