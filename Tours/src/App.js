import { useState, useEffect } from "react";
import Tours from "./Tours";

const App = () => {
  const url = "https://course-api.com/react-tours-project";

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const tour = tours.filter((tour) => tour.id != id);
    setTours(tour);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      setIsLoading(false);
      setTours(data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);

      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <section className="container">
          <div className="title">
            <h2>Loading...</h2>
          </div>
        </section>
      </main>
    );
  }
  if (isError) {
    return (
      <main>
        <section className="container">
          <div className="title">
            <h2>There was an Error...</h2>
          </div>
        </section>
      </main>
    );
  }

  return (
    <>
      {tours.length < 1 ? (
        <main>
          <section className="container">
            <div className="title">
              <h2>no tours left</h2>
              <button
                className="refresh"
                onClick={() => {
                  fetchData();
                }}
              >
                Refresh
              </button>
            </div>
          </section>
        </main>
      ) : (
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
      )}
    </>
  );
};

export default App;
