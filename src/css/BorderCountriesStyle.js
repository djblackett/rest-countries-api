import styled from "styled-components";

export const BorderCountry = styled.p`
  background-color: ${({ theme }) => theme.background};
  /* width: 50px; */
  margin: 2px 7px;
  text-align: center;
  touch-action: none;
`;

export const BorderCountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
