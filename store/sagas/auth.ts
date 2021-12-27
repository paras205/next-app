import { call, put, takeLatest } from "redux-saga/effects";
import firebase from "../../config/firebase";
import { IRegister } from "../../types/auth";
import { ResponseGenerator } from "../../types/sagas";
import actions from "../actions/auth";

function* register(action: any) {
  try {
    const data: IRegister = action.payload;
    const auth = firebase.auth();
    yield put(actions.registerBegin());
    const result: ResponseGenerator = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      data.email,
      data.password
    );
    yield put(actions.registerUserSuccess(result?.data));
  } catch (err) {
    yield put(actions.registerFail());
  }
}

export function* saga() {
  yield takeLatest(actions.register, register);
}
