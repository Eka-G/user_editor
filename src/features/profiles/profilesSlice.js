import { createSlice } from "@reduxjs/toolkit";
import base from "./users.json";

const initialState = {
  users: base.users,
  currentProfile: null,
};

export const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    setCurrentProfile: (state, action) => {
      state.currentProfile = action.payload;
    },
    unsetCurrentProfile: (state) => {
      state.currentProfile = null;
    },
  },
});

export const { setCurrentProfile, unsetCurrentProfile } = profilesSlice.actions;

export const selectUsers = (state) => state.profiles.users;

export default profilesSlice.reducer;
