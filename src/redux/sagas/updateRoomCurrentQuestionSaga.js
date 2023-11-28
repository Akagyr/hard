import { put, takeEvery } from "redux-saga/effects";
import { updateDoc, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { UPDATE_ROOM_CURRENT_QUESTION } from "../actions/room/roomActionTypes";
import { getRoomFailure } from "../slices/roomSlice";

function* updateRoomCurrentQuestionInFirestore(action) {
    try {
        yield updateDoc(doc(db, "room", action.payload.id), {
            currentQuestion: action.payload.currentQuestion,
        });
    } catch(error) {
        yield put(getRoomFailure(error.message));
    }
}

function* updateRoomCurrentQuestionSaga() {
    yield takeEvery(UPDATE_ROOM_CURRENT_QUESTION, updateRoomCurrentQuestionInFirestore);
}

export default updateRoomCurrentQuestionSaga;