import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CartButtons = () => {
  return (
    <Wrapper className="cart-wrapper">
      <Link to="/cart" className="cart-btn">
        cart
        <span className="cart-icon">
          <FaShoppingCart />
          <span className="cart-value">12</span>
        </span>
      </Link>
      <button className="auth-btn">
        login
        <FaUserPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    letter-spacing: var(--spacing);
  }
  .cart-icon {
    position: relative;
    display: flex;
    align-items: center;
    svg {
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    padding: 12px;
    font-size: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .auth-btn {
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    text-transform: capitalize;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  svg {
    margin-left: 5px;
  }
`;

export default CartButtons;
