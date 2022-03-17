import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Link from "next/link";

const Nav = () => {
  return ( 
    <ul className='nav'>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/products-content">Store</Link></li>
        <ul className="sub-menu">
					<li><Link href="#">Men&apos;s Frangrances</Link></li>
					<li><Link href="#">Women&apos;s Frangrances</Link></li>
				</ul>
      <li><Link href="/about">About Us</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/account" passHref><PersonOutlineOutlinedIcon fontSize="large"/></Link></li>
      <li><Link href="/cart" passHref><ShoppingCartOutlinedIcon fontSize="large"/></Link></li>
      <li><Link href="#" passHref><SearchOutlinedIcon fontSize="large"/></Link></li>
    </ul>
   );
}
 
export default Nav;