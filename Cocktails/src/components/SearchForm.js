import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  return (
    <form>
      <label htmlFor="form-text">search your favorite cocktail</label>
      <input
        type="text"
        id="form-text"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
