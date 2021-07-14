export default function validateProductDetails(values) {
  let errors = {};

  //   Description
  if (!values.description) {
    errors.description = "This field is required";
  }

  //   Price
  if (!values.price) {
    errors.price = "This field is required";
  }

  //   Quantity
  if (!values.quantity) {
    errors.quantity = "This field is required";
  }

  return errors;
}
