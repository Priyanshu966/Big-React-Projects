import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import {
  Error,
  Loading,
  PageHero,
  ProductImages,
  Stars,
  AddToCart,
} from "../components";

const SingleProduct = () => {
  const { id } = useParams();
  const {
    fetchSingleProduct,
    single_product_error: error,
    single_product_loading: loading,
    single_product,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const {
    name,
    price,
    reviews,
    stars,
    stock,
    company,
    description,
    images,
    id: sku,
  } = single_product;
  return (
    <Wrapper>
      <PageHero title="entertainment center" product=" true" />
      <section className="section-center section">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <div className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">${price / 100}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>available :</span>
              {stock > 0 ? "in stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <p className="info">
              <span>Brand :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={single_product} />}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    font-size: 1.25rem;
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media screen and (max-width: 992px) {
    .product-center {
      grid-template-columns: 1fr;
    }
  }
`;
export default SingleProduct;
