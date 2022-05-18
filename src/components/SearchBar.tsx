import React from "react";
import IonIcon from "@reacticons/ionicons";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

export const InputContainer = styled.div`
  cursor: pointer;
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
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  align-self: start;
  align-items: center;
  justify-self: center;
  grid-area: 1 / 1 / 2 / 2;
  filter: drop-shadow(3px 3px 3px ${({ theme }) => theme.shadow});

  @media (min-width: 600px) {
    width: 100%;
    margin: 0;
    grid-area: 1 / 1 / 2 / 2;
    justify-self: flex-start;
  }

  @media (min-width: 900px) {
    grid-area: 1 / 1 / 2 / 3;
    width: 100%;
  }

  @media (min-width: 1200px) {
    grid-area: 1 / 1 / 2 / 3;
    width: 350px;
    padding-left: 10px;
    align-self: start;
    justify-self: start;
    margin-left: 0;
    margin-top: 0;
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
  margin-left: 10px;
  height: 40px;
  font-size: 20px;
  &::placeholder {
    color: ${({ theme }) => theme.text};
  }

  @media (min-width: 370px) {
    margin-left: 20px;
  }
`;

export const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px;
  width: 300px;
`;

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
