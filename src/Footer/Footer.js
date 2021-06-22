import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img
          src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/27ef3b0591555dffba047d94f9293074f6910d67/src/assets/Homepage%20Logo.svg"
          alt="Footer-logo"
        />
        <div>
          <Link to="/" className="navbar-logo">
            <img
              src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/27ef3b0591555dffba047d94f9293074f6910d67/src/assets/Homepage%20Logo.svg"
              alt="YouTube logo"
            />
          </Link>
          <Link to="/" className="navbar-logo">
            <img
              src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/27ef3b0591555dffba047d94f9293074f6910d67/src/assets/Homepage%20Logo.svg"
              alt="Twitter logo"
            />
          </Link>
          <Link to="/" className="navbar-logo">
            <img
              src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/27ef3b0591555dffba047d94f9293074f6910d67/src/assets/Homepage%20Logo.svg"
              alt="Instagram logo"
            />
          </Link>
        </div>
      </div>
      <div>
        <h5>Help</h5>
        <p>Support</p>
        <p>Knowledgebase</p>
        <p>Tutorials</p>
      </div>
      <div>
        <h5>Company</h5>
        <p>About Us</p>
        <p>Careers</p>
        <p>Contact Us</p>
      </div>
      <div>
        <h5>Contact Us</h5>
        <p>info@zuritraining.com</p>
        <p>08023568841</p>
        <p>8 Jubliee-CMD Road, Magodo, Lagos State</p>
      </div>
    </footer>
  );
}

export default Footer;
