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
              <a href="/products-content"> Products</a>
            </li>
            <li>
              <a href="/privacypolicy"> Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* <!-- SHOP --> */}
        <div className="footer-column footer-column-3">
          <h6>Shop</h6>
          <ul className="footer-links">
            <li>
              <a href="/about"> About Us</a>
            </li>
            <li>
              <a href="/shippingandreturns"> Shipping Methods</a>
            </li>
            <li>
              <a href="/contact"> Contact</a>
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
              <a href="/account"> My Account</a>
            </li>
            <li>
              <a href="/cart"> My Cart</a>
            </li>
            <li>
              <a href="/checkout"> Checkout</a>
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
