import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./features/countries/countriesSlice";
import colorModeReducer from "./features/colorMode/colorModeSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    colorMode: colorModeReducer,
  },
});
