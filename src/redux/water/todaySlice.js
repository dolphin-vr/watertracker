import { createSlice } from "@reduxjs/toolkit";
import {
  getPortionsList,
  addNewPortion,
  updatePortion,
  deletePortion,
} from "./todayOperations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  portions: null,
  dailyPortions: [],
  isLoading: false,
  error: null,
};

export const todaySlice = createSlice({
  name: "water",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPortionsList.pending, handlePending)
      .addCase(getPortionsList.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.portions = action.payload;
        state.dailyPortions = action.payload.dailyPortions;
      })
      .addCase(getPortionsList.rejected, handleRejected)
      .addCase(addNewPortion.pending, handlePending)
      .addCase(addNewPortion.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.dailyPortions.push(action.payload);
      })
      .addCase(addNewPortion.rejected, handleRejected)
      .addCase(updatePortion.pending, handlePending)
      .addCase(updatePortion.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.dailyPortions = state.dailyPortions.map((portion) => {
          if (portion.id === action.payload.id) {
            return action.payload;
          }
          return portion;
        });
      })
      .addCase(updatePortion.rejected, handleRejected)
      .addCase(deletePortion.pending, handlePending)
      .addCase(deletePortion.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        const index = state.dailyPortions.findIndex(
          (portion) => portion.id === action.payload.id
        );
        state.dailyPortions.splice(index, 1);
      })
      .addCase(deletePortion.rejected, handleRejected);
  },
});

export const todayReducer = todaySlice.reducer;
