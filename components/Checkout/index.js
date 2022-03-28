
import Router from "next/router";
import { useEffect,useState } from "react";
import { useCart } from "../../context/Cart";
import { commerce } from "../../lib/commerce";
import {GrandTotal} from '../../pages/cart/GrandTotal';
import {PaymentValue} from '../../pages/stripe/PaymentValue';
import { MenuItem, Select } from '@material-ui/core';


export default function Checkout() {
	const [token, setToken] = useState();
  const [order, setOrder] = useState();
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
  const [bprovince, setbProvince] = useState('');
	const [ bemail, setbEmail] = useState('');
	const [ bphone, setbPhone] = useState('');
	const [ bpostal, setbPostal] = useState('');

//Shipping Form data
	const [sfirstName, setsFirstName] = useState('');
	const [slastName, setsLastName] = useState();
	const [ saddress, setsAddress] = useState('');
	const [ scity, setsCity] = useState('');
  const [scountry, setsCountry] = useState('');
  const [shippingOption, setShippingOption] = useState({});
	const [sprovince, setsProvince] = useState('');
	const [ semail, setsEmail] = useState('');
	const [ sphone, setsPhone] = useState('');
	const [ spostal, setsPostal] = useState('');

  // Shipping and fulfillment data
  const [shippingCountries, setShippingCountries] = useState({});
  const [shippingSubdivisions, setShippingSubdivisions] = useState({});
  
   
	useEffect(() => {
      generateCheckoutToken();
   
  }, []);

	const generateCheckoutToken = async () => {
    if (cartId) {
      const token = await commerce.checkout.generateToken(cartId, {
        type: 'cart',
      });
			console.log("token",token);
      setToken(token);
      fetchShippingCountries(token.id);
    } else {
      Router.push('/cart');
    }
	}
  console.log("ttoookkkeeen", token);
		const handleCaptureCheckout = async () => {
			const orderData = {
				line_items: token.live.line_items,
				customer: {
					firstname: bfirstName,
					lastname: blastName,
          email: bemail
				},
        shipping: {
          name: `${sfirstName} ${slastName}`,
          street: saddress,
          town_city: scity,
          county_state: sprovince,
          postal_zip_code: spostal,
          country: scountry
        },
        fulfillment: {
          shipping_method: 'ship_7RyWOwmK5nEa2V'
        },
        billing: {
          name: `${bfirstName} ${blastName}`,
          street: addressb,
          town_city: bcity,
          county_state: bprovince,
          postal_zip_code: bpostal,
          country:bcountry
        },
        payment: {
          gateway: 'test_gateway',
          card: {
            number:  4242424242424242,
            expiry_month: 12,
            expiry_year: 34,
            cvc: 123,
            postal_zip_code: 'L6X 0S1',
          },
        },
      //   payment: {
      //     gateway: 'stripe',
      //     stripe: {
      //       payment_method_id: paymentMethodResponse.paymentMethod.id,
      //     },
			// }
      }
    
			console.log("orderData", orderData);
			console.log("token id", token.id);
      
      try {
        const orderPlaced = await commerce.checkout.capture(
          token.id,
          orderData
        );
        setOrder(orderPlaced);
        console.log("orderPlaced",orderPlaced);
        // localStorage.setItem('order_receipt', JSON.stringify(order));
        // await refreshCart();
        Router.push('/confirmation');
      } catch (err) {
        console.log("error");
      }
  };

  const handleShippingCountryChange = (e) => {
    const currentValue = e.target.value;
    setsCountry(e.target.value);
    setbCountry(e.target.value);
    fetchSubdivisions(currentValue);
  };

  const fetchShippingCountries = async () => {
    const countries = await commerce.services.localeListCountries(
    );
    setShippingCountries(countries.countries);
  };

  
  const fetchSubdivisions = async (countryCode) => {
    const subdivisions = await commerce.services.localeListSubdivisions(
      countryCode
    );
    console.log("subdivisions",subdivisions.subdivisions )
    setShippingSubdivisions(subdivisions.subdivisions);
  };
  const handleSubdivisionChange = (e) => {
    const currentValue = e.target.value;
    setsProvince(currentValue);
    setbProvince(currentValue);
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
                            value={bfirstName||''}
                            onChange={(e) => setbFirstName(e.target.value)}
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
                      {/* <!-- TOWN/CITY --> */}
                      <li className='col-md-6'>
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

                      {/* <!-- COUNTRY --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          COUNTRY
                          <Select
                            type='text'
                            name='contry-state'
                            id="bcountry"
                            fullWidth
                            value={bcountry}
                            onChange={handleShippingCountryChange}
                    
                          > 
                          
                            {Object.keys(shippingCountries).map((index) => (
                              <MenuItem value={index} key={index}>
                                {shippingCountries[index]}
                              </MenuItem>
                            ))}
                            </Select>
                        </label>
                      </li>

                      <li className='col-md-6'>
                        <label>
                          *STATE/PROVINCE
                          <Select
                            id="bProvince"
                            label="State/Province"
                            fullWidth
                            onChange={handleSubdivisionChange}
                            value={bprovince}
                            required
                        
                          >
                            {Object.keys(shippingSubdivisions).map((index) => (
                              <MenuItem value={index} key={index}>
                                {shippingSubdivisions[index]}
                              </MenuItem>
                            ))}
                          </Select>
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
                            value={bemail||''}
                            onChange={(e) => setbEmail(e.target.value)}
                          />
                        </label>
                      </li>
                      {/* <!-- PHONE --> */}
                      <li className='col-md-6'>
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
                
                      {/* <li className='col-md-6'>
                        <button type='submit' className='button-chk' onClick={handleBilling}>
                          Submit
                        </button>
                      </li> */}

                      {/* <!-- BILLING SAME AS SHIPPING --> */}
                      <li className='col-md-6'>
                        <div className='checkbox margin-0 margin-top-20'>
                          <input
                            id='checkbox1'
                            className='styled'
                            type='checkbox'
                          />
                          <label htmlFor='checkbox1' >
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
                            value={sfirstName||''}
                            onChange={(e) => setsFirstName(e.target.value)}
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
                      {/* <!-- TOWN/CITY --> */}
                      <li className='col-md-6'>
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

                      {/* <!-- COUNTRY --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          COUNTRY
                          <Select
                            type='text'
                            name='contry-state'
                            id="scountry"
                            value={scountry}
                            onChange={handleShippingCountryChange}
                          > 
                          
                            {Object.keys(shippingCountries).map((index) => (
                              <MenuItem value={index} key={index}>
                                {shippingCountries[index]}
                              </MenuItem>
                            ))}
                            </Select>
                        </label>
                      </li>
                    
                    {/* <!-- STATE/PROVINCE--> */}
                    <li className='col-md-6'>
                        <label>
                          *STATE/PROVINCE
                          <Select
                            id="sProvince"
                            label="State/Province"
                            fullWidth
                            onChange={handleSubdivisionChange}
                            value={sprovince}
                            required
                        
                          >
                            {Object.keys(shippingSubdivisions).map((index) => (
                              <MenuItem value={index} key={index}>
                                {shippingSubdivisions[index]}
                              </MenuItem>
                            ))}
                          </Select>
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
                      {/* <!-- PHONE --> */}
                      <li className='col-md-6'>
                        <label>
                          {" "}
                          *PHONE
                          <input
                            type='text'
                            name='phone'
                            value={sphone||''}
                            onChange={(e) => setsPhone(e.target.value)}
                          />
                        </label>
                      </li>

                      
                      
                      {/* <li className='col-md-6'>
                        <button type='submit' className='button-chk' onClick={handleShipping}>
                          SUBMIT
                        </button>
                      </li> */}
                    </ul>
                  </form>
                </div>

                {/* <!-- SUB TOTAL --> */}
                <div className='col-sm-5'>
                  <h6>YOUR ORDER</h6>
                  <div className='order-place'>
                    <div className='order-detail'>
                    {/* {line_items.map((item) => (
                      <GrandTotal
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        line_total={item.line_total.formatted_with_symbol}
                      />
										))} */}
                      
                      <p className='all-total'>
                      TOTAL COST <span> {subtotal.formatted_with_symbol}</span>
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
                    
                      <a className='button-order'  
											 onClick={handleCaptureCheckout}>
                        PLACE ORDER
                      </a>{" "}
                      {/* </Link> */}
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

