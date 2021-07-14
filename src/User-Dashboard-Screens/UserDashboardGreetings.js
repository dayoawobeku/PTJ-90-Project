import React from "react";
import DashboardHeader from "./DashboardHeader";
import { Link } from "react-router-dom";
import "./UserDashboard.css";

const UserDashboardGreetings = () => {
  // const [timeOfDay, setTimeOfDay] = useState(null);

  // useEffect(() => {
  //   const today = new Date();
  //   let time = today.getHours();

  //   if (time >= 0 && time < 12) {
  //     setTimeOfDay("morning");
  //   } else if (time >= 12 && time < 16) {
  //     setTimeOfDay("afternoon");
  //   } else {
  //     setTimeOfDay("evening");
  //   }
  //   console.log(timeOfDay);
  // }, [timeOfDay]);

  return (
    <div className="user-dashboard-g">
      <DashboardHeader />
      <div className="complete-profile">
        <Link to="/my-profile" className="complete-prof">
          Please complete your profile for a more personalized experience
        </Link>
      </div>

      <div className="g-text">
        <div>
          {/* <p className="greeting">Good {timeOfDay} David,</p> */}
          <img
            src="https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/944fee902353c7be3f55beaba5acc24e5ec8d487/src/images/User%20Dashboard%20Home%20Image.svg"
            alt=""
            className="user-dashboard-image"
          />
          <p className="empty-street">An empty street, an empty house...</p>
          <div className="dashboard-buttons">
            <Link to="/seller-details" className="dashboard-button-primary">
              Create your first transaction
            </Link>
            <Link to="/vendors" className="dashboard-button-secondary">
              View vendors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardGreetings;
