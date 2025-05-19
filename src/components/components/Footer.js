import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2025 Kevin Oblitas</p>
      <div className="social-icons">
        <a
          href="https://github.com/elobli"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/oblitas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:oblisestrada@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
