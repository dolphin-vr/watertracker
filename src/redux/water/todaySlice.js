import { createSlice } from "@reduxjs/toolkit";
import {
  getPortionsList,
  addNewPortion,
  updatePortion,
  deletePortion,
} from "./todayOperations";
import { logoutUser } from "../auth/auth";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  portions: { percentage: "", dailyPortions: [] },
  isLoading: false,
  error: null,
};

export const todaySlice = createSlice({
  name: "water",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPortionsList.pending, handlePending)
      .addCase(getPortionsList.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.portions = action.payload;
      })
      .addCase(getPortionsList.rejected, handleRejected)
      .addCase(addNewPortion.pending, handlePending)
      .addCase(addNewPortion.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.portions = action.payload;
      })
      .addCase(addNewPortion.rejected, handleRejected)
      .addCase(updatePortion.pending, handlePending)
      .addCase(updatePortion.fulfilled, (state, action) => {
        state.portions = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(updatePortion.rejected, handleRejected)
      .addCase(deletePortion.pending, handlePending)
      .addCase(deletePortion.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.portions = action.payload;
      })
      .addCase(deletePortion.rejected, handleRejected)
      .addCase(logoutUser.fulfilled, (state) => {
        state.error = null;
        state.isLoading = false;
        state.portions = { percentage: "", dailyPortions: [] };
      });
  },
});

export const todayReducer = todaySlice.reducer;
