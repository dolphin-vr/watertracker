import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const setAuthHeader = token => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    instance.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData, thunkAPI) => {
        try {
            console.log('userData reg== ', userData)
            const response = await instance.post('/auth/signup', userData);
            console.log('response reg == ', response)
            setAuthHeader (response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser', 
    async (userData, thunkAPI) => {
        try {
            console.log('userData in== ', userData)
            const response = await instance.post('/auth/signin', userData);
            console.log('response in== ', response)
            setAuthHeader (response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, thunkAPI) => {
    try {
        await instance.post('/auth/signout');
        clearAuthHeader();
        return true;
    } catch (error) {
			return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
        // Reading the token from the state via getState()
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
        setAuthHeader(persistedToken);
        const response = await instance.get('/auth/refresh');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    }
);


