import { commerce } from "../../lib/commerce";
import { useForm } from "react-hook-form";

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
  
  //   console.log("subdivisions",subdivisions.subdivisions);
    setShippingSubdivisions(subdivisions.subdivisions);
  // };
    }
  const handleSubdivisionChange = (e) => {
    // const currentValue = e.target.value;
    setValue("province",e.target.value);
  };

  export default {handleShippingCountryChange, fetchShippingCountries,fetchSubdivisions, handleSubdivisionChange} 