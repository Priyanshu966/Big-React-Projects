import styled from "styled-components";
import { useState } from "react";

const ProductImages = ({ images }) => {
  const { mainImage, setMainImage } = useState(images[0].url);
  return (
    <Wrapper>
      <div className="main-img">
        <img src={mainImage} />
      </div>
      <div className="gallery">
        {images.map((img, index) => {
          const { url } = img;
          return <img src={url} key={index} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default ProductImages;
