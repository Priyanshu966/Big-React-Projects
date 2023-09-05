import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";

const Navbar = () => {
  const { sidebarOpen } = useProductsContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="logo-cont">
          <Link to="/">
            <img src={logo} alt="comfy-sloth" />
          </Link>
          <button className="nav-toggle" onClick={sidebarOpen}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((item) => {
            const { id, text, url } = item;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .logo-cont {
    img {
      width: 175px;
      margin-left: -15px;
      cursor: pointer;
    }
  }
  .nav-toggle {
    display: none;
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    li {
      display: inline-block;
      margin: 0 0.5rem;
    }
    a {
      color: var(--clr-grey-3);
      letter-spacing: 2px;
      text-transform: capitalize;
      padding: 0.5rem;
      &:hover {
        border-bottom: 2px solid var(--clr-primary-7);
      }
    }
  }
  @media screen and (max-width: 992px) {
    .logo-cont {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .nav-links {
      display: none;
    }
    .cart-wrapper {
      display: none;
    }
    .nav-toggle {
      display: block;
    }
  }
`;
export default Navbar;
