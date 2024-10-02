import React, { useContext } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../utils/AuthContext';


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <div className="navbar-right">
      <Link to="/" className="navbar-title">CALENDAR APP</Link>
      </div>
      <div className="navbar-left">
       {user &&  <button className="profile-button">{user.username}</button>}
       {user &&  <button onClick={logout} className="profile-button">Logout</button>}
       {!user &&  <Link to="/register" className="profile-button" style={{textDecoration : "none"}}>Sign up</Link>}
       {!user &&  <Link to="/login" className="profile-button" style={{textDecoration : "none"}}>Login</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
