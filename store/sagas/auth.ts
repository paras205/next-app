import { call, put, takeLatest } from "redux-saga/effects";
import firebase from "config/firebase";
import { ResponseGenerator, IRegister } from "interface";
import { actions as globalActions } from "../global";
import actions from "../actions/auth";

function* register(action: any) {
  try {
    const data: IRegister = action.payload;
    const auth = firebase.auth();
    yield put(globalActions.showLoading());
    const result: ResponseGenerator = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      data.email,
      data.password
    );
    yield put(actions.registerUserSuccess(result.data));
    yield put(globalActions.hideLoading());
  } catch (err: any) {
    yield put(globalActions.hideLoading());
    yield put(globalActions.showErrorMessage(`${err?.data?.message?.error}`));
  }
}

export function* saga() {
  yield takeLatest(actions.REGISTER_USER, register);
}
