/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleAdminLogin,
  handleChangePasswordAdmin,
  handleGetAnalysicAllTime,
  handleGetAnalysicTimeWithMonthYear,
  handleGetInfoAdmin,
  logAdminOut,
} from "./handlers";
import {
  authLogin,
  authLogOut,
  changePasswordAdmin,
  getAnalysicAllTime,
  getAnalysicTimeWithMonthYear,
  getInfoAdmin,
} from "./slice";

export default function* authWatcher() {
  yield takeLatest(authLogin.type, handleAdminLogin);
  yield takeLatest(authLogOut.type, logAdminOut);
  yield takeLatest(getAnalysicAllTime.type, handleGetAnalysicAllTime);
  yield takeLatest(
    getAnalysicTimeWithMonthYear.type,
    handleGetAnalysicTimeWithMonthYear
  );
  yield takeLatest(getInfoAdmin.type, handleGetInfoAdmin);
  yield takeLatest(changePasswordAdmin.type, handleChangePasswordAdmin);
}
