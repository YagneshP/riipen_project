import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import CheckoutForm from "./CheckoutForm"
const publishableKey = `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`;
  const stripePromise = loadStripe(publishableKey);
export default function StripeContainer(props) {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: process.env.STRIPE_SECRET_TEST,
        appearance : {
            theme: 'stripe'
          }
      };
	return (
		<Elements stripe={stripePromise} options={options} >
        <CheckoutForm amount={props.amount} checkoutTokenId={props.checkoutTokenId}/>
      </Elements>
	)
}