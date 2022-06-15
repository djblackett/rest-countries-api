import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const initializeColorMode = (): Filters => {
    return { filter: "", region: "" };
};

const initial: Filters = initializeColorMode();

interface Filters {
  filter: string;
  region: string;
}

const options = {
  name: "filters",
  initialState: initial,
  reducers: {

    setFilter: (state: Filters, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setRegion: (state: Filters, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    clearFilters: (state: Filters) => {
      state.filter = "";
      state.region = "";
    }
  },
};

const filtersSlice = createSlice(options);

export const selectFilter = (state: RootState) => {
  return state.filters.filter;
};

export const selectRegion = (state: RootState) => {
  return state.filters.region;
}

export const selectFilters = (state: RootState) => {
  return state.filters;
}

export const { setFilter, setRegion, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
