
import getStripe from "../../lib/stripe";
import { useCart } from "../../context/Cart";
import { commerce } from "../../lib/commerce";
import { useContext, useEffect, useState } from "react";
import BillingInfoForm from "./BillingInfoForm";
import OrderDetail from "./OrderDetail";
import PaymentMethod from "./PaymentMethod";
import Router from "next/router";
import { Checkbox } from '@material-ui/core';

const Checkout = () => {
  const cart = useCart();
  const { line_items, subtotal } = useCart();
  const cartId = commerce.cart.id();
  const [token, setToken] = useState();
  

  useEffect(() => {
    generateCheckoutToken();
  }, []);

  const generateCheckoutToken = async () => {
    if (cartId) {
      const token = await commerce.checkout.generateToken(cartId, {
        type: 'cart',
      });

      setToken(token);
    } else {
      Router.push('/cart');
    }
  }

  const [userInfo, setUserInfo] = useState({});
  const [shippingInfo, setShippingInfo] = useState({});
  let flag = false;
  const [check,setCheck] = useState();
  const getCheckeboxValue = (event) => {
    setCheck(event.target.checked);
  }

  const handleFormInput = (data) => {
    
    setUserInfo(data);

    if (!check) {
      flag = true;
      setShippingInfo(data);
    };
  } 

  const handleShippingFormInput = (data) => {
    if (!flag)
      setShippingInfo(data);
  };
  

  return (
    <div id='content'>
      <section className='chart-page padding-top-100 padding-bottom-100'>
        <div className='container'>
          <div className='shopping-cart'>
            <div className='cart-ship-info'>
              <div className='row'>
                <div className='col-sm-7'>
                  <h6>BILLING DETAILS</h6>
                  <BillingInfoForm handleFormInput={handleFormInput} />
                </div>
                <label htmlFor='checkbox1'>
                  <Checkbox
                    name='checkbox1'
                    value={false} 
                    onChange={(e)=> getCheckeboxValue(e)}
                  />
                  Ship to a different address</label>
                 
                {check ?
                  <div className='col-sm-7'>
                    <h6 className='margin-top-50'>SHIPPING info</h6>
                    <BillingInfoForm handleFormInput={handleShippingFormInput} />
                  </div>
                  : null 
                }
                
                <div className='col-sm-5'>
                  <h6>YOUR ORDER</h6>
                  <div className='order-place'>
                    <OrderDetail line_items={line_items} subtotal={subtotal} />
                    <PaymentMethod amount={subtotal} checkoutTokenId={token} userInfo={userInfo} shippingInfo={shippingInfo}/>

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

export default Checkout;