import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">MiPortafolio</span>
            <div className="logo-dot"></div>
          </Link>
        </div>
        
        <nav className={`navigation ${menuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                <span className="link-text" data-hover="Home">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link">
                <span className="link-text" data-hover="Proyects">Proyects</span>
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;