// import Stripe from 'stripe';
import { useElements } from '@stripe/stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// var stripe = new Stripe('pk_test_51KEYwHLZ4N0M8BbtkQ6tNuy0DdmYDyXNR2mqFrpFnwpSPdNEcfY6FD8FNL8aWvSJ8iJHb4G5W8IeacEzzApAcY2Q00Q54F5nLy');

function captureOrder() {
  const [data,setData] = useState();
  useEffect(() => {
    axios.get('/api/checkoutForm')
    .then((res) => {
      console.log("res",res);
      setData(res.data);
    })
    .catch((err)=>
    console.log("error",err))
  }, []);
  
  return(
    <h1>hi{data}</h1>
  )
  }
export default captureOrder;