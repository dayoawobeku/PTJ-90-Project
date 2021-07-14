import { useState, useEffect } from "react";

const useProductForm = (callback, validateProductDetails) => {
  const [values, setValues] = useState({
    description: "",
    price: "",
    quantity: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(validateProductDetails(values));

    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useProductForm;
