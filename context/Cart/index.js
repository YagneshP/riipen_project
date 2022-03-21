import { createContext, useReducer, useContext, useEffect } from "react";
import { commerce } from "../../lib/commerce";

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

// useCart custom hook

export const useCart = () => {
  return useContext(CartStateContext);
};

// useCartActions custom hook

export const useCartActions = () => {
  return useContext(CartDispatchContext);
};

// Cart Provider

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  useEffect(() => {
    getCart();
  }, []);
  const setCart = (payload) => dispatch({ type: "SET_CART", payload });
  const getCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
    } catch (erorr) {
      console.log("Error while getting cart");
    }
  };
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={{ setCart }}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}
