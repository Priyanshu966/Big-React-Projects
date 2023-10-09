import axios from "axios";
import { useState, useEffect } from "react";
import User from "./User";
import paginate from "./paginate";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [fetchData, setFetchData] = useState([]);

  const prevBtn = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = fetchData.length;
    }
    setPage(newPage);
  };
  const nextBtn = () => {
    let newPage = page + 1;
    if (newPage > fetchData.length) {
      newPage = 1;
    }
    setPage(newPage);
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    setUserData(fetchData[page - 1]);
    console.log(page);
  }, [page, fetchData, isLoading]);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.get(url);
      setFetchData(paginate(resp.data));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  if (isLoading) {
    return (
      <main>
        <h2>Loading.....</h2>
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
      <h1>pagination</h1>
      <div className="underline"></div>
      <section className="user-cont">
        {userData.map((item) => {
          return <User key={item.id} {...item} />;
        })}
      </section>
      <div className="btn-container">
        <button onClick={prevBtn} className="control-btn">
          prev
        </button>
        {fetchData.map((item, index) => {
          return (
            <button
              className={index + 1 == page ? `active-btn page-btn` : `page-btn`}
              key={index}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
        <button onClick={nextBtn} className="control-btn">
          next
        </button>
      </div>
    </main>
  );
};

export default App;
