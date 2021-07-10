import React from "react";
import UserDashboardLayout from "./UserDashboardLayout";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <UserDashboardLayout>
      <form className="product-details-form">
        <div className="damn">
          <h2 className="p-d-header">Product Details</h2>
          <div className="p-q">
            <div className="description product-details-labels">
              <label htmlFor="description">Description</label>
              <input type="text" required name="description" className="desc" />
            </div>

            <div className="price-and-qty">
              <div className="price product-details-labels">
                <label htmlFor="price">Price</label>
                <input type="number" className="price-input" min="1000" step="100" />
              </div>

              <div className="qty product-details-labels">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" className="quantity-input" name="quantity" min="1" max="10" />
              </div>
            </div>

            <div className="product-action">
              <Link to="/payment" className="next-btn">
                Next
              </Link>
            </div>
          </div>
        </div>
      </form>
    </UserDashboardLayout>
  );
};

export default ProductDetails;
