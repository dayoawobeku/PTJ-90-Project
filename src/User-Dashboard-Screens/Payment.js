import React from "react";
import UserDashboardLayout from "./UserDashboardLayout";
import { Link } from "react-router-dom";
import FlutterApp from "../Flutterwave";

const Payment = () => {
  return (
    <>
      <UserDashboardLayout>
        <header className="p-d-header">Payment and Checkout</header>

        <p className="sc">
          Escrow Service charge (4%){" "}
          <span style={{ float: "right" }}>N200</span>
        </p>
        <p className="del-fee">
          Delivery <span style={{ float: "right" }}>N450</span>
        </p>
        <div className="total-fee">
          <p>
            Total{" "}
            <span style={{ fontSize: "small", color: "gray" }}>
              (VAT included)
            </span>{" "}
            <span style={{ float: "right" }}>N5650</span>
          </p>
        </div>
        <p className="ad-q">
          Is your delivery address the same as in your profile?{" "}
          <Link to="my-profile">No, I want to change it.</Link>
        </p>
        {/* <button className="check-out-btn">Proceed to checkout</button> */}
        <FlutterApp />
      </UserDashboardLayout>
    </>
  );
};

export default Payment;
