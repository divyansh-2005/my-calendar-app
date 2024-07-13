import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-right">
        <button className="menu-button">Menu</button>
      </div>
      <Link to="/" className="navbar-title">CALENDAR APP</Link>
      <div className="navbar-left">
        <button className="profile-button">User Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
