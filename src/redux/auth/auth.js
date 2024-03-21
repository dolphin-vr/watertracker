import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { currentDate } from "../../shared/api/dates";

export const instance = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
});

const setAuthHeader = (token) => {
   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
   instance.defaults.headers.common.Authorization = "";
};

export const registerUser = createAsyncThunk("auth/registerUser", async (userData, thunkAPI) => {
   try {
      const response = await instance.post("/auth/signup", { email: userData.email, password: userData.password, date: currentDate });
      setAuthHeader(response.data.token);
      return response.data;
   } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.status);
      } else {
        return thunkAPI.rejectWithValue(error.code);
      }
   }
});

export const loginUser = createAsyncThunk("auth/loginUser", async (userData, thunkAPI) => {
   try {
      const response = await instance.post("/auth/signin", userData);
      setAuthHeader(response.data.token);
      return response.data;
   } catch (error) {
      if (error.response) {
      // console.log("error.response.status= ", error.response.status);
      return thunkAPI.rejectWithValue(error.response.status);
      } else {
      // console.log("in opertn= ", error.code);
      return thunkAPI.rejectWithValue(error.code);
      }
      // console.log("error.response.status= ", error.response.status);
      // return thunkAPI.rejectWithValue(error);
   }
});

export const remindPasswd = createAsyncThunk("auth/remindPasswd", async (userData, thunkAPI) => {
   try {
      const response = await instance.post("/auth/remind", userData);
      return response.status;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const resetPasswd = createAsyncThunk("auth/resetPasswd", async (userData, thunkAPI) => {
   try {
      const {email, password, token} = userData;      
      setAuthHeader(token);
      const response = await instance.patch("/auth/reset", {email, password});
      clearAuthHeader();
      return response.status;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, thunkAPI) => {
   try {
      await instance.post("/auth/signout");
      clearAuthHeader();
      return true;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const refreshUser = createAsyncThunk("auth/refreshUser", async (_, thunkAPI) => {
   // Reading the token from the state via getState()
   const state = thunkAPI.getState();
   const persistedToken = state.auth.token;

   if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch user");
   }

   try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const response = await instance.get("/auth/refresh");
      return response.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});
