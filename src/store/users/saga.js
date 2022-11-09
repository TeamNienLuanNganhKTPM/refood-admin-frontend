/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleGetAllUsers,
  handleGetUserInfo,
  handleUpdateStateUser,
} from "./handlers";
import { getAllUsers, getUserInfo, updateStateUser } from "./slice";

export default function* usersWatcher() {
  yield takeLatest(getAllUsers.type, handleGetAllUsers);
  yield takeLatest(getUserInfo.type, handleGetUserInfo);
  yield takeLatest(updateStateUser.type, handleUpdateStateUser);
}
