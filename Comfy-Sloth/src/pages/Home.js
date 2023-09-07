import styled from "styled-components";
import { Hero, Services, Contact, FeaturedProducts } from "../components";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;
