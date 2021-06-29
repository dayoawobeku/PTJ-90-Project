import React from "react";
import UserDashboardLayout from "./UserDashboardLayout";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <>
      <UserDashboardLayout>
        <header className="p-d-header">Payment and Checkout</header>
        <form>
          <p>Payment method</p>
          <input type="radio" name="payment-method" id="payment-method" />
          <label htmlFor="payment-method" className="payment-label">
            Cash on Delivery
          </label>
          <br />
          <input type="radio" name="payment-method" id="payment-method" />
          <label htmlFor="payment-method" className="payment-label">
            Bank Transfer
          </label>
        </form>
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
          Is your delivery address same as your profile?{" "}
          <Link>No, I want to change it.</Link>
        </p>
        <button className="check-out-btn">Proceed to checkout</button>
      </UserDashboardLayout>
    </>
  );
};

export default Payment;

