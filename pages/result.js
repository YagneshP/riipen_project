import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useCart } from "../context/Cart";
import { commerce } from "../lib/commerce";

function Result() {
  const router = useRouter();

  const { session_id, token_id } = router.query;
  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout_session/${session_id}` : null,
    (url) => fetch(url).then((res) => res.json())
  );
  
  if (data) {
    console.log("pay", data);
    console.log("id",data.payment_intent.id)
    // const { line_items, subtotal } = useCart();
    commerce.checkout
      .capture(token_id, {
        // ...orderDetails,
        // ...data,
        // Include Stripe payment method ID:
   
        line_items: {
          item_7RyWOwmK5nEa2V: {
            quantity: 1,
            selected_options: {
              vgrp_p6dP5g0M4ln7kA: 'optn_DeN1ql93doz3ym'
            }
          }
        },
            customer: {
                firstname: "firstName",
                lastname: "lastName",
                email: 'john.doe@example.com'
            },
            shipping: {
                name: 'John Doe',
                street: '123 Fake St',
                town_city: 'San Francisco',
                county_state: 'US-CA',
                postal_zip_code: '94103',
                country: 'US'
            },
            fulfillment: {
                shipping_method: 'ship_7RyWOwmK5nEa2V'
            },
            billing: {
                name: 'John Doe',
                street: '234 Fake St',
                town_city: 'San Francisco',
                county_state: 'US-CA',
                postal_zip_code: '94103',
                country: 'US'
            },
        payment: {
          gateway: 'stripe',
          // card: {
          //   number: "4242 4242 4242 4242",
          //   token: "tok_1IJ5Nn2eZvKYlo2CqceJkfue",
          //   nonce: 293074902374234,
          // },
          card: {
            token: data.payment_intent.id
          }
        },
         pay_what_you_want: '149.99'
      })
      .then((res) => console.log(res))
      .catch((err) => console.log("Error at capture order", err));
  }

  // console.log("order", order);
  if (error) return <div>failed to load</div>;

  return (
    <div className='page-container'>
      <h1>Checkout Payment Result</h1>
      {/* <h2>Status: {data?.payment_intent?.status ?? "loading..."}</h2> */}
      <h3>CheckoutSession response:</h3>
      <pre>{data ? JSON.stringify(data, null, 2) : "loading..."} </pre>
    </div>
  );
  // return <div>{session_id}</div>;
}

export default Result;
