import { createContext, useReducer } from "react";

const CartStateContext = createContext(null);
const CartDispatchContext = createContext(null);

//cart intialState

const cartInitialState = {
  total_items: 0,
  total_unique_items: 0,
  subtotal: {
    formatted_with_symbol: "",
  },
  line_items: [],
};

// cart reducer

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART": {
      return { ...state, ...action.payload };
    }

    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

// Cart Provider

export default CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, cartInitialState);

  return (
    <CartStateContext value={cart}>
      <CartDispatchContext value={dispatch}>{children}</CartDispatchContext>
    </CartStateContext>
  );
};
