import React from "react";
import { Link } from "react-router-dom";

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
              <img src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/3dbc49ebba08ef210a8cbdc4d187320287dc9b51/src/images/Arrow.svg" />
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
