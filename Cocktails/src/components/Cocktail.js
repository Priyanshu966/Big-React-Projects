import { Link } from "react-router-dom";

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <article className="cocktail">
      <img src={image} />
      <div className="cocktail-footer">
        <h1>{name}</h1>
        <h3>{glass}</h3>
        <p>{info}</p>
        <Link to={`single-cocktail/${id}`}>
          <button className="btn">details</button>
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
