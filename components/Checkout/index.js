
//my upper part, tofiq form part

import Router from "next/router";
import { useEffect,useState } from "react";
import { useCart } from "../../context/Cart";
import { commerce } from "../../lib/commerce";
import GrandTotal from '../../pages/cart/GrandTotal';
import {PaymentValue} from '../../pages/stripe/PaymentValue';
import { MenuItem, Select } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { Phone } from "@mui/icons-material";


export default function Checkout() {
  const { register, handleSubmit, setValue, setError } = useForm();
	const [token, setToken] = useState();
  const [order, setOrder] = useState();
	const { line_items, subtotal } = useCart();
	console.log("line",line_items);
  const cartId= commerce.cart.id();
	console.log("cartid",commerce.cart.id());

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
      fetchShippingCountries();
    } else {
      Router.push('/cart');
    }
	}


  const onSubmit = async (data) => 
  {   
      console.log("fordata country", data.country);
      console.log("fordata province", data.province);
      console.log("fcheck", data.shippingCheck);
      console.log("fcheck FN", data.shipFirstName);
      console.log("fcheck LN", data.shipLastName);
      let shippingData= {};
      if(data.shippingCheck){
        shippingData = {
          firstName: data.shipFirstName,
          lastName : data.shipLastName,
          address : data.shipAddress,
          city : data.shipCity,
          country:data.shipCountry,
          province:data.shipProvince,
          email:data.shipEmail,
          postal:data.shipPostal
        }
      }
      else {
        shippingData = {
          firstName: data.firstName,
          lastName : data.lastName,
          address : data.address,
          city : data.city,
          country:data.country,
          province:data.province,
          email:data.email,
          postal:data.postal
        }
      }
      console.log("shipping data first name", shippingData);

			const orderData = {
				line_items: token.live.line_items,
				customer: {
					firstname: data.firstName,
					lastname: data.lastName,
          email: data.email
				},
        shipping: {
          name: `${shippingData.firstName} ${shippingData.lastName}`,
          street: shippingData.address,
          town_city: shippingData.city,
          county_state: `${shippingData.country}-${shippingData.province}`,
          postal_zip_code: shippingData.postal,
          country: shippingData.country
        },
        fulfillment: {
          shipping_method: 'ship_7RyWOwmK5nEa2V'
        },
        billing: {
          name: `${data.firstName} ${data.lastName}`,
          street: data.address,
          town_city: data.city,
          county_state: `${data.country}-${data.province}`,
          postal_zip_code: data.postal,
          country: data.country
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
      
      try {
        const orderPlaced = await commerce.checkout.capture(
          token.id,
          orderData
        );
        setOrder(orderPlaced);
        console.log("orderPlaced",orderPlaced);

        Router.push('/confirmation');
      } catch (err) {
        console.log("error");
      }
    
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
    setShippingCountries(countries.countries);
  };

  
  const fetchSubdivisions = async (countryCode) => {
    const subdivisions = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions.subdivisions);
  }

    const handleSubdivisionChange = (e) => 
      setValue("province",e.target.value);



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
                          <Select
                          
                            {...register("country", { required: true })}
                            fullWidth
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
                      <li className="col-md-6">
                        <label>
                          *STATE/PROVINCE
                          <Select
                            {...register("province", { required: true })}
                            fullWidth
                            onChange={handleSubdivisionChange}
                          > 
                          {Object.keys(shippingSubdivisions).map((index) => (
                              <MenuItem value={index} key={index}>
                                {shippingSubdivisions[index]}
                              </MenuItem>
                            ))}
                            </Select>
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
                      
                      {/* <li className="col-md-6">
                        <button type="submit" className="button-chk">
                          Submit
                        </button>
                      </li> */}
                      <li className="col-md-6">
                        <div className="checkbox margin-0 margin-top-20">
                        <input
                            type="checkbox"
                            {...register('shippingCheck')}
                            value={true} 
                          />
                          <label htmlFor="checkbox1">
                            Ship to a different address 
                          </label>
                        </div>
                      </li>
                    {/* </ul> */}
                  {/* </form> */}
                  <h6 className="margin-top-50">SHIPPING info</h6>
                  {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    {/* <ul className="row"> */}
                      <li className="col-md-6">
                        <label>
                          *FIRST NAME
                          <input
                            type="text"
                            {...register("shipFirstName", { required: true })}
                            onChange={e => setValue("shipFirstName", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *LAST NAME
                          <input
                            type="text"
                            {...register("shipLastName", { required: true })}
                            onChange={e => setValue("shipLastName", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *ADDRESS
                          <input
                            type="text"
                            {...register("shipAddress", { required: true })}
                            onChange={e => setValue("shipAddress", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *CITY
                          <input
                            type="text"
                            {...register("shipCity", { required: true })}
                            onChange={e => setValue("shipCity", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          COUNTRY
                          <input
                            type="text"
                            {...register("shipCountry", { required: true })}
                            onChange={e => setValue("shipCountry", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          STATE/PROVINCE
                          <input
                            type="text"
                            {...register("shipProvince", { required: true })}
                            onChange={e => setValue("shipProvince", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *POSTAL CODE
                          <input
                            type="text"
                            {...register("shipPostal", { required: true })}
                            onChange={e => setValue("shipPostal", e.target.value)}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *EMAIL ADDRESS
                          <input
                            type="text"
                            {...register("shipEmail", { required: true })}
                            onChange={e => setValue("shipEmail", e.target.value)}
                          />
                        </label>
                      </li>
                    
                      <li className="col-md-6">
                        <button type="submit" className=" button-chk">
                          SUBMIT
                        </button>
                      </li> 
                    </ul>
                  </form>
                </div>
                <div className="col-sm-5">
                  <h6>YOUR ORDER</h6>
                  <div className="order-place">
                    <div className="order-detail">
                      {line_items.map((item) => (
                      <GrandTotal
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        line_total={item.line_total.formatted_with_symbol}
                      />
										))}
                      
                      <p className='all-total'>
                      TOTAL COST <span> {subtotal.formatted_with_symbol}</span>
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

