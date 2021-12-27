import { all } from "redux-saga/effects";

import { saga as authSaga } from "./sagas/auth";

export default function* rootSaga() {
  try {
    yield all([authSaga()]);
  } catch (err) {
    console.log(err);
  }
}
