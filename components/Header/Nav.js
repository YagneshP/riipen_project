import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Link from "next/link";
import { useCart } from "../../context/Cart";

const Nav = () => {
  
  const { total_items } = useCart();
  console.log("line", total_items);
  
  return (
    <ul className="nav">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/product">Store</Link>
      </li>
      <ul className="sub-menu">
        <li>
          <Link href="#">Men&apos;s Frangrances</Link>
        </li>
        <li>
          <Link href="#">Women&apos;s Frangrances</Link>
        </li>
      </ul>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/account" passHref>
          <a>
            <PersonOutlineOutlinedIcon fontSize="large" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/cart" passHref>
          <a>
            <ShoppingCartOutlinedIcon fontSize="large" />
          </a>
        </Link>
          {total_items === 0 ? "" : total_items} 
      </li>

      <li>
        <Link href="/product#search" passHref>
          <a>
            <SearchOutlinedIcon fontSize="large" />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
