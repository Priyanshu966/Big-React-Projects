import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Modal from "./Modal";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Modal />
    </>
  );
};

export default App;
