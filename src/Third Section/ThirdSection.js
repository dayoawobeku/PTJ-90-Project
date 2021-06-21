import React from "react";
import ThirdSectionProps from "./ThirdSectionProps";

function ThirdSection() {
  return (
    <div>
      <ThirdSectionProps
        heading="Customer, say goodbye to wrong purchases"
        subHeading="Buying from someone you don’t know may be tricky"
        paragraph="We will ensure that what was delivered to you was exactly what you ordered by holding your payment securely in escrow until you have received what you ordered.
        If not, we will refund your money within 24 hours."
        link="Create a personal account now"
        image="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/5f6cb30daba3bb90f2bbecc8cfd26524b2a1bf17/src/images/Third%20section%20image.svg"
        alt="third-section-image"
      />
    </div>
  );
}
export default ThirdSection;
