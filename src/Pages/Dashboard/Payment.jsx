import React from "react";
import SharedTitle from "../shared/SharedTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  let striePromise = loadStripe(import.meta.env.VITE_payment);
  return (
    <>
      <SharedTitle heading="Pay" subheading="Please pay before you eat" />
      <div>
        <Elements stripe={striePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </>
  );
}

export default Payment;
