import styled from "styled-components";

export const CountryGridContainer = styled.div`
  box-sizing: border-box;
  margin-top: 15px;
  display: grid;
  gap: 30px;
  text-decoration: none;
  grid-template: 50px 100px 1fr/ 1fr;
  align-items: start;

  /* align-content: center; */

  @media (min-width: 600px) {
    grid-template: 100px repeat(3, 1fr) / repeat(2, 250px);
    gap: 50px;
    margin-top: 100px;
    justify-content: center;
  }

  @media (min-width: 900px) {
    grid-template: 100px repeat(3, 1fr) / repeat(3, 250px);
  }

  @media (min-width: 1200px) {
    width: 100%;
    max-width: 100vw;

    grid-template: 100px / repeat(4, 250px);
    /* margin-left: 220px; */
    /* margin-right: 220px; */
  }
`;
