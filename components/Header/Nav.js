import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Link from "next/link";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  console.log("getItemsCount", getItemsCount());


  return (
    <ul className="nav">
      <li>
        <Link href="/">Home</Link>
      </li>
      <motion.div
        className="menu-item"
        onHoverStart={toggleHoverMenu}
        onHoverEnd={toggleHoverMenu}
      >
        <Link href="/product">Store</Link>
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <ul className="sub-menu-container">
            <li>
              <Link href="/product" className="sub-menu-item">
                Men&apos;s Frangrances
              </Link>
            </li>
            <li>
              <Link href="#" className="sub-menu-item">
                Women&apos;s Frangrances
              </Link>
            </li>
          </ul>
        </motion.div>
      </motion.div>
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
        {getItemsCount() === 0 ? "" : getItemsCount()}
      </li>

      <li>
        <Link href="/search#search" passHref>
          <a>
            <SearchOutlinedIcon fontSize="large" />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
