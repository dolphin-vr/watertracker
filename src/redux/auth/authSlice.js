import { createSlice } from "@reduxjs/toolkit";
import * as auth from "./auth";

const initialState = {
  user: {
    email: "",
    date: "",
    waterNorma: "",
    username: "",
    avatarURL: "",
    gender: "",
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(auth.registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(auth.loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(auth.logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(auth.refreshUser.pending, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(auth.refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(auth.refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      });
  },
});

export const authSliceReducer = authSlice.reducer;
