import { all, call } from "redux-saga/effects";

import loginSaga from "./loginSaga";
import addMessageSaga from "./addMessageSaga";
import addUserSaga from "./addUserSaga";
import updateUserReadinessSaga from "./updateUserReadinessSaga";
import updateUserScoreSaga from "./updateUserScoreSaga";
import updateRoomStatusSaga from "./updateRoomStatusSaga";
import updateRoomCurrentQuestionSaga from "./updateRoomCurrentQuestionSaga";
import updateRoomFinisedQuizSaga from "./updateRoomFinisedQuizSaga";


function* rootSaga() {
    yield all([
        call(loginSaga),
        call(addMessageSaga),
        call(addUserSaga),
        call(updateUserReadinessSaga),
        call(updateUserScoreSaga),
        call(updateRoomStatusSaga),
        call(updateRoomCurrentQuestionSaga),
        call(updateRoomFinisedQuizSaga),
    ]);
}

export default rootSaga;