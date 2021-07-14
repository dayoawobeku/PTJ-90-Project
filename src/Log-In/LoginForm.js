import React, { useState } from "react";
import LogIn from "./LogIn";
import UserDashboardGreetings from "../User-Dashboard-Screens/UserDashboardGreetings";

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? (
        <LogIn submitForm={submitForm} />
      ) : (
        <UserDashboardGreetings />
      )}
    </div>
  );
};

export default LoginForm;
