import styled from "styled-components";

export const CountryGridContainer = styled.div`
  box-sizing: border-box;
  /* margin: 50px; */
  /* width: 100%; */
  margin-top: 75px;
  display: grid;
  gap: 30px;
  text-decoration: none;
  grid-template: 50px 50px repeat(8, 1fr) / 1fr;
  align-items: center;
  align-content: center;

  @media (min-width: 600px) {
    grid-template: 100px repeat(3, 1fr) / repeat(2, 250px);
    gap: 50px;
    margin-top: 100px;
  }
  @media (min-width: 900px) {
    grid-template: 100px repeat(3, 1fr) / repeat(3, 250px);
  }
  @media (min-width: 1200px) {
    grid-template: 100px repeat(3, 1fr) / repeat(4, 250px);
    margin-left: 220px;
    margin-right: 220px;
  }
`;

// export const SearchAndFilter = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 75px;
//   margin-bottom: 0;
//   max-height: 80px;
// `;

