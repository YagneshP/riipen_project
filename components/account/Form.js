import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm(
    `${process.env.NEXT_PUBLIC_FORMSPREE_API}`
  );

  return (
    <div className="account-form">
      <form
        role="form"
        id="contact_form"
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <ul className="row">
          <li className="col-sm-6">
            <label htmlFor="name">
              First Name
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="John"
                disabled
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="email">
              Last Name
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Doe"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="phone">
              Phone *
              <input
                type="number"
                className="form-control"
                name="phone number"
                id="company"
                placeholder="416-555-5555"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="subject">
              Email Address
              <input
                type="text"
                className="form-control"
                name="subject"
                id="website"
                placeholder="johndoe@gmail.com"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="phone">
              Street Address
              <input
                type="number"
                className="form-control"
                name="phone number"
                id="company"
                placeholder=""
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="subject">
              Unit #
              <input
                type="text"
                className="form-control"
                name="subject"
                id="website"
                placeholder=""
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="phone">
              City
              <input
                type="number"
                className="form-control"
                name="phone number"
                id="company"
                placeholder="Toronto"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="subject">
              Province/State
              <input
                type="text"
                className="form-control"
                name="subject"
                id="website"
                placeholder="ON"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="phone">
              Postal/ZIP Code
              <input
                type="number"
                className="form-control"
                name="phone number"
                id="company"
                placeholder="A1A 1A1"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </label>
          </li>
          <li className="col-sm-6">
            <label htmlFor="subject">
              Country
              <input
                type="text"
                className="form-control"
                name="subject"
                id="website"
                placeholder="Canada"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </label>
          </li>

          <li className="col-sm-1">
            <button
              type="submit"
              disabled={state.submitting}
              className="button-12"
              id="btn_submit"
            >
              Edit
            </button>
          </li>
          <li className="col-sm-3">
            <button
              type="submit"
              disabled={state.submitting}
              className="button-12"
              id="btn_submit"
            >
              Save
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Form;
