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

export const todaySlice = createSlice({
  name: "portions",
  initialState: {
    portions: null,
    isLoading: false,
    error: null,
  },
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
        state.portions.dailyPortions.push(action.payload.water);
      })
      .addCase(addNewPortion.rejected, handleRejected)
      .addCase(updatePortion.pending, handlePending)
      .addCase(updatePortion.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.portions.dailyPortions = state.portions.dailyPortions.map(
          (water) => {
            if (water.id === action.payload.id) {
              return action.payload;
            }
            return water;
          }
        );
      })
      .addCase(updatePortion.rejected, handleRejected)
      .addCase(deletePortion.pending, handlePending)
      .addCase(deletePortion.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        const index = state.portions.dailyPortions.findIndex(
          (water) => water.id === action.payload.id
        );
        state.portions.dailyPortions.splice(index, 1);
      })
      .addCase(deletePortion.rejected, handleRejected);
  },
});

export const { add, remove } = todaySlice.actions;
