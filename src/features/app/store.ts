import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../countries/countriesSlice";
import colorModeReducer from "../colorMode/colorModeSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    colorMode: colorModeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
