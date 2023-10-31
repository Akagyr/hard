import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
    name: "questions",
    initialState: {
        questions: [],
        isLoading: false,
        questionsError: "",
    },
    reducers: {
        getQuestionsFetch: (state) => {
            state.isLoading = true;
        },
        getQuestionsSuccess: (state, action) => {
            state.questions = action.payload;
            state.isLoading = false;
        },
        getQuestionsFailure: (state, action) => {
            state.questionsError = action.payload;
            state.isLoading = false;
        },
    },
});

export const {
    getQuestionsFetch,
    getQuestionsSuccess,
    getQuestionsFailure,
} = questionsSlice.actions;

export default questionsSlice.reducer;