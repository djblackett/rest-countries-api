import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countriesSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
