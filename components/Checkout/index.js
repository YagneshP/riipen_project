// import { useCart } from "../context/Cart";
import getStripe from "../../lib/stripe";
import { useCart } from "../../context/Cart";
import { commerce } from "../../lib/commerce";

const Checkout = () => {
  const cart = useCart();
  const handleClick = async () => {
    const checkoutTokenId = await commerce.checkout.generateToken(cart.id, {
      type: "cart",
    });
    console.log("checkoutTokenId ", checkoutTokenId);
    const session = await fetch("/api/checkout_session", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(checkoutTokenId),
    })
      .then((res) => res.json())
      .catch((err) => console.log("err", err));
    console.log("payment", session.payment_method);
    const stripe = await getStripe();

    // console.log("session", session);
    const response = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: session.id,
    });
    console.log("response", response);
    // const order = await commerce.checkout.capture(checkoutTokenId, {
    //   ...orderDetails,
    //   // Include Stripe payment method ID:
    //   payment: {
    //     gateway: "stripe",
    //     stripe: {
    //       payment_method_id: paymentMethodResponse.paymentMethod.id,
    //     },
    //   },
    // });
    // console.log("order", order);
    console.warn(error.message);
  };
  return (
    <div id='content'>
      {/* <!--======= PAGES INNER =========--> */}
      <section className='chart-page padding-top-100 padding-bottom-100'>
        <div className='container'>
          {/* <!-- Payments Steps --> */}
          <div className='shopping-cart'>
            {/* <!-- SHOPPING INFORMATION --> */}
            <div className='cart-ship-info'>
              <div className='row'>
                {/* <!-- ESTIMATE SHIPPING & TAX --> */}
                <div className='col-sm-7'>
                  <h6>BILLING DETAILS</h6>
                  <form>
                    <ul className='row'>
                      {/* <!-- Name --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *FIRST NAME
                          <input
                            type='text'
                            name='first-name'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      {/* <!-- LAST NAME --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *LAST NAME
                          <input
                            type='text'
                            name='last-name'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      <li className='col-md-6'>
                        {/* <!-- COMPANY NAME --> */}
                        <label>
                          COMPANY NAME
                          <input
                            type='text'
                            name='company'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      <li className='col-md-6'>
                        {/* <!-- ADDRESS --> */}
                        <label>
                          *ADDRESS
                          <input
                            type='text'
                            name='address'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      {/* <!-- TOWN/CITY --> */}
                      <li className='col-md-6'>
                        <label>
                          *TOWN/CITY
                          <input
                            type='text'
                            name='town'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>

                      {/* <!-- COUNTRY --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          COUNTRY
                          <input
                            type='text'
                            name='contry-state'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>

                      {/* <!-- EMAIL ADDRESS --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *EMAIL ADDRESS
                          <input
                            type='text'
                            name='contry-state'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      {/* <!-- PHONE --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *PHONE
                          <input
                            type='text'
                            name='postal-code'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>

                      {/* <!-- PHONE --> */}
                      <li className='col-md-6'>
                        <button type='submit' className='button-chk'>
                          Continue
                        </button>
                      </li>

                      {/* <!-- CREATE AN ACCOUNT --> */}
                      <li className='col-md-6'>
                        <div className='checkbox margin-0 margin-top-20'>
                          <input
                            id='checkbox1'
                            className='styled'
                            type='checkbox'
                          />
                          <label htmlFor='checkbox1'>
                            Ship to a different address
                          </label>
                        </div>
                      </li>
                    </ul>
                  </form>

                  {/* <!-- SHIPPING info --> */}
                  <h6 className='margin-top-50'>SHIPPING info</h6>
                  <form>
                    <ul className='row'>
                      {/* <!-- Name --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *FIRST NAME
                          <input
                            type='text'
                            name='first-name'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      {/* <!-- LAST NAME --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *LAST NAME
                          <input
                            type='text'
                            name='last-name'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      <li className='col-md-6'>
                        {/* <!-- COMPANY NAME --> */}
                        <label>
                          COMPANY NAME
                          <input
                            type='text'
                            name='company'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      <li className='col-md-6'>
                        {/* <!-- ADDRESS --> */}
                        <label>
                          *ADDRESS
                          <input
                            type='text'
                            name='address'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      {/* <!-- TOWN/CITY --> */}
                      <li className='col-md-6'>
                        <label>
                          *TOWN/CITY
                          <input
                            type='text'
                            name='town'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>

                      {/* <!-- COUNTRY --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          COUNTRY
                          <input
                            type='text'
                            name='contry-state'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>

                      {/* <!-- EMAIL ADDRESS --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *EMAIL ADDRESS
                          <input
                            type='text'
                            name='contry-state'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>
                      {/* <!-- PHONE --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *PHONE
                          <input
                            type='text'
                            name='postal-code'
                            value=''
                            placeholder=''
                          />
                        </label>
                      </li>

                      {/* <!-- PHONE --> */}
                      <li className='col-md-6'>
                        <button type='submit' className='button-chk'>
                          SUBMIT
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>

                {/* <!-- SUB TOTAL --> */}
                <div className='col-sm-5'>
                  <h6>YOUR ORDER</h6>
                  <div className='order-place'>
                    <div className='order-detail'>
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
                      <p className='all-total'>
                        TOTAL COST <span> $998</span>
                      </p>
                    </div>
                    <div className='pay-meth'>
                      <ul>
                        <li>
                          <div className='radio'>
                            <input
                              type='radio'
                              name='radio1'
                              id='radio3'
                              value='option3'
                            />
                            <label htmlFor='radio3'> Credit/Debit </label>
                          </div>
                        </li>
                        <li>
                          <div className='radio'>
                            <input
                              type='radio'
                              name='radio1'
                              id='radio4'
                              value='option4'
                            />
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
                              {" "}
                              I’VE READ AND ACCEPT THE{" "}
                              <span className='color'>
                                {" "}
                                TERMS & CONDITIONS{" "}
                              </span>{" "}
                            </label>
                          </div>
                        </li>
                      </ul>
                      <button className='button-order' onClick={handleClick}>
                        PLACE ORDER
                      </button>
                      {/* <a href='#.' className='button-order'>
                        PLACE ORDER

                      </a>{" "} */}
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
