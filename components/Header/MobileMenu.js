import { slide as Menu } from 'react-burger-menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const MobileMenu = () => {
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      top: "0",
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return ( 
    <Menu right styles={styles} >
      <li><a href="#">Home</a></li>
      <li><a href="#">Store</a></li>
        {/* <ul className="sub-menu">
					<li><a href="#">Men&apos;s Frangrances</a></li>
					<li><a href="#">Women&apos;s Frangrances</a></li>
				</ul> */}
      <li><a href="#">About Us</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="#"><PersonOutlineOutlinedIcon fontSize="large"/></a></li>
      <li><a href="#"><ShoppingCartOutlinedIcon fontSize="large"/></a></li>
      <li><a href="#"><SearchOutlinedIcon fontSize="large"/></a></li>
    </Menu>
   );
}
 
export default MobileMenu;