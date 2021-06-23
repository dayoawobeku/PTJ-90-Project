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
        <div className="social-icons">
          <Link to="/youtube.com" className="navbar-logo">
            <img
              src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/914121bd4aee98861621083a87ff82424c1d3b22/src/images/YouTube.svg"
              alt="YouTube logo"
            />
          </Link>
          <Link to="/twitter.com" className="navbar-logo">
            <img
              src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/914121bd4aee98861621083a87ff82424c1d3b22/src/images/Twitter.svg"
              alt="Twitter logo"
            />
          </Link>
          <Link to="/instagram.com" className="navbar-logo">
            <img
              src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/914121bd4aee98861621083a87ff82424c1d3b22/src/images/YouTube.svg"
              alt="Instagram logo"
            />
          </Link>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-children">
          <div className="footer-links-div">
            <h5>Help</h5>
            <div className="footer-links-parent">
              <Link to="/support" className="footer-links">
                Support
              </Link>
              <Link to="/knowledgebase" className="footer-links">
                Knowledgebase
              </Link>
              <Link to="/tutorials" className="footer-links">
                Tutorials
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-links-div">
          <h5>Company</h5>
          <div className="footer-links-parent">
            <Link to="/about-us" className="footer-links">
              About Us
            </Link>
            <Link to="/careers" className="footer-links">
              Careers
            </Link>
            <Link to="/contact-us" className="footer-links">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="footer-links-div">
          <h5>Contact Us</h5>
          <div className="footer-links-parent">
            <Link to="/email" className="footer-links">
              info@zuritraining.com
            </Link>
            <p>08023568841</p>
            <p>8 Jubliee-CMD Road, Magodo, Lagos State</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
