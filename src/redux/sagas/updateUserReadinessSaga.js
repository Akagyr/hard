import { put, takeEvery } from "redux-saga/effects";
import { updateDoc, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { usersActionTypes } from "../actions/users/usersActionTypes";
import { getUsersFailure } from "../slices/usersSlice";

function* updateUserReadinesInFirestore(action) {
    try {
        yield updateDoc(doc(db, "users", action.payload.userId), {
            userReadiness: action.payload.userReadiness,
        });
    } catch(error) {
        yield put(getUsersFailure(error.message));
    }
}

function* updateUserReadinessSaga() {
    yield takeEvery(usersActionTypes.UPDATE_USER_READINESS, updateUserReadinesInFirestore);
}

export default updateUserReadinessSaga;