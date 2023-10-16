import { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";
import { FaSearch } from "react-icons/fa";

const clientID = `?client_id=CXhdhtW7EAn0V58iUW8tIqkUQdXUeB6ifw2mreTmDOw`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

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
      const resp = await axios.get(url);
      setPhotos((oldPhotos) => {
        if (query && page == 1) {
          console.log("first");
          console.log(resp.data.results);
          return [...resp.data.results];
        } else if (query) {
          console.log("second ");
          console.log(resp.data.results);
          return [...oldPhotos, ...resp.data.results];
        } else {
          return [...oldPhotos, ...resp.data];
        }
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log("error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      return;
    }
    if (page === 1) {
      fetchPhotos();
    }
    setPage(1);
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2
      ) {
        if (!isLoading) {
          setPage((oldPage) => {
            let newPage = oldPage + 1;
            return newPage;
          });
        }
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

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
