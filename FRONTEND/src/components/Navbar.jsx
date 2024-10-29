import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="calendar-icon" />
          <span className="navbar-title">CALENDAR APP</span>
        </Link>
      </div>

      <button className="mobile-menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
        <button className="profile-button">
          <FontAwesomeIcon icon={faUserCircle} size="2x" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;