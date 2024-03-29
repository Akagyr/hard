import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: "messages",
    initialState: {
        messages: [],
        isLoading: false,
        messagesError: "",
    },
    reducers: {
        getMessagesFetch: (state) => {
            state.isLoading = true;
        },
        getMessagesSuccess: (state, action) => {
            state.messages = action.payload;
            state.isLoading = false;
        },
        getMessagesFailure: (state, action) => {
            state.messagesError = action.payload;
            state.isLoading = false;
        },
    },
});

export const {
    getMessagesFetch,
    getMessagesSuccess,
    getMessagesFailure,
} = messagesSlice.actions;

export default messagesSlice.reducer;