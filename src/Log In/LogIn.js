import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

function LogIn() {
  return (
    <div>
      <div className="overall-container">
        <Link to="/PTJ-90-Project">
          <img
            className="get-started-logo"
            src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/6e1cf155e609208bf310e0bcacffa3a8641d2ae5/src/images/Get%20Started%20Logo.svg"
            alt="escrow-logo"
          />
        </Link>

        {/* for local 3000 */}
        {/* <Link to="/">
          <img
            className="get-started-logo"
            src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/6e1cf155e609208bf310e0bcacffa3a8641d2ae5/src/images/Get%20Started%20Logo.svg"
            alt="escrow-logo"
          />
        </Link> */}

        <div className="log-in-container">
          <h2>Log In</h2>

          <form action="POST" className="log-in-form">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />

            <label htmlFor="password" className="password">
              Password
            </label>
            <input type="password" id="password" name="password" />
            <img
              src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/75852d3203c16ecb8bad52c52946233f6c766cd7/src/images/Hide%20password%20icon.svg"
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
            <button type="submit" className="log-in-login-page">
              Log In
            </button>
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
