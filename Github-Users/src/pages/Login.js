import styled from "styled-components";
import loginImg from "../images/login-img.svg";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const {loginWithRedirect, user, isAuthenticated} = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github user" />
        <h1>github user</h1>
        <button className="btn" onClick={() => loginWithRedirect()}>
          Log In / Sign Up
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
