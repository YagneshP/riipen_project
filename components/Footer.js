import Logo from "./Header/Logo";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column footer-column-1">
          <Logo />
          <p>
            <PinDropOutlinedIcon /> Street No. 12, Newyork 12, <br />
            MD - 123, USA.
          </p>
          <p>
            <LocalPhoneOutlinedIcon /> 1.800.123.456789
          </p>
          <p>
            <EmailOutlinedIcon /> info@shop.com
          </p>
        </div>

        <div className="footer-column footer-column-2">
          <h6>Helpful Links</h6>
          <ul className="footer-links">
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
              <a href="/privacypolicy"> Privacy Policy</a>
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
        <div className="footer-column footer-column-3">
          <h6>Shop</h6>
          <ul className="footer-links">
            <li>
              <a href="#."> About Us</a>
            </li>
            <li>
              <a href="#."> Career</a>
            </li>
            <li>
              <a href="/shippingandreturns"> Shipping Methods</a>
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
        <div className="footer-column footer-column-4">
          <h6>My Account</h6>
          <ul className="footer-links">
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
      </div>

      <div className="rights">
        <p>© 2022 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
