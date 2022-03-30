import { useStripe, useElements, PaymentElement, CardElement,ElementsConsumer } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { commerce } from "../../lib/commerce";

export default function CheckoutForm(props) {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const cardElementOptions = {
      style: {
        base: {
          color: "#666",
          fontSize: "20px",
          
        },
        invalid: {
          color: "#fa755a",
          fontSize: "fa755a",
        }
      }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(props.amount);
        console.log("props.checkoutTokenId",props.checkoutTokenId);
        if(props.amount == 0 || props.amount.value == "0"){
            alert("Plese enter donation amount!");
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
console.log("PaymentMethod",paymentMethod)

        if (!error) {
            try {
                const { id } = paymentMethod
                console.log("id", id)
                const response = await axios.post("http://localhost:3000/api/payment", {
                    amount: props.amount,
                    id
                })
                console.log("response",response.data);

                // console.log("Successful payment", response.data)

                if (response.data) {
                  console.log("props.checkoutTokenId.live.line_items",props.checkoutTokenId.live.line_items)
                  commerce.checkout
                  .capture(props.checkoutTokenId, {
                    // ...orderDetails,
                    // ...data,
                    // Include Stripe payment method ID:
               
                    line_items: props.checkoutTokenId.live.line_items,
                    
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
                      gateway: 'test_gateway',
                      
                      card: {
                        number: '4242424242424242',
                        expiry_month: '02',
                        expiry_year: '24',
                        cvc: '123',
                        postal_zip_code: '94107',
                      },
                    }
                    
                  })
                  .then((res) => console.log(res))
                  .catch((err) => console.log("Error at capture order", err));
              
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
                    <fieldset >
                      <label >Card detail</label>
                        <div class="cardElement">
                            <CardElement options={cardElementOptions}  />
                        </div>
                    </fieldset>
                    <button className='button-order'>Payment</button>
                </form>
                :
                <div>
                   
                </div>
            }


        </>
    )
};
