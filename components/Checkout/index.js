
import getStripe from "../../lib/stripe";
import { useCart } from "../../context/Cart";
import { commerce } from "../../lib/commerce";
import { useContext, useEffect, useState } from "react";
import BillingInfoForm from "./BillingInfoForm";
import OrderDetail from "./OrderDetail";
import PaymentMethod from "./PaymentMethod";
import ShippingInfoForm from "./ShippingInfoForm";
import Router from "next/router";

const Checkout = () => {
  const cart = useCart();
  const { line_items, subtotal } = useCart();
  console.log("line", line_items);
  const cartId = commerce.cart.id();
  console.log("cartid", commerce.cart.id());
  const [token, setToken] = useState();
  

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

  console.log("checkoutTokenId ", token);
 

  const [userInfo, setUserInfo] = useState({});
  const [shippingInfo, setShippingInfo] = useState({});
  let flag = false;
   const [check,setCheck] = useState();
  const getCheckeboxValue = (event) => {
     const value = event.target.checked;
    console.log("check",value);
    setCheck(value);
    // return event.target.checked;
    
}
  // console.log("checkship",checkship);
  const handleFormInput = (data) => {
    
    setUserInfo(data);

    if (!check) {
      flag = true;
      setShippingInfo(data);
    };
  } 

  console.log("userInfo", userInfo);

  const handleShippingFormInput = (data) => {
  
    if (!flag) {
      setShippingInfo(data);
    }
  };
  console.log("shipInfo", shippingInfo);

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
                {/* { flag && */}
                
                  {/* <div className='checkbox margin-0 margin-top-20'> */}
                  <div>
                    <input
                      type="checkbox"
                      name='checkShip'
                      value={false} 
                      onChange={(e)=> getCheckeboxValue(e)}
                    />
                    <label htmlFor='checkbox1'>Ship to a different address</label>
                  </div>
             
                <div className='col-sm-7'>
                  <h6 className='margin-top-50'>SHIPPING info</h6>
                  <BillingInfoForm handleFormInput={handleShippingFormInput} />
                  {/* <ShippingInfoForm handleShippingFormInput={handleShippingFormInput}/> */}
                </div>
                {/* } */}
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