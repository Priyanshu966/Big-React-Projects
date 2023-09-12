import styled from "styled-components";
import { useState } from "react";

const ProductImages = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <Wrapper>
      <img src={mainImage.url} className="main" />
      <div className="gallery">
        {images.map((img, index) => {
          const { url } = img;
          return (
            <img
              src={url}
              key={index}
              className={mainImage == img ? "active" : null}
              onClick={() => setMainImage(images[index])}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main {
    height: 500px;
  }
  img {
    width: 100%;
    object-fit: cover;
    display: block;
    border-radius: var(--radius);
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 75px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media screen and (max-width: 992px) {
    .gallery {
      img {
        height: 100px;
      }
    }
    .main {
      height: 600px;
    }
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
`;
export default ProductImages;
