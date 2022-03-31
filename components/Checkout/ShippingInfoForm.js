import React from "react";
import { useForm} from "react-hook-form";

export default function ShippingInfoForm({handleShippingFormInput}) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(watch());
  }

  return (
    <form onSubmit={handleSubmit(handleShippingFormInput)}>
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
        <li className="col-md-6">
          <label>
            COUNTRY
            <input type="text" {...register("country")} />
          </label>
        </li>
        <li className="col-md-6">
          <label>
            STATE/PROVINCE
            <input type="text" {...register("province")} />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            *POSTAL CODE
            <input {...register("postal")} />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            *EMAIL ADDRESS
            <input {...register("email")} />
          </label>
        </li>
        <li className='col-md-6'>
          <label>
            *PHONE
            <input {...register("phone")} />
          </label>
        </li>
        <li className='col-md-6'>
          <button type='submit' className='button-chk'>
            Submit
          </button>
        </li>
      </ul>
    </form>
  );
}

