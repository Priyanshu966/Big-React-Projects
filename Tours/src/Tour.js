import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <>
      <article key={id} className="tour">
        <img src={image} alt={name} />
        <div className="info">
          <h4>{name}</h4>
          <p>
            {showInfo ? `${info.substring(0, 200)}...` : info}
            <button
              className="show-info"
              onClick={() => {
                setShowInfo(!showInfo);
              }}
            >
              {showInfo ? "Read More" : "Show More"}
            </button>
          </p>
          <span className="price-tour">${price}</span>
          <button className="delete-tour" onClick={() => removeTour(id)}>
            not interested
          </button>
        </div>
      </article>
    </>
  );
};
export default Tour;
