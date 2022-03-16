import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Nav = () => {
  return ( 
    <ul className='nav'>
      <li><a href="/">Home</a></li>
      <li><a href="/products-content">Store</a></li>
        <ul className="sub-menu">
					<li><a href="#">Men&apos;s Fragrances</a></li>
					<li><a href="#">Women&apos;s Fragrances</a></li>
				</ul>
      <li><a href="/about">About Us</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="#"><PersonOutlineOutlinedIcon fontSize="large"/></a></li>
      <li><a href="#"><ShoppingCartOutlinedIcon fontSize="large"/></a></li>
      <li><a href="#"><SearchOutlinedIcon fontSize="large"/></a></li>
    </ul>
   );
}
 
export default Nav;