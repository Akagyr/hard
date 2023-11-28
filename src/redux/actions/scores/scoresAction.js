import { ADD_SCORE, UPDATE_SCORE } from "./scoresActionTypes";

export const addScore = (scoreData) => {
    return {
        type: ADD_SCORE,
        payload: scoreData,
    };
};

export const updateScore = (scoreData) => {
    return {
        type: UPDATE_SCORE,
        payload: scoreData,
    };
};