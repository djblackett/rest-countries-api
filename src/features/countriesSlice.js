import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async (id, thunkAPI) => {
    const savedCountries = localStorage.getItem("countries");
    // if there are todos stored
    if (savedCountries && savedCountries !== "[]") {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedCountries);
      // otherwise
    } else {
      const response = await fetch("https://restcountries.com/v2/all");
      const json = await response.json();

      // localStorage.setItem("savedCountries", JSON.stringify(json));
      //  localStorage.setItem("mode", JSON.stringify({ colorMode: mode }));
      window.addEventListener("unload", () => {
        localStorage.setItem("store", JSON.stringify(store));
      });
      return json;
    }
  }
);

const initializeData = () => {
  // get the todos from localstorage
  const savedTodos = localStorage.getItem("todos");
  // if there are todos stored
  if (savedTodos && savedTodos !== "[]") {
    // return the parsed JSON object back to a javascript object
    return JSON.parse(savedTodos);
    // otherwise
  } else {
    // return an empty array
    return initialData;
  }
};

const options = {
  name: "countries",
  initialState: {
    countries: [],
    countryMap: {},
    isFetching: true,
    fetchingError: false,
    isFulfilled: false,
  },
  reducers: {
    createMap(state) {
      state.countries.forEach((country) => {
        state.countryMap[country.alpha3Code] = country.name;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.isFetching = false;
      state.fetchingError = false;
      state.countries = action.payload;
      state.isFulfilled = true;
    });
    builder.addCase(getCountries.pending, (state, action) => {
      state.isFetching = true;
      state.fetchingError = false;
    });
    builder.addCase(getCountries.rejected, (state, action) => {
      state.isFetching = false;
      state.fetchingError = true;
    });
  },
};

const countriesStore = createSlice(options);

export const selectCountries = (state) => {
  return state.countries.countries;
};

export const { createMap } = countriesStore.actions;

export const selectMap = (state) => {
  return state.countries.countryMap;
};

export const selectIsFetching = (state) => {
  return state.countries.isFetching;
};

export const selectFetchingError = (state) => {
  return state.countries.fetchingError;
};

export const selectIsFulfilled = (state) => {
  return state.countries.isFulfilled;
};
export default countriesStore.reducer;
