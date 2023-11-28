import { put, takeEvery } from "redux-saga/effects";
import { updateDoc, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { usersActionTypes } from "../actions/users/usersActionTypes";
import { getUsersFailure } from "../slices/usersSlice";

function* updateUserScoreInFirestore(action) {
    try {
        yield updateDoc(doc(db, "users", action.payload.userId), {
            score: action.payload.score,
        });
    } catch(error) {
        yield put(getUsersFailure(error.message));
    }
}

function* updateUserScoreSaga() {
    yield takeEvery(usersActionTypes.UPDATE_USER_SCORE, updateUserScoreInFirestore);
}

export default updateUserScoreSaga;