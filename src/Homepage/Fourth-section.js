import React from "react";
import FourthSectionProps from "./FourthSectionProps";

function FourthSection() {
  return (
    <div>
      <FourthSectionProps
        image="/escrow-app/src/assets/Safe to use.svg"
        heading="Safe to Use and Affordable"
        paragraph="Release of funds is always dependent on the authorization of transacting parties."
      />

      <FourthSectionProps
        image="/escrow-app/scr/assets/Transparency.svg"
        heading="Complete Transparency"
        paragraph="Disbursements are instant and you can wave goodbye to unpaid orders and cash-flow worries."
      />

      <FourthSectionProps
        image="/escrow-app/src/assets/Transfer funds.svg"
        heading="Easily Transfer Funds"
        paragraph="Payment options available to send funds easily and securely. "
      />
    </div>
  );
}

export default FourthSection;
