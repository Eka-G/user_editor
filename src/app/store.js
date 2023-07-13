import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "#features/profiles/profilesSlice";

export const store = configureStore({
  reducer: {
    profiles: profilesReducer,
  },
});
