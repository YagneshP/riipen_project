import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* <!-- ABOUT Location --> */}
        <div className="col-md-3">
          {/* <div className="about-footer"> <Image className="margin-bottom-30" src="images/logo-foot.png" alt="" /> */}
          <p>
            <i className="icon-pointer"></i> Street No. 12, Newyork 12, <br />
            MD - 123, USA.
          </p>
          <p>
            <i className="icon-call-end"></i> 1.800.123.456789
          </p>
          <p>
            <i className="icon-envelope"></i> info@ecoshop.com
          </p>
        </div>
      </div>

      {/* <!-- HELPFUL LINKS --> */}
      <div className="col-md-3">
        <h6>HELPFUL LINKS</h6>
        <ul className="link">
          <li>
            <a href="#."> Products</a>
          </li>
          <li>
            <a href="#."> Find a Store</a>
          </li>
          <li>
            <a href="#."> Features</a>
          </li>
          <li>
            <a href="#."> Privacy Policy</a>
          </li>
          <li>
            <a href="#."> Blog</a>
          </li>
          <li>
            <a href="#."> Press Kit </a>
          </li>
        </ul>
      </div>

      {/* <!-- SHOP --> */}
      <div className="col-md-3">
        <h6>SHOP</h6>
        <ul className="link">
          <li>
            <a href="#."> About Us</a>
          </li>
          <li>
            <a href="#."> Career</a>
          </li>
          <li>
            <a href="#."> Shipping Methods</a>
          </li>
          <li>
            <a href="#."> Contact</a>
          </li>
          <li>
            <a href="#."> Support</a>
          </li>
          <li>
            <a href="#."> Retailer</a>
          </li>
        </ul>
      </div>

      {/* <!-- MY ACCOUNT --> */}
      <div className="col-md-3">
        <h6>MY ACCOUNT</h6>
        <ul className="link">
          <li>
            <a href="#."> Login</a>
          </li>
          <li>
            <a href="#."> My Account</a>
          </li>
          <li>
            <a href="#."> My Cart</a>
          </li>
          <li>
            <a href="#."> Wishlist</a>
          </li>
          <li>
            <a href="#."> Checkout</a>
          </li>
        </ul>
      </div>

      {/* <!-- Rights --> */}

      <div className="rights">
        <p>© 2016 ecoshop All right reserved. </p>
        <div className="scroll">
          {" "}
          <a href="#wrap" className="go-up">
            <i className="lnr lnr-arrow-up"></i>
          </a>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
