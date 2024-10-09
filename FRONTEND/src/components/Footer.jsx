import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  return (
    <footer className="w-full grid grid-cols-1 md:items-center lg:grid-cols-3 gap-4 p-4 bg-customGray border-t border-customWhite">
      <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
        <p className="text-2xl md:text-3xl lg:text-5xl text-white mb-4 lg:mb-0">LOGO</p>
        {/* <img src="/path-to-your-logo.png" alt="Logo" className="w-24 h-24 mb-4" /> */}
      </div>
      <div className="lg:col-span-1 flex flex-col items-center">
        <div className="text-base md:text-justify lg:text-xl text-center text-blue-500 font-bold mb-4">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 mb-4">
          <a
            href="/about"
            className="text-sm md:text-base lg:text-lg bg-customGray text-white font-medium transition-colors duration-200 hover:text-blue-500 hover:underline"
        <div className="flex space-x-2 mb-4 ">
          <Link
            to="/AboutUs" 
            className="bg-customGray text-white text-base font-medium transition-colors duration-200 hover:text-blue-500 hover:underline"
          >
            About Us
          </a>
          <span className="text-white hidden lg:inline">|</span>
          <a
            href="/contact"
            className="text-sm md:text-base lg:text-lg bg-customGray text-white font-medium transition-colors duration-200 hover:text-blue-500 hover:underline"
            About Us
          </Link>
          <p>|</p>
          <Link
            to="/ContactUs" 
            className="bg-customGray text-white text-base font-medium transition-colors duration-200 hover:text-blue-500 hover:underline"
          >
            Contact Us
          </a>
          <span className="text-white hidden lg:inline">|</span>
          <a
            href="/"
            className="text-sm md:text-base lg:text-lg bg-customGray text-white font-medium transition-colors duration-200 hover:text-blue-500 hover:underline"
            Contact Us
          </Link>
          <p>|</p>
          <Link
            to="/" 
            className="bg-customGray text-white text-base font-medium transition-colors duration-200 hover:text-blue-500 hover:underline"
          >
            Home
          </Link>
        </div>
      </div>
      <div className="lg:col-span-1 flex flex-col items-center lg:items-end">
        <div className="flex space-x-4 md:space-x-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;