import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./sagas/rootSaga";
import loginReducer from "./slices/loginSlice";
import messagesReducer from "./slices/messagesSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        login: loginReducer,
        messages: messagesReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;