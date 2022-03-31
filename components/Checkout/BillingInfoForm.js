import {React,useEffect,useState} from "react";
import { useForm} from "react-hook-form";
import { commerce } from "../../lib/commerce";
import { MenuItem, Select } from '@material-ui/core';

export default function BillingInfoForm({handleFormInput}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [shippingCountries, setShippingCountries] = useState({});
  const [shippingSubdivisions, setShippingSubdivisions] = useState({});

  useEffect(() => {
    fetchShippingCountries();
  }, []);

  const fetchShippingCountries = async () => {
    const countries = await commerce.services.localeListCountries(
    );
    setShippingCountries(countries.countries);
  };

  const handleShippingCountryChange = (e) => {
    fetchSubdivisions(e.target.value);
  };

  const fetchSubdivisions = async (countryCode) => {
    const subdivisions = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions.subdivisions);
  }

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
            > 
              {Object.keys(shippingSubdivisions).map((index) => (
                <MenuItem value={index} key={index}>
                  {shippingSubdivisions[index]}
                </MenuItem>
              ))}
            </Select>
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
        <label className="control-label"></label>
          <button type='submit' className='button-chk'>
            Continue
          </button>
        </li>
      </ul>
    </form>
  );
}

