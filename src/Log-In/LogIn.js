import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
import useForm from "../Form-Authentication/useForm";
import validateLogin from "./ValidateLogin";

const LogIn = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateLogin
  );

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  console.log(passwordShown);

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

        {/* for local 3000 */}
        {/* <Link to="/">
          <img
            className="get-started-logo"
            src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/6e1cf155e609208bf310e0bcacffa3a8641d2ae5/src/images/Get%20Started%20Logo.svg"
            alt="escrow-logo"
          />
        </Link> */}

        <div className="log-in-container">
          <h2>Log In to your account</h2>

          <form className="log-in-form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="labels-login-page login-label">
              Email
            </label>

            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="davidoluwatosin@gmail.com"
            />
            {errors.email && <p>{errors.email}</p>}

            <label htmlFor="password" className="labels-login-page password">
              Password
            </label>
            <input
              type={passwordShown ? "text" : "password"}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="*********"
            />

            <div className="password-show">
              <i
                onClick={togglePasswordVisibility}
                className={`${
                  passwordShown
                    ? "im im-eye-off password-show-image"
                    : "im im-eye password-show-image"
                }`}
              ></i>
            </div>

            {errors.password && <p>{errors.password}</p>}

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
