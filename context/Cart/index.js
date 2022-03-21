import { createContext } from "react";

const CartStateContext = createContext(null);
const CartDispatchContext = createContext(null);

//cart intialState

const cartInitialState = {
  total_items : 0,
  total_unique_items : 0,
  subtotal : {

  },
  line_items : []
}

// cart reducer

const cartReducer (state, action) => {
 switch (action.type) {
   case 'SET_CART':

     break;

   default:
     break;
 }
}
