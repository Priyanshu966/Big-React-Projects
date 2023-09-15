import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const getLocalStorage = () => {
  const tempItem = localStorage.getItem("cart");
  if (tempItem) {
    return JSON.parse(tempItem);
  }
  return [];
};

const CartContext = createContext();

const initialState = {
  cart: getLocalStorage(),
  total_item: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, color, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, color, product } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  const toggleAmount = (id, type) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, clearCart, removeItem, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
