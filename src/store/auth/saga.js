/** @format */

import { takeLatest } from "redux-saga/effects";
import { handleAdminLogin } from "./handlers";
import { authLogin } from "./slice";

export default function* authWatcher() {
  yield takeLatest(authLogin.type, handleAdminLogin);
}
