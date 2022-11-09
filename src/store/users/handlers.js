/** @format */

import { getAllUsersApi, getUserInfoApi, updateStateUserApi } from "api/user";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import Swal from "sweetalert2";
import { updateAllUsers, updateUserInfo } from "./slice";

function* handleGetAllUsers({ payload }) {
  try {
    const response = yield call(getAllUsersApi, payload);
    if (response.status === 200) {
      yield put(updateAllUsers(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleGetUserInfo({ payload }) {
  try {
    const response = yield call(getUserInfoApi, payload);
    if (response.status === 200) {
      yield put(updateUserInfo(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleUpdateStateUser({ payload }) {
  try {
    const response = yield call(updateStateUserApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message, {
      position: "top-right",
    });
  }
}

export { handleGetAllUsers, handleGetUserInfo, handleUpdateStateUser };
