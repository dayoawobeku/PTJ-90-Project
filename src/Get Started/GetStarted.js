import React from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";
import useForm from "../Form Authentication/useForm";
import validate from "../Form Authentication/validateInfo";

function GetStarted() {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

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
          <h4 className="business">Business</h4>
          <h4>Customer</h4>
        </div>
        <form
          action="POST"
          onSubmit={handleSubmit}
          className="get-started-form"
        >
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p>{errors.fullname}</p>}

          <label htmlFor="email" className="email">
            Email
          </label>
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
            src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/75852d3203c16ecb8bad52c52946233f6c766cd7/src/images/Hide%20password%20icon.svg"
            alt="show/hide password"
            className="show-password"
          />

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
