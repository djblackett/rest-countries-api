import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/Themes";

export const CountryGridContainer = styled.div`
  margin: 50px;
  display: grid;

  gap: 50px;
  /* padding: 25px; */
  justify-items: center;
  justify-content: center;
  text-decoration: none;

  @media (min-width: 600px) {
    grid-template: repeat(3, 1fr) / repeat(2, 250px);
  }
  @media (min-width: 900px) {
    grid-template: repeat(3, 1fr) / repeat(3, 250px);
  }
  @media (min-width: 1200px) {
    grid-template: repeat(3, 1fr) / repeat(4, 250px);
  }
`;

export const InputContainer = styled.div`
  background: ${({ theme }) => theme.background};
  height: 70px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search for a country",
})`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

export const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px;
  margin-top: 125px;
`;
