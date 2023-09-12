import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/filters_reducer";
import { useProductsContext } from "./products_context";
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

const FiltersContext = createContext();

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FiltersProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const updateSort = (e) => {
    dispatch({ type: UPDATE_SORT, payload: e.target.value });
  };
  const updateFilters = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name == "category") {
      value = e.target.textContent;
    }
    if (name == "price") {
      value = Number(value);
    }
    if (name == "shipping") {
      value = e.target.checked;
    }
    if (name == "color") {
      value = e.target.dataset.color;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { value, name } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FiltersContext.Provider
      value={{
        ...state,
        setListView,
        setGridView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

const useFiltersContext = () => {
  return useContext(FiltersContext);
};

export { FiltersProvider, useFiltersContext };
