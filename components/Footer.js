import Logo from "./Header/Logo";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Link from "next/link";

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

        {/* <!-- SHOP --> */}
        <div className="footer-column footer-column-2">
          <h6>Shop</h6>
          <ul className="footer-links">
            <li>
              <Link href="/about"> About Us</Link>
            </li>
            <li>
              <Link href="/contact"> Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-column-3">
          <h6>Helpful Links</h6>
          <ul className="footer-links">
            <li>
              <Link href="/products-content"> Products</Link>
            </li>
            <li>
              <Link href="/privacypolicy"> Privacy Policy</Link>
            </li>
            <li>
              <Link href="/shippingandreturns"> Shipping & Returns</Link>
            </li>
          </ul>
        </div>


        {/* <!-- MY ACCOUNT --> */}
        <div className="footer-column footer-column-4">
          <h6>My Account</h6>
          <ul className="footer-links">
            <li>
              <Link href="#."> Login</Link>
            </li>
            <li>
              <Link href="/account"> My Account</Link>
            </li>
            <li>
              <Link href="/cart"> My Cart</Link>
            </li>
            <li>
              <Link href="/checkout"> Checkout</Link>
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
