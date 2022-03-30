import { useState } from "react";
import { useCart } from "../../context/Cart";
import BillingInfoForm from "./BillingInfoForm";
import OrderDetail from "./OrderDetail";
import PaymentMethod from "./PaymentMethod";
import ShippingInfoForm from "./ShippingInfoForm";

const Checkout = () => {
  const { line_items, subtotal } = useCart();
  const [userInfo, setUserInfo] = useState(null);
  const handleFormInput = (data) => {
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
                    <PaymentMethod />
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

