// import { useCart } from "../context/Cart";
import getStripe from "../../lib/stripe";
import { useCart } from "../../context/Cart";
import { commerce } from "../../lib/commerce";
import { useContext, useEffect, useState } from "react";
import BillingInfoForm from "./BillingInfoForm";
import OrderDetail from "./OrderDetail";
import PaymentMethod from "./PaymentMethod";
import ShippingInfoForm from "./ShippingInfoForm";

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
  const handleFormInput = (data) => {
    console.log("data", data)
    setUserInfo(data);
  };
  console.log("userInfo", userInfo);
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
                  <h6 className='margin-top-50'>SHIPPING info</h6>
                  <ShippingInfoForm />
                </div>
                <div className='col-sm-5'>
                  <h6>YOUR ORDER</h6>
                  <div className='order-place'>
                    <OrderDetail line_items={line_items} subtotal={subtotal} />
                    <PaymentMethod amount={subtotal} checkoutTokenId={token} userInfo={userInfo}/>

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