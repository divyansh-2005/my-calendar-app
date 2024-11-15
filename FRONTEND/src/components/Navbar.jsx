import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
  const [isloggedin, setisloggedin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu visibility

  useEffect(() => {
    const check = localStorage.getItem("token");
    if (check) {
      setisloggedin(true);
    }
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      setisloggedin(false);
      navigate("/");
    } catch (error) {
      console.log("error generated while logging out", error.message);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the mobile menu visibility
  };

  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              size="2x"
              className="mr-2 text-white"
            />
            <span className="text-xl font-bold">CALENDAR APP</span>
          </Link>
        </div>

        {/* Right Side: Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {!isloggedin ? (
            <>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/register" className="hover:text-gray-300">
                Signup
              </Link>
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link to="/AboutUs" className="hover:text-gray-300">
                About Us
              </Link>
              <Link to="/ContactUs" className="hover:text-gray-300">
                Contact Us
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-gray-300 focus:outline-none"
              >
                Logout
              </button>
              <Link to="/AboutUs" className="hover:text-gray-300">
                About Us
              </Link>
              <Link to="/ContactUs" className="hover:text-gray-300">
                Contact Us
              </Link>
            </>
          )}
        </div>

        <button
          className="ml-4 text-white focus:outline-none"
          onClick={() => navigate("/profile")}
        >
          <FontAwesomeIcon icon={faUserCircle} size="2x" />
        </button>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu} // Toggle the mobile menu on click
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden on larger screens) */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            {!isloggedin ? (
              <>
                <Link
                  to="/"
                  className="hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/register"
                  className="hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Signup
                </Link>
                <Link
                  to="/login"
                  className="hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/AboutUs"
                  className="hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Link
                  to="/ContactUs"
                  className="hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu(); // Close menu after logout
                  }}
                  className="hover:text-gray-300 focus:outline-none"
                >
                  Logout
                </button>
                <Link
                  to="/AboutUs"
                  className="hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Link
                  to="/ContactUs"
                  className="hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
