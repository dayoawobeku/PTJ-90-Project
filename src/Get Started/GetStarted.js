import React from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";

function GetStarted() {
  return (
    <div className="overall-container-get-started">
      <img
        className="get-started-logo"
        src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/6e1cf155e609208bf310e0bcacffa3a8641d2ae5/src/images/Get%20Started%20Logo.svg"
        alt="escrow-logo"
      />

      <div className="get-started-container">
        <h2>Create your account</h2>
        <h3>Account Type</h3>
        <div className="options">
          <h4 className="business">Business</h4>
          <h4>Customer</h4>
        </div>
        <form action="POST" className="get-started-form">
          <label htmlFor="fname">Full Name</label>
          <input type="text" id="fname" name="fname" />

          <label htmlFor="email" className="email">
            Email
          </label>
          <input type="text" id="email" name="email" />

          <label htmlFor="password" className="password">
            Password
          </label>
          <input type="password" id="password" name="password" />
          <img
            src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/75852d3203c16ecb8bad52c52946233f6c766cd7/src/images/Hide%20password%20icon.svg"
            alt="show/hide password"
            className="show-password"
          />

          <p className="user-agreement">
            By continuing, you agree to our{" "}
            <Link to="/user-agreement" className="user-agreement-link">
              <span className="text-blue">User Agreement</span> and{" "}
              <span className="text-blue">Privacy Policy</span>{" "}
            </Link>
          </p>
        </form>
        <div className="actions">
          <Link to="/get-started" className="get-started-button">
            Create my account
          </Link>

          <Link to="/log-in" className="log-in">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
