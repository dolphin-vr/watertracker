import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDayPortions } from "../shared/api/todayApiServices.js";
import { currentDate } from "../services/currentDate.js";

export const getPortionsList = createAsyncThunk(
  "portions/getPortionsList",
  async (_, thunkApi) => {
    try {
      const { data } = await getDayPortions(currentDate);
      console.log(data);
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
