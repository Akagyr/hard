import { all, call } from "redux-saga/effects";

import loginSaga from "./loginSaga";
import getMessagesSaga from "./getMessagesSaga";
import addMessageSaga from "./addMessageSaga";
import addUserSaga from "./addUserSaga";
import userReadinessSaga from "./userReadinessSaga";
import getUsersSaga from "./getUsersSaga";

function* rootSaga() {
    yield all([
        call(loginSaga),
        call(getMessagesSaga),
        call(addMessageSaga),
        call(addUserSaga),
        call(userReadinessSaga),
        call(getUsersSaga),
    ]);
}

export default rootSaga;