import React from "react";
import FourthSectionProps from "./FourthSectionProps";
import "./FourthSection.css";

function FourthSection() {
  return (
    <div className="container">
      <FourthSectionProps
        image="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/307adcc2a5d500d3a3a6dbf3603c8ef1bf186ba4/src/images/Safe%20to%20use.svg"
        heading="Safe to Use and Affordable"
        paragraph="Release of funds is always dependent on the authorization of transacting parties.  "
      />

      <FourthSectionProps
        image="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/307adcc2a5d500d3a3a6dbf3603c8ef1bf186ba4/src/images/Transparency.svg"
        heading="Complete Transparency"
        paragraph="Disbursements are instant and you can wave goodbye to unpaid orders and cash-flow worries."
      />

      <FourthSectionProps
        image="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/307adcc2a5d500d3a3a6dbf3603c8ef1bf186ba4/src/images/Transfer%20funds.svg"
        heading="Easily Transfer Funds"
        paragraph="Payment options available to send funds easily and securely. "
      />
    </div>
  );
}

export default FourthSection;
