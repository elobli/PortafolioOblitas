import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Proyects</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
