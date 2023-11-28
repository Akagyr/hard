import { UPDATE_ROOM_STATUS, UPDATE_ROOM_CURRENT_QUESTION, UPDATE_ROOM_FINISHED_QUIZ } from "./roomActionTypes";


export const updateRoomStatus = (roomStatus) => {
    return {
        type: UPDATE_ROOM_STATUS,
        payload: roomStatus,
    };
};

export const updateRoomCurrentQuestion = (currentQuestion) => {
    return {
        type: UPDATE_ROOM_CURRENT_QUESTION,
        payload: currentQuestion,
    };
};

export const updateRoomFinishedQuiz = (isFinishedQuiz) => {
    return {
        type: UPDATE_ROOM_FINISHED_QUIZ,
        payload: isFinishedQuiz,
    };
};