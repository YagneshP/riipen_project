/* eslint-disable */
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../redux/cart.slice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, name, brand, price, quantity, image}) => {
  const dispatch = useDispatch();
return(
<>
          {/* <!-- Cart Details --> */}
          <ul className="row cart-details">
            <li className="col-sm-2 text-left">
              <div className="media"> 
                {/* <!-- Media Image --> */}
                <div className="media-left media-middle"> <a href="#." className="item-img"> <img className="media-object" src={image} alt="Hello" /> </a> </div>
                </div>
                </li>

                <li className="col-sm-4 text-left">              
                <div className="media"> 
                    {/* <!-- Item Name --> */}
                <div className="media-body">
                  <div className="position-center-center">
                    <h5>{name}</h5>
                    <p>{brand}</p>
                  </div>
                </div>
              </div>
            </li>
            
            {/* <!-- PRICE --> */}
            <li className="col-sm-2">
              <div className="position-center-center"> <span className="price"><small>$</small>{price}</span> </div>
            </li>
            
            {/* <!-- QTY --> */}
            <li className="col-sm-1">
              <div className="position-center-center">
                <div className="quinty"> 
                  {/* <!-- QTY --> */}
                  <a onClick={() => dispatch(incrementQuantity(id))}>
                  <AddIcon fontSize="large" />
                </a>
                  {quantity}
                  <a onClick={() => dispatch(decrementQuantity(id))}>
                  <RemoveIcon fontSize="large" />
                </a>
                </div>
              </div>
            </li>
            
            {/* <!-- TOTAL PRICE --> */}
            <li className="col-sm-2">
              <div className="position-center-center"> <span className="price"><small>$</small>{price * quantity}</span> </div>
            </li>
            
            {/* <!-- REMOVE --> */}
            <li className="col-sm-1">
              {/* <div className="position-center-center">  */}
              <div className="buttons1">
             
               
                <a onClick={() => dispatch(removeFromCart(id))}>
                <CloseIcon fontSize="large" />
                </a>
                </div>
              {/* <a href="#."><CloseIcon fontSize="large" /></a> </div> */}
            </li>
          </ul>
          </>
);
};
export default CartItem;

