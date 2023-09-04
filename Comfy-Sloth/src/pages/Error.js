import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h3>Sorry, the page you tried cannot be found</h3>
      <Link to="/" className="btn">
        back home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100vw;
  height: calc(100vh - 10rem);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-primary-10);
  text-transform: capitalize;
  h1 {
    font-size: 10rem;
  }
  h3 {
    margin-bottom: 2rem;
  }
`;

export default Error;
