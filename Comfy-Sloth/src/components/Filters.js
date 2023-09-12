import styled from "styled-components";
import { useFiltersContext } from "../context/filters_context";
import { getUniqueValue, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filtered_products: products,
    all_products,
    updateFilters,
    clearFilters,
    filters: {
      text,
      category,
      company,
      color,
      price,
      max_price,
      min_price,
      shipping,
    },
  } = useFiltersContext();

  const categories = getUniqueValue(all_products, "category");
  const colors = getUniqueValue(all_products, "colors");
  const companies = getUniqueValue(all_products, "company");
  console.log(colors);

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              placeholder="search"
              value={text}
              name="text"
              onChange={updateFilters}
              className="search-input"
            />
          </div>
        </form>
        <div className="form-control">
          <h5>category</h5>
          <div>
            {categories.map((item, index) => {
              return (
                <button
                  key={index}
                  name="category"
                  type="button"
                  onClick={updateFilters}
                  className={item == category ? "active" : null}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="form-control">
          <h5>company</h5>
          <select
            onChange={updateFilters}
            name="company"
            value={company}
            className="company"
          >
            {companies.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
        </div>
        <div className="form-control">
          <div className="colors">
            {colors.map((item, index) => {
              if (item == "all") {
                return (
                  <button
                    className={item == color ? "all-btn active" : "all-btn"}
                    name="color"
                    data-color={item}
                    onClick={updateFilters}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  name="color"
                  onClick={updateFilters}
                  data-color={item}
                  style={{ background: item }}
                  className={color == item ? "color-btn active" : "color-btn"}
                >
                  {item == color ? <FaCheck /> : null}
                </button>
              );
            })}
          </div>
        </div>
        <div className="form-control">
          <h5>price</h5>
          <p className="price">{formatPrice(price)}</p>
          <input
            type="range"
            min={min_price}
            max={max_price}
            onChange={updateFilters}
            name="price"
            value={price}
          />
        </div>
        <div className="form-control shipping">
          <label htmlFor="shipping">free shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={updateFilters}
          />
        </div>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;
export default Filters;
