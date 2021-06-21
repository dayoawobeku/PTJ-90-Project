import React from "react";
import SecondSectionProps from "./SecondSectionProps";

function SecondSection() {
  return (
    <div>
      <SecondSectionProps
        heading="Business owner, your customers will trust you more"
        sub-heading="Trust is the currency of business"
        paragraph="At Escrow, we provide a logistics service to ensure your customers’ safety and satisfaction when they track their orders."
        link="Create a business account now"
        image=""
      />

      <SecondSectionProps
        heading="Customer, say goodbye to wrong purchases"
        sub-heading="Buying from someone you don’t know may be tricky"
        paragraph="We will ensure that what was delivered to you was exactly what you ordered by holding your payment securely in escrow until you have received what you ordered.
        If not, we will refund your money within 24 hours."
        link="Create a personal account now"
      />
    </div>
  );
}

export default SecondSection;
