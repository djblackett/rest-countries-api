import React from "react";
import IonIcon from "@reacticons/ionicons";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

export const InputContainer = styled.div`
  box-sizing: border-box;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 6px;
  height: 50px;
  width: 90%;
  margin-top: 15px;
  margin-left: 5%;
  margin-right: 5%;
  padding: 10px;

  display: flex;
  justify-content: flex-start;
  align-self: center;
  align-items: center;
  justify-self: center;
  grid-area: 1 / 1 / 2 / 2;
  filter: drop-shadow(3px 3px 3px black);

  @media (min-width: 1200px) {
    grid-area: 1 / 1 / 2 / 3;
    width: 350px;
    padding-left: 10px;
    align-self: start;
  }
`;

export const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search for a country...",
})`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  margin-left: 20px;
  height: 40px;
  font-size: 20px;
  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
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
    height="50px"
    width="50px"
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

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <InputContainer>
      <IonIcon name="search-circle-outline" size="large"></IonIcon>
      <Input
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
    </InputContainer>
  );
}

export default SearchBar;
