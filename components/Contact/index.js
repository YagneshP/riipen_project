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
      apiKey: "AIzaSyDhr28hjrb6e8URKWKcFZdvr1UtS4nKLDI",
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

  // Form spree setup
  const [state, handleSubmit] = useForm("mpzblqyb");

  if (state.succeeded) {
    <div id="contact_message" className="success-msg">
      {" "}
      <i className="fa fa-paper-plane-o"></i>Thank You. Your Message has been
      Submitted
    </div>;
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
