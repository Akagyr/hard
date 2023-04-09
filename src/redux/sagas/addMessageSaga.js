import { takeEvery } from "redux-saga/effects";
import { setDoc, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { ADD_MESSAGE } from "../actionTypes/messagesActionTypes";

function* addMessageToFirestore(action) {
    try {
        console.log(action.payload);
        yield setDoc(doc(db, "messages", String(action.payload.id)), {
            userId: action.payload.userId,
            userName: action.payload.userName,
            userPhoto: action.payload.userPhoto,
            message: action.payload.message,
        });
    } catch(error) {
        console.log(error.message);
    }
}

function* addMessageSaga() {
    yield takeEvery(ADD_MESSAGE, addMessageToFirestore);
}

export default addMessageSaga;