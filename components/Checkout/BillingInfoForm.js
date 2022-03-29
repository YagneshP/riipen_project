import React from "react";
import { useForm } from "react-hook-form";
function BillingInfoForm({ handleFormInput }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(handleFormInput)}>
      <ul className='row'>
        <li className='col-md-6'>
          <label>
            *FIRST NAME
            <input {...register("first_name")} />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            *LAST NAME
            <input {...register("last_name")} />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            COMPANY NAME
            <input {...register("company")} />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            *ADDRESS
            <input {...register("address")} />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            *TOWN/CITY
            <input {...register("town")} />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            COUNTRY
            <input {...register("country")} />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            *EMAIL ADDRESS
            <input {...register("country_state")} />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            *PHONE
            <input {...register("phone_number")} />
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
