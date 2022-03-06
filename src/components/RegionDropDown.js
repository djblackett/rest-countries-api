import React from "react";
import { useSearchParams, setSearchParams } from "react-router-dom";
import styled from "styled-components";

export const RegionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  /* margin: 0 75px; */
  grid-area: 1 / 3 / 2 / 5;
  align-self: flex-start;
  justify-self: end;
  text-align: end;
  font-size: 18px;
  font-weight: bold;
  filter: drop-shadow(3px 3px 3px black);
`;

const DropDown = styled.select.attrs({
  name: "region",
  id: "region",
  defaultValue: "All",
})`
  width: 200px;
  font-size: 18px;
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.text};
  border: none;
  border-radius: 6px;
  height: 50px;
  padding: 0 10px;
  outline: none;
`;

function RegionDropDown() {
  let [searchParams, setSearchParams] = useSearchParams();

  function handleChange(event) {
    let region = event.target.value;

    if (region && region !== "Filter by Region") {
      setSearchParams({ region });
    } else {
      setSearchParams({});
    }
  }

  return (
    <RegionWrapper>
      {/* <label htmlFor="region">Choose a region:</label> */}

      <DropDown onChange={handleChange}>
        <option value="Filter by Region">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </DropDown>
    </RegionWrapper>
  );
}

export default RegionDropDown;
