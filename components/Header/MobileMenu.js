import { slide as Menu } from "react-burger-menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const MobileMenu = () => {
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      top: "0",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  const [expandCategories, setExpandCategories] = useState(false);

  const handleClick = () => {
    setExpandCategories((prevExpandCategories) => !prevExpandCategories);
  };

  return (
    <Menu right styles={styles}>
      <ul className="mobile-nav-list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/product">Store</Link>
        </li>
        <li onClick={handleClick}>
          <Link href="#">
            <a
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "white",
              }}
            >
              Categories <ArrowDropDownIcon />
            </a>
          </Link>
        </li>
        <ul className="sub-menu" style={{ display: expandCategories ? "block" : "none" }}>
          <li>
            <Link href="/categories/men">Men&apos;s Frangrances</Link>
          </li>
          <li>
            <Link href="/categories/women">Women&apos;s Frangrances</Link>
          </li>
        </ul>
        <li>
          <Link href="/account" passHref>
            <PersonOutlineOutlinedIcon fontSize="large" />
          </Link>
        </li>
        <li>
          <Link href="/cart" passHref>
            <ShoppingCartOutlinedIcon fontSize="large" />
          </Link>
        </li>
        <li>
          <Link href="/search#search" passHref>
            <SearchOutlinedIcon fontSize="large" />
          </Link>
        </li>
      </ul>
    </Menu>
  );
};

export default MobileMenu;
