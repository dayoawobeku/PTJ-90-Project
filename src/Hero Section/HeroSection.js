import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <section>
        <div className="hero-section-container">
          <div className="hero-section-main">
            <div className="hero-section-text">
              <h2>
                Don’t be another social media{" "}
                <span className="text-box">
                  {" "}
                  “What I ordered vs What I got”
                </span>{" "}
                meme
              </h2>
              <p>
                Let us help you secure your transactions. Our safe and
                transparent space will keep you protected from fraud.
              </p>
            </div>

            <div className="hero-image">
              <img
                src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/e1c4ad755d0c567c64717810bd75c03be0e62015/src/images/Hero%20section%20image.svg"
                className="hero-section-image"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/685aa7a1fbe9f7283be480103b71dc82d9290195/src/images/Hero%20section%20image%20smaller%20screens.svg"
                className="hero-section-image-smaller-screens"
                alt=""
              />
            </div>
          </div>

          <div className="hero-buttons">
            <Link
              to="/get-started"
              className="link get-started get-started-secondary"
            >
              Get Started
            </Link>
            <Link to="/learn-more" className="link link-learn-more">
              Learn more{" "}
              <img
                src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/3dbc49ebba08ef210a8cbdc4d187320287dc9b51/src/images/Arrow.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
