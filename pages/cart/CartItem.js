import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { commerce } from "../../lib/commerce";
import { useCartActions } from "../../context/Cart";
import Image from "next/image";

const CartItem = ({ id, name, brand, price, quantity, image, line_total }) => {
  const { setCart } = useCartActions();
  const removeItem = async () => {
    let response = await commerce.cart.remove(id);
    setCart(response.cart);
    alert("Item removed");
  };
  const incrementQuantity = async () => {
    let response = await commerce.cart.update(id, {
      quantity: quantity + 1,
    });
    setCart(response.cart);
  };

  const decrementQuantity = async () => {
    let response =
      quantity > 1
        ? await commerce.cart.update(id, { quantity: quantity - 1 })
        : removeItem();
    setCart(response.cart);
  };

  return (
    <>
      {/* <!-- Cart Details --> */}
      <ul className='row cart-details'>
        <li className='col-sm-2 text-left'>
          <div className='media'>
            {/* <!-- Media Image --> */}
            <div className='media-left media-middle'>
              <a href='#.' className='item-img'>
                <Image
                  className='media-object'
                  src={image}
                  alt='Hello'
                  width={200}
                  height={200}
                />
              </a>
            </div>
          </div>
        </li>

        <li className='col-sm-4 text-left'>
          <div className='media'>
            {/* <!-- Item Name --> */}
            <div className='media-body'>
              <div className='position-center-center'>
                <h5>{name}</h5>
                <p>{brand}</p>
              </div>
            </div>
          </div>
        </li>

        {/* <!-- PRICE --> */}
        <li className='col-sm-2'>
          <div className='position-center-center'>
            {" "}
            <span className='price'>
              {/* <small>$</small> */}
              {price}
            </span>{" "}
          </div>
        </li>

        {/* <!-- QTY --> */}
        <li className='col-sm-1'>
          <div className='position-center-center'>
            <div className='quinty'>
              {/* <!-- QTY --> */}
              <button onClick={incrementQuantity} className='btn btn-primary'>
                <AddIcon fontSize='mediam' />
              </button>
              {quantity}
              <button onClick={decrementQuantity} className='btn btn-primary'>
                <RemoveIcon fontSize='mediam' />
              </button>
            </div>
          </div>
        </li>

        {/* <!-- TOTAL PRICE --> */}
        <li className='col-sm-2'>
          <div className='position-center-center'>
            {" "}
            <span className='price'>{line_total}</span>{" "}
          </div>
        </li>

        {/* <!-- REMOVE --> */}
        <li className='col-sm-1'>
          {/* <div className="position-center-center">  */}
          <div className='remove'>
            <button onClick={removeItem} className='btn btn-danger'>
              <CloseIcon fontSize='mediam' />
            </button>
          </div>
          {/* <a href="#."><CloseIcon fontSize="large" /></a> </div> */}
        </li>
      </ul>
    </>
  );
};
export default CartItem;
