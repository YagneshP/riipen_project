import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  //Google Map setup
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      // Api key to be changed and billing to be enabled for this to work properly
      apiKey: process.env.NEXT_PUBLIC_GOOGLEMAPS_API,
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center: { lat: 43.65189, lng: -79.381706 },
        zoom: 8,
      });
    });
  });

  // Form Spree Setup
  const [state, handleSubmit] = useForm(`${process.env.NEXT_PUBLIC_FORMSPREE_API}`);

  if (state.succeeded) {
    return (
      <div>
        <section className="contact padding-top-100 padding-bottom-100">
          <div className="container">
            <div className="contact-form">
              <h5> Thank You, Your Message has been Submitted!</h5> <br />
              <h4>
                Company Name <br />
                Street No. 12, Newyork 12,
                <br />
                MD - 123, USA.
                <br /> 1.800.123.456789 <br />
                info@ecoshop.com
              </h4>
            </div>
          </div>
        </section>
        <div id="map" ref={googlemap} />
      </div>
    );
  }

  return (
    <div>
      <section className="contact padding-top-100 padding-bottom-100">
        <div className="container">
          <div className="contact-form">
            <h5>PLEASE fill-up FEW details</h5>
            <div className="row">
              <div className="col-md-8">
                <form
                  role="form"
                  id="contact_form"
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <ul className="row">
                    <li className="col-sm-6">
                      <label htmlFor="name">
                        full name *
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder=""
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
                        Email *
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder=""
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
                        SUBJECT
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
                    <li className="col-sm-12">
                      <label>
                        Message
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          rows="5"
                          placeholder=""
                        ></textarea>
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                      </label>
                    </li>
                    <li className="col-sm-12">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="button-12"
                        id="btn_submit"
                      >
                        SEND MAIL
                      </button>
                    </li>
                  </ul>
                </form>
              </div>

              <div className="col-md-4">
                <div className="contact-info">
                  <h6>OUR ADDRESS</h6>
                  <ul>
                    <li>
                      <PlaceIcon /> Street No. 12, Newyork 12,
                      <br />
                      MD - 123, USA.
                    </li>
                    <li>
                      <LocalPhoneIcon /> 1.800.123.456789
                    </li>
                    <li>
                      <EmailIcon />{" "}
                      <a href="mailto:someone@example.com" target="_top">
                        info@ecoshop.com
                      </a>
                    </li>
                    <li>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam erat turpis, pellentesque non leo eget.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="map" ref={googlemap} />
    </div>
  );
};
export default Contact;
