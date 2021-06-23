import React, { useState } from "react";
import GetStarted from "../Get Started/GetStarted";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      <GetStarted />
      {!isSubmitted ? <GetStarted submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};
