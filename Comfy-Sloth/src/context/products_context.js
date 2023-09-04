import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/products_reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

const ProductsContext = createContext();

const initialState = {
  isSidebarOpen: false,
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const sidebarOpen = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const sidebarClose = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  return (
    <ProductsContext.Provider value={{ ...state, sidebarOpen, sidebarClose }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, useProductsContext };
