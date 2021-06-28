import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import { Link } from "react-router-dom";
import "./UserDashboard.css";

const UserDashboardGreetings = () => {
  const [timeOfDay, setTimeOfDay] = useState(null);

  useEffect(() => {
    const today = new Date();
    let time = today.getHours();

    if (time >= 0 && time < 12) {
      setTimeOfDay("morning");
    } else if (time >= 12 && time < 16) {
      setTimeOfDay("afternoon");
    } else {
      setTimeOfDay("evening");
    }
    console.log(timeOfDay);
  }, [timeOfDay]);

  return (
    <div className="user-dashboard-g">
      <DashboardHeader />
      <div className="customer">
        <p className="cus">Customer</p>
      </div>
      <p className="complete-prof">
        Please complete your profile for a more personalized experience
      </p>

      <div className="g-text">
        <div className="hey">
          <p className="greeting">Good {timeOfDay} David,</p>
          <p className="purchase">
            Click the button below to make a purchase with Escrow
          </p>
          <Link to="#">Proceed</Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardGreetings;
