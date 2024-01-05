import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/auth";

export const getUserInfo = createAsyncThunk(
  "users/getInfo",
  async (_, thunkAPI) => {
    try {
      const respons = await instance.get("/users/info");
      return respons.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  "users/avatar",
  async (avatar, thunkAPI) => {
    try {
      const respons = await instance.patch("/users/avatar", avatar, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return respons.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "users/updateInfo",
  async (data, thunkAPI) => {
    try {
      const respons = await instance.patch("/users/info", data);
      return respons.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateWaterNorma = createAsyncThunk(
  "users/waterNorma",
  async (waterNorma, thunkAPI) => {
    try {
      const respons = await instance.patch("/users/waterrate", { waterNorma });
      return respons.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
