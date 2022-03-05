import React from "react";
import { useSearchParams, setSearchParams } from "react-router-dom";
import styled from "styled-components";

export const RegionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0 75px;
`;

function RegionDropDown() {
  let [searchParams, setSearchParams] = useSearchParams();

  function handleChange(event) {
    let region = event.target.value;

    if (region && region !== "All") {
      setSearchParams({ region });
    } else {
      setSearchParams({});
    }
  }

  return (
    <RegionWrapper>
      <label htmlFor="region">Choose a region:</label>

      <select
        name="region"
        id="region"
        onChange={handleChange}
        defaultValue="All"
      >
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </RegionWrapper>
  );
}

export default RegionDropDown;
