import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filters_reducer = (state, action) => {
  if (action.type == LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((item) => item.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: action.payload,
      filtered_products: action.payload,
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type == SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type == SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type == UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type == SORT_PRODUCTS) {
    const { filtered_products, sort } = state;
    let tempProducts = [];
    if (sort == "price-lowest") {
      tempProducts = filtered_products.sort((a, b) => a.price - b.price);
    }
    if (sort == "price-highest") {
      tempProducts = filtered_products.sort((a, b) => b.price - a.price);
    }
    if (sort == "name-a") {
      tempProducts = filtered_products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    if (sort == "name-z") {
      tempProducts = filtered_products.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type == UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }
  if (action.type == CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  if (action.type == FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, color, price, max_price, shipping } =
      state.filters;
    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((item) =>
        item.name.toLowerCase().startsWith(text)
      );
    }
    if (category != "all") {
      tempProducts = tempProducts.filter((item) => item.category == category);
    }
    if (company != "all") {
      tempProducts = tempProducts.filter((item) => item.company == company);
    }
    if (color != "all") {
      tempProducts = tempProducts.filter((item) => {
        return item.colors.find((c) => c == color);
      });
    }
    if (shipping) {
      tempProducts = tempProducts.filter((item) => item.shipping == true);
    }
    if (price < max_price) {
      tempProducts = tempProducts.filter((item) => item.price <= price);
    }
    return { ...state, filtered_products: [...tempProducts] };
  }
};
export default filters_reducer;
