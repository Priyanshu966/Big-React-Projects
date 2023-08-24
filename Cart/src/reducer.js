const reducer = (state, action) => {
  if (action.type == "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type == "REMOVE_CART") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type == "INCREASE") {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (item.id == action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      }),
    };
  }
  if (action.type == "DECREASE") {
    return {
      ...state,
      cart: state.cart
        .map((item) => {
          if (item.id == action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0),
    };
  }
  if (action.type == "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (item, cartItem) => {
        const { amount, price } = cartItem;
        item.amount += amount;
        item.total += amount * price;
        return item;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = total.toFixed(2);
    return { ...state, total: total, amount: amount };
  }
  if (action.type == "LOADING") {
    return { ...state, loading: false };
  }
  if (action.type == "CART_ITEMS") {
    return { ...state, loading: false, cart: action.payload };
  }
};

export default reducer;
