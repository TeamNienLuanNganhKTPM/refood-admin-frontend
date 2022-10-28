/** @format */

import { takeLatest } from "redux-saga/effects";
import { handleAdminLogin, logAdminOut } from "./handlers";
import { authLogin, authLogOut } from "./slice";

export default function* authWatcher() {
  yield takeLatest(authLogin.type, handleAdminLogin);
  yield takeLatest(authLogOut.type, logAdminOut);
}
