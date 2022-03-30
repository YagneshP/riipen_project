import React from "react";
import StripeContainer from "../PaymentCheckout/StripeContainer";
function PaymentMethod(props) {
  return (
    <div className='pay-meth'>
      <ul>
        <li>
          <div className='radio'>
            <input type='radio' name='radio1' />
            <label htmlFor='radio3'> Credit/Debit </label>
          </div>
        </li>
        <li>
          <div className='radio'>
            <input type='radio' name='radio1' />
            <label htmlFor='radio4'> PAYPAL </label>
          </div>
        </li>
        <li>
          <div className='checkbox'>
            <input id='checkbox3-4' className='styled' type='checkbox' />
            <label htmlFor='checkbox3-4'>
              I’VE READ AND ACCEPT THE
              <span className='color'>TERMS & CONDITIONS</span>
            </label>
          </div>
        </li>
      </ul>
      <StripeContainer amount={props.amount} checkoutTokenId={props.checkoutTokenId}  userInfo={props.userInfo}/>
      {/* <a href='#.' className='button-order pull-right margin-top-30'>
        PLACE ORDER
      </a> */}
    </div>
  );
}

export default PaymentMethod;
