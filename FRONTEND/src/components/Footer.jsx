import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"; // Import Link
import { ThemeContext } from "../utils/ThemeContext";

const Footer = () => {
  const themeCtx = useContext(ThemeContext);
  return (
    <footer
      className={`grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-customGray border-t border-customWhite ${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"}`}
    >
      <div className="lg:col-span-1 flex flex-col items-center lg:items-baseline">
        <p className="text-5xl">LOGO</p>
        {/* <img src="/path-to-your-logo.png" alt="Logo" className="w-24 h-24 mb-4" /> */}
      </div>
      <div className="lg:col-span-1 flex flex-col items-center">
        <div className="text-center text-xl text-blue-500 font-bold mb-4">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
        <div className="flex space-x-2 mb-4 ">
          <Link
            to="/AboutUs"
            className={`${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"} text-base font-medium transition-colors duration-200 hover:text-blue-500 hover:underline`}
          >
            About Us
          </Link>
          <p>|</p>
          <Link
            to="/ContactUs"
            className={`${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"} text-base font-medium transition-colors duration-200 hover:text-blue-500 hover:underline`}
          >
            Contact Us
          </Link>
          <p>|</p>
          <Link
            to="/"
            className={`${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"} text-base font-medium transition-colors duration-200 hover:text-blue-500 hover:underline`}
          >
            Home
          </Link>
        </div>
      </div>
      <div className="lg:col-span-1 flex flex-col items-end mr-6">
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"} hover:text-blue-500`}
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"} hover:text-blue-500`}
          >
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"} hover:text-blue-500`}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"} hover:text-blue-500`}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
