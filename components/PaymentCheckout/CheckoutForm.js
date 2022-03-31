import { useStripe, useElements, PaymentElement, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { commerce } from "../../lib/commerce";
import { useCartActions } from "../../context/Cart";

export default function CheckoutForm(props) {
  console.log("props",props);
  console.log("props.userInfo", props.userInfo);
  console.log("props.shippingInfo", props.shippingInfo);
  const { setCart } = useCartActions();
const router = useRouter();
    const {
      first_name:first_name,
      last_name:last_name,
      email:email,
      address:address,
      town:town,
      country:country,
      state:province,
      phone:phone,
      postal:postal
      } = props.userInfo;

       const name = first_name + " " + last_name;
       console.log("name",name);

 const {
      first_name:ship_first_name,
      last_name:ship_last_name,
      email: ship_email,
      address:ship_address,
      town:ship_town,
      country:ship_country,
      province:ship_province,
      postal:ship_postal
      } = props.shippingInfo;
    
      const ship_name = ship_first_name + " " + ship_last_name;
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
    
    if (props.amount == 0) {
      alert("Plese select some !");
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
   
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
          console.log("props.checkoutTokenId.live.line_items", props.checkoutTokenId)
          commerce.checkout
            .capture(props.checkoutTokenId.id, {
              
              line_items: props.checkoutTokenId.line_items,

              customer: {
                first_name,
                last_name,
                email
              },
              shipping: {
                ship_name,
                ship_address,
                ship_town,
                ship_province,
                ship_postal,
                ship_country
              },
              fulfillment: {
                shipping_method: 'ship_7RyWOwmK5nEa2V'
              },
              billing: {
                name,
                address,
                town,
                province,
                postal,
                country
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
            .then((res) => {console.log("final order",res);
            commerce.cart.empty().then((response) => 
            {
              console.log(response);
              setCart(response.cart);
            })
            router.push({
              pathname: '/thankyou',
              query: { order: res.id}
          })
            })
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
              <CardElement options={cardElementOptions} />
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
