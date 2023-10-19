import React from "react";
import styled from "styled-components";
import {useGithubContext} from "../context/context";
import {ExampleChart, Pie, Column, Bar, Doughnut} from "./Charts";

const Repos = () => {
  const {repos} = useGithubContext();

  const languages = repos.reduce((total, item) => {
    const {language, stargazers_count} = item;
    if (!language) {
      return total;
    }
    if (!total[language]) {
      total[language] = {label: language, value: 1, stars: stargazers_count};
    } else {
      total[language] = {
        label: language,
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return {...item, value: item.stars};
    })
    .slice(0, 5);

  const stars = repos
    .sort((a, b) => {
      return b.stargazers_count - a.stargazers_count;
    })
    .slice(0, 5)
    .map((item) => {
      const {name, stargazers_count} = item;
      return {label: name, value: stargazers_count};
    });

  const forks = repos
    .sort((a, b) => {
      return b.forks - a.forks;
    })
    .slice(0, 5)
    .map((item) => {
      const {name, forks} = item;
      return {label: name, value: forks};
    });

  console.log(stars);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie data={mostUsed} />
        <Column data={stars} />
        <Doughnut data={mostPopular} />
        <Bar data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
