import { ADD_MESSAGE } from "../actionTypes/messagesActionTypes";

export const addMessage = (messageData) => {
    return {
        type: ADD_MESSAGE,
        payload: messageData,
    };
};