import { PageHero } from "../components";
import styled from "styled-components";
import aboutImg from "../assets/hero-bcg.jpeg";

const About = () => {
  return (
    <main>
      <PageHero title={"about"} />
      <Wrapper className="section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <h2>our story</h2>
          <div className="underline"></div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  .underline {
    margin-left: 0px;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    p {
      margin: 20px 0px 0px 0px;
    }
  }
`;
export default About;
