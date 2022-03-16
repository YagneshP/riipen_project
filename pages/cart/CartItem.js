import CloseIcon from '@mui/icons-material/Close';
const CartItem = ({ id, name, brand, price, quntity, image}) => {
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
                  {quntity}
                </div>
              </div>
            </li>
            
            {/* <!-- TOTAL PRICE --> */}
            <li className="col-sm-2">
              <div className="position-center-center"> <span className="price"><small>$</small>{price * quntity}</span> </div>
            </li>
            
            {/* <!-- REMOVE --> */}
            <li className="col-sm-1">
              <div className="position-center-center"> <a href="#."><CloseIcon fontSize="large" /></a> </div>
            </li>
          </ul>
          </>
)};
export default CartItem;