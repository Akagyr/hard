import { all, call } from "redux-saga/effects";

import loginSaga from "./loginSaga";
import getMessagesSaga from "./getMessagesSaga";
import addMessageSaga from "./addMessageSaga";

function* rootSaga() {
    yield all([
        call(loginSaga),
        call(getMessagesSaga),
        call(addMessageSaga),
    ]);
}

export default rootSaga;