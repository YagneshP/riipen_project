// import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Router } from 'next/router';
import { useContext, useEffect,useState } from "react";
// import { useCartActions } from "../context/Cart";
import { useCart } from "../context/Cart";
// import { CartStateContext } from '../context/Cart';
import { commerce } from "../lib/commerce";
import {GrandTotal} from './cart/GrandTotal';
//  const { setCart } = useCartActions();
// import Commerce from '@chec/commerce.js';

// const commerce = new Commerce('pk_test_41232e4fdaec2a10e57e771251a71f8d758f37750ae7d');
export default function Checkout1() {
	const [token, setToken] = useState();
  const [order,setOrder] = useState({});
	const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
	 const { line_items, subtotal } = useCart();
   console.log("line",line_items);
	const cartId= commerce.cart.id();
	console.log("cartid",commerce.cart.id());
	
	useEffect(() => {
      generateCheckoutToken();
   
  }, []);

	const generateCheckoutToken = async () => {
    if (cartId) {
      const token = await commerce.checkout.generateToken(cartId, {
        type: 'cart',
      });
			console.log("token",token);
      setToken(token);
    } else {
      Router.push('/cart');
    }
	}
		const handleCaptureCheckout = async () => {
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
        console.log("orderPlaced",orderPlaced);
        // dispatch({ type: ORDER_SET, payload: order });
        // localStorage.setItem('order_receipt', JSON.stringify(order));
        // await refreshCart();
        // Router.push('/confirmation');
      } catch (err) {
        console.log("error");
      }
  };


	return (
    <div id='content'>
      {/* <!--======= PAGES INNER =========--> */}
      <section className='chart-page padding-top-100 padding-bottom-100'>
        <div className='container'>
          {/* <!-- Payments Steps --> */}
          <div className='shopping-cart'>
            {/* <!-- SHOPPING INFORMATION --> */}
            <div className='cart-ship-info'>
              <div className='row'>
                {/* <!-- ESTIMATE SHIPPING & TAX --> */}
                <div className='col-sm-7'>
                  <h6>BILLING DETAILS</h6>
                  <form>
                    <ul className='row'>
                      {/* <!-- Name --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *FIRST NAME
                          <input
                            type='text'
                            name='first-name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder=''
                          />
                        </label>
                      </li>
                      {/* <!-- LAST NAME --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *LAST NAME
                          <input
                            type='text'
                            name='last-name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder=''
                          />
                        </label>
                      </li>
                      <li className='col-md-6'>
                        {/* <!-- COMPANY NAME --> */}
                        <label>
                          COMPANY NAME
                          <input
                            type='text'
                            name='company'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      <li className='col-md-6'>
                        {/* <!-- ADDRESS --> */}
                        <label>
                          *ADDRESS
                          <input
                            type='text'
                            name='address'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      {/* <!-- TOWN/CITY --> */}
                      <li className='col-md-6'>
                        <label>
                          *TOWN/CITY
                          <input
                            type='text'
                            name='town'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>

                      {/* <!-- COUNTRY --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          COUNTRY
                          <input
                            type='text'
                            name='contry-state'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>

                      {/* <!-- EMAIL ADDRESS --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *EMAIL ADDRESS
                          <input
                            type='text'
                            name='contry-state'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      {/* <!-- PHONE --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *PHONE
                          <input
                            type='text'
                            name='postal-code'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>

                      {/* <!-- PHONE --> */}
                      <li className='col-md-6'>
                        <button type='submit' className='button-chk'>
                          Continue
                        </button>
                      </li>

                      {/* <!-- CREATE AN ACCOUNT --> */}
                      <li className='col-md-6'>
                        <div className='checkbox margin-0 margin-top-20'>
                          <input
                            id='checkbox1'
                            className='styled'
                            type='checkbox'
                          />
                          <label htmlFor='checkbox1'>
                            Ship to a different address
                          </label>
                        </div>
                      </li>
                    </ul>
                  </form>

                  {/* <!-- SHIPPING info --> */}
                  <h6 className='margin-top-50'>SHIPPING info</h6>
                  <form>
                    <ul className='row'>
                      {/* <!-- Name --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *FIRST NAME
                          <input
                            type='text'
                            name='first-name'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      {/* <!-- LAST NAME --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *LAST NAME
                          <input
                            type='text'
                            name='last-name'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      <li className='col-md-6'>
                        {/* <!-- COMPANY NAME --> */}
                        <label>
                          COMPANY NAME
                          <input
                            type='text'
                            name='company'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      <li className='col-md-6'>
                        {/* <!-- ADDRESS --> */}
                        <label>
                          *ADDRESS
                          <input
                            type='text'
                            name='address'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      {/* <!-- TOWN/CITY --> */}
                      <li className='col-md-6'>
                        <label>
                          *TOWN/CITY
                          <input
                            type='text'
                            name='town'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>

                      {/* <!-- COUNTRY --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          COUNTRY
                          <input
                            type='text'
                            name='contry-state'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>

                      {/* <!-- EMAIL ADDRESS --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *EMAIL ADDRESS
                          <input
                            type='text'
                            name='contry-state'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      {/* <!-- PHONE --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *PHONE
                          <input
                            type='text'
                            name='postal-code'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>

                      {/* <!-- PHONE --> */}
                      <li className='col-md-6'>
                        <button type='submit' className='button-chk'>
                          SUBMIT
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>

                {/* <!-- SUB TOTAL --> */}
                <div className='col-sm-5'>
                  <h6>YOUR ORDER</h6>
                  <div className='order-place'>
                    <div className='order-detail'>
                    {/* {order.line_items.map((item) => (
                      <GrandTotal
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        line_total={item.line_total.formatted_with_symbol}
                      />
                    ))} */}
                      
                      <p className='all-total'>
                      {/* TOTAL COST <span> {subtotal.formatted_with_symbol}</span> */}
                    </p>

                    </div>
                    <div className='pay-meth'>
                      <ul>
                        <li>
                          <div className='radio'>
                            <input
                              type='radio'
                              name='radio1'
                              id='radio3'
                              value='option3'
                            />
                            <label htmlFor='radio3'> Credit/Debit </label>
                          </div>
                        </li>
                        <li>
                          <div className='radio'>
                            <input
                              type='radio'
                              name='radio1'
                              id='radio4'
                              value='option4'
                            />
                            <label htmlFor='radio4'> PAYPAL </label>
                          </div>
                        </li>
                        <li>
                          <div className='checkbox'>
                            <input
                              id='checkbox3-4'
                              className='styled'
                              type='checkbox'
                            />
                            <label htmlFor='checkbox3-4'>
                              {" "}
                              I’VE READ AND ACCEPT THE{" "}
                              <span className='color'>
                                {" "}
                                TERMS & CONDITIONS{" "}
                              </span>{" "}
                            </label>
                          </div>
                        </li>
                      </ul>
                    
                      <a className='button-order' onClick={handleCaptureCheckout}>
                        PLACE ORDER
                      </a>{" "}
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

