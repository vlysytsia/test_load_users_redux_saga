import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import usersReducer from "../reducers/users";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const rootReducer = combineReducers({ users: usersReducer });
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
