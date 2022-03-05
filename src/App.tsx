import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryCardDetails from "./components/CountryCardDetails";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

import CountriesHeader from "./components/CountriesHeader";
import { Outlet, useLocation, Routes, Route } from "react-router-dom";
import "@reach/dialog/styles.css";
import {
  getCountries,
  createMap,
  selectCountries,
  selectIsFulfilled,
} from "./countriesSlice";
import { CountryGrid } from "./components/CountryGrid";
import { NoMatch } from "./NoMatch";

function App() {
  let location = useLocation();
  const countries = useSelector(selectCountries);
  const isFinishedLoading = useSelector(selectIsFulfilled);
  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  let state = location.state as { backgroundLocation?: Location };
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    dispatch(createMap());
  }, [isFinishedLoading]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <CountriesHeader themeToggler={themeToggler} />

        <Routes>
          <Route path="/" element={<CountryGrid />} />
          <Route path="/:id" element={<CountryCardDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
