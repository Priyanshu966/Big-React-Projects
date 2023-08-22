import { useGlobalContext } from "./context";
import phoneImg from "./images/phone.svg";

const Main = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <main onMouseOver={closeSubmenu}>
      <div className="main-center">
        <article>
          <h2>
            payments
            <br /> infrastructure <br /> for the internet
          </h2>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <img src={phoneImg} alt="phone" />
      </div>
    </main>
  );
};

export default Main;
