import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';

// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
// import styles from '../styles/CartPage.module.css';

const CartPage = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  
  return (
    <div className="container1">
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className="header1">
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className="body">
              <div className="image1">
                <Image src={"https://via.placeholder.com/90x65.png"} height="90" width="65" />
              </div>
              <p>{item.name}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className="buttons">
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;