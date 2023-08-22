import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("btn-link")) {
      closeSubmenu();
    }
  };

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const menuData = e.target.getBoundingClientRect();
    const left = menuData.left;
    const right = menuData.right;
    const center = (left + right) / 2;
    openSubmenu(page, center);
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="logo-cont">
          <img src={logo} alt="stripe" />
          <button className="btn sidebar-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="links">
          {sublinks.map((item, index) => {
            const { page } = item;
            return (
              <li key={index}>
                <button className="btn-link" onMouseOver={displaySubmenu}>
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn btn-signIn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
