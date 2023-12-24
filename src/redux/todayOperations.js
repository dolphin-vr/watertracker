import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDayPortions, addPortion } from "../shared/api/todayApiServices.js";

export const getPortionsList = createAsyncThunk(
  "portions/getPortionsList",
  async (_, thunkApi) => {
    try {
      const { data } = await getDayPortions();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const addNewPortion = createAsyncThunk(
  "portions/addNewPortion",
  async (portion, thunkApi) => {
    try {
      const { data } = await addPortion(portion);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
