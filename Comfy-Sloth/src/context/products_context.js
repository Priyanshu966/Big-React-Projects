import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducer/products_reducer";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
import { products_url as url } from "../utils/constants";

const ProductsContext = createContext();

const initialState = {
  isSidebarOpen: false,
  products_loading: true,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: true,
  single_product_error: false,
  single_product: [],
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const sidebarOpen = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const sidebarClose = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };
  return (
    <ProductsContext.Provider
      value={{ ...state, sidebarOpen, sidebarClose, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, useProductsContext };
