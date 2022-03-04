import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CountryCardDetails from "./components/CountryCardDetails";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { countries } from "./components/countries";
import CountriesHeader from "./components/CountriesHeader";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
  Routes,
  Route,
} from "react-router-dom";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { getCountries } from "./countriesSlice";
import { CountryGrid } from "./components/CountryGrid";
import { NoMatch } from "./NoMatch";
import {
  CountryGridContainer,
  InputContainer,
  Input,
  SearchFilterContainer,
} from "./css/AppStyles";

// const countryList = countries.slice(0, 12);

const countryList = countries;

const magnifyingGlass = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
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

function App() {
  let location = useLocation();

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  let state = location.state as { backgroundLocation?: Location };
  const dispatch = useDispatch();
  // const countries = useSelector(selectCountries);
  const [theme, setTheme] = useState("light");
  let [searchParams, setSearchParams] = useSearchParams();
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  function getCountryNameByCioc(text: string) {
    const countryToFind = countries.find(
      (country: any) => country.cioc === text
    );
    console.log(countryToFind);
    if (countryToFind) {
      return countryToFind.name.common;
    }
  }

  function getCountryByName(id: string) {
    return countries.find((country: any) => country.name === id);
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <CountriesHeader themeToggler={themeToggler} />
        <SearchFilterContainer>
          <InputContainer>
            {magnifyingGlass}
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
        </SearchFilterContainer>

        {/* <CountryGrid></CountryGrid> */}

        <Routes location={state?.backgroundLocation || location}>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<CountryGrid />} />
          {/* </Route> */}
          <Route
            path="/:id"
            element={
              <CountryCardDetails
                getByCioc={getCountryNameByCioc}
                // getCountryByName={getCountryByName}
              />
            }
          />
          {/* <Route path="/:id" element={<DetailsView />} /> */}
          <Route path="*" element={<NoMatch />} />
          {/* </Route> */}
        </Routes>

        {/* Show the modal when a `backgroundLocation` is set */}
        {state?.backgroundLocation && (
          <Routes>
            <Route
              path="/:id"
              element={
                <CountryCardDetails
                  getByCioc={getCountryNameByCioc}
                  // getCountryByName={getCountryByName}
                />
              }
            />
          </Routes>
        )}
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
