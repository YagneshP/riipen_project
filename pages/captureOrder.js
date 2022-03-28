// // import Stripe from 'stripe';
// import { useElements } from '@stripe/stripe-js';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// // var stripe = new Stripe('pk_test_51KEYwHLZ4N0M8BbtkQ6tNuy0DdmYDyXNR2mqFrpFnwpSPdNEcfY6FD8FNL8aWvSJ8iJHb4G5W8IeacEzzApAcY2Q00Q54F5nLy');
// import Commerce from '@chec/commerce.js';
// import Stripe from 'stripe';
// import useSWR from 'swr';
// const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);
// // Create a commerce.js instance using your sandbox key
// const commerce = new Commerce( `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY}`);
// // import { fetcher, shootFireworks } from '@/lib/utils';
// import { Payment } from '@mui/icons-material';
// var elements = stripe.elements({
//   clientSecret: process.env.STRIPE_SECRET_KEY,
// });
// const card = elements.create('card')
function captureOrder() {
//   const paymentMethodResponse =  stripe.createPaymentMethod({ type: 'card' , card});
// console.log(paymentMethodResponse)
//   const [data,setData] = useState();
//   const fetcher = url => axios.get(url).then(res => res.data);
//   console.log("fetcher",fetcher);
//   const { data1} = useSWR(
//     () => `./api/create-stripe-session/${session_id}`,
//     fetcher(`./api/create-stripe-session`)
//   );
//   console.log("paymentId",data1)
//   useEffect(() => {
//     axios.get('./api/checkoutForm')
//     .then((res) => {
//       console.log("res",res);
//       // setData(res.data);
//     })
//     .catch((err)=>
//     console.log("error",err))
//   }, []);
  
//   return(
//     <h1>hi{data}</h1>
//   )
  }
export default captureOrder;