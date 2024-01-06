import { createSlice } from "@reduxjs/toolkit";
import {
  getUserInfo,
  updateUserAvatar,
  updateUserInfo,
  updateWaterNorma,
} from "./userOperations";
import { logoutUser } from "../auth/auth";

const userInitialState = {
  user: { email: "", gender: "", avatarURL: "", username: "", waterNorma: "" },
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: "users",
  initialState: userInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, handlePending)
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(getUserInfo.rejected, handleRejected)
      .addCase(updateUserAvatar.pending, handlePending)
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.avatarURL = action.payload.avatarURL;
      })
      .addCase(updateUserAvatar.rejected, handleRejected)
      .addCase(updateUserInfo.pending, handlePending)
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(updateUserInfo.rejected, handleRejected)
      .addCase(updateWaterNorma.pending, handlePending)
      .addCase(updateWaterNorma.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.waterNorma = action.payload.waterNorma;
      })
      .addCase(updateWaterNorma.rejected, handleRejected)
      .addCase(logoutUser.fulfilled, (state) => {
        state.error = null;
        state.isLoading = false;
        state.user = {
          email: "",
          gender: "",
          avatarURL: "",
          username: "",
          waterNorma: "",
        };
      });
  },
});

export const userReducer = userSlice.reducer;
