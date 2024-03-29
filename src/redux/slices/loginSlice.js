import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        user: {},
        isAuth: false,
        authError: "",
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
            state.authError = "";
        },
        loginFailure: (state, action) => {
            state.authError = action.payload;
        },
        logout: (state) => {
            state.user = {};
            state.isAuth = false;
            state.authError = "";
        },
    },
});

export const {
    loginSuccess,
    loginFailure,
    logout,
} = loginSlice.actions;

export default loginSlice.reducer;