import React from "react";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {
  selectCountries,
  selectFetchingError,
  selectIsFetching,
} from "../features/countries/countriesSlice";
import { CountryGridContainer } from "../css/CountryGridStyles";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";

export function CountryGrid() {
  const [searchParams, setSearchParams] = useSearchParams();
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
      <DropDown />

      {countries
        .filter((country: any) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = country.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })

        .filter((country: any) => {
          let region = searchParams.get("region");
          if (!region || region === "All") return true;
          let regionName = country.region;
          return region === regionName;
        })

        .map((country: any, index: number) => {
          return (
            <Link
              key={index}
              to={`/${country.name.replaceAll(/ /g, "-")}`}
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
