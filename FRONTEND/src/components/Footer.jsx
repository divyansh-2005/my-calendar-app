import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full relative bottom-0 left-0 grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-customGray border-t border-customWhite overflow-x-hidden">
      <div className="lg:col-span-1 flex flex-col items-center lg:items-baseline">
        <p className="text-lg md:text-2xl lg:text-5xl text-white mb-4 lg:mb-0">LOGO</p>
        {/* <img src="/path-to-your-logo.png" alt="Logo" className="w-24 h-24 mb-4" /> */}
      </div>
      <div className="lg:col-span-1 flex flex-col items-center">
        <div className="text-xs md:text-base lg:text-xl text-center text-blue-500 font-bold mb-4">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 mb-4">
          <Link
            to="/AboutUs"
            className="text-xs md:text-sm lg:text-lg bg-customGray text-white font-medium transition-colors duration-200 hover:text-blue-500 hover:underline"
          >
            About Us
          </Link>
          <span className="text-white hidden lg:inline">|</span>
          <Link
            to="/ContactUs"
            className="text-xs md:text-sm lg:text-lg bg-customGray text-white font-medium transition-colors duration-200 hover:text-blue-500 hover:underline"
          >
            Contact Us
          </Link>
          <span className="text-white hidden lg:inline">|</span>
          <Link
            to="/"
            className="text-xs md:text-sm lg:text-lg bg-customGray text-white font-medium transition-colors duration-200 hover:text-blue-500 hover:underline"
          >
            Home
          </Link>
        </div>
      </div>
      <div className="lg:col-span-1 flex flex-col items-center lg:items-end">
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-base md:text-xl lg:text-3xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faXTwitter} className="text-base md:text-xl lg:text-3xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-base md:text-xl lg:text-3xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-base md:text-xl lg:text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;