import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

function LogIn() {
  return (
    <div>
      <div className="overall-container">
        <img
          className="get-started-logo"
          src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/6e1cf155e609208bf310e0bcacffa3a8641d2ae5/src/images/Get%20Started%20Logo.svg"
          alt="escrow-logo"
        />

        <div className="get-started-container">
          <h2>Log In</h2>

          <form action="POST" className="log-in-form">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />

            <label htmlFor="password" className="password">
              Password
            </label>
            <input type="password" id="password" name="password" />
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
          </form>
          <div className="actions">
            <Link to="/log-in" className="log-in-login-page">
              Log In
            </Link>

            <Link to="/get-started" className="get-started-login-page">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
