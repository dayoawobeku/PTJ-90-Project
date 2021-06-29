import React from "react";
import DashboardHeader from "./DashboardHeader";
import "./SellerDetails.css";
import { Link } from "react-router-dom";

function SellerDetails() {
  return (
    <div>
      <div className="seller-container">
        <div>
          <DashboardHeader />
        </div>

        <form class="form-seller">
          <div className="form-seller-parent">
            <h2>Seller's Details</h2>

            <div className="name-container seller-inputs-parent">
              <label htmlFor="name" className="seller-labels">
                Name of seller / Company
              </label>
              <input
                type="text"
                id="name"
                required
                name="name"
                className="seller-inputs"
              />
            </div>

            <div className="social-container seller-inputs-parent">
              <label htmlFor="social" className="seller-labels">
                Social media handle
              </label>
              <input
                type="text"
                id="social"
                required
                name="social"
                className="seller-inputs"
              />
            </div>

            <div className="phone-container seller-inputs-parent">
              <label htmlFor="phone" className="seller-labels">
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                required
                name="phone"
                className="seller-inputs"
              />
            </div>
            <div className="action">
              <Link className="action-btn" to="/product-details">
                Next
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SellerDetails;
