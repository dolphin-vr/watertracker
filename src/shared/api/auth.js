import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, date }) => {
    try {
      const userData = {
        email,
        password,
        date,
      };
      const response = await instance.post("/auth/signup", userData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    try {
      const response = await instance.post("/auth/signin", userData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    await instance.post("/auth/signout");
    clearAuthHeader();
  } catch (error) {
    throw error;
  }
});

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.token;
      setAuthHeader(token);
      const response = await instance.get("/user");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

