import Router from "next/router";
import { useEffect,useState } from "react";
import { useCart } from "../../context/Cart";
import { commerce } from "../../lib/commerce";
import GrandTotal from '../../pages/cart/GrandTotal';
import {PaymentValue} from '../../pages/stripe/PaymentValue';
import { MenuItem, Select } from '@material-ui/core';
import { useForm } from "react-hook-form";
import Form from "../../pages/reactForm";

export default Form(){
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
													// value={data.country}
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
													// value={data.country}
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
										{line_items.map((item) => (
											// item.name
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
}