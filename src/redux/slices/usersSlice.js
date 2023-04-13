import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        usersError: "",
    },
    reducers: {
        getUsersSuccess: (state, action) => {
            state.users = action.payload;
        },
        getUsersFailure: (state, action) => {
            state.usersError = action.payload;
        },
    },
});

export const {
    getUsersSuccess,
    getUsersFailure,
} = usersSlice.actions;

export default usersSlice.reducer;