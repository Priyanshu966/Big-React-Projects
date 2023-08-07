import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="container">
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tour-container">
        {tours.map((tour) => {
          return <Tour {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
