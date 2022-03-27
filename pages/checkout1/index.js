import PaymentValue from './PaymentValue';
import Link from 'next/link';

// import { GrandTotal } from './cart/GrandTotal';


const Checkout1 = () => {
 
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
                <PaymentValue />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Checkout1;
