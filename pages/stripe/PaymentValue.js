import { Payment } from "@mui/icons-material";
import { useState } from 'react';
import { useCart } from "../../context/Cart";
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useRouter } from 'next/router';
const PaymentValue = () => {
  const router = useRouter();
  const { status } = router.query;
  const { line_items, subtotal } = useCart();
  console.log(line_items);
  console.log(subtotal);
  const [loading, setLoading] = useState(false);
  const publishableKey = `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`;
  const stripePromise = loadStripe(publishableKey);
  const createCheckOutSession = async () => {
    setLoading(true);
    const stripe = await stripePromise;
   
    const checkoutSession = await axios.post('../api/create-stripe-session', {
    // items:line_items, 
    subtotal:subtotal
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
          <div classNameName='bg-green-100 text-green-700 p-2 rounded border mb-2 border-green-700'>
            Payment Successful
          </div>
        )}
        {status && status === 'cancel' && (
          <div classNameName='bg-red-100 text-red-700 p-2 rounded border mb-2 border-red-700'>
            Payment Unsuccessful
          </div>
        )}
 {/* <!-- SUB TOTAL --> */}
 <div className="col-sm-5">
 <h6>YOUR ORDER</h6>
 <div className="order-place">
   <div className="order-detail">
 
     <p>
       {/* {name} <span>{line_total} </span> */}
     </p>
     <p>
       STOOL <span>$199 </span>
     </p>
     <p>
       WOOD SPOON <span> $139</span>
     </p>

     {/* <!-- SUB TOTAL --> */}
     <p className="all-total">
       TOTAL COST <span> $998</span>
     </p>
   </div>
   <div className="pay-meth">
     <ul>
      

       <li>
         <div className="radio">
           <input
             type="radio"
             name="radio1"
             id="radio3"
             value="option3"
           />
           <label htmlFor="radio3"> Credit/Debit </label>
         </div>
       </li>
       <li>
         <div className="radio">
           <input
             type="radio"
             name="radio1"
             id="radio4"
             value="option4"
           />
           <label htmlFor="radio4"> PAYPAL </label>
         </div>
       </li>
       <li>
         <div className="checkbox">
           <input
             id="checkbox3-4"
             className="styled"
             type="checkbox"
           />
           <label htmlFor="checkbox3-4">
             {" "}
             I’VE READ AND ACCEPT THE{" "}
             <span className="color">
               {" "}
               TERMS & CONDITIONS{" "}
             </span>{" "}
           </label>
         </div>
       </li>
     </ul>
     <a  className="button-order"        
         disabled={ loading}
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