import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../countries/countriesSlice";
import colorModeReducer from "../colorMode/colorModeSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    colorMode: colorModeReducer,
  },
});
