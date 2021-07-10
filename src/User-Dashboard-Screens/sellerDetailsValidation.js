export default function validateSellerDetails(values) {
  let errors = {};

  //   Seller Name
  if (!values.sellerName) {
    errors.sellerName = "This field is required";
  }

  //   Seller Social Media
  if (!values.sellerSocial) {
    errors.sellerSocial = "This field is required";
  }

  //   Seller Phone Number
  if (!values.sellerPhoneNumber) {
    errors.sellerPhoneNumber = "This field is required";
  }

  return errors;
}
