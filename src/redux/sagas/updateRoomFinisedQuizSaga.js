import { put, takeEvery } from "redux-saga/effects";
import { updateDoc, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { UPDATE_ROOM_FINISHED_QUIZ } from "../actions/room/roomActionTypes";
import { getRoomFailure } from "../slices/roomSlice";

function* updateRoomFinishedQuizInFirestore(action) {
    try {
        yield updateDoc(doc(db, "room", action.payload.id), {
            isFinishedQuiz: action.payload.isFinishedQuiz,
        });
    } catch(error) {
        yield put(getRoomFailure(error.message));
    }
}

function* updateRoomFinishedQuizSaga() {
    yield takeEvery(UPDATE_ROOM_FINISHED_QUIZ, updateRoomFinishedQuizInFirestore);
}

export default updateRoomFinishedQuizSaga;