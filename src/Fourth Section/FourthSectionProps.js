import React from "react";
import "./FourthSection.css";

function FourthSectionProps(props) {
  return (
    <>
      <div className="fourth-section">
        <div className="fourth-section-container">
          <img src={props.image} />
          <h3>{props.heading}</h3>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </>
  );
}

export default FourthSectionProps;
