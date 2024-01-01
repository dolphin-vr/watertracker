import { createSlice } from "@reduxjs/toolkit";
import {
  getUserInfo,
  updateUserAvatar,
  updateUserInfo,
  updateWaterNorma,
} from "./userOperations";

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
        state.user.avatarURL = action.payload;
      })
      .addCase(updateUserAvatar.rejected, handleRejected)
      .addCase(updateUserInfo.pending, handlePending)
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = { user: state.user, ...action.payload };
      })
      .addCase(updateUserInfo.rejected, handleRejected)
      .addCase(updateWaterNorma.pending, handlePending)
      .addCase(updateWaterNorma.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.waterNorma = action.payload;
      })
      .addCase(updateWaterNorma.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
