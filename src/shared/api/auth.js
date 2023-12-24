import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Функція для встановлення токену в заголовок авторизації
export const setToken = token => {
    if (token) {
        instance.defaults.headers.authorization = `Bearer ${token}`;
    } else {
        delete instance.defaults.headers.authorization;
    }
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async userData => {
        try {
            const response = await instance.post('/api/auth/signup', userData);
            setToken(response.data.token);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const loginUser = createAsyncThunk('auth/loginUser', async userData => {
    try {
        const response = await instance.post('/api/auth/signin', userData);
        setToken(response.data.token);
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    try {
        await instance.post('/api/auth/signout');
        setToken(null);
    } catch (error) {
        throw error;
    }
});

export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async (_, thunkApi) => {
        try {
            const token = thunkApi.getState().auth.token;
            setToken(token);
            const response = await instance.get('/api/user');
            return response.data;
        } catch (error) {
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

