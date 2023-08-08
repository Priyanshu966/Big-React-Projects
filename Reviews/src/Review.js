import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useState } from "react";
import reviews from "./data";

const Review = () => {
  const [count, setCount] = useState(0);
  const { id, name, job, image, text } = reviews[count];

  const nextPerson = () => {
    let newCount = count + 1;
    if (newCount > reviews.length - 1) {
      newCount = 0;
    }
    setCount(newCount);
  };

  const prevPerson = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = reviews.length - 1;
    }
    setCount(newCount);
  };

  const randomPerson = () => {
    let randomPerson = Math.floor(Math.random() * reviews.length);
    if (randomPerson == count) {
      randomPerson++;
      if (randomPerson > reviews.length - 1) {
        randomPerson = 0;
      }
    }
    setCount(randomPerson);
  };

  return (
    <article>
      <div className="img-container">
        <img src={image} alt={name} />
        <span>
          <FaQuoteRight />
        </span>
      </div>

      <h4>{name}</h4>
      <h5>{job}</h5>
      <p>{text}</p>
      <div>
        <button className="btn" onClick={() => prevPerson()}>
          <FaChevronLeft />
        </button>
        <button className="btn" onClick={() => nextPerson()}>
          <FaChevronRight />
        </button>
      </div>
      <button className="randomBtn" onClick={() => randomPerson()}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
