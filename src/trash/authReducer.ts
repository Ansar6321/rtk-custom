import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginRequest, RegisterRequest } from "../models/DTOs";
import { RootState, store } from "./store";

const initialState = {
    isLoggedIn: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginRequest>) => {
            console.log('login');
            state.isLoggedIn = true;
        },
        logout: (state) => {
            console.log('logout');
            state.isLoggedIn = false;
        }
    }
});

export const { login, logout } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;