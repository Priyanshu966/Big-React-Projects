import styled from "styled-components";
import { useFiltersContext } from "../context/filters_context";
import { GridView, ListView } from "../components";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFiltersContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search.
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};

const Wrapper = styled.section``;
export default ProductList;
