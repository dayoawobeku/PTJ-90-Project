import React, { useState } from "react";
import SellerDetails from "./SellerDetails";
// import { Redirect } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const SellerDetailsForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  // console.log(isSubmitted);
  return (
    // <div>
    //   {!isSubmitted ? (
    //     <SellerDetails submitForm={submitForm} />
    //   ) : (
    //     <Redirect to="user-dashboard" />
    //   )}
    // </div>

    <div>
      {!isSubmitted ? (
        <SellerDetails submitForm={submitForm} />
      ) : (
        <ProductDetails />
      )}
    </div>
  );
};

export default SellerDetailsForm;
