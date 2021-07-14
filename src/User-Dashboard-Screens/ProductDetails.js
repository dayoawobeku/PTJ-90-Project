import React from "react";
import UserDashboardLayout from "./UserDashboardLayout";
// import { Link } from "react-router-dom";
import useProductForm from "./useProductForm";
import validateProductDetails from "./productDetailsValidation";

const ProductDetails = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useProductForm(
    // seller,
    submitForm,
    validateProductDetails
  );

  // function seller() {
  //   console.log(values);
  // }

  return (
    <UserDashboardLayout>
      <form className="product-details-form" onSubmit={handleSubmit} noValidate>
        <div className="damn">
          <h2 className="p-d-header">Product Details</h2>
          <div className="p-q">
            <div className="description product-details-labels ">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                className="desc"
                value={values.description || ""}
                onChange={handleChange}
              />
              {errors.description && <p>{errors.description}</p>}
            </div>

            <div className="price-and-qty">
              <div className="price product-details-labels">
                <label htmlFor="price">Price (Naira)</label>
                <input
                  type="number"
                  step="100"
                  name="price"
                  value={values.price || ""}
                  onChange={handleChange}
                />
                {errors.price && <p>{errors.price}</p>}
              </div>

              <div className="qty product-details-labels">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  value={values.quantity || ""}
                  onChange={handleChange}
                />
                {errors.quantity && <p>{errors.quantity}</p>}
              </div>
            </div>

            <div className="action">
              <button type="submit" className="next-btn">
                Next
              </button>
              {/* <Link to="/payment" className="next-btn">
                Next
              </Link> */}
            </div>
          </div>
        </div>
      </form>
    </UserDashboardLayout>
  );
};

export default ProductDetails;
