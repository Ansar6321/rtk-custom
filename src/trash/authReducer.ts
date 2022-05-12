import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOKEN } from "../constants";
import { RootState } from "./store";

const initialState = {
    token: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            const token = action.payload
            state.token = token;
            localStorage.setItem(TOKEN, token);
        },
        logout: (state) => {
            state.token = '';
            localStorage.clear();
        }
    }
});

export const { login, logout } = authSlice.actions;

export const authSelector = (state: RootState) => !!state.auth.token;
export const tokenSelector = (state: RootState) => state.auth.token;

export default authSlice.reducer;
