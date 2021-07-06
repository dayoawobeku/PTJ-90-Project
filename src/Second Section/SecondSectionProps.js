import React from "react";
import { Link } from "react-router-dom";
import "./SecondSection.css";

function SecondSectionProps(props) {
  return (
    <>
      <div className="second-section-parent">
        <div className="second-section-container">
          <div className="second-container-text">
            <h2>{props.heading}</h2>
            <h3>{props.subHeading}</h3>
            <p>{props.paragraph}</p>
            <Link to="/get-started" className="sub-link">
              {props.link}{" "}
              <img
                src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/307adcc2a5d500d3a3a6dbf3603c8ef1bf186ba4/src/images/Arrow%20Second%20section.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="second-container-image">
            <img src={props.image} alt={props.alt} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondSectionProps;
