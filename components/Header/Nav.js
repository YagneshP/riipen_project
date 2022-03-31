import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Link from "next/link";
import { useCart } from "../../context/Cart";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useCart } from "../../context/Cart";

const Nav = () => {
  
  const { total_items } = useCart();

  // MaterialUI dropdown menu config
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ul className="nav">
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/about">About Us</Link>
      </li>

      <li>
        <Link href="/product" passHref>
          Store
        </Link>
      </li>

      <div
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // onMouseOver={handleClick}
      >
        <li>
          <Link href="#" passHref>
            <a
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              Categories <ArrowDropDownIcon />
            </a>
          </Link>
        </li>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/categories/men" className="sub-menu-item">
            <a
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "1.4rem"
              }}
            >
              Men&apos;s Frangrances
            </a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/categories/women" className="sub-menu-item">
            <a
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "1.4rem"
              }}
            >
              Women&apos;s Frangrances
            </a>
          </Link>
        </MenuItem>
      </Menu>
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
