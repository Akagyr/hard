import { takeEvery, put } from "redux-saga/effects";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase";

import { getQuestionsFetch, getQuestionsSuccess, getQuestionsFailure } from "../slices/questionsSlice";

function* getQuestionsSagaFetcher() {
    try {
        const querySnapshot = yield (getDocs(collection(db, "questions")));
        let questions = [];
        querySnapshot.forEach((doc) => {
            questions.push({...doc.data(), id: doc.id});
        });
        yield put(getQuestionsSuccess(questions));
    } catch(error) {
        yield put(getQuestionsFailure(error));
    }
}

function* getQuestionsSaga() {
    yield takeEvery(getQuestionsFetch, getQuestionsSagaFetcher);
}

export default getQuestionsSaga;