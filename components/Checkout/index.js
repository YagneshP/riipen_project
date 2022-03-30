// import { useCart } from "../context/Cart";
import getStripe from "../../lib/stripe";
import { useCart } from "../../context/Cart";
import { commerce } from "../../lib/commerce";
import { useContext, useEffect,useState } from "react";
import StripeContainer from "../PaymentCheckout/StripeContainer";
const Checkout = () => {
  const cart = useCart();
  const { line_items, subtotal } = useCart();
	console.log("line",line_items);
  const cartId= commerce.cart.id();
	console.log("cartid",commerce.cart.id());

	//Billing Form data
	const [bfirstName, setbFirstName] = useState('');
  const [blastName, setbLastName] = useState();
	const [ addressb, setAddressb] = useState('');
	const [ bcity, setbCity] = useState('');
	const [ bcountry, setbCountry] = useState('');
	const [ bemail, setbEmail] = useState('');
	const [ bphone, setbPhone] = useState('');
	const [ bpostal, setbPostal] = useState('');

//Shipping Form data
	const [sfirstName, setsFirstName] = useState('');
	const [slastName, setsLastName] = useState();
	const [ saddress, setsAddress] = useState('');
	const [ scity, setsCity] = useState('');
	const [ scountry, setsCountry] = useState('');
	const [ semail, setsEmail] = useState('');
	const [ sphone, setsPhone] = useState('');
	const [ spostal, setsPostal] = useState('');

  const [token, setToken] = useState();
  const [order,setOrder] = useState({});
  
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
  const handleClick = async () => {
    
    const session = await fetch("/api/checkout_session", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(checkoutTokenId),
    })
      .then((res) => res.json())
      .catch((err) => console.log("err", err));
    const stripe = await getStripe();

    
    const { error } = await stripe.redirectToCheckout({
      
      sessionId: session.id,
    });
    console.log("response", session);
    
    console.warn(error.message);
  };
  return (
    <div id="content">
      <section className="chart-page padding-top-100 padding-bottom-100">
        <div className="container">
          <div className="shopping-cart">
            <div className="cart-ship-info">
              <div className="row">
                <div className="col-sm-7">
                  <h6>BILLING DETAILS</h6>
                  <form>
                    <ul className="row">
                      <li className="col-md-6">
                        <label>
                          *FIRST NAME
                          <input
                            type='text'
                            name='first-name'
                            value={bfirstName||''}
                            onChange={(e) => setbFirstName(e.target.value)}
                            placeholder=''
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *LAST NAME
                          <input
                            type='text'
                            name='last-name'
                            value={blastName||''}
                            onChange={(e) => setbLastName(e.target.value)}
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
                            value={addressb||''}
                            onChange={(e) => setAddressb(e.target.value)}
                            placeholder=''
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *TOWN/CITY
                          <input
                            type='text'
                            name='town'
                            value={bcity||''}
                            onChange={(e) => setbCity(e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          COUNTRY
                          <input
                            type='text'
                            name='contry-state'
                            value={bcountry||''}
                            onChange={(e) => setbCountry(e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *EMAIL ADDRESS
                          <input
                            type='text'
                            name='contry-state'
                            value={bemail||''}
                            onChange={(e) => setbEmail(e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          {" "}
                          *POSTAL CODE
                          <input
                            type='text'
                            name='postal-code'
                            value={bpostal||''}
                            onChange={(e) => setbPostal(e.target.value)}
                          />
                        </label>
                      </li>
											<li className='col-md-6'>
                        <label>
                          {" "}
                          *PHONE
                          <input
                            type='text'
                            name='phone'
                            value={bphone||''}
                            onChange={(e) => setbPhone(e.target.value)}
                          />
                        </label>
                      </li>

{/*                 
                      <li className='col-md-6'>
                        <button type='submit' className='button-chk' onClick={handleBilling}>
                          Submit
                        </button>
                      </li> */}

                      {/* <!-- CREATE AN ACCOUNT --> */}
                      <li className='col-md-6'>
                        <div className='checkbox margin-0 margin-top-20'>
                          <input
                            id="checkbox1"
                            className="styled"
                            type="checkbox"
                          />
                          <label htmlFor='checkbox1' >
                            Ship to a different address
                          </label>
                        </div>
                      </li>
                    </ul>
                  </form>
                  <h6 className="margin-top-50">SHIPPING info</h6>
                  <form>
                    <ul className="row">
                      <li className="col-md-6">
                        <label>
                          *FIRST NAME
                          <input
                            type='text'
                            name='first-name'
                            value={sfirstName||''}
                            onChange={(e) => setsFirstName(e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *LAST NAME
                          <input
                            type='text'
                            name='last-name'
                            value={slastName||''}
                            onChange={(e) => setsLastName(e.target.value)}
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
                            value={saddress||''}
                            onChange={(e) => setsAddress(e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *TOWN/CITY
                          <input
                            type='text'
                            name='town'
                            value={scity||''}
                            onChange={(e) => setsCity(e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          COUNTRY
                          <input
                            type='text'
                            name='contry-state'
                            value={scountry||''}
                            onChange={(e) => setsCountry(e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *EMAIL ADDRESS
                          <input
                            type='text'
                            name='contry-state'
                            value={semail||''}
                            onChange={(e) => setsEmail(e.target.value)}
                          />
                        </label>
                      </li>
											<li className='col-md-6'>
                        <label>
                          {" "}
                          *POSTAL CODE
                          <input
                            type='text'
                            name='phone'
                            value={spostal||''}
                            onChange={(e) => setsPostal(e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *PHONE
                          <input
                            type='text'
                            name='phone'
                            value={sphone||''}
                            onChange={(e) => setsPhone(e.target.value)}
                          />
                        </label>
                      </li>

                      {/* <!-- PHONE --> */}
                      {/* <li className='col-md-6'>
                        <button type='submit' className='button-chk' onClick={handleShipping}>
                          SUBMIT
                        </button>
                      </li> */}
                    </ul>
                  </form>
                </div>
                <div className="col-sm-5">
                  <h6>YOUR ORDER</h6>
                  <div className="order-place">
                    <div className="order-detail">
                      <p>
                        WOOD CHAIR <span>$598 </span>
                      </p>
                      <p>
                        STOOL <span>$199 </span>
                      </p>
                      <p>
                        WOOD SPOON <span> $139</span>
                      </p>

                      <p className="all-total">
                        TOTAL COST <span> $998</span>
                      </p>
                    </div>
                    <div className="pay-meth">
                      <ul>
                        <li>
                          <div className="radio">
                            <input type="radio" name="radio1" />
                            <label htmlFor="radio3"> Credit/Debit </label>
                          </div>
                        </li>
                        <li>
                          <div className="radio">
                            <input type="radio" name="radio1" />
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
                              I’VE READ AND ACCEPT THE
                              <span className="color">TERMS & CONDITIONS</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                     
                      <StripeContainer amount={subtotal} checkoutTokenId={token} />
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