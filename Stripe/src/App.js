import { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

const App = () => {
  return (
    <>
      <section className="hero">
        <Navbar />
        <Main />
      </section>
      <Sidebar />
      <Submenu />
    </>
  );
};

export default App;
