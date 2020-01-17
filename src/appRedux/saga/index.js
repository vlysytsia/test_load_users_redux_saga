import { fork, all } from "redux-saga/effects";
import users from "./users";

export const sagas = [users];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
