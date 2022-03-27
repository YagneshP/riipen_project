import { useElements } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import getStripe from "../../lib/stripe";
import CheckoutForm from "./CheckoutForm";

function ElementForm() {
  const element = useElements();
  useEffect(() => {
    if (element) {
      const card = element.create("card");
      // const paymentMethodResponse = await stripe.createPaymentMethod({
      //   type: "card",
      //   card,
      // });
    }
  }, [element]);
  // console.log("card", card);
  return <CheckoutForm />;
}

export default ElementForm;
