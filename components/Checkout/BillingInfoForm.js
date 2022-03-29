import React from "react";

function BillingInfoForm() {
  return (
    <form>
      <ul className='row'>
        <li className='col-md-6'>
          <label>
            *FIRST NAME
            <input type='text' name='first-name' />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            *LAST NAME
            <input type='text' name='last-name' />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            COMPANY NAME
            <input type='text' name='company' />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            *ADDRESS
            <input type='text' name='address' />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            *TOWN/CITY
            <input type='text' name='town' />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            COUNTRY
            <input type='text' name='country-state' />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            *EMAIL ADDRESS
            <input type='text' name='country-state' />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            *PHONE
            <input type='text' name='postal-code' />
          </label>
        </li>
        <li className='col-md-6'>
          <button type='submit' className='button-chk'>
            Continue
          </button>
        </li>
        <li className='col-md-6'>
          <div className='checkbox margin-0 margin-top-20'>
            <input id='checkbox1' className='styled' type='checkbox' />
            <label htmlFor='checkbox1'>Ship to a different address</label>
          </div>
        </li>
      </ul>
    </form>
  );
}

export default BillingInfoForm;
