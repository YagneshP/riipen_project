import { useStripe, useElements, PaymentElement, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { commerce } from "../../lib/commerce";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link

//   } from "react-router-dom";

export default function CheckoutForm(props) {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  //   const [userid, setId] = useState("");
  //   const [fundid, setfundId] = useState("");
  // useEffect(() => {
  // 	setId(localStorage.getItem("userID"));
  //       setfundId(localStorage.getItem("fundID"))
  // }, []);

  // console.log('userid',userid);
  // console.log('fundid',fundid)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(props.amount);
    console.log("props.checkoutTokenId", props.checkoutTokenId);
    if (props.amount == 0 || props.amount.value == "0") {
      alert("Plese enter donation amount!");
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
    console.log("PaymentMethod", paymentMethod)

    if (!error) {
      try {
        const { id } = paymentMethod
        console.log("id", id)
        const response = await axios.post("http://localhost:3000/api/payment", {
          amount: props.amount,
          id
        })
        console.log("response", response.data);

        // console.log("Successful payment", response.data)

        if (response.data) {
          console.log("props.checkoutTokenId.live.line_items", props.checkoutTokenId.live.line_items)
          commerce.checkout
            .capture(props.checkoutTokenId, {
              // ...orderDetails,
              // ...data,
              // Include Stripe payment method ID:

              line_items: props.checkoutTokenId.live.line_items,
              // line_items: {
              //   item_7RyWOwmK5nEa2V: {
              //     quantity: 1,
              //     selected_options: {
              //       vgrp_p6dP5g0M4ln7kA: 'optn_DeN1ql93doz3ym'
              //     }
              //   }
              // },
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
                gateway: 'test_stripe',
                stripe: {
                  payment_method_id: id,
                },
              }

            })
            .then((res) => console.log(res))
            .catch((err) => console.log("Error at capture order", err));

          //     axios.post("http://localhost:3001/api/funds/addnewdonation", {amount:props.amount,userid,fundid})
          //         .then(res => {
          //             console.log(res);
          //         });
          //     setSuccess(true)
        }

      } catch (error) {
        console.log("Error", error)
      }
    } else {
      console.log(error.message)
    }
  }
  return (
    <>

      {!success ?
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement />
            </div>
          </fieldset>
          <button>Payment</button>
        </form>
        :
        <div>
          <h2>You just Donate money. this is the best decision of you're life</h2>
          <button><Link to="/DonateMoney">DonateMoney </Link></button>  <Route path="/DonateMoney/">< DonateMoney /></Route>
        </div>
      }


    </>
  )
};
