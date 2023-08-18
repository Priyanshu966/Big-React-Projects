import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkContainerRef.current.style.height = `${linksHeight + 10}px`;
    } else {
      linkContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <header>
      <nav>
        <div className="logo-cont">
          <img src="./logo/logo.svg" alt="coding addict" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="link-cont" ref={linkContainerRef}>
          <ul ref={linksRef}>
            {links.map((item) => {
              const { id, url, text } = item;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="icon-cont">
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
