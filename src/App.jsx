import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryCardDetails from "./components/CountryCardDetails";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./css/globalStyles";
import { lightTheme, darkTheme } from "./css/Themes";

import CountriesHeader from "./components/CountriesHeader";
import { getCountries } from "./features/countries/countriesSlice";
import { selectColorMode } from "./features/colorMode/colorModeSlice";
import { CountryGrid } from "./components/CountryGrid";
import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  const theme = useSelector(selectColorMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  let routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <CountryGrid />,
        },

        {
          path: ":id",
          element: <CountryCardDetails />,
        },
      ],
    },
  ];

  let element = useRoutes(routes);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className="App">
        <CountriesHeader />
        {element}
      </div>
    </ThemeProvider>
  );
}

export default App;
