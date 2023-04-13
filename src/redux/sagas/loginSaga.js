import { takeLatest, put } from "redux-saga/effects";
import { signInWithPopup } from "firebase/auth";

import { auth, googleAuthProvider } from "../../firebase.js";
import { loginFailure, loginSuccess } from "../slices/loginSlice.js";
import { LOGIN } from "../actions/login/loginActionTypes.js";
import { addUser } from "../actions/users/usersAction.js";

function* loginSagaFetcher() {
    try {
        const data = yield signInWithPopup(auth, googleAuthProvider);
        yield put(loginSuccess({
            id: data.user.uid,
            name: data.user.displayName,
            email: data.user.email,
            photo: data.user.photoURL,
        }));
        yield put(addUser({
            userId: data.user.uid,
        }));
    }
    catch(error) {
        yield put(loginFailure(error.code));
    };
}

function* loginSaga() {
    yield takeLatest(LOGIN, loginSagaFetcher);
}

export default loginSaga;