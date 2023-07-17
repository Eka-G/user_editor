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
    changeUser: (state, action) => {
      const { index, ...data } = action.payload;

      const users = [
        ...state.users.slice(0, index),
        data,
        ...state.users.slice(index + 1),
      ];

      const currentProfile = action.payload;

      return {
        ...state,
        users,
        currentProfile,
      };
    },
  },
});

export const { setCurrentProfile, unsetCurrentProfile, changeUser } =
  profilesSlice.actions;

export const selectUsers = (state) => state.profiles.users;
export const selectCurrentProfile = (state) => state.profiles.currentProfile;

export default profilesSlice.reducer;
