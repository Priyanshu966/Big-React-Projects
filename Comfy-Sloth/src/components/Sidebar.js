import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";

const Sidebar = () => {
  const { isSidebarOpen, sidebarClose } = useProductsContext();

  return (
    <Wrapper>
      <aside className={isSidebarOpen ? `sidebar show-sidebar` : `sidebar`}>
        <div className="sidebar-header">
          <Link to="/">
            <img src={logo} alt="comfy-sloth" />
          </Link>
          <button className="sidebar-toggle" onClick={sidebarClose}>
            <FaTimes />
          </button>
        </div>
        <ul className="sidebar-links">
          {links.map((item) => {
            const { id, text, url } = item;
            return (
              <li key={id}>
                <Link to={url} onClick={sidebarClose}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translateX(-100%);
  }
  .show-sidebar {
    transform: translateX(0%);
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    align-items: center;
    img {
      height: 45px;
    }
  }
  .sidebar-toggle {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
    &:hover {
      color: var(--clr-red-light);
    }
  }
  .sidebar-links {
    margin-bottom: 2rem;
    a {
      display: block;
      padding: 1rem 1.5rem;
      color: var(--clr-grey-3);
      transition: var(--transition);
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      &:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--clr-grey-10);
        color: var(--clr-grey-2);
      }
    }
  }
  .cart-wrapper {
    margin: 0 auto;
  }
`;

export default Sidebar;
