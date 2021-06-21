import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <section>
        <div>
          <h2>
            Don’t be another social media{" "}
            <span> “What I ordered vs What I got”</span> meme
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
            Learn more <span></span>
          </Link>
        </div>

        <div>
          <img src="" alt="" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
