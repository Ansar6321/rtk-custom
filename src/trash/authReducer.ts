import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
    token: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = '';
        }
    }
});

export const { login, logout } = authSlice.actions;

export const authSelector = (state: RootState) => !!state.auth.token;

export default authSlice.reducer;