import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name: "room",
    initialState: {
        room: {},
        isLoading: false,
        roomError: "",
    },
    reducers: {
        getRoomFetch: (state) => {
            state.isLoading = true;
        },
        getRoomSuccess: (state, action) => {
            state.room = action.payload;
            state.isLoading = false;
        },
        getRoomFailure: (state, action) => {
            state.roomError = action.payload;
            state.isLoading = false;
            console.error(action.payload);
        },
    },
});

export const {
    getRoomFetch,
    getRoomSuccess,
    getRoomFailure,
} = roomSlice.actions;

export default roomSlice.reducer;