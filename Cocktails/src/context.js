import { useState, useEffect, createContext, useContext } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(`${url}${searchTerm}`);
      const data = await resp.json();
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchTerm]);
  return (
    <AppContext.Provider value={{ isLoading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
