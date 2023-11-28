import { put, takeEvery } from "redux-saga/effects";
import { updateDoc, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { UPDATE_ROOM_STATUS } from "../actions/room/roomActionTypes";
import { getRoomFailure } from "../slices/roomSlice";

function* updateRoomStatusInFirestore(action) {
    try {
        yield updateDoc(doc(db, "room", action.payload.id), {
            isStartedQuize: action.payload.isStartedQuize,
        });
    } catch(error) {
        yield put(getRoomFailure(error.message));
    }
}

function* updateRoomStatusSaga() {
    yield takeEvery(UPDATE_ROOM_STATUS, updateRoomStatusInFirestore);
}

export default updateRoomStatusSaga;