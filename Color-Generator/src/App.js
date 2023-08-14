import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <main>
      <header>
        <h2>color generator</h2>
        <form onSubmit={handleSubmit}>
          <input type="color" className="form-color" value={color} />
          <input
            type="text"
            className={`form-text ${error ? "form-error" : ""}`}
            onChange={(e) => setColor(e.target.value)}
            value={color}
            placeholder={"#f15025"}
          />
          <button type="submit">submit</button>
        </form>
      </header>
      <section className="color-cont">
        {list.map((item, index) => {
          const { rgb } = item;
          let fontColor = "font-black";
          if (index > list.length / 2) {
            fontColor = "font-white";
          }

          return (
            <SingleColor
              key={index}
              {...item}
              fontColor={fontColor}
              hexColor={item.hex}
            />
          );
        })}
      </section>
    </main>
  );
};

export default App;
