import { takeEvery, put } from "redux-saga/effects";
import { collection, getDocs } from "firebase/firestore";

import { getMessagesFailure, getMessagesFetch, getMessagesSuccess } from "../slices/messagesSlice";
import { db } from "../../firebase";

function* getMessagesSagaFetcher() {
    try {
        const querySnapshot = yield (getDocs(collection(db, "messages")));
        let messages = [];
        querySnapshot.forEach((doc) => {
            messages.push({...doc.data(), id: doc.id});
        });
        yield put(getMessagesSuccess(messages.sort((a, b) => Number(a.id) - Number(b.id))));
    } catch(error) {
        yield put(getMessagesFailure(error));
    }
}

function* getMessagesSaga() {
    yield takeEvery(getMessagesFetch, getMessagesSagaFetcher);
}

export default getMessagesSaga;