import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// instance.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGVhNWMzZDc4YzU0YzBlOTJkMWQzNyIsImlhdCI6MTcwMzg0NzM2MywiZXhwIjoxNzA2NDM5MzYzfQ.EmDjm-Bx7ijBmpBMYk-b61KhHx69dI7roIpAlgELYcs`;

const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};

// export const registerUser = createAsyncThunk(
//     'auth/registerUser',
//     async ({ email, password, date }) => {
//         try {
//             const userData = {
//                 email,
//                 password,
//                 date,
//             };
//             console.log('Sending registration request with data:', userData);
//             const response = await instance.post('/auth/signup', userData);
//             setToken(response.data.token);
//             return response.data; // Повертаємо дані для обробки у функції .fulfilled
//         } catch (error) {
//             console.log('Registration error:', error);
//             throw error;
//         }
//     }
// );

// export const loginUser = createAsyncThunk(
//     'auth/loginUser',
//     async userData => {
//         try {
//             console.log('Sending login request with data:', userData);
//             const response = await instance.post('/auth/signin', userData);
//             setToken(response.data.token);
//             return response.data; // Повертаємо дані для обробки у функції .fulfilled
//         } catch (error) {
//             console.log('Login error:', error);
//             throw error;
//         }
//     }
// );

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, date }) => {
    try {
      const userData = {
        email,
        password,
        date,
      };
      console.log("userData reg== ", userData);
      const response = await instance.post("/auth/signup", userData);
      console.log("response reg == ", response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    try {
      console.log("userData in== ", userData);
      const response = await instance.post("/auth/signin", userData);
      console.log("response in== ", response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    await instance.post("/auth/signout");
    clearAuthHeader();
  } catch (error) {
    console.log(error);
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
      console.log(error);
      throw error;
    }
  }
);

// import axios from "axios";

// const instance = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
// })

// const setToken = token => {
// 	if (token) {
// 			return instance.defaults.headers.authorization = `Bearer ${token}`;
// 	}
// 	instance.defaults.headers.authorization = "";
// }

// if (setToken) {Math.random()}
// console.log(setToken)
