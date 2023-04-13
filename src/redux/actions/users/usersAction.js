import { usersActionTypes } from "./usersActionTypes";

export const addUser = (userData) => {
    return {
        type: usersActionTypes.ADD_USER,
        payload: userData,
    };
};

export const userReadiness = (userData) => {
    return {
        type: usersActionTypes.USER_READINESS,
        payload: userData,
    };
};

export const getUsers = () => {
    return {
        type: usersActionTypes.GET_USERS,
    };
};