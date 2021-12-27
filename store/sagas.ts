import { all } from "redux-saga/effects";

import { saga as authSaga } from "./sagas/auth";

export default function* rootSaga() {
  yield all([authSaga()]);
}
