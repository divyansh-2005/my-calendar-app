import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import { faCalendarAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

const Navbar = () => {
  const themeCtx = useContext(ThemeContext);
  return (
    <nav
      className={`navbar ${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"}`}
    >
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            size="2x"
            className="calendar-icon"
          />
          <span className="navbar-title">CALENDAR APP</span>
        </Link>
      </div>
      <div className="navbar-right">
        <button
          className="bg-green-200 p-4 rounded-3xl"
          onClick={themeCtx.themeSwitch}
        >
          Dark Mode
        </button>
        <button
          className={`${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"} profile-button`}
        >
          <FontAwesomeIcon icon={faUserCircle} size="2x" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
