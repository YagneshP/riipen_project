// import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from "next/router";
// import { Router } from 'next/router';
import axios from 'axios';
import { useContext, useEffect,useState } from "react";
import { useCart } from "../../context/Cart";
import { commerce } from "../../lib/commerce";
import {GrandTotal} from '../../pages/cart/GrandTotal';
import {PaymentValue} from '../../pages/stripe/PaymentValue';

export default function Checkout() {
	// const [token, setToken] = useState();
	const { line_items, subtotal } = useCart();
	

	//Billing Form data
	const [bfirstName, setbFirstName] = useState('');
  const [blastName, setbLastName] = useState();
	const [ bcompany, setbCompany] = useState('');
	const [ addressb, setAddressb] = useState('');
	const [ bcity, setbCity] = useState('');
	const [ bcountry, setbCountry] = useState('');
	const [ bemail, setbEmail] = useState('');
	const [ bphone, setbPhone] = useState('');
	const [ bpostal, setbPostal] = useState('');

//Shipping Form data
	const [sfirstName, setsFirstName] = useState('');
	const [slastName, setsLastName] = useState();
	const [ scompany, setsCompany] = useState('');
	const [ saddress, setsAddress] = useState('');
	const [ scity, setsCity] = useState('');
	const [ scountry, setsCountry] = useState('');
	const [ semail, setsEmail] = useState('');
	const [ sphone, setsPhone] = useState('');
	const [ spostal, setsPostal] = useState('');


	const handleBilling = async()=>{
		const billingData = {
      first: bfirstName,
      last: blastName,
			address: addressb,
			city: bcity,
			country: bcountry,
			postal: bpostal,
			phone: bphone
    };

  const JSONdata = JSON.stringify(billingData);
  console.log("billing",JSONdata);
  return axios.post("api/checkoutForm", {
      data: billingData
    })
    .then((response) => {
      console.log(response);
    });
	Router.push('/captureOrder');
	}
	
	const handleShipping = async()=>{
		const shippingData = {
      first: sfirstName,
      last: slastName,
			address: saddress,
			city: scity,
			country: scountry,
			postal: spostal,
			phone: sphone
    };

    const JSONdata = JSON.stringify(shippingData);
		console.log("shipping",JSONdata);
		
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

		const result = await axios.post('/api/checkoutForm', JSONdata);
    // Send the form data to our forms API  and get a response.
    // const response = await fetch('/api/checkoutForm', options);

    // const result = await response.json();
		console.log("result", result.data);
    alert(`name: ${result.data}`);


	}
	const placeOrder = () => {
		Router.push('/stripe');
	}

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
                            value={bfirstName||''}
                            onChange={(e) => setbFirstName(e.target.value)}
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
                            value={blastName||''}
                            onChange={(e) => setbLastName(e.target.value)}
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
                            value={addressb||''}
                            onChange={(e) => setAddressb(e.target.value)}
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
                            value={bcity||''}
                            onChange={(e) => setbCity(e.target.value)}
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
                            value={bcountry||''}
                            onChange={(e) => setbCountry(e.target.value)}
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
                            value={bemail||''}
                            onChange={(e) => setbEmail(e.target.value)}
                          />
                        </label>
                      </li>
                      {/* <!-- PHONE --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *POSTAL CODE
                          <input
                            type='text'
                            name='postal-code'
                            value={bpostal||''}
                            onChange={(e) => setbPostal(e.target.value)}
                          />
                        </label>
                      </li>
											<li className='col-md-6'>
                        <label>
                          {" "}
                          *PHONE
                          <input
                            type='text'
                            name='phone'
                            value={bphone||''}
                            onChange={(e) => setbPhone(e.target.value)}
                          />
                        </label>
                      </li>

                
                      <li className='col-md-6'>
                        <button type='submit' className='button-chk' onClick={handleBilling}>
                          Submit
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
                          <label htmlFor='checkbox1' >
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
                            value={sfirstName||''}
                            onChange={(e) => setsFirstName(e.target.value)}
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
                            value={slastName||''}
                            onChange={(e) => setsLastName(e.target.value)}
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
                            value={saddress||''}
                            onChange={(e) => setsAddress(e.target.value)}
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
                            value={scity||''}
                            onChange={(e) => setsCity(e.target.value)}
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
                            value={scountry||''}
                            onChange={(e) => setsCountry(e.target.value)}
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
                            value={semail||''}
                            onChange={(e) => setsEmail(e.target.value)}
                          />
                        </label>
                      </li>
											<li className='col-md-6'>
                        <label>
                          {" "}
                          *POSTAL CODE
                          <input
                            type='text'
                            name='phone'
                            value={spostal||''}
                            onChange={(e) => setsPostal(e.target.value)}
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
                            name='phone'
                            value={sphone||''}
                            onChange={(e) => setsPhone(e.target.value)}
                          />
                        </label>
                      </li>

                      {/* <!-- PHONE --> */}
                      <li className='col-md-6'>
                        <button type='submit' className='button-chk' onClick={handleShipping}>
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
                    {/* {line_items.map((item) => (
                      <GrandTotal
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        line_total={item.line_total.formatted_with_symbol}
                      />
										))} */}
                      
                      <p className='all-total'>
                      TOTAL COST <span> {subtotal.formatted_with_symbol}</span>
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
                    
                      <a className='button-order' onClick={placeOrder}> 
											 {/* onClick={handleCaptureCheckout}> */}
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

