import { Router } from 'next/router';
import { useContext, useEffect, useState } from "react";
import { useCart } from "../context/Cart";
import { commerce } from "../lib/commerce";
const captureOrder = async () => {
  const [token, setToken] = useState();
  const [order, setOrder] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { line_items, subtotal } = useCart();
  console.log("line", line_items);
  const cartId = commerce.cart.id();
  console.log("cartid", commerce.cart.id());

  useEffect(() => {
    generateCheckoutToken();

  }, []);

  const generateCheckoutToken = async () => {
    if (cartId) {
      const token = await commerce.checkout.generateToken(cartId, {
        type: 'cart',
      });
      console.log("token", token);
      setToken(token);
    } else {
      Router.push('/cart');
    }
  }
  // const { line_items, subtotal } = useCart();
  const orderData = {
    line_items: token.live.line_items,
    customer: {
      firstname: firstName,
      lastname: lastName,
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
        number:  4242424242424242,
        expiry_month: 12,
        expiry_year: 34,
        cvc: 123,
        postal_zip_code: 'L6X 0S1',
      },
    },
  //   payment: {
  //     gateway: 'stripe',
  //     stripe: {
  //       payment_method_id: paymentMethodResponse.paymentMethod.id,
  //     },
  // }
  }
  console.log("orderData", orderData);
  console.log("token id", token.id);
  
  try {
    const orderPlaced = await commerce.checkout.capture(
      token.id,
      orderData
    );
    setOrder(orderPlaced);
    console.log("order",order);
    console.log("orderPlaced",orderPlaced);
    // dispatch({ type: ORDER_SET, payload: order });
    // localStorage.setItem('order_receipt', JSON.stringify(order));
    // await refreshCart();
    // Router.push('/confirmation');
  } catch (err) {
    console.log("error");
  }
}
 export default captureOrder;