import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  const openNav = () => {
    const nav = document.querySelector(".min-nav");
    nav.style.width = "100%";
  };
  const closeNav = () => {
    const nav = document.querySelector(".min-nav");
    nav.style.width = "0%";
  };

  return (
    <>
      <nav className="dashboard-nav">
        <Link className="navbar-brand" to="/PTJ-90-Project">
          <img
            src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/27ef3b0591555dffba047d94f9293074f6910d67/src/assets/Homepage%20Logo.svg"
            alt=""
          />
        </Link>
        <ul className="nav-ul">
          <li className="li-4">
            <Link to="/PTJ-90-Project" className="nav-link-primary">
              Home
            </Link>
          </li>
          <li className="li-4 ">
            <Link to="" className="nav-link-secondary">
              My Transactions
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link-secondary">
              My Profile
            </Link>
          </li>
        </ul>
        <span className="ham" onClick={openNav}>
          &#9776;
        </span>
      </nav>

      <div className="min-nav">
        <div className="logo-div">
          <Link className="navbar-brand" to="/PTJ-90-Project">
            <img
              src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/27ef3b0591555dffba047d94f9293074f6910d67/src/assets/Homepage%20Logo.svg"
              alt=""
            />
          </Link>
          <span className="closebtn" onClick={closeNav}>
            &times;
          </span>
        </div>

        <div className="min-nav-content">
          <Link to="/PTJ-90-Project">Home</Link>
          <Link to="#">My Transactions</Link>
          <Link to="#">My Profile</Link>
        </div>
      </div>
<<<<<<< HEAD
=======

>>>>>>> 19732f6c743f066de7bac1486a5f48c60120236b
    </>
  );
};

export default DashboardHeader;
