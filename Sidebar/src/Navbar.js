import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { links, social } from "./data";

const Navbar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <header className={isSidebarOpen ? `show-sidebar` : " "}>
      <nav>
        <div className="logo-cont">
          <img src="./logo/logo.svg" alt="coding addict" />
          <button className="nav-toggle" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="link-cont">
          {links.map((item) => {
            const { id, url, text, icon } = item;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
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
