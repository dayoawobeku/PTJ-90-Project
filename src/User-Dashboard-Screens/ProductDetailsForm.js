import React, { useState } from "react";
// import SellerDetails from "./SellerDetails";
import ProductDetails from "./ProductDetails";
import { Redirect } from "react-router-dom";
// import Payment from "./Payment";

const ProductDetailsForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  // <div>
  //   {!isSubmitted ? (
  //     <ProductDetails submitForm={submitForm} />
  //   ) : (
  //     <Redirect to="payment" />
  //     // <Payment />
  //   )}
  // </div>

  if (!isSubmitted) {
    return <ProductDetails submitForm={submitForm} />;
  }
  return <Redirect to="payment" />;
};

export default ProductDetailsForm;
