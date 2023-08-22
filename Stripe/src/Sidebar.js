import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div
      className={
        isSidebarOpen ? `sidebar-overlay show-sidebar` : `sidebar-overlay`
      }
    >
      <aside className="sidebar">
        <button className="close-sidebar" onClick={() => closeSidebar()}>
          <FaTimes />
        </button>
        {sublinks.map((item, index) => {
          const { page, links } = item;
          return (
            <article key={index} className="sidebar-links">
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((link, index) => {
                  const { label, icon, url } = link;
                  return (
                    <a href={url} key={index}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </aside>
    </div>
  );
};

export default Sidebar;
