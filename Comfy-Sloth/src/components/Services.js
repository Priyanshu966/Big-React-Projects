import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <article className="service-header">
          <h3>
            custom furniture <br /> built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </article>
        <div className="services-center">
          {services.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  padding: 5rem 0;
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .service-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    h3 {
      margin-bottom: 2rem;
    }
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  .icon {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 992px) {
    .service-header {
      grid-template-columns: 1fr;
    }
    .services-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 842px) {
    .services-center {
      grid-template-columns: 1fr;
    }
  }
`;
export default Services;
