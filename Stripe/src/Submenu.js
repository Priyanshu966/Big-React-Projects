import { useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, submenuInfo, location } = useGlobalContext();
  const { page, links } = submenuInfo;
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    submenu.style.left = `${location}px`;
  }, [submenuInfo, location]);

  return (
    <aside
      className={isSubmenuOpen ? `submenu show-submenu` : `submenu`}
      ref={container}
    >
      <article>
        <h4>{page}</h4>
        <div className="sublinks">
          {links.map((item, index) => {
            const { label, icon, url } = item;
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </article>
    </aside>
  );
};

export default Submenu;
