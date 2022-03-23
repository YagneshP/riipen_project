const Checkout = () => {
  
  return (
    <div id="content">
      <section className="chart-page padding-top-100 padding-bottom-100">
        <div className="container">
          {/* Payments Steps */}
          <div className="shopping-cart">
            {/* SHOPPING INFORMATION */}
            <div className="cart-ship-info">
              <div className="row">
                {/* ESTIMATE SHIPPING & TAX */}
                <div className="col-sm-7">
                  <h6>BILLING DETAILS</h6>
                  <form>
                    <ul className="row">
                      {/* Name */}
                      <li className="col-md-6">
                        <label>
                          *FIRST NAME
                          <input type="text" name="first-name" />
                        </label>
                      </li>
                      {/* LAST NAME */}
                      <li className="col-md-6">
                        <label>
                          *LAST NAME
                          <input type="text" name="last-name" />
                        </label>
                      </li>
                      <li className="col-md-6">
                        {/* COMPANY NAME */}
                        <label>
                          COMPANY NAME
                          <input type="text" name="company" />
                        </label>
                      </li>
                      <li className="col-md-6">
                        {/* ADDRESS */}
                        <label>
                          *ADDRESS
                          <input type="text" name="address" />
                        </label>
                      </li>
                      {/* TOWN/CITY */}
                      <li className="col-md-6">
                        <label>
                          *TOWN/CITY
                          <input type="text" name="town" />
                        </label>
                      </li>
                      {/* COUNTRY */}
                      <li className="col-md-6">
                        <label>
                          COUNTRY
                          <input type="text" name="country-state" />
                        </label>
                      </li>
                      {/* EMAIL ADDRESS */}
                      <li className="col-md-6">
                        <label>
                          *EMAIL ADDRESS
                          <input type="text" name="country-state" />
                        </label>
                      </li>
                      {/* PHONE */}
                      <li className="col-md-6">
                        <label>
                          *PHONE
                          <input type="text" name="postal-code" />
                        </label>
                      </li>
                      {/* PHONE */}
                      <li className="col-md-6">
                        <button type="submit" className="button-chk">
                          Continue
                        </button>
                      </li>
                      {/* CREATE AN ACCOUNT */}
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
                  {/* SHIPPING info */}
                  <h6 className="margin-top-50">SHIPPING info</h6>
                  <form>
                    <ul className="row">
                      {/* Name */}
                      <li className="col-md-6">
                        <label>
                          *FIRST NAME
                          <input type="text" name="first-name" />
                        </label>
                      </li>
                      {/* LAST NAME */}
                      <li className="col-md-6">
                        <label>
                          *LAST NAME
                          <input type="text" name="last-name" />
                        </label>
                      </li>
                      <li className="col-md-6">
                        {/* COMPANY NAME */}
                        <label>
                          COMPANY NAME
                          <input type="text" name="company" />
                        </label>
                      </li>
                      <li className="col-md-6">
                        {/* ADDRESS */}
                        <label>
                          *ADDRESS
                          <input type="text" name="address" />
                        </label>
                      </li>
                      {/* TOWN/CITY */}
                      <li className="col-md-6">
                        <label>
                          *TOWN/CITY
                          <input type="text" name="town" />
                        </label>
                      </li>
                      {/* COUNTRY */}
                      <li className="col-md-6">
                        <label>
                          COUNTRY
                          <input type="text" name="country-state" />
                        </label>
                      </li>
                      {/* EMAIL ADDRESS */}
                      <li className="col-md-6">
                        <label>
                          *EMAIL ADDRESS
                          <input type="text" name="country-state" />
                        </label>
                      </li>
                      {/* PHONE */}
                      <li className="col-md-6">
                        <label>
                          *PHONE
                          <input type="text" name="postal-code" />
                        </label>
                      </li>
                      {/* PHONE */}
                      <li className="col-md-6">
                        <button type="submit" className=" button-chk">
                          SUBMIT
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
                {/* SUB TOTAL */}
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
                      {/* SUB TOTAL */}
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
                              <span className="color">
                                TERMS &amp; CONDITIONS
                              </span>
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
export default Checkout;
