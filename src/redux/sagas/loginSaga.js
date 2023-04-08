import { takeLatest, put } from "redux-saga/effects";
import { signInWithPopup } from "firebase/auth";

import { auth, googleAuthProvider } from "../../firebase.js";
import { loginFailure, loginSuccess } from "../slices/loginSlice.js";
import { LOGIN } from "../actionTypes/loginActionTypes.js";

function* loginSagaFetcher() {
    try {
        const data = yield signInWithPopup(auth, googleAuthProvider);
        yield put(loginSuccess(data.user));
    }
    catch(error) {
        yield put(loginFailure(error.code));
    };
}

function* loginSaga() {
    yield takeLatest(LOGIN, loginSagaFetcher);
}

export default loginSaga;