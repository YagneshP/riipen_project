
//my upper part, tofiq form part

import Router from "next/router";
import { useEffect,useState } from "react";
import { useCart } from "../../context/Cart";
import { commerce } from "../../lib/commerce";
import {GrandTotal} from '../../pages/cart/GrandTotal';
import {PaymentValue} from '../../pages/stripe/PaymentValue';
import { MenuItem, Select } from '@material-ui/core';
import { useForm } from "react-hook-form";


export default function Checkout() {
  const { register, handleSubmit, setValue, setError } = useForm();
	const [token, setToken] = useState();
  const [order, setOrder] = useState();
	const { line_items, subtotal } = useCart();
	console.log("line",line_items);
  const cartId= commerce.cart.id();
	console.log("cartid",commerce.cart.id());

 

	//Billing Form data
	// const [bfirstName, setbFirstName] = useState('');
  // const [blastName, setbLastName] = useState();
	// const [ addressb, setAddressb] = useState('');
	// const [ bcity, setbCity] = useState('');
	// const [ bcountry, setbCountry] = useState('');
  // const [bprovince, setbProvince] = useState('');
	// const [ bemail, setbEmail] = useState('');
	// const [ bphone, setbPhone] = useState('');
	// const [ bpostal, setbPostal] = useState('');

//Shipping Form data
	// const [sfirstName, setsFirstName] = useState('');
	// const [slastName, setsLastName] = useState();
	// const [ saddress, setsAddress] = useState('');
	// const [ scity, setsCity] = useState('');
  // const [scountry, setsCountry] = useState('');
  // const [shippingOption, setShippingOption] = useState({});
	// const [sprovince, setsProvince] = useState('');
	// const [ semail, setsEmail] = useState('');
	// const [ sphone, setsPhone] = useState('');
	// const [ spostal, setsPostal] = useState('');

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

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    address:'',
    city:'',
    country:'',
    province:'',
    postal:'',
    phone:'',
    email:''
  });
  const onSubmit = (data) => 
  { setFormData(data);
    // console.log("data1",data);
    handleCaptureCheckout();
  }

  console.log("data2", formData);
		const handleCaptureCheckout = async () => {
      console.log("fordata country", formData.country);
      console.log("fordata province", formData.province);
      const provcountry = `${formData.country}-${formData.province}`;
      console.log(" province country", provcountry);
			const orderData = {
				line_items: token.live.line_items,
				customer: {
					firstname: formData.firstName,
					lastname: formData.lastName,
          email: formData.email
				},
        shipping: {
          name: `${formData.firstName} ${formData.lastName}`,
          street: formData.address,
          town_city: formData.city,
          county_state: provcountry,
          postal_zip_code: formData.postal,
          country: formData.country
        },
        fulfillment: {
          shipping_method: 'ship_7RyWOwmK5nEa2V'
        },
        billing: {
          name: `${formData.firstName} ${formData.lastName}`,
          street: formData.address,
          town_city: formData.city,
          county_state: provcountry,
          postal_zip_code: formData.postal,
          country: formData.country
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
        // payment: {
        //   gateway: 'stripe',
        //   stripe: {
        //     payment_method_id: paymentMethodResponse.paymentMethod.id,
        //   },
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
      // console.log("formdata3", formData)
  };

  const handleShippingCountryChange = (e) => {
    console.log("hiiiiii");
    const currentValue = e.target.value;
    console.log("country value",currentValue);
    setValue("country",e.target.value);
    fetchSubdivisions(currentValue);
  };

  const fetchShippingCountries = async () => {
    const countries = await commerce.services.localeListCountries(
    );
    // console.log("countries1", countries.countries);
    setShippingCountries(countries.countries);
  };

  
  const fetchSubdivisions = async (countryCode) => {
    const subdivisions = await commerce.services.localeListSubdivisions(
      countryCode
    );
    console.log("subdivisions",subdivisions.subdivisions);
    setShippingSubdivisions(subdivisions.subdivisions);
  };

  const handleSubdivisionChange = (e) => {
    // const currentValue = e.target.value;
    setValue("province",e.target.value);
  };


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
                            onChange={e => setValue("firstName", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *LAST NAME
                          <input
                            type="text"
                            {...register("lastName", { required: true })}
                            onChange={e => setValue("lastName", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *ADDRESS
                          <input
                            type="text"
                            {...register("address", { required: true })}
                            onChange={e => setValue("address", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *CITY
                          <input
                            type="text"
                            {...register("city", { required: true })}
                            onChange={e => setValue("city", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          COUNTRY
                          <select
                          
                            {...register("country", { required: true })}
                            fullWidth
                            // value={formData.country}
                            onChange={handleShippingCountryChange}
                            // onChange={e => setValue("country",e.target.value)}
                          > 
                          {Object.keys(shippingCountries).map((index) => (
                              <option value={index} key={index}>
                                {shippingCountries[index]}
                              </option>
                            ))}
                            </select>
                          {/* <input
                            type="text"
                            {...register("country", { required: true })}
                            onChange={e => setValue("country", e.target.value)}
                          /> */}
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *STATE/PROVINCE
                          <select
                            {...register("province", { required: true })}
                            fullWidth
                            // value={formData.country}
                            onChange={handleSubdivisionChange}
                          > 
                          {Object.keys(shippingSubdivisions).map((index) => (
                              <option value={index} key={index}>
                                {shippingSubdivisions[index]}
                              </option>
                            ))}
                            </select>
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *POSTAL CODE
                          <input
                            type="text"
                            {...register("postcode", { required: true })}
                            onChange={e => setValue("postcode", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *EMAIL ADDRESS
                          <input
                            type="text"
                            {...register("email", { required: true })}
                            onChange={e => setValue("email", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *PHONE
                          <input
                            type="text"
                            {...register("phone", { required: true })}
                            onChange={e => setValue("phone", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <button type="submit" className="button-chk">
                          Submit
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
                  {/* <h6 className="margin-top-50">SHIPPING info</h6>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ul className="row">
                      <li className="col-md-6">
                        <label>
                          *FIRST NAME
                          <input
                            type="text"
                            {...register("bill-firstName", { required: true })}
                            onChange={e => setValue("bill-firstName", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *LAST NAME
                          <input
                            type="text"
                            {...register("bill-lastName", { required: true })}
                            onChange={e => setValue("bill-lastName", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *ADDRESS
                          <input
                            type="text"
                            {...register("bill-address", { required: true })}
                            onChange={e => setValue("bill-address", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *CITY
                          <input
                            type="text"
                            {...register("bill-city", { required: true })}
                            onChange={e => setValue("bill-city", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          COUNTRY
                          <input
                            type="text"
                            {...register("bill-country", { required: true })}
                            onChange={e => setValue("bill-country", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          STATE/PROVINCE
                          <input
                            type="text"
                            {...register("bill-province", { required: true })}
                            onChange={e => setValue("bill-province", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *POSTAL CODE
                          <input
                            type="text"
                            {...register("bill-postcode", { required: true })}
                            onChange={e => setValue("bill-postcode", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *EMAIL ADDRESS
                          <input
                            type="text"
                            {...register("bill-email", { required: true })}
                            onChange={e => setValue("bill-email", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *PHONE
                          <input
                            type="text"
                            {...register("bill-phone", { required: true })}
                            onChange={e => setValue("bill-phone", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <button type="submit" className=" button-chk">
                          SUBMIT
                        </button>
                      </li> 
                    </ul>
                  </form> */}
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

