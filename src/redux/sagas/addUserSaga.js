import { takeEvery, put } from "redux-saga/effects";
import { setDoc, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { usersActionTypes } from "../actions/users/usersActionTypes";
import { getUsersFailure } from "../slices/usersSlice";

function* addUserToFirestore(action) {
    try {
        yield setDoc(doc(db, "users", action.payload.userId), {
            userName: action.payload.userName,
            userPhoto: action.payload.userPhoto,
            userReadiness: false,
            score: 0,
        });
    } catch(error) {
        yield put(getUsersFailure(error.message));
    }
}

function* addUserSaga() {
    yield takeEvery(usersActionTypes.ADD_USER, addUserToFirestore);
}

export default addUserSaga;