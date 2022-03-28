
//my upper part, tofiq form part

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

const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <section >
        <div className="container">
          <div className="shopping-cart">
            <div className="cart-ship-info">
              <div className="row">
                <div className="col-sm-7">
                  <h6>BILLING DETAILS</h6>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ul className="row">
                      <li className="col-md-6">
                        <label>
                          *FIRST NAME
                          <input
                            type="text"
                            {...register("firstName", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *LAST NAME
                          <input
                            type="text"
                            {...register("lastName", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *ADDRESS
                          <input
                            type="text"
                            {...register("address", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *POSTAL CODE
                          <input
                            type="text"
                            {...register("postcode", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *CITY
                          <input
                            type="text"
                            {...register("city", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          COUNTRY
                          <input
                            type="text"
                            {...register("country", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *EMAIL ADDRESS
                          <input
                            type="text"
                            {...register("email", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *PHONE
                          <input
                            type="text"
                            {...register("phone", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <button type="submit" className="button-chk">
                          Continue
                        </button>
                      </li>
                      <li className="col-md-6">
                        <div className="checkbox margin-0 margin-top-20">
                          <input
                            id="checkbox1"
                            className="styled"
                            type="checkbox"
                          />
                          <label htmlFor="checkbox1">
                            Ship to a different address
                          </label>
                        </div>
                      </li>
                    </ul>
                  </form>
                  <h6 className="margin-top-50">SHIPPING info</h6>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ul className="row">
                      <li className="col-md-6">
                        <label>
                          *FIRST NAME
                          <input
                            type="text"
                            {...register("bill-firstName", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *LAST NAME
                          <input
                            type="text"
                            {...register("bill-lastName", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *ADDRESS
                          <input
                            type="text"
                            {...register("bill-address", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *POSTAL CODE
                          <input
                            type="text"
                            {...register("bill-postcode", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *CITY
                          <input
                            type="text"
                            {...register("bill-city", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          COUNTRY
                          <input
                            type="text"
                            {...register("bill-country", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *EMAIL ADDRESS
                          <input
                            type="text"
                            {...register("bill-email", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *PHONE
                          <input
                            type="text"
                            {...register("bill-phone", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <button type="submit" className=" button-chk">
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
                      <a
                        href="#."
                        className="button-order pull-right margin-top-30"
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

