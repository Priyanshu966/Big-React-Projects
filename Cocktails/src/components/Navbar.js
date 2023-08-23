import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="logo-cont">
          <Link to="/">
            <img src="./logo/logo.svg" />
          </Link>
        </div>
        <ul className="links-cont">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
