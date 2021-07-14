import React from "react";
import DashboardHeader from "./DashboardHeader";
import "./SellerDetails.css";
// import { Link } from "react-router-dom";
import validateSellerDetails from "./sellerDetailsValidation";
// import sellerDetailsForm from "./sellerDetailsForm";
import useSellerForm from "./useSellerForm";

const SellerDetails = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useSellerForm(
    // seller,
    submitForm,
    validateSellerDetails
  );

  // function seller() {
  //   console.log("No errors, submit callback called!");
  //   console.log(values);
  // }

  return (
    <div>
      <div className="seller-container">
        <div>
          <DashboardHeader />
        </div>

        <form class="form-seller" onSubmit={handleSubmit} noValidate>
          <div className="form-seller-parent">
            <h2>Seller's Details</h2>
            <div className="name-container seller-inputs-parent">
              <label htmlFor="sellerName" className="seller-labels">
                Name of seller / Company
              </label>
              <input
                type="text"
                id="name"
                // required
                name="sellerName"
                value={values.sellerName || ""}
                onChange={handleChange}
                className="seller-inputs"
              />
              {errors.sellerName && <p>{errors.sellerName}</p>}
            </div>
            <div className="social-container seller-inputs-parent">
              <label htmlFor="sellerSocial" className="seller-labels">
                Social media handle
              </label>
              <input
                type="text"
                id="social"
                // required
                name="sellerSocial"
                value={values.sellerSocial || ""}
                onChange={handleChange}
                className="seller-inputs"
              />
              {errors.sellerSocial && <p>{errors.sellerSocial}</p>}
            </div>
            <div className="phone-container seller-inputs-parent">
              <label htmlFor="sellerPhoneNumber" className="seller-labels">
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                // required
                name="sellerPhoneNumber"
                value={values.sellerPhoneNumber || ""}
                onChange={handleChange}
                className="seller-inputs"
              />
              {errors.sellerPhoneNumber && <p>{errors.sellerPhoneNumber}</p>}
            </div>
            <div className="action">
              <button className="action-btn" type="submit">
                Next
              </button>
            </div>
            {/* <div className="action">
              <Link className="action-btn">Next</Link>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerDetails;
