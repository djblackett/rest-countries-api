import styled from "styled-components";

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

export const SearchAndFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 75px;
  margin-bottom: 0;
  max-height: 80px;
`;

export const InputContainer = styled.div`
  background: ${({ theme }) => theme.background};
  height: 70px;
  width: 250px;
  display: flex;
  justify-content: space-between;
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
  width: 300px;
`;

export const magnifyingGlass = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    heigh="50px"
  >
    <title>Search</title>
    <path
      d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M338.29 338.29L448 448"
    />
    <div />
  </svg>
);
