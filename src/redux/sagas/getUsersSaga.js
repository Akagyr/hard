import { takeEvery, put } from "redux-saga/effects";
import { collection, getDocs } from "firebase/firestore";

import { getUsersSuccess, getUsersFailure } from "../slices/usersSlice";
import { db } from "../../firebase";
import { usersActionTypes } from "../actions/users/usersActionTypes";

function* getUsersSagaFetcher() {
    try {
        const querySnapshot = yield (getDocs(collection(db, "users")));
        let users = [];
        querySnapshot.forEach((doc) => {
            users.push({...doc.data(), userId: doc.id});
        });
        yield put(getUsersSuccess(users));
    } catch(error) {
        yield put(getUsersFailure(error));
    }
}

function* getUsersSaga() {
    yield takeEvery(usersActionTypes.GET_USERS, getUsersSagaFetcher);
}

export default getUsersSaga;