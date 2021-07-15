import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function FlutterApp() {
  const config = {
    // public_key: process.env.REACT_APP_PUBLIC_KEY,
    // public_key: process.env.REACT_APP_db1c9338f08bb1c395c8338c07bdc3cc,
    public_key: "FLWPUBK_TEST-db1c9338f08bb1c395c8338c07bdc3cc-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "dayo awobeku",
    },
    customizations: {
      title: "Escrow Secure Payment",
      description: "Payment for items in cart",
      logo: "https://raw.githubusercontent.com/awobekuD/PTJ-90-Project/27ef3b0591555dffba047d94f9293074f6910d67/src/assets/Homepage%20Logo.svg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      {/* <h1>Hello Test user</h1> */}

      <button
        className="check-out-btn"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Proceed to Pay
      </button>
    </div>
  );
}
