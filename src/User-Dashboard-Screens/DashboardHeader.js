import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

const DashboardHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <div className="main-container">
        <nav className="dashboard-nav">
          <Link className="navbar-brand" to="/PTJ-90-Project">
            <img
              src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/27ef3b0591555dffba047d94f9293074f6910d67/src/assets/Homepage%20Logo.svg"
              alt=""
              className="navbar-logo"
            />
          </Link>
          <ul
            className={isMobile ? "nav-lis-mobile-dashboard" : "lis"}
            onClick={() => setIsMobile(false)}
          >
            <li className="li-4">
              <Link to="/PTJ-90-Project" className="nav-link-primary">
                Home
              </Link>
            </li>
            <li className="li-4 ">
              <Link to="/my-transactions" className="nav-link-secondary">
                My Transactions
              </Link>
            </li>
            <li>
              <Link to="/my-profile" className="nav-link-secondary">
                My Profile
              </Link>
            </li>
          </ul>

          <button className="btn-mobile" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <i class="im im-x-mark"></i>
            ) : (
              <i class="im im-menu"></i>
            )}
          </button>
        </nav>
      </div>
      <div className="cus-container">
      <button className="cus">Customer</button>
      </div>
    </div>
  );
};

export default DashboardHeader;
