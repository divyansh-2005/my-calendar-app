import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <Link to="/" className="navbar-logo">
        <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="calendar-icon" />
        <span className="navbar-title">CALENDAR APP</span>
      </Link>
    </div>
    <div className="navbar-right">
      <button className="profile-button">
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
      </button>
    </div>
  </nav>
  );
};

export default Navbar;
