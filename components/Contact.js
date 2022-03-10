import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <div>
      <section className="contact padding-top-100 padding-bottom-100">
        <div className="container">
          <div className="contact-form">
            <h5>PLEASE fill-up FEW details</h5>
            <div className="row">
              <div className="col-md-8">
                <div id="contact_message" className="success-msg">
                  {" "}
                  <i className="fa fa-paper-plane-o"></i>Thank You. Your Message
                  has been Submitted
                </div>

                <form
                  role="form"
                  id="contact_form"
                  className="contact-form"
                  method="post"
                  onSubmit="return false"
                >
                  <ul className="row">
                    <li className="col-sm-6">
                      <label>
                        full name *
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder=""
                        />
                      </label>
                    </li>
                    <li className="col-sm-6">
                      <label>
                        Email *
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder=""
                        />
                      </label>
                    </li>
                    <li className="col-sm-6">
                      <label>
                        Phone *
                        <input
                          type="text"
                          className="form-control"
                          name="company"
                          id="company"
                          placeholder=""
                        />
                      </label>
                    </li>
                    <li className="col-sm-6">
                      <label>
                        SUBJECT
                        <input
                          type="text"
                          className="form-control"
                          name="website"
                          id="website"
                          placeholder=""
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
                      </label>
                    </li>
                    <li className="col-sm-12">
                      <button
                        type="submit"
                        value="submit"
                        className="button-12"
                        id="btn_submit"
                        onClick="proceed();"
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
      {/* Google Map */}
    </div>
  );
};
export default Contact;
