import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import { selectCountries } from "../features/countries/countriesSlice";
import { CountryGridContainer } from "../css/CountryGridStyles";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
import { selectFilter, selectRegion } from "../features/filters/filtersSlice";
const CountryCard = React.lazy(() => import("./CountryCard"));

const CountryGrid = React.memo(() => {
  const countries = useSelector(selectCountries);
  const filter = useSelector(selectFilter);
  const region = useSelector(selectRegion);

  return (
    <CountryGridContainer>
      <SearchBar />
      <DropDown />

      {/* The commented out filters are for profiling purposes. Trying to
       increase filter and render speed */}

      {/* <Suspense fallback={<h1>Loading Countries</h1>}> */}
      {countries
        // .filter((country: { name: string }) => {
        //   const filter = searchParams.get("filter");
        //   if (!filter) return true;
        //   const name = country.name.toLowerCase();
        //   return name.startsWith(filter.toLowerCase());
        // })

        // .filter((country) => {
        //   const region = searchParams.get("region");
        //   if (!region || region === "All") return true;
        //   const regionName = country.region;
        //   return region === regionName;
        // })

        .filter((country: { name: string }) => {
          if (!filter) {
            return true;
          }
          return country.name.toLowerCase().startsWith(filter.toLowerCase());
        })

        .filter((country) => {
          if (!region || region === "All") return true;
          const regionName = country.region;
          return region === regionName;
        })

        .map((country, index: number) => {
          return (
            <Link
              key={index}
              to={`/${country.name.replaceAll(/ /g, "-")}`}
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "375px",
              }}
            >
              <Suspense fallback={<CountryLoading />}>
                <CountryCard country={country} key={country.numericCode} />
              </Suspense>
            </Link>
          );
        })}
      {/* </Suspense> */}
    </CountryGridContainer>
  );
});

export default CountryGrid;

const CountryLoading = () => {
  return <LoadStyle>Loading Country</LoadStyle>;
};

const LoadStyle = styled.p`
  color: ${({ theme }) => theme.text};
  filter: drop-shadow(3px 3px 3px);
`;
