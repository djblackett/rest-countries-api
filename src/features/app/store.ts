import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../countries/countriesSlice";
import colorModeReducer from "../colorMode/colorModeSlice";
import filtersReducer from "../filters/filtersSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    colorMode: colorModeReducer,
    filters: filtersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
