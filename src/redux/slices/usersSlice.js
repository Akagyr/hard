import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isLoading: false,
        usersError: "",
    },
    reducers: {
        getUsersFetch: (state) => {
            state.isLoading = true;
        },
        getUsersSuccess: (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        },
        getUsersFailure: (state, action) => {
            state.usersError = action.payload;
            state.isLoading = false;
        },
    },
});

export const {
    getUsersFetch,
    getUsersSuccess,
    getUsersFailure,
} = usersSlice.actions;

export default usersSlice.reducer;