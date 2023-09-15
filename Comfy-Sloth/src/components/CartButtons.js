import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { sidebarClose } = useProductsContext();
  const { total_item, clearCart } = useCartContext();
  const { myUser, loginWithRedirect, logout } = useUserContext();

  return (
    <Wrapper className="cart-wrapper">
      <Link to="/cart" className="cart-btn" onClick={sidebarClose}>
        cart
        <span className="cart-icon">
          <FaShoppingCart />
          <span className="cart-value">{total_item}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          className="auth-btn"
          onClick={() => {
            clearCart();
            localStorage.removeItem("user");
            logout({ logoutParams: { returnTo: window.location.origin } });
          }}
        >
          logout
          <FaUserMinus />
        </button>
      ) : (
        <button className="auth-btn" onClick={() => loginWithRedirect()}>
          login
          <FaUserPlus />
        </button>
      )}
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
