import { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { useForm, ValidationError } from "@formspree/react";
import axios from "axios";
import Button from "./Button";

const Form = ({ user }) => {
  const [editMode, setIsEditMode] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phoneNum, setPhoneNum] = useState(`${user.phoneNum}`);
  const [email, setEmail] = useState(user.email);
  const [streetAddress, setStreetAddress] = useState(user.streetAddress);
  const [unitNum, setUnitNum] = useState(user.unitNum);
  const [city, setCity] = useState(user.city);
  const [provinceState, setProvinceState] = useState(user.provinceState);
  const [zip, setZip] = useState(user.zip);
  const [country, setCountry] = useState(user.country);

  const url = "";

  const onToggle = () => {
    setIsEditMode(!editMode);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // return axios({
    //   method: "POST",
    //   url: url,
    //   data: {
    //     firstName,
    //     lastName,
    //     phoneNum,
    //     email,
    //     streetAddress,
    //     unitNum,
    //     city,
    //     provinceState,
    //     zip,
    //     country
    //   },
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Credentials": true,
    //   },
    //   withCredentials: true,
    // })
    //   .then((res) => {
    //     if (res.data.success) {
    //       console.log("success");
    //       setIsEditMode(false);
    //     }
    //     onToggle();
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  };

  return (
    <div className="account-form">
      <form
        role="form"
        id="contact_form"
        className="contact-form"
        onSubmit={onSubmit}
      >
        <ul className="row">
          <li className="col-sm-6">
            <label htmlFor="name">
              First Name
              <input
                disabled={editMode ? false : true}
                type="text"
                className="form-control"
                name="name"
                required
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="last-name">
              Last Name
              <input
                disabled={editMode ? false : true}
                type="text"
                className="form-control"
                name="last-name"
                required
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="phone">
              Phone
              <input
                disabled={editMode ? false : true}
                type="text"
                className="form-control"
                name="phone"
                required
                placeholder="416-555-5555"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="subject">
              Email Address
              <input
                disabled={editMode ? false : true}
                type="text"
                className="form-control"
                name="subject"
                required
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="street-address">
              Street Address
              <input
                disabled={editMode ? false : true}
                type="text"
                className="form-control"
                name="street-address"
                required
                placeholder="Enter Your Street Address"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="unit-num">
              Unit #
              <input
                disabled={editMode ? false : true}
                type="text"
                className="form-control"
                name="unit-num"
                required
                placeholder="Unit or Apt #"
                value={unitNum}
                onChange={(e) => setUnitNum(e.target.value)}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="city">
              City
              <input
                disabled={editMode ? false : true}
                type="text"
                className="form-control"
                name="city"
                required
                placeholder="Toronto"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="state">
              Province/State
              <input
                disabled={editMode ? false : true}
                type="text"
                className="form-control"
                name="state"
                required
                placeholder="ON"
                value={provinceState}
                onChange={(e) => setProvinceState(e.target.value)}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="zipcode">
              Postal/ZIP Code
              <input
                disabled={editMode ? false : true}
                type="text"
                className="form-control"
                name="zipcode"
                placeholder="A1A 1A1"
                required
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="country">
              Country
              <input
                disabled={editMode ? false : true}
                type="text"
                className="form-control"
                name="country"
                placeholder="Canada"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
          </li>

          <li className="col-sm-3">
            {editMode ? (
              <Button text="Save" type="submit" />
            ) : (
              <Button text="Edit" type=" " onToggle={onToggle}/>
            )}
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Form;
