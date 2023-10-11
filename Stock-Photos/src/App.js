import { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";
import { FaSearch } from "react-icons/fa";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);

  const fetchPhotos = async () => {
    setIsLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const resp = await axios.get(`${mainUrl}${clientID}`);
      console.log(resp.data);
      setPhotos(resp.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log("error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  if (isLoading) {
    return (
      <main>
        <div className="loading"></div>
      </main>
    );
  }
  if (isError) {
    return (
      <main>
        <h2>There was an error....</h2>
      </main>
    );
  }
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-input"
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>
        {isLoading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
};

export default App;
