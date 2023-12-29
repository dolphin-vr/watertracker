import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentDate } from "../../services/currentDate.js";
import { instance } from "../auth/auth.js";

export const getPortionsList = createAsyncThunk(
  "portions/getPortionsList",
  async (_, thunkAPI) => {
    try {
      const date = currentDate();
      const { data } = await instance.get(`/water/today/${date}`);
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNewPortion = createAsyncThunk(
  "portions/addNewPortion",
  async (portion, thunkAPI) => {
    try {
      const { data } = await instance.post("/water", portion);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updatePortion = createAsyncThunk(
  "portions/updatePortion",
  async ({ id, portion }, thunkAPI) => {
    try {
      const { data } = await instance.put(`/water/${id}`, portion);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deletePortion = createAsyncThunk(
  "portions/deletePortion",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/water/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
