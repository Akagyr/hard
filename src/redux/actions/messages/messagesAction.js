import { ADD_MESSAGE } from "./messagesActionTypes";

export const addMessage = (messageData) => {
    return {
        type: ADD_MESSAGE,
        payload: messageData,
    };
};