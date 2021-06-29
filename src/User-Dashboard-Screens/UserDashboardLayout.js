import React from "react";
import "./UserDashboard.css";
import DashboardHeader from "./DashboardHeader";
import propTypes from "prop-types";

const UserDashboardLayout = ({ children }) => {
  return (
    <div className="product-detail">
      <DashboardHeader />
      <div className="product-d-box">{children}</div>
    </div>
  );
};

UserDashboardLayout.propTypes = {
  children: propTypes.arrayOf(propTypes.element).isRequired,
};

export default UserDashboardLayout;
