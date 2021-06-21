import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <section>
        <div className="hero-section-container">
          <div className="hero-section-text">
            <h2>
              Don’t be another social media{" "}
              <span className="text-box"> “What I ordered vs What I got”</span>{" "}
              meme
            </h2>
            <p>
              Let us help you secure your transactions. Our safe and transparent
              space will keep you protected from fraud.
            </p>
            <Link
              to="/get-started"
              className="link get-started get-started-secondary"
            >
              Get Started
            </Link>
            <Link to="/learn-more" className="link link-learn-more">
              Learn more{" "}
              <span>
                <img src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/3dbc49ebba08ef210a8cbdc4d187320287dc9b51/src/images/Arrow.svg" />
              </span>
            </Link>
          </div>

          <div>
            <img
              src="https://github.com/awobekuD/PTJ-90-Project/blob/main/src/images/Hero%20section%20image.png?raw=true"
              alt="hero-section-image"
              className="hero-section-image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
