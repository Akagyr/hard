import { all, call } from "redux-saga/effects";

import loginSaga from "./loginSaga";

function* rootSaga() {
    yield all([
        call(loginSaga),
    ]);
}

export default rootSaga;