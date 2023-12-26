import { createSlice } from '@reduxjs/toolkit';
import * as auth from '../shared/api/auth';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(auth.loginUser.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        })
        .addCase(auth.logoutUser.fulfilled, state => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.error = null;
        })
        .addCase(auth.registerUser.fulfilled, (state, action) => {
            // state.isAuthenticated = true; // змінити назад потім як зробимо автоматичну логінізацію після реєстрації
            state.isAuthenticated = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        })
        .addCase(auth.loginUser.rejected, (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.error = action.error.message;
        })
        .addCase(auth.logoutUser.rejected, (state, action) => {
            state.error = action.error.message;
        })
        .addCase(auth.registerUser.rejected, (state, action) => {
            state.error = action.error.message;
        })
        .addCase(auth.getCurrentUser.pending, (state, action) => {
            state.isRefreshing = true;
        })
        .addCase(auth.getCurrentUser.fulfilled, (state, action) => {
            state.isRefreshing = false;
            state.isAuthenticated = true; 
            state.user = action.payload; 
        })
        .addCase(auth.getCurrentUser.rejected, (state, action) => {
            state.isRefreshing = false;
            state.error = action.error.message;
            state.isAuthenticated = false;
        });
    },
});

export const authSliceReducer = authSlice.reducer;
