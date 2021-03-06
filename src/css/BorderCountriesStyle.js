import styled from "styled-components";

export const BorderCountry = styled.button`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  margin: 2px 7px;
  text-align: center;
  touch-action: none;
  border-radius: 6px;
  height: 30px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  filter: drop-shadow(2px 2px 2px ${({ theme }) => theme.shadow});
  border: none;
`;

export const BorderCountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: auto;
`;
