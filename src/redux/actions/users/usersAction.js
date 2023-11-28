import { usersActionTypes } from "./usersActionTypes";

export const addUser = (userData) => {
    return {
        type: usersActionTypes.ADD_USER,
        payload: userData,
    };
};

export const updateUserReadiness = (updateData) => {
    return {
        type: usersActionTypes.UPDATE_USER_READINESS,
        payload: updateData,
    };
};

export const updateUserScores = (updateData) => {
    return {
        type: usersActionTypes.UPDATE_USER_SCORE,
        payload: updateData,
    };
};