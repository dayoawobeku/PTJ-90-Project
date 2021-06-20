import React from "react";

function FourthSectionProps(props) {
  return (
    <div>
      <img src={props.image} />
      <h3>{props.heading}</h3>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default FourthSectionProps;
