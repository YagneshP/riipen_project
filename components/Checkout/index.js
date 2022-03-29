import { useCart } from "../../context/Cart";
import BillingInfoForm from "./BillingInfoForm";
import OrderDetail from "./OrderDetail";
import ShippingInfoForm from "./ShippingInfoForm";

const Checkout = () => {
  const { line_items, subtotal } = useCart();
  return (
    <div id='content'>
      <section className='chart-page padding-top-100 padding-bottom-100'>
        <div className='container'>
          <div className='shopping-cart'>
            <div className='cart-ship-info'>
              <div className='row'>
                <div className='col-sm-7'>
                  <h6>BILLING DETAILS</h6>
                  <BillingInfoForm />
                  <h6 className='margin-top-50'>SHIPPING info</h6>
                  <ShippingInfoForm />
                </div>
                <div className='col-sm-5'>
                  <h6>YOUR ORDER</h6>
                  <div className='order-place'>
                    <OrderDetail line_items={line_items} subtotal={subtotal} />
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
                            <input
                              id='checkbox3-4'
                              className='styled'
                              type='checkbox'
                            />
                            <label htmlFor='checkbox3-4'>
                              I’VE READ AND ACCEPT THE
                              <span className='color'>TERMS & CONDITIONS</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                      <a
                        href='#.'
                        className='button-order pull-right margin-top-30'
                      >
                        PLACE ORDER
                      </a>
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
export default Checkout;
