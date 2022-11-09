/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleAdminLogin,
  handleGetAnalysicAllTime,
  handleGetAnalysicTimeWithMonthYear,
  logAdminOut,
} from "./handlers";
import {
  authLogin,
  authLogOut,
  getAnalysicAllTime,
  getAnalysicTimeWithMonthYear,
} from "./slice";

export default function* authWatcher() {
  yield takeLatest(authLogin.type, handleAdminLogin);
  yield takeLatest(authLogOut.type, logAdminOut);
  yield takeLatest(getAnalysicAllTime.type, handleGetAnalysicAllTime);
  yield takeLatest(
    getAnalysicTimeWithMonthYear.type,
    handleGetAnalysicTimeWithMonthYear
  );
}
