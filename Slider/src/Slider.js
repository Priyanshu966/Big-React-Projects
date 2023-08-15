import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "./data";

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      let nextIndex = index + 1;
      if (nextIndex > people.length - 1) {
        nextIndex = 0;
      }
      setIndex(nextIndex);
    }, 3000);
    return () => clearInterval(sliderInterval);
  }, [index]);

  const prevSlide = () => {
    let prevIndex = index - 1;
    if (prevIndex < 0) {
      prevIndex = people.length - 1;
    }
    setIndex(prevIndex);
  };
  const nextSlide = () => {
    let nextIndex = index + 1;
    if (nextIndex > people.length - 1) {
      nextIndex = 0;
    }
    setIndex(nextIndex);
  };

  return (
    <div className="section-center">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        let position = "active-slide";
        if (personIndex == index) {
          position = "active-slide";
        } else if (personIndex == index + 1) {
          position = "next-slide";
        } else {
          position = "prev-slide";
        }

        return (
          <article className={position} key={id}>
            <img src={image} />
            <h4>{name}</h4>
            <h6>{title}</h6>
            <p>{quote}</p>
            <span>
              <FaQuoteRight />
            </span>
          </article>
        );
      })}
      <button className="prev" onClick={() => prevSlide()}>
        <FaChevronLeft />
      </button>
      <button className="next" onClick={() => nextSlide()}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
