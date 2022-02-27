import { createSlice } from "@reduxjs/toolkit";
import { country } from "./components/restSampleData";

// create thunk

const options = {
  name: "countries",
  initialState: [country],
  reducers: {},
};

const countriesStore = createSlice(options);
