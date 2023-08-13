import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const changeAmount = (e) => {
    let value = e.target.value;
    if (value < 0) {
      setCount(0);
    } else if (value > 8) {
      setCount(8);
    } else {
      setCount(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <main>
      <article>
        <h2>tired of boring lorem ipsum?</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="amount" style={{ fontSize: "20px" }}>
            Paragraphs:
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={count}
            onChange={changeAmount}
          />
          <button type="submit">generate</button>
        </form>
        <div className="text-cont">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </article>
    </main>
  );
};

export default App;
