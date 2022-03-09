import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import {
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return ( 
    <ul className='nav'>
      <li><a href="#">Home</a></li>
      <li><a href="#">Store</a></li>
        <ul className="sub-menu">
					<li><a href="#">Men&apos;s Frangrances</a></li>
					<li><a href="#">Women&apos;s Frangrances</a></li>
				</ul>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#"><PersonOutlineOutlinedIcon fontSize="large"/></a></li>
      <li><a href="#"><ShoppingCartOutlinedIcon fontSize="large"/></a></li>
      <li><a href="#"><SearchOutlinedIcon fontSize="large"/></a></li>
    </ul>
   );
}
 
export default Nav;