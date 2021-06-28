import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/27ef3b0591555dffba047d94f9293074f6910d67/src/assets/Homepage%20Logo.svg"
              alt=""
            />
          </Link>
          <ul className="lis">
            <li>
              <Link to="/" className="link links home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="link links">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link links">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/log-in" className="link links">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/get-started" className="link get-started nav-fourth">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
