/** @format */

import {
  getAnalysicAllTime,
  getAnalysicTimeWithMolthYear,
  getDataChartMonthYearApi,
} from "api/analysic";

const {
  loginAdminApi,
  getInfoAdminApi,
  changePasswordApi,
} = require("api/admin");
const { toast } = require("react-toastify");
const { call, put } = require("redux-saga/effects");
const { default: Swal } = require("sweetalert2");
const {
  authUpdate,
  updateAnalysic,
  updateInfoAdmin,
  updateRevenue,
} = require("./slice");

function* handleAdminLogin({ payload }) {
  try {
    const response = yield call(loginAdminApi, payload);
    if (response.status === 200) {
      localStorage.setItem("accessToken", response.data.admin_access_token);
      localStorage.setItem("admin", JSON.stringify(response.data.admin_info));
      yield put(authUpdate(response.data));
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.message, {
      position: "top-right",
    });
  }
}

function* logAdminOut() {
  yield put(
    authUpdate({
      admin: undefined,
      accessToken: null,
    })
  );
  localStorage.clear();
  Swal.fire({
    position: "center",
    icon: "success",
    text: "Đăng xuất thành công!",
    showConfirmButton: false,
    timer: 2000,
  });
}

function* handleGetAnalysicAllTime() {
  try {
    const response = yield call(getAnalysicAllTime);
    if (response.status === 200) {
      yield put(updateAnalysic(response.data.analysis));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleGetAnalysicTimeWithMonthYear({ payload }) {
  try {
    const response = yield call(getAnalysicTimeWithMolthYear, payload);
    if (response.status === 200) {
      yield put(updateAnalysic(response.data.analysis));
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleGetInfoAdmin() {
  try {
    const response = yield call(getInfoAdminApi);
    if (response.status === 200) {
      yield put(updateInfoAdmin(response.data.admin_info));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleChangePasswordAdmin({ payload }) {
  try {
    const response = yield call(changePasswordApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.message, {
      position: "top-right",
    });
  }
}

function* handleGetDataChartMonthYear({ payload }) {
  try {
    const response = yield call(getDataChartMonthYearApi, payload);
    if (response.status === 200) {
      yield put(updateRevenue(response.data.revenue));
    }
  } catch (error) {
    console.log(error);
  }
}

export {
  handleAdminLogin,
  logAdminOut,
  handleGetAnalysicAllTime,
  handleGetAnalysicTimeWithMonthYear,
  handleGetInfoAdmin,
  handleChangePasswordAdmin,
  handleGetDataChartMonthYear,
};
