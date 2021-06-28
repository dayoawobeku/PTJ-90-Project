import React, { useState } from "react";
import LogIn from "./LogIn";
// import UserDashboardGreetings from "../User Dashboard Screens/UserDashboardGreetings";
import { Route, Redirect } from "react-router-dom";

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
        <Redirect to="user-dashboard" />
      )}
    </div>
  );
};

export default LoginForm;
