import { createSlice, createAsyncThunk, PayloadAction, createAction } from "@reduxjs/toolkit";
import { AsyncThunkFulfilledActionCreator, AsyncThunkPendingActionCreator, AsyncThunkRejectedActionCreator } from "@reduxjs/toolkit/dist/createAsyncThunk";
import {Country} from '../../components/CountryCardDetails'
import { RootState } from "../app/store";

export const getCountries = createAsyncThunk<Country[]>(
  "countries/getCountries",
  async () => {
    const savedCountries = localStorage.getItem("countries");
    // if there are todos stored
    if (savedCountries && savedCountries !== "[]") {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedCountries);
      // otherwise
    } else {
      const response = await fetch("https://restcountries.com/v2/all?fields=name,nativeName,currencies,numericCode,languages,population,topLevelDomain,flags,region,subregion,capital,borders");
      const json = await response.json();

      // localStorage.setItem("savedCountries", JSON.stringify(json));
      //  localStorage.setItem("mode", JSON.stringify({ colorMode: mode }));
      window.addEventListener("unload", () => {
        localStorage.setItem("store", JSON.stringify(json));
      });
      return json;
    }
  }
);

createAction<Country[], "getCountries">("getCountries");


interface Countries {
    countries: Country[],
    isFetching: boolean,
    fetchingError: boolean,
    isFulfilled: boolean,
}

const initialState = {
    countries: [],
    isFetching: true,
    fetchingError: false,
    isFulfilled: false,
  } as Countries;

const options = {
  name: "countries",
  initialState: initialState,
  reducers: {
    // createMap(state) {
    //   state.countries.forEach((country: Country) => {
    //   });
    // },
  },
  extraReducers: (builder: { addCase: (arg0: AsyncThunkFulfilledActionCreator<Country[], void, unknown> | AsyncThunkPendingActionCreator<void, unknown> | AsyncThunkRejectedActionCreator<void, unknown>, arg1: { (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; }) => void; }) => {
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
}


const countriesSlice = createSlice(options);

export const selectCountries = (state: RootState) => {
  return state.countries.countries;
};


export const selectIsFetching = (state: RootState) => {
  return state.countries.isFetching;
};

export const selectFetchingError = (state: RootState) => {
  return state.countries.fetchingError;
};

export const selectIsFulfilled = (state: RootState) => {
  return state.countries.isFulfilled;
};

export default countriesSlice.reducer;
