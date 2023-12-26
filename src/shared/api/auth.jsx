import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const setToken = token => {
    if (token) {
        instance.defaults.headers.authorization = `Bearer ${token}`;
    } else {
        delete instance.defaults.headers.authorization;
    }
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ email, password, date }) => {
        try {
            const userData = {
                email,
                password,
                date,
            };
            console.log('userData reg== ', userData)
            const response = await instance.post('/auth/signup', userData);
            console.log('response reg == ', response)
            setToken(response.data.token);
            return response.data;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser', 
    async userData => {
        try {
            console.log('userData in== ', userData)
            const response = await instance.post('/auth/signin', userData);
            console.log('response in== ', response)
            setToken(response.data.token);
            return response.data;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    try {
        await instance.post('/auth/signout');
        setToken(null);
    } catch (error) {
			console.log(error)
        throw error;
    }
});

export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async (_, thunkApi) => {
        try {
            const token = thunkApi.getState().auth.token;
            setToken(token);
            const response = await instance.get('/user');
            return response.data;
        } catch (error) {
					console.log(error)
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

