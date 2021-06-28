import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
import useForm from "../Form Authentication/UseForm";
import validateLogin from "./ValidateLogin";

const LogIn = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateLogin
  );

  return (
    <div>
      <div className="overall-container">
        <Link
          className="get-started-logo"
          alt="escrow-logo"
          to="/PTJ-90-Project"
        >
          <img
            src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/6e1cf155e609208bf310e0bcacffa3a8641d2ae5/src/images/Get%20Started%20Logo.svg"
            alt="escrow-logo"
          />
        </Link>

        <div className="get-started-container">
          <h2>Log In</h2>

          <form className="log-in-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}

            <label htmlFor="password" className="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}

            <img
              src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/a1eef24009b0f693647661a81b9ba4aa36b5e524/src/images/Show%20or%20Hide%20password.svg"
              alt="show/hide password"
              className="show-password-login-page"
            />

            <p className="forgot-password">
              <Link to="/forgot-password" className="forgot-password-link">
                Forgot password?
              </Link>
            </p>
            <div className="actions">
              <button type="submit" className="log-in-login-page">
                Log In
              </button>
              <Link to="/get-started" className="get-started-login-page">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
