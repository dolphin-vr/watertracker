import { createSlice } from "@reduxjs/toolkit";
import { getPortionsList, addNewPortion } from "./todayOperations";

export const todaySlice = createSlice({
  name: "portions",
  initialState: {
    portions: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPortionsList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPortionsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.portions = action.payload;
      })
      .addCase(getPortionsList.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addNewPortion.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addNewPortion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.portions.push(action.payload);
      })
      .addCase(addNewPortion.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { add, remove } = todaySlice.actions;
