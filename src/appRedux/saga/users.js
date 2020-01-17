import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { API_URL } from "../../constants/api";
import { FETCH_USERS, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../actions/users";

function* fetchUser() {
  yield put({ type: FETCH_USERS_REQUEST });
  try {
    const userResponse = yield call(axios.get, API_URL);
    yield put({ type: FETCH_USERS_SUCCESS, payload: userResponse.data.data });
  } catch (e) {
    console.log(e);
    yield put({ type: FETCH_USERS_ERROR, payload: e.message });
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_USERS, fetchUser);
}
