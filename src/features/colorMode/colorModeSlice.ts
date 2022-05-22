import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const initializeColorMode = (): ColorMode => {
  // get the colorMode from localstorage
  const mode = localStorage.getItem("colorMode");
  // if there are colorMode stored
  if (mode && mode !== "[]") {
    // return the parsed JSON object back to a javascript object
    console.log("mode " + mode);

    return { colorMode: JSON.parse(mode) };
  } else {
    return { colorMode: "light" };
  }
};

const initial: ColorMode = initializeColorMode();

interface ColorMode {
  colorMode: string;
}

const options = {
  name: "colorMode",
  initialState: initial,
  reducers: {
    toggleColorMode(state: ColorMode) {
      if (state.colorMode === "dark") {
        console.log("switching to light mode");
        state = { colorMode: "light" };
      } else {
        console.log("switching to dark mode");
        state = { colorMode: "dark" };
      }

      localStorage.setItem("colorMode", JSON.stringify(state.colorMode));
      return state;
    },
  },
};

const colorModeSlice = createSlice(options);

export const selectColorMode = (state: RootState) => {
  return state.colorMode.colorMode;
};

export const { toggleColorMode } = colorModeSlice.actions;
export default colorModeSlice.reducer;
