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
      <ul className="row">
        <li className="col-md-6">
          <label>
            *FIRST NAME
            <input
              type="text"
              {...register("first_name", { required: true })}
            />
          </label>
        </li>
        <li className="col-md-6">
          <label>
            *LAST NAME
            <input type="text" {...register("last_name", { required: true })} />
          </label>
        </li>
        <li className="col-md-6">
          <label>
            *ADDRESS
            <input type="text" {...register("address", { required: true })} />
          </label>
        </li>
        <li className="col-md-6">
          <label>
            *POSTAL CODE
            <input type="text" {...register("postcode", { required: true })} />
          </label>
        </li>
        <li className="col-md-6">
          <label>
            *CITY
            <input type="text" {...register("city", { required: true })} />
          </label>
        </li>
        <li className="col-md-6">
          <label>
            COUNTRY
            <input type="text" {...register("country", { required: true })} />
          </label>
        </li>
        <li className="col-md-6">
          <label>
            *EMAIL ADDRESS
            <input type="text" {...register("email", { required: true })} />
          </label>
        </li>
        <li className="col-md-6">
          <label>
            *PHONE
            <input type="text" {...register("phone", { required: true })} />
          </label>
        </li>
        <li className="col-md-6">
          <button type="submit" className="button-chk">
            Continue
          </button>
        </li>
        <li className="col-md-6">
          <div className="checkbox margin-0 margin-top-20">
            <input id="checkbox1" className="styled" type="checkbox" />
            <label htmlFor="checkbox1">Ship to a different address</label>
          </div>
        </li>
      </ul>
    </form>
  );
}

export default BillingInfoForm;
