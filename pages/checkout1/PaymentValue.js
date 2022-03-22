import { Payment } from "@mui/icons-material";
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useRouter } from 'next/router';
const PaymentValue = () => {
  const router = useRouter();
  const { status } = router.query;

  const [loading, setLoading] = useState(false);

  const [item, setItem] = useState({
    name: 'Apple AirPods',
    description: 'Latest Apple AirPods.',
    image:
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    quantity: 3,
    price: 999,
  });
  const publishableKey = `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`;
  const stripePromise = loadStripe(publishableKey);
  const createCheckOutSession = async () => {
    setLoading(true);
    const stripe = await stripePromise;
   
    const checkoutSession = await axios.post('../api/create-stripe-session', {
    item:item,
    });
  
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };
  return (
      <>
       {status && status === 'success' && (
          <div className='bg-green-100 text-green-700 p-2 rounded border mb-2 border-green-700'>
            Payment Successful
          </div>
        )}
        {status && status === 'cancel' && (
          <div className='bg-red-100 text-red-700 p-2 rounded border mb-2 border-red-700'>
            Payment Unsuccessful
          </div>
        )}
 {/* <!-- SUB TOTAL --> */}
 <div class="col-sm-5">
 <h6>YOUR ORDER</h6>
 <div class="order-place">
   <div class="order-detail">
     <p>
       WOOD CHAIR <span>$598 </span>
     </p>
     <p>
       STOOL <span>$199 </span>
     </p>
     <p>
       WOOD SPOON <span> $139</span>
     </p>

     {/* <!-- SUB TOTAL --> */}
     <p class="all-total">
       TOTAL COST <span> $998</span>
     </p>
   </div>
   <div class="pay-meth">
     <ul>
      

       <li>
         <div class="radio">
           <input
             type="radio"
             name="radio1"
             id="radio3"
             value="option3"
           />
           <label for="radio3"> Credit/Debit </label>
         </div>
       </li>
       <li>
         <div class="radio">
           <input
             type="radio"
             name="radio1"
             id="radio4"
             value="option4"
           />
           <label for="radio4"> PAYPAL </label>
         </div>
       </li>
       <li>
         <div class="checkbox">
           <input
             id="checkbox3-4"
             class="styled"
             type="checkbox"
           />
           <label for="checkbox3-4">
             {" "}
             I’VE READ AND ACCEPT THE{" "}
             <span class="color">
               {" "}
               TERMS & CONDITIONS{" "}
             </span>{" "}
           </label>
         </div>
       </li>
     </ul>
     <a  class="button-order"        
         disabled={item.quantity === 0 || loading}
            onClick={createCheckOutSession}>
      {loading ? 'Processing...' : 'Buy'}
     </a>{" "}
   </div>
 </div>
</div>
</>
);
}
export default PaymentValue;