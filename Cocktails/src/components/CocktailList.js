import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailList = () => {
  const { isLoading, cocktails } = useGlobalContext();
  if (isLoading) {
    return (
      <section className="section">
        <Loading />
      </section>
    );
  }
  if (cocktails.length < 1) {
    return (
      <section>
        <h2>oops... no cocktails matched your search criteria</h2>
      </section>
    );
  }
  return (
    <section className="section">
      <h2>cocktails</h2>
      <div className="cocktail-cont">
        {cocktails.map((item) => {
          return <Cocktail {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
