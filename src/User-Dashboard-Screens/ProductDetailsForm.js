import React, { useState } from "react";
// import SellerDetails from "./SellerDetails";
import ProductDetails from "./ProductDetails";
import { Redirect } from "react-router-dom";

const ProductDetailsForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? (
        <ProductDetails submitForm={submitForm} />
      ) : (
        <Redirect to="payment" />
      )}
    </div>
  );
};

export default ProductDetailsForm;
