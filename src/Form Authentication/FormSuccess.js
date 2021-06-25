import React from "react";
import { Link } from "react-router-dom";
import "./FormSuccess.css";

const FormSuccess = () => {
  return (
    <div className="form-success-container">
      <Link className="get-started-logo" alt="escrow-logo" to="/PTJ-90-Project">
        <img
          src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/6e1cf155e609208bf310e0bcacffa3a8641d2ae5/src/images/Get%20Started%20Logo.svg"
          alt="escrow-logo"
        />
      </Link>
      <div className="form-success get-started-container">
        <h2>You're all set!</h2>
        <img
          src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/dcd1f1f812f205f90edd4af98864cb9a96df8524/src/images/Form%20success.svg"
          alt="success-image"
          className="form-success"
        />
        <Link to="/log-in" className="proceed-login">
          Proceed to Log In
        </Link>
      </div>
    </div>
  );
};

export default FormSuccess;
