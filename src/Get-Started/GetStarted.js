import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";
import useForm from "../Form-Authentication/useForm";
import validate from "../Form-Authentication/ValidateInfo";

function GetStarted({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  console.log(passwordShown);

  return (
    <div className="overall-container-get-started">
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

      <div className="get-started-container">
        <h2>Create your account</h2>
        <h3>Account Type</h3>
        <div className="options">
          <h4 className="customer-gs">Customer</h4>
          <h4>Business</h4>
        </div>

        <form onSubmit={handleSubmit} className="get-started-form">
          <label htmlFor="fullname" className="get-started-labels">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
            placeholder="David Oluwatosin"
          />
          {errors.fullname && <p>{errors.fullname}</p>}
          <label htmlFor="email" className="get-started-labels email">
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

          <label htmlFor="password" className="get-started-labels password">
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
          <h5 className="user-agreement">
            By continuing, you agree to our{" "}
            <Link to="/user-agreement" className="user-agreement-link">
              <span className="text-blue">User Agreement</span> and{" "}
              <span className="text-blue">Privacy Policy</span>{" "}
            </Link>
          </h5>
          <div className="actions">
            <button type="submit" className="get-started-button">
              Create my account
            </button>

            <Link to="/log-in" className="log-in">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetStarted;
