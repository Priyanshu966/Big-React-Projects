import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const resp = await fetch(url);
      const response = await resp.json();

      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log("There was an error in fetching Data.....");
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { isLoading, isError, data };
};

export default useFetchData;
