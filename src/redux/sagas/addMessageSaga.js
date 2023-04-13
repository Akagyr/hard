import { put, takeEvery } from "redux-saga/effects";
import { setDoc, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { ADD_MESSAGE } from "../actions/messages/messagesActionTypes";
import { getMessagesFailure } from "../slices/messagesSlice";

function* addMessageToFirestore(action) {
    try {
        yield setDoc(doc(db, "messages", String(Date.now())), {
            userId: action.payload.userId,
            userName: action.payload.userName,
            userPhoto: action.payload.userPhoto,
            message: action.payload.message,
        });
    } catch(error) {
        yield put(getMessagesFailure(error.message));
    }
}

function* addMessageSaga() {
    yield takeEvery(ADD_MESSAGE, addMessageToFirestore);
}

export default addMessageSaga;