import { Link } from "react-router-dom";
import React from "react";

function GetStarted() {
  return (
    <div>
      <Link to="/get-started">
        <img
          src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/6e1cf155e609208bf310e0bcacffa3a8641d2ae5/src/images/Get%20Started%20Logo.svg"
          alt="escrow-logo"
        />
      </Link>
      <div>
        <div>
          <h4>Account Type</h4>
          <div>
            <h5>Business</h5>
            <h5>Customer</h5>
          </div>
          <form action="POST">
            <label htmlFor="fname">Full Name</label>
            <input type="text" id="fname" name="fname" />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
