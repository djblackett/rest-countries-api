import "./App.css";
import React, { useEffect, Suspense } from "react";
import { useSelector } from "react-redux";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./css/globalStyles";
import { lightTheme, darkTheme } from "./css/Themes";
import CountriesHeader from "./components/CountriesHeader";
import { getCountries } from "./features/countries/countriesSlice";
import { selectColorMode } from "./features/colorMode/colorModeSlice";

import { RouteObject, useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import { useAppDispatch } from "./features/app/hooks";
import { CountryGridWindow } from "./components/CountryGridWindow";
import ToolBar from "./components/ToolBar";

const CountryGrid = React.lazy(() => import("./components/CountryGrid"));
const CountryCardDetails = React.lazy(
  () => import("./components/CountryCardDetails")
);

const App = React.memo(() => {
  const theme = useSelector(selectColorMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        // { index: true, element: <ToolBar /> },
        {
          index: true,
          element: <CountryGrid />,
          // element: <CountryGridWindow />,
        },

        {
          path: ":id",
          element: (
            <Suspense fallback={<p>Loading</p>}>
              <CountryCardDetails />
            </Suspense>
          ),
        },
      ],
    },
  ];

  const element = useRoutes(routes);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className="App">
        <CountriesHeader />
        {element}
      </div>
    </ThemeProvider>
  );
});

export default App;
