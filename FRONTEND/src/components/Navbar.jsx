import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import {
  faCalendarAlt,
  faUserCircle,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const themeCtx = useContext(ThemeContext);

  const themeSwitchHandler = () => {
    themeCtx.themeSwitch();
    setToggled((prev) => !prev);
  };
  return (
    <nav
      className={`navbar transition-all duration-300 ease-in-out ${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"}`}
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
          className="relative flex justify-between items-center px-1 bg-slate-800 h-6 w-12  rounded-xl"
          onClick={themeSwitchHandler}
        >
          <FontAwesomeIcon icon={faMoon} className="text-yellow-500 size-4" />
          <div
            className={`absolute transition-transform duration-500 ease-in-out transform ${toggled ? "translate-x-full" : "translate-x-0"} bg-white size-5 rounded-full`}
          ></div>
          <FontAwesomeIcon icon={faSun} className="text-yellow-500 size-4" />
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
