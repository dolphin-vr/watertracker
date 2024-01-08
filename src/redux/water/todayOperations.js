import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentDate } from "../../shared/api/dates.js";
import { instance } from "../auth/auth.js";

export const getPortionsList = createAsyncThunk(
  "water/getPortionsList",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(`/water/today/${currentDate}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNewPortion = createAsyncThunk(
  "water/addNewPortion",
  async (portion, thunkAPI) => {
    try {
      const { data } = await instance.post("/water", {
        ...portion,
        date: currentDate,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updatePortion = createAsyncThunk(
  "water/updatePortion",
  async ({ id, portion }, thunkAPI) => {
    try {
      const { data } = await instance.put(`/water/${id}`, {
        ...portion,
        date: currentDate,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deletePortion = createAsyncThunk(
  "water/deletePortion",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/water/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
