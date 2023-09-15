import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type == ADD_TO_CART) {
    const { id, amount, color, product } = action.payload;
    const { cart, total_amount, total_item } = state;
    const tempItem = cart.find((item) => item.id === id + color);
    if (tempItem) {
      const tempCart = cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        amount,
        color,
        price: product.price,
        image: product.images[0].url,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type == CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type == REMOVE_CART_ITEM) {
    const tempItem = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempItem };
  }
  if (action.type == TOGGLE_CART_ITEM_AMOUNT) {
    const { id, type } = action.payload;
    const tempItem = state.cart.map((item) => {
      if (item.id == id) {
        const { max, amount } = item;
        let tempAmount;

        if (type == "inc") {
          tempAmount = amount + 1;
          if (tempAmount > max) {
            tempAmount = max;
          }
        } else if (type == "dec") {
          tempAmount = amount - 1;
          if (tempAmount < 1) {
            tempAmount = 1;
          }
        }
        return { ...item, amount: tempAmount };
      }
      return item;
    });
    return { ...state, cart: tempItem };
  }
  if (action.type == COUNT_CART_TOTALS) {
    const { total_item, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_item += amount;
        total.total_amount += amount * price;
        return total;
      },
      {
        total_item: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_item, total_amount };
  }
};
export default cart_reducer;
