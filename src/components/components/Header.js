import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="header">
          <nav className="navigation">
            <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/projects">Proyectos</Link></li>
            <li><Link to="/about">Acerca de Mi</Link></li>
            </ul>
          </nav>
        </div>
      );
    }
 

export default Header;
