import { createEntityAdapter, createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: { currentUser: null },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice;
