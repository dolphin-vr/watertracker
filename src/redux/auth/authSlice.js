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
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  status: null,
  error: null,
};
const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
  state.isLoggedIn = false;
};
const handleRejected = (state, action) => {
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = action.payload;
};
const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      statusUnset(state) {
         state.status = null;
         state.isLoading = false;
      },
      errorUnset(state) {
         state.error = null;
         state.isLoading = false;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(auth.registerUser.pending, handlePending)
         .addCase(auth.registerUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
         })
         .addCase(auth.registerUser.rejected, handleRejected)
         .addCase(auth.loginUser.pending, handlePending)
         .addCase(auth.loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
         })
         .addCase(auth.loginUser.rejected, handleRejected)
         .addCase(auth.logoutUser.pending, handlePending)

         .addCase(auth.logoutUser.fulfilled, (state) => {
            state.user = null;
            state.token = null;
            state.isLoading = false;
            state.isLoggedIn = false;
         })
         .addCase(auth.logoutUser.rejected, handleRejected)
         .addCase(auth.refreshUser.pending, (state) => {
            state.isLoggedIn = false;
            state.isRefreshing = true;
            state.isLoading = true;
            state.error = null;
         })
         .addCase(auth.refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.isLoading = false;
            state.error = null;
         })
         .addCase(auth.refreshUser.rejected, (state, action) => {
            state.isRefreshing = false;
            state.isLoggedIn = false;
            state.isLoading = false;
            state.error = action.payload;
         })
         .addCase(auth.remindPasswd.pending, handlePending)
         .addCase(auth.remindPasswd.fulfilled, (state, action) => {
            state.status = action.payload;
            state.isLoading = false;
         })
         .addCase(auth.remindPasswd.rejected, handleRejected)
         .addCase(auth.resetPasswd.pending, handlePending)
         .addCase(auth.resetPasswd.fulfilled, (state, action) => {
            state.status = action.payload;
            state.isLoading = false;
         })
         .addCase(auth.resetPasswd.rejected, handleRejected);
      //  .addCase(statusUnset, (state) => {
      //     state.status = null;
      //     state.isLoading = false;
      //  });
   },
});

export const { statusUnset, errorUnset } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
