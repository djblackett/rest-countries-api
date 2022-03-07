import React from "react";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {
  selectCountries,
  selectFetchingError,
  selectIsFetching,
} from "../countriesSlice";
import { CountryGridContainer } from "../css/CountryGridStyles";
import RegionDropDown from "./RegionDropDown";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";

export function CountryGrid() {
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const countries = useSelector(selectCountries);
  const isFetching = useSelector(selectIsFetching);
  const fetchingError = useSelector(selectFetchingError);

  if (isFetching) {
    return <h1>Loading Countries</h1>;
  }

  if (fetchingError) {
    return <h1>Error loading countries from API</h1>;
  }

  if (!countries) {
    return null;
  }

  return (
    <CountryGridContainer>
      <SearchBar />
      <RegionDropDown />

      {countries
        .filter((country: any) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = country.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })

        .filter((country: any) => {
          let region = searchParams.get("region");
          if (!region) return true;
          let regionName = country.region;
          return region === regionName;
        })

        .map((country: any, index: number) => {
          return (
            <Link
              key={index}
              to={`/${country.name}`}
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CountryCard country={country} key={country.numericCode} />
            </Link>
          );
        })}
    </CountryGridContainer>
  );
}
